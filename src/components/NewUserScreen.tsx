import { useEffect } from 'react';
import { GradientLayout } from './GradientLayout';

interface NewUserScreenProps {
  onComplete: () => void;
}

export function NewUserScreen({ onComplete }: NewUserScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <GradientLayout>
      <div className="text-center">
        <p className="text-[28px] text-black leading-[normal] font-['Manrope:SemiBold',_sans-serif] font-semibold">Oh! Another user...</p>
      </div>
    </GradientLayout>
  );
}
