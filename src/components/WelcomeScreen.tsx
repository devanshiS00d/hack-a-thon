import { useEffect } from 'react';
import { GradientLayout } from './GradientLayout';

interface WelcomeScreenProps {
  onComplete: () => void;
}

export function WelcomeScreen({ onComplete }: WelcomeScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <GradientLayout>
      <div className="text-center">
        <p className="text-[48px] text-black leading-[normal] mb-[24px] font-['Manrope:SemiBold',_sans-serif] font-semibold">ikiguider</p>
        <p className="text-[24px] text-black leading-[normal] font-['Manrope:Regular',_sans-serif]">by team...?</p>
      </div>
    </GradientLayout>
  );
}
