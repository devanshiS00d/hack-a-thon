import { useState } from 'react';
import { GradientLayout } from './GradientLayout';
import { TypewriterQuestion } from './TypewriterQuestion';

interface SingleSelectScreenProps {
  question: string;
  options: string[];
  onSubmit: (selected: string) => void;
}

export function SingleSelectScreen({ question, options, onSubmit }: SingleSelectScreenProps) {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <GradientLayout>
      <div className="text-center">
        <TypewriterQuestion 
          text={question}
          speed={50}
          onComplete={() => setShowOptions(true)}
          className="text-[22px] text-black leading-[normal] mb-[28px] font-['Manrope:SemiBold',_sans-serif] font-semibold min-h-[60px]"
        />
        {showOptions && (
          <div className="flex flex-col gap-[8px] max-w-[480px] mx-auto">
            {options.map((option) => (
              <button
                key={option}
                onClick={() => onSubmit(option)}
                className="p-[12px] rounded-[6px] bg-white/20 border border-black/10 hover:bg-black/10 hover:border-black/20 transition-all text-[14px] text-left font-['Manrope:Regular',_sans-serif]"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </GradientLayout>
  );
}
