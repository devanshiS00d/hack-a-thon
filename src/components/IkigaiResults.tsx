import { useEffect, useState } from 'react';
import { GradientLayout } from './GradientLayout';

interface IkigaiResultsProps {
  dimensions: {
    love: number;
    goodAt: number;
    worldNeeds: number;
    paidFor: number;
  };
  ikigaiScore: number;
  archetype: {
    title: string;
    path: string;
    description: string;
  };
  onContinue: () => void;
}

export function IkigaiResults({ dimensions, ikigaiScore, archetype, onContinue }: IkigaiResultsProps) {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <GradientLayout>
      <div className="text-center">
        {/* Title */}
        <p className="text-[26px] text-black leading-[normal] mb-[6px] font-['Manrope',_sans-serif]">
          your ikigai
        </p>
        <p className="text-[15px] text-black/60 mb-[28px] font-['Manrope',_sans-serif]">
          {archetype.title}
        </p>

        {/* Venn Diagram Visualization */}
        <div className="relative w-full max-w-[350px] h-[350px] mx-auto mb-[32px]">
          <svg viewBox="0 0 350 350" className="w-full h-full">
            {/* What You Love - Pink/Magenta Circle (top-left) */}
            <circle
              cx="145"
              cy="145"
              r="95"
              fill="#FF1493"
              opacity="0.3"
              className="transition-all duration-1000"
              style={{ transform: showContent ? 'scale(1)' : 'scale(0)', transformOrigin: '145px 145px' }}
            />
            
            {/* What You're Good At - Pink/Magenta Circle (top-right) */}
            <circle
              cx="205"
              cy="145"
              r="95"
              fill="#FF69B4"
              opacity="0.3"
              className="transition-all duration-1000"
              style={{ transform: showContent ? 'scale(1)' : 'scale(0)', transformOrigin: '205px 145px', transitionDelay: '100ms' }}
            />
            
            {/* What the World Needs - Gray Circle (bottom-left) */}
            <circle
              cx="145"
              cy="205"
              r="95"
              fill="#9CA3AF"
              opacity="0.3"
              className="transition-all duration-1000"
              style={{ transform: showContent ? 'scale(1)' : 'scale(0)', transformOrigin: '145px 205px', transitionDelay: '200ms' }}
            />
            
            {/* What Earns You Money - Lime/Yellow Circle (bottom-right) */}
            <circle
              cx="205"
              cy="205"
              r="95"
              fill="#C5D11F"
              opacity="0.3"
              className="transition-all duration-1000"
              style={{ transform: showContent ? 'scale(1)' : 'scale(0)', transformOrigin: '205px 205px', transitionDelay: '300ms' }}
            />

            {/* Center - Ikigai */}
            <circle
              cx="175"
              cy="175"
              r="28"
              fill="#1a1a1a"
              opacity="0.75"
              className="transition-all duration-1000"
              style={{ transform: showContent ? 'scale(1)' : 'scale(0)', transformOrigin: '175px 175px', transitionDelay: '600ms' }}
            />
            
            {/* Labels */}
            <text
              x="115"
              y="95"
              textAnchor="middle"
              className="fill-black text-[10px] font-['Manrope:SemiBold',_sans-serif] font-semibold"
              opacity={showContent ? "1" : "0"}
              style={{ transition: 'opacity 500ms 800ms' }}
            >
              what you
            </text>
            <text
              x="115"
              y="107"
              textAnchor="middle"
              className="fill-black text-[10px] font-['Manrope:SemiBold',_sans-serif] font-semibold"
              opacity={showContent ? "1" : "0"}
              style={{ transition: 'opacity 500ms 800ms' }}
            >
              love
            </text>

            <text
              x="235"
              y="95"
              textAnchor="middle"
              className="fill-black text-[10px] font-['Manrope:SemiBold',_sans-serif] font-semibold"
              opacity={showContent ? "1" : "0"}
              style={{ transition: 'opacity 500ms 800ms' }}
            >
              what you're
            </text>
            <text
              x="235"
              y="107"
              textAnchor="middle"
              className="fill-black text-[10px] font-['Manrope:SemiBold',_sans-serif] font-semibold"
              opacity={showContent ? "1" : "0"}
              style={{ transition: 'opacity 500ms 800ms' }}
            >
              good at
            </text>

            <text
              x="115"
              y="258"
              textAnchor="middle"
              className="fill-black text-[10px] font-['Manrope:SemiBold',_sans-serif] font-semibold"
              opacity={showContent ? "1" : "0"}
              style={{ transition: 'opacity 500ms 800ms' }}
            >
              what the
            </text>
            <text
              x="115"
              y="270"
              textAnchor="middle"
              className="fill-black text-[10px] font-['Manrope:SemiBold',_sans-serif] font-semibold"
              opacity={showContent ? "1" : "0"}
              style={{ transition: 'opacity 500ms 800ms' }}
            >
              world needs
            </text>

            <text
              x="235"
              y="258"
              textAnchor="middle"
              className="fill-black text-[10px] font-['Manrope:SemiBold',_sans-serif] font-semibold"
              opacity={showContent ? "1" : "0"}
              style={{ transition: 'opacity 500ms 800ms' }}
            >
              what you can
            </text>
            <text
              x="235"
              y="270"
              textAnchor="middle"
              className="fill-black text-[10px] font-['Manrope:SemiBold',_sans-serif] font-semibold"
              opacity={showContent ? "1" : "0"}
              style={{ transition: 'opacity 500ms 800ms' }}
            >
              be paid for
            </text>

            <text
              x="175"
              y="180"
              textAnchor="middle"
              className="fill-white text-[12px] font-['Manrope:Bold',_sans-serif] font-bold"
              opacity={showContent ? "1" : "0"}
              style={{ transition: 'opacity 500ms 1000ms' }}
            >
              ikigai
            </text>
          </svg>
        </div>

        {/* Score Display */}
        {showContent && (
          <div className="mb-[28px] animate-[fadeIn_500ms_1200ms_both]">
            <p className="text-[11px] text-black/50 mb-[3px] font-['Manrope',_sans-serif]">clarity score</p>
            <p className="text-[36px] text-black font-['Manrope',_sans-serif] leading-[1]">{ikigaiScore}%</p>
          </div>
        )}

        {/* Dimensions Breakdown */}
        {showContent && (
          <div className="space-y-[10px] mb-[28px] text-left max-w-[400px] mx-auto animate-[fadeIn_500ms_1400ms_both]">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-black/60 font-['Manrope',_sans-serif]">what you love</span>
              <span className="font-['Manrope',_sans-serif] text-black">{dimensions.love}%</span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-black/60 font-['Manrope',_sans-serif]">what you're good at</span>
              <span className="font-['Manrope',_sans-serif] text-black">{dimensions.goodAt}%</span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-black/60 font-['Manrope',_sans-serif]">what the world needs</span>
              <span className="font-['Manrope',_sans-serif] text-black">{dimensions.worldNeeds}%</span>
            </div>
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-black/60 font-['Manrope',_sans-serif]">what you can be paid for</span>
              <span className="font-['Manrope',_sans-serif] text-black">{dimensions.paidFor}%</span>
            </div>
          </div>
        )}

        {/* Career Path */}
        {showContent && (
          <div className="mb-[28px] max-w-[400px] mx-auto animate-[fadeIn_500ms_1600ms_both]">
            <p className="text-[11px] text-black/50 mb-[6px] font-['Manrope',_sans-serif]">recommended path</p>
            <p className="text-[16px] text-black font-['Manrope',_sans-serif] mb-[6px]">{archetype.path}</p>
            <p className="text-[11px] text-black/60 leading-[1.5] font-['Manrope',_sans-serif]">{archetype.description}</p>
          </div>
        )}

        {/* Continue Button */}
        {showContent && (
          <button
            onClick={onContinue}
            className="px-[24px] py-[9px] rounded-[16px] bg-black/80 text-white text-[12px] hover:bg-black transition-colors animate-[fadeIn_500ms_1800ms_both] font-['Manrope',_sans-serif]"
          >
            continue
          </button>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </GradientLayout>
  );
}
