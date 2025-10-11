import { useState, useEffect } from 'react';
import svgPaths from "../imports/svg-vo5yvelow0";
import imgRectangle from "figma:asset/0523a33c88a0694c15d8a7dd2964919dd4481b7d.png";
import { motion, AnimatePresence } from 'motion/react';
import { TypewriterText } from './TypewriterText';

function GenericAvatar() {
  return (
    <div className="size-[40px]" data-name="Generic avatar">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 40 40">
        <g id="Generic avatar">
          <rect fill="var(--fill-0, #EADDFF)" height="40" rx="20" width="40" />
          <g id="Avatar Placeholder">
            <path clipRule="evenodd" d={svgPaths.p16400780} fill="var(--fill-0, #4F378A)" fillRule="evenodd" />
            <path d={svgPaths.pfd6ae80} fill="var(--fill-0, #4F378A)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function StateLayer() {
  return (
    <div className="box-border content-stretch flex gap-[8px] items-center justify-center px-[16px] py-[10px] relative shrink-0" data-name="State-layer">
      <div className="flex flex-col font-['Roboto:Medium',_sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#49454f] text-[14px] text-nowrap tracking-[0.1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[20px] whitespace-pre">{`sign out `}</p>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="relative rounded-[100px] shrink-0" data-name="Content">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit]">
        <StateLayer />
      </div>
      <div aria-hidden="true" className="absolute border border-[#cac4d0] border-solid inset-0 pointer-events-none rounded-[100px]" />
    </div>
  );
}

function ToggleButtonOutline({ onClick }: { onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="content-stretch flex h-[48px] items-center justify-center cursor-pointer bg-transparent border-0 hover:opacity-80 transition-opacity" 
      data-name="Toggle button - outline"
    >
      <Content />
    </button>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p22a78d00} fill="var(--fill-0, #49454F)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer1() {
  return (
    <div className="basis-0 box-border content-stretch flex grow items-center justify-center min-h-px min-w-px overflow-clip p-[10px] relative shrink-0 w-[40px]" data-name="State-layer">
      <Icon1 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 size-[40px]" data-name="Content">
      <StateLayer1 />
    </div>
  );
}

function Slot01() {
  return (
    <div className="content-stretch flex items-center justify-center overflow-clip relative shrink-0 size-[48px]" data-name="Slot 01">
      <Content1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pea70b80} fill="var(--fill-0, #49454F)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer2() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-center p-[10px] relative w-full">
          <Icon2 />
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer2 />
    </div>
  );
}

function Slot02() {
  return (
    <div className="content-stretch flex h-full items-center justify-center overflow-clip relative shrink-0 w-[48px]" data-name="Slot 02">
      <Content2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p16f45de0} fill="var(--fill-0, #49454F)" id="icon" />
        </g>
      </svg>
    </div>
  );
}

function StateLayer3() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="State-layer">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex h-[40px] items-center justify-center p-[10px] relative w-full">
          <Icon3 />
        </div>
      </div>
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[100px] shrink-0 w-[40px]" data-name="Content">
      <StateLayer3 />
    </div>
  );
}

function Slot03() {
  return (
    <div className="content-stretch flex h-full items-center justify-center overflow-clip relative shrink-0 w-[48px]" data-name="Slot 03">
      <Content3 />
    </div>
  );
}

function Toolbar() {
  return (
    <div className="bg-[#f3edf7] box-border content-stretch flex gap-[4px] h-[64px] items-center justify-center px-[8px] py-[12px] rounded-[32px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-[263px]" data-name="Toolbar">
      <Slot01 />
      <Slot02 />
      <Slot03 />
    </div>
  );
}

interface Message {
  id: string;
  sender: 'ai' | 'user';
  content: string;
  senderName?: string;
}

interface ChatInterfaceProps {
  userName: string;
  userResponses: Record<string, any>;
}

export function ChatInterface({ userName, userResponses }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isThinking, setIsThinking] = useState(false);
  const [showUserTyping, setShowUserTyping] = useState(false);

  const conversationFlow: Message[] = [
    {
      id: 'msg-0',
      sender: 'ai',
      content: `Hello ${userName}!\nWhat can I help you with today`,
      senderName: "iki"
    },
    {
      id: 'msg-1',
      sender: 'user',
      content: "I'm interested in product management. But I have never had any experience in Product Management :("
    },
    {
      id: 'msg-2',
      sender: 'ai',
      content: "That's totally okay! Everyone starts somewhere. Product Management is a great field, and I can help you build the experience you need.\n\nBased on your interest, I've found some opportunities that would be perfect for you:",
      senderName: "iki"
    },
    {
      id: 'msg-3',
      sender: 'ai',
      content: "Micro-Internship Match:\nProduct Analytics Assistant at TechStart Inc.\n• 4-week remote project\n• Help analyze user feedback data\n• Beginner-friendly",
      senderName: "iki"
    },
    {
      id: 'msg-4',
      sender: 'ai',
      content: "Learning Pathway:\nPM Foundations Track\n1. Complete intro PM course (2 weeks)\n2. Join micro-internship\n3. Build portfolio project\n4. Interview prep\n\nWould you like me to enroll you in the PM Foundations pathway and apply for the micro-internship?",
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

  useEffect(() => {
    const firstMessage = conversationFlow[0];
    setTimeout(() => {
      setMessages([firstMessage]);
    }, 500);
  }, []);

  const handleSignOut = () => {
    alert('Sign out clicked');
  };

  return (
    <div className="bg-white min-h-screen flex" data-name="Internship Matcher App">
      <div className="bg-[#d9d9d9] w-[125px] flex-shrink-0 relative">
        <div className="flex gap-[10px] p-[21px]">
          <div className="size-[7px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
              <circle cx="3.5" cy="3.5" fill="black" r="3.5" />
            </svg>
          </div>
          <div className="size-[7px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
              <circle cx="3.5" cy="3.5" fill="black" r="3.5" />
            </svg>
          </div>
          <div className="size-[7px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
              <circle cx="3.5" cy="3.5" fill="black" r="3.5" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="flex items-center justify-between px-[20px] py-[20px] border-b border-[#e0e0e0]">
          <div className="flex items-center gap-[20px]">
            <div className="font-['Roboto:Medium',_sans-serif] font-medium leading-[20px] text-[14px] text-black tracking-[0.1px]" style={{ fontVariationSettings: "'wdth' 100" }}>
              <p className="mb-0">{`ikiguider`}</p>
              <p>internship matcher</p>
            </div>
          </div>
          <div className="flex items-center gap-[16px]">
            <GenericAvatar />
            <ToggleButtonOutline onClick={handleSignOut} />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-[80px] py-[40px]">
          <div className="max-w-[900px]">
            <AnimatePresence mode="popLayout">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="mb-[40px]"
                >
                  {message.sender === 'ai' ? (
                    <div className="flex flex-col gap-[8px]">
                      <div className="flex items-start gap-[16px]">
                        <div className="h-[91px] w-[87px] flex-shrink-0">
                          <img alt="" className="w-full h-full object-cover" src={imgRectangle} />
                        </div>
                        <div className="flex-1">
                          <p className="font-['Manrope:Bold',_sans-serif] font-bold leading-[normal] text-[#726c6c] text-[13px] tracking-[0.1px] mb-[8px]">
                            {message.senderName || 'iki'}
                          </p>
                          <TypewriterText 
                            text={message.content}
                            speed={50}
                            onComplete={message.id === messages[messages.length - 1]?.id ? handleTypingComplete : undefined}
                            className="font-['Manrope:SemiBold',_sans-serif] font-semibold leading-[normal] text-[24px] text-black tracking-[0.1px] whitespace-pre-line"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex flex-col items-end gap-[8px]">
                      <p className="font-['Manrope:Bold',_sans-serif] font-bold leading-[normal] text-[#726c6c] text-[13px] tracking-[0.1px]">
                        user
                      </p>
                      <TypewriterText 
                        text={message.content}
                        speed={50}
                        onComplete={message.id === messages[messages.length - 1]?.id ? handleTypingComplete : undefined}
                        className="font-['Manrope:SemiBold',_sans-serif] font-semibold leading-[normal] text-[24px] text-black tracking-[0.1px] text-right max-w-[600px] whitespace-pre-line"
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
                  className="flex items-start gap-[16px] mb-[40px]"
                >
                  <div className="h-[91px] w-[87px] flex-shrink-0">
                    <img alt="" className="w-full h-full object-cover" src={imgRectangle} />
                  </div>
                  <div className="flex-1">
                    <p className="font-['Manrope:Bold',_sans-serif] font-bold leading-[normal] text-[#726c6c] text-[13px] tracking-[0.1px] mb-[8px]">
                      iki
                    </p>
                    <div className="font-['Manrope:SemiBold',_sans-serif] font-semibold leading-[normal] text-[15px] text-[#524444] tracking-[0.1px]">
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
                  className="flex flex-col items-end gap-[8px] mb-[40px]"
                >
                  <p className="font-['Manrope:Bold',_sans-serif] font-bold leading-[normal] text-[#726c6c] text-[13px] tracking-[0.1px]">
                    user
                  </p>
                  <div className="font-['Manrope:SemiBold',_sans-serif] font-semibold leading-[normal] text-[15px] text-[#524444] tracking-[0.1px]">
                    typing...
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="fixed bottom-[40px] right-[100px]">
          <Toolbar />
        </div>
      </div>
    </div>
  );
}
