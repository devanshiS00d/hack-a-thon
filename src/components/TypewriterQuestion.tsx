import { useState, useEffect } from 'react';

interface TypewriterQuestionProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
  className?: string;
}

export function TypewriterQuestion({ text, speed = 50, onComplete, className = '' }: TypewriterQuestionProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (displayedText.length < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else if (!isComplete) {
      setIsComplete(true);
      if (onComplete) {
        onComplete();
      }
    }
  }, [displayedText, text, speed, isComplete, onComplete]);

  return (
    <p className={className}>
      {displayedText}
      {!isComplete && <span className="animate-pulse">|</span>}
    </p>
  );
}
