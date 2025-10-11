import { useState, KeyboardEvent } from 'react';
import { GradientLayout } from './GradientLayout';
import { TypewriterQuestion } from './TypewriterQuestion';

interface TextInputScreenProps {
  question: string;
  onSubmit: (answer: string) => void;
  placeholder?: string;
}

export function TextInputScreen({ question, onSubmit, placeholder }: TextInputScreenProps) {
  const [answer, setAnswer] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && answer.trim()) {
      onSubmit(answer.trim());
    }
  };

  return (
    <GradientLayout>
      <div className="text-center">
        <TypewriterQuestion 
          text={question}
          speed={50}
          onComplete={() => setShowInput(true)}
          className="text-[26px] text-black leading-[normal] mb-[40px] font-['Manrope:SemiBold',_sans-serif] font-semibold min-h-[70px]"
        />
        {showInput && (
          <div className="max-w-[320px] mx-auto">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={placeholder}
              className="w-full bg-transparent border-0 border-b border-black/30 text-center text-[16px] text-black outline-none pb-[5px] placeholder:text-black/30 focus:border-black transition-colors"
              autoFocus
            />
            <p className="text-[11px] text-black/50 mt-[10px]">Press Enter to continue</p>
          </div>
        )}
      </div>
    </GradientLayout>
  );
}
