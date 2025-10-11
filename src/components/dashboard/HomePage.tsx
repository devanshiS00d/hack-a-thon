interface HomePageProps {
  userName: string;
  ikigaiType: string;
}

export function HomePage({ userName, ikigaiType }: HomePageProps) {
  return (
    <div className="p-[32px] max-w-[1100px] mx-auto">
      {/* Welcome Section */}
      <div className="mb-[28px]">
        <h1 className="text-[20px] font-['Manrope',_sans-serif] text-black mb-[6px]">
          welcome back, {userName}
        </h1>
        <p className="text-[12px] text-black/60 mb-[10px] font-['Manrope',_sans-serif]">
          your ikigai: <span className="text-black/80">{ikigaiType.toLowerCase()}</span>
        </p>
        <div className="flex items-center gap-[16px] text-[11px] text-black/50 font-['Manrope',_sans-serif]">
          <span>7-day streak</span>
          <span className="text-black/20">|</span>
          <span>level 3 builder</span>
        </div>
      </div>

      {/* Roadmap Section */}
      <div className="mb-[32px]">
        <h2 className="text-[14px] font-['Manrope',_sans-serif] text-black/80 mb-[12px] uppercase tracking-wider">
          your roadmap
        </h2>
        <p className="text-[11px] text-black/50 mb-[12px] font-['Manrope',_sans-serif]">
          progress: <span className="text-black/70">54%</span> to landing your dream role
        </p>
        
        {/* Progress Bar */}
        <div className="w-full bg-[#FFF5E6] rounded-full h-[6px] mb-[20px]">
          <div className="bg-gradient-to-r from-[#FFD4C4] to-[#FFC1B6] h-[6px] rounded-full" style={{ width: '54%' }}></div>
        </div>

        {/* Roadmap Stages */}
        <div className="grid grid-cols-4 gap-[12px]">
          <div className="p-[12px] bg-[#FFF5E6]/40 border border-[#FFD4C4]/30 rounded-[16px]">
            <div className="text-[10px] font-['Manrope',_sans-serif] text-black/70 mb-[6px] uppercase tracking-wider">
              learn
            </div>
            <div className="text-[9px] text-black/50 mb-[6px] font-['Manrope',_sans-serif]">skills</div>
            <div className="text-[11px] text-black/70 font-['Manrope',_sans-serif]">3/5</div>
          </div>
          
          <div className="p-[12px] bg-white border border-black/10 rounded-[16px]">
            <div className="text-[10px] font-['Manrope',_sans-serif] text-black/70 mb-[6px] uppercase tracking-wider">
              build
            </div>
            <div className="text-[9px] text-black/50 mb-[6px] font-['Manrope',_sans-serif]">projects</div>
            <div className="text-[11px] text-black/70 font-['Manrope',_sans-serif]">1/4</div>
          </div>
          
          <div className="p-[12px] bg-white border border-black/5 rounded-[16px] opacity-60">
            <div className="text-[10px] font-['Manrope',_sans-serif] text-black/70 mb-[6px] uppercase tracking-wider">
              connect
            </div>
            <div className="text-[9px] text-black/50 mb-[6px] font-['Manrope',_sans-serif]">network</div>
            <div className="text-[11px] text-black/70 font-['Manrope',_sans-serif]">0/3</div>
          </div>
          
          <div className="p-[12px] bg-white border border-black/5 rounded-[16px] opacity-40">
            <div className="text-[10px] font-['Manrope',_sans-serif] text-black/70 mb-[6px] uppercase tracking-wider">
              launch
            </div>
            <div className="text-[9px] text-black/50 mb-[6px] font-['Manrope',_sans-serif]">role</div>
            <div className="text-[11px] text-black/70 font-['Manrope',_sans-serif]">locked</div>
          </div>
        </div>
      </div>

      {/* Current Focus */}
      <div className="mb-[32px]">
        <h2 className="text-[14px] font-['Manrope',_sans-serif] text-black/80 mb-[12px] uppercase tracking-wider">
          current focus
        </h2>
        <p className="text-[11px] text-black/60 mb-[12px] font-['Manrope',_sans-serif]">
          active milestone: build your portfolio
        </p>

        <div className="bg-white border border-black/5 rounded-[16px] p-[16px]">
          {/* Completed Task */}
          <div className="mb-[16px] pb-[16px] border-b border-black/5">
            <div className="flex items-start justify-between mb-[6px]">
              <div className="flex items-start gap-[10px]">
                <span className="text-[#FFC1B6] text-[12px]">✓</span>
                <div>
                  <p className="text-[12px] font-['Manrope',_sans-serif] text-black mb-[3px]">
                    complete figma ui/ux course
                  </p>
                  <p className="text-[10px] text-black/50 font-['Manrope',_sans-serif]">
                    completed 3 days ago
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Active Task */}
          <div className="mb-[16px] pb-[16px] border-b border-black/5">
            <div className="flex items-start justify-between mb-[6px]">
              <div className="flex items-start gap-[10px]">
                <span className="text-[#FFD4C4] text-[12px]">⚬</span>
                <div className="flex-1">
                  <p className="text-[12px] font-['Manrope',_sans-serif] text-black mb-[3px]">
                    design a health app prototype
                  </p>
                  <p className="text-[10px] text-black/50 mb-[6px] font-['Manrope',_sans-serif]">
                    due in 8 days
                  </p>
                  <div className="w-full bg-[#FFF5E6] rounded-full h-[4px] mb-[3px]">
                    <div className="bg-gradient-to-r from-[#FFD4C4] to-[#FFC1B6] h-[4px] rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <p className="text-[9px] text-black/50 font-['Manrope',_sans-serif]">60%</p>
                  <div className="mt-[6px] p-[8px] bg-[#FFF5E6]/40 rounded-[10px] text-[10px] text-black/60 font-['Manrope',_sans-serif]">
                    want help finishing this? - ai coach
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pending Task */}
          <div>
            <div className="flex items-start gap-[10px]">
              <span className="text-black/20 text-[12px]">⚬</span>
              <div>
                <p className="text-[12px] font-['Manrope',_sans-serif] text-black mb-[3px]">
                  apply to 3 healthtech micro-internships
                </p>
                <p className="text-[10px] text-black/50 mb-[5px] font-['Manrope',_sans-serif]">0/3</p>
                <div className="flex items-center gap-[6px] mb-[6px]">
                  <p className="text-[10px] text-black/60 font-['Manrope',_sans-serif]">new match: teladoc (96% fit)</p>
                </div>
                <button className="text-[10px] text-black/70 underline font-['Manrope',_sans-serif]">
                  browse opportunities
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recommended For You */}
      <div>
        <h2 className="text-[14px] font-['Manrope',_sans-serif] text-black/80 mb-[12px] uppercase tracking-wider">
          recommended for you
        </h2>

        <div className="grid grid-cols-3 gap-[12px]">
          {/* Course Card */}
          <div className="bg-white border border-black/5 rounded-[16px] p-[14px] hover:border-[#FFD4C4]/50 transition-all cursor-pointer">
            <p className="text-[9px] text-black/50 mb-[3px] font-['Manrope',_sans-serif] uppercase tracking-wider">course</p>
            <h3 className="text-[12px] font-['Manrope',_sans-serif] text-black mb-[6px]">
              healthcare ux design
            </h3>
            <p className="text-[10px] text-black/50 mb-[10px] font-['Manrope',_sans-serif]">2 hrs · free</p>
            <button className="w-full py-[6px] px-[10px] bg-gradient-to-r from-[#FFD4C4] to-[#FFC1B6] text-[rgb(0,0,0)] rounded-[10px] text-[12px] hover:opacity-90 transition-opacity font-['Manrope',_sans-serif]">
              start
            </button>
          </div>

          {/* Internship Card */}
          <div className="bg-white border border-black/5 rounded-[16px] p-[14px] hover:border-[#FFD4C4]/50 transition-all cursor-pointer">
            <p className="text-[9px] text-black/50 mb-[3px] font-['Manrope',_sans-serif] uppercase tracking-wider">intern</p>
            <h3 className="text-[12px] font-['Manrope',_sans-serif] text-black mb-[6px]">
              teladoc redesign
            </h3>
            <p className="text-[10px] text-black/50 mb-[10px] font-['Manrope',_sans-serif]">2wk · $500</p>
            <button className="w-full py-[6px] px-[10px] bg-black text-white rounded-[10px] text-[10px] hover:bg-black/90 transition-colors font-['Manrope',_sans-serif]">
              apply
            </button>
          </div>

          {/* Mentor Card */}
          <div className="bg-white border border-black/5 rounded-[16px] p-[14px] hover:border-[#FFD4C4]/50 transition-all cursor-pointer">
            <p className="text-[9px] text-black/50 mb-[3px] font-['Manrope',_sans-serif] uppercase tracking-wider">mentor</p>
            <h3 className="text-[12px] font-['Manrope',_sans-serif] text-black mb-[6px]">
              sarah chen
            </h3>
            <p className="text-[10px] text-black/50 mb-[10px] font-['Manrope',_sans-serif]">lead at healthnet · 89% match</p>
            <button className="w-full py-[6px] px-[10px] bg-black text-white rounded-[10px] text-[10px] hover:bg-black/90 transition-colors font-['Manrope',_sans-serif]">
              connect
            </button>
          </div>
        </div>
      </div>

      {/* AI Coach Button */}
      <div className="fixed bottom-[28px] right-[28px]">
        <button className="bg-black text-white rounded-[16px] p-[12px] shadow-lg hover:shadow-xl transition-all">
          <div className="text-[11px] font-['Manrope',_sans-serif] mb-[3px]">
            need help?
          </div>
          <div className="text-[9px] text-white/70 font-['Manrope',_sans-serif]">
            ask ai coach
          </div>
        </button>
      </div>
    </div>
  );
}
