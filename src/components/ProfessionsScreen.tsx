import { useState } from 'react';
import { GradientLayout } from './GradientLayout';
import type { Profession } from '../utils/professions';

interface ProfessionsScreenProps {
  professions: Profession[];
  onContinue: () => void;
}

export function ProfessionsScreen({ professions, onContinue }: ProfessionsScreenProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <GradientLayout>
      <div className="text-center">
        <p className="text-[22px] text-black leading-[normal] mb-[6px] font-['Manrope',_sans-serif]">
          your top career matches
        </p>
        <p className="text-[12px] text-black/50 mb-[24px] font-['Manrope',_sans-serif]">
          based on your ikigai profile
        </p>

        <div className="space-y-[10px] max-w-[520px] mx-auto mb-[24px]">
          {professions.map((profession, index) => (
            <div
              key={index}
              className="text-left"
            >
              <button
                onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}
                className="w-full p-[12px] rounded-[14px] bg-white/20 border border-black/10 hover:bg-black/5 hover:border-black/20 transition-all"
              >
                <div className="flex items-start justify-between gap-[10px]">
                  <div className="flex-1">
                    <div className="flex items-center gap-[6px] mb-[3px]">
                      <span className="text-[13px] font-['Manrope',_sans-serif] text-black/30">
                        #{index + 1}
                      </span>
                      <p className="text-[13px] font-['Manrope',_sans-serif] text-black">
                        {profession.title}
                      </p>
                    </div>
                    <p className="text-[10px] text-black/50 mb-[5px] font-['Manrope',_sans-serif]">
                      {profession.industry}
                    </p>
                    {selectedIndex !== index && (
                      <p className="text-[11px] text-black/60 font-['Manrope',_sans-serif]">
                        {profession.description}
                      </p>
                    )}
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-[18px] font-['Manrope',_sans-serif] text-black/80 mb-[1px]">
                      {profession.matchScore}%
                    </div>
                    <p className="text-[9px] text-black/40 font-['Manrope',_sans-serif]">match</p>
                  </div>
                </div>
              </button>

              {selectedIndex === index && (
                <div className="mt-[6px] p-[10px] bg-white/30 rounded-[12px] border border-black/10">
                  <p className="text-[11px] text-black/60 mb-[8px] font-['Manrope',_sans-serif]">
                    {profession.description}
                  </p>
                  
                  <div className="grid grid-cols-3 gap-[5px] mb-[8px]">
                    <div className="text-center p-[5px] bg-white/40 rounded-[8px]">
                      <p className="text-[9px] text-black/50 mb-[1px] font-['Manrope',_sans-serif]">salary</p>
                      <p className="text-[10px] font-['Manrope',_sans-serif] text-black">
                        {profession.salary}
                      </p>
                    </div>
                    <div className="text-center p-[5px] bg-white/40 rounded-[8px]">
                      <p className="text-[9px] text-black/50 mb-[1px] font-['Manrope',_sans-serif]">growth</p>
                      <p className="text-[10px] font-['Manrope',_sans-serif] text-black">
                        {profession.growth}
                      </p>
                    </div>
                    <div className="text-center p-[5px] bg-white/40 rounded-[8px]">
                      <p className="text-[9px] text-black/50 mb-[1px] font-['Manrope',_sans-serif]">match</p>
                      <p className="text-[10px] font-['Manrope',_sans-serif] text-black">
                        {profession.matchScore}%
                      </p>
                    </div>
                  </div>

                  <div className="mb-[6px]">
                    <p className="text-[9px] text-black/50 mb-[3px] font-['Manrope',_sans-serif]">key skills</p>
                    <div className="flex flex-wrap gap-[3px]">
                      {profession.skills.slice(0, 5).map((skill, i) => (
                        <span
                          key={i}
                          className="px-[6px] py-[2px] bg-white/50 rounded-[6px] text-[9px] text-black/60 font-['Manrope',_sans-serif]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-[9px] text-black/50 mb-[3px] font-['Manrope',_sans-serif]">top companies</p>
                    <p className="text-[9px] text-black/60 font-['Manrope',_sans-serif]">
                      {profession.companies.slice(0, 3).join(', ')}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <button
          onClick={onContinue}
          className="px-[20px] py-[8px] rounded-[16px] bg-black/80 text-white text-[12px] hover:bg-black transition-colors font-['Manrope',_sans-serif]"
        >
          continue to dashboard
        </button>
      </div>
    </GradientLayout>
  );
}
