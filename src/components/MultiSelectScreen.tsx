import { useState, KeyboardEvent } from 'react';
import { GradientLayout } from './GradientLayout';
import { TypewriterQuestion } from './TypewriterQuestion';

interface MultiSelectScreenProps {
  question: string;
  options: string[];
  maxSelections?: number;
  onSubmit: (selected: string[]) => void;
}

export function MultiSelectScreen({ question, options, maxSelections = 3, onSubmit }: MultiSelectScreenProps) {
  const [selected, setSelected] = useState<string[]>([]);
  const [showOptions, setShowOptions] = useState(false);

  const toggleOption = (option: string) => {
    if (selected.includes(option)) {
      setSelected(selected.filter(o => o !== option));
    } else if (selected.length < maxSelections) {
      setSelected([...selected, option]);
    }
  };

  const handleKeyPress = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && selected.length > 0) {
      onSubmit(selected);
    }
  };

  const handleSubmit = () => {
    if (selected.length > 0) {
      onSubmit(selected);
    }
  };

  return (
    <GradientLayout>
      <div className="text-center">
        <TypewriterQuestion 
          text={question}
          speed={50}
          onComplete={() => setShowOptions(true)}
          className="text-[22px] text-black leading-[normal] mb-[10px] font-['Manrope:SemiBold',_sans-serif] font-semibold min-h-[60px]"
        />
        {showOptions && (
          <>
            <p className="text-[12px] text-black/50 mb-[24px]">Select up to {maxSelections}</p>
            <div className="grid grid-cols-2 gap-[6px] max-w-[480px] mx-auto mb-[20px]" onKeyPress={handleKeyPress}>
              {options.map((option) => (
                <button
                  key={option}
                  onClick={() => toggleOption(option)}
                  className={`p-[10px] rounded-[6px] border transition-all text-[13px] font-['Manrope:Regular',_sans-serif] ${
                    selected.includes(option)
                      ? 'bg-black/15 border-black/30'
                      : 'bg-white/20 border-black/10 hover:bg-black/10'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
            {selected.length > 0 && (
              <button
                onClick={handleSubmit}
                className="px-[20px] py-[8px] rounded-[20px] bg-black/80 text-white text-[13px] hover:bg-black transition-colors"
              >
                Continue ({selected.length}/{maxSelections})
              </button>
            )}
          </>
        )}
      </div>
    </GradientLayout>
  );
}
