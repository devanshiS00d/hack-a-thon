import { useState, useEffect, useRef } from 'react';
import imgRectangle from "figma:asset/0523a33c88a0694c15d8a7dd2964919dd4481b7d.png";
import { motion, AnimatePresence } from 'motion/react';
import { TypewriterText } from '../TypewriterText';

interface Message {
  id: string;
  sender: 'ai' | 'user';
  content: string;
  senderName?: string;
  timestamp?: Date;
}

interface ChatPageProps {
  userName: string;
}

export function ChatPage({ userName }: ChatPageProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isThinking, setIsThinking] = useState(false);
  const [showUserTyping, setShowUserTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const conversationFlow: Message[] = [
    {
      id: 'msg-0',
      sender: 'ai',
      content: `hello ${userName}!\nwhat can i help you with today?`,
      senderName: "iki"
    },
    {
      id: 'msg-1',
      sender: 'user',
      content: "i'm interested in product management. but i have never had any experience in product management :("
    },
    {
      id: 'msg-2',
      sender: 'ai',
      content: "that's totally okay! everyone starts somewhere. product management is a great field, and i can help you build the experience you need.\n\nbased on your interest, i've found some opportunities that would be perfect for you:",
      senderName: "iki"
    },
    {
      id: 'msg-3',
      sender: 'ai',
      content: "micro-internship match:\nproduct analytics assistant at techstart inc.\n• 4-week remote project\n• help analyze user feedback data\n• beginner-friendly",
      senderName: "iki"
    },
    {
      id: 'msg-4',
      sender: 'ai',
      content: "learning pathway:\npm foundations track\n1. complete intro pm course (2 weeks)\n2. join micro-internship\n3. build portfolio project\n4. interview prep\n\nwould you like me to enroll you in the pm foundations pathway and apply for the micro-internship?",
      senderName: "iki"
    }
  ];

  const handleTypingComplete = () => {
    setMessages(currentMessages => {
      const currentIndex = currentMessages.length - 1;
      const nextIndex = currentIndex + 1;
      
      if (nextIndex < conversationFlow.length) {
        const nextMessage = conversationFlow[nextIndex];
        
        setTimeout(() => {
          if (nextMessage.sender === 'ai') {
            setIsThinking(true);
            setTimeout(() => {
              setIsThinking(false);
              setMessages(prev => {
                if (prev.find(m => m.id === nextMessage.id)) {
                  return prev;
                }
                return [...prev, nextMessage];
              });
            }, 2000);
          } else {
            setShowUserTyping(true);
            setTimeout(() => {
              setShowUserTyping(false);
              setMessages(prev => {
                if (prev.find(m => m.id === nextMessage.id)) {
                  return prev;
                }
                return [...prev, nextMessage];
              });
            }, 2500);
          }
        }, 1500);
      }
      
      return currentMessages;
    });
  };

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isThinking, showUserTyping]);

  useEffect(() => {
    const firstMessage = conversationFlow[0];
    setTimeout(() => {
      setMessages([firstMessage]);
    }, 500);
  }, []);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: `custom-user-${Date.now()}`,
      content: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsThinking(true);

    // Simulate AI response after delay
    setTimeout(() => {
      setIsThinking(false);
      const aiResponse: Message = {
        id: `custom-ai-${Date.now()}`,
        content: "i'm here to help you on your journey. what would you like to explore today?",
        sender: 'ai',
        senderName: 'iki',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="h-full bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-[#e0d5ec] via-[#f9e8e3] to-[#f3edf7] flex flex-col">
      {/* Messages Container */}
      <div 
        ref={chatContainerRef}
        className="flex-1 overflow-y-auto p-[40px]"
      >
        <div className="max-w-[900px] w-full mx-auto">
          <AnimatePresence mode="popLayout">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="mb-[70px]"
              >
                {message.sender === 'ai' ? (
                  <div className="flex flex-col gap-[8px]">
                    <div className="flex items-start gap-[16px]">
                      <div className="h-[91px] w-[87px] flex-shrink-0">
                        <img alt="" className="w-full h-full object-cover" src={imgRectangle} />
                      </div>
                      <div className="flex-1">
                        <p className="font-['Manrope',_sans-serif] leading-[normal] text-black/50 text-[11px] tracking-[0.1px] mb-[8px]">
                          {message.senderName || 'iki'}
                        </p>
                        <TypewriterText 
                          text={message.content}
                          speed={50}
                          onComplete={message.id === messages[messages.length - 1]?.id ? handleTypingComplete : undefined}
                          className="font-['Manrope',_sans-serif] leading-[normal] text-[20px] text-black tracking-[0.1px] whitespace-pre-line"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-end gap-[8px]">
                    <p className="font-['Manrope',_sans-serif] leading-[normal] text-black/50 text-[11px] tracking-[0.1px]">
                      you
                    </p>
                    <TypewriterText 
                      text={message.content}
                      speed={50}
                      onComplete={message.id === messages[messages.length - 1]?.id ? handleTypingComplete : undefined}
                      className="font-['Manrope',_sans-serif] leading-[normal] text-[20px] text-black tracking-[0.1px] text-right max-w-[600px] whitespace-pre-line"
                    />
                  </div>
                )}
              </motion.div>
            ))}

            {isThinking && (
              <motion.div
                key="thinking-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-start gap-[16px] mb-[70px]"
              >
                <div className="h-[91px] w-[87px] flex-shrink-0">
                  <img alt="" className="w-full h-full object-cover" src={imgRectangle} />
                </div>
                <div className="flex-1">
                  <p className="font-['Manrope',_sans-serif] leading-[normal] text-black/50 text-[11px] tracking-[0.1px] mb-[8px]">
                    iki
                  </p>
                  <div className="font-['Manrope',_sans-serif] leading-[normal] text-[13px] text-black/60 tracking-[0.1px]">
                    thinking...
                  </div>
                </div>
              </motion.div>
            )}

            {showUserTyping && (
              <motion.div
                key="user-typing-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-end gap-[8px] mb-[70px]"
              >
                <p className="font-['Manrope',_sans-serif] leading-[normal] text-black/50 text-[11px] tracking-[0.1px]">
                  you
                </p>
                <div className="font-['Manrope',_sans-serif] leading-[normal] text-[13px] text-black/60 tracking-[0.1px]">
                  typing...
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Scroll anchor */}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Bar */}
      <div className="border-t border-black/5 bg-white/60 backdrop-blur-sm p-[20px]">
        <div className="max-w-[900px] w-full mx-auto">
          <div className="flex items-center gap-[12px]">
            <div className="flex-1 relative">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="ask iki anything..."
                className="w-full px-[16px] py-[12px] rounded-[16px] bg-white border border-black/10 focus:border-[#FFD4C4]/50 focus:outline-none font-['Manrope',_sans-serif] text-[13px] text-black placeholder:text-black/40 transition-colors"
              />
            </div>
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="px-[18px] py-[12px] rounded-[16px] bg-gradient-to-r from-[#FFD4C4] to-[#FFC1B6] text-white font-['Manrope',_sans-serif] text-[12px] hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
            >
              send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
