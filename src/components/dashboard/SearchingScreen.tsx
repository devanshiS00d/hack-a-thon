import { useEffect } from 'react';

interface SearchingScreenProps {
  onComplete: () => void;
}

export function SearchingScreen({ onComplete }: SearchingScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="text-center">
        <div className="mb-[20px]">
          <div className="w-[40px] h-[40px] mx-auto border-2 border-[#FFD4C4] border-t-transparent rounded-full animate-spin"></div>
        </div>
        <p className="text-[14px] text-black/70 mb-[8px] font-['Manrope',_sans-serif]">
          analyzing your ikigai profile
        </p>
        <p className="text-[11px] text-black/50 font-['Manrope',_sans-serif]">
          finding opportunities that match your passions and skills
        </p>
      </div>
    </div>
  );
}
