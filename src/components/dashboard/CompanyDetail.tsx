interface Company {
  id: string;
  name: string;
  logo: string;
  industry: string;
  size: string;
  matchScore: number;
  mission: string;
  description: string;
  technologies: string[];
  culture: string[];
  openRoles: number;
  yourEngagement: {
    caseStudies: number;
    webinars: number;
    projects: number;
  };
}

interface CompanyDetailProps {
  company: Company;
  onBack: () => void;
}

export function CompanyDetail({ company, onBack }: CompanyDetailProps) {
  const opportunities = [
    {
      id: '1',
      type: 'micro-internship',
      title: 'redesign patient portal',
      duration: '3 weeks',
      compensation: '$800',
      remote: true,
      matchScore: 96
    },
    {
      id: '2',
      type: 'full-time',
      title: 'ux designer',
      compensation: '$85k-$110k',
      remote: true,
      matchScore: 89
    }
  ];

  const userTechFamiliarity = ['react', 'node.js', 'typescript', 'aws'];
  const familiarityPercentage = Math.round(
    (userTechFamiliarity.filter(tech => 
      company.technologies.includes(tech)
    ).length / company.technologies.length) * 100
  );

  const missingTechs = company.technologies.filter(
    tech => !userTechFamiliarity.includes(tech)
  ).slice(0, 2);

  return (
    <div className="p-[32px] max-w-[1100px] mx-auto">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="text-[11px] text-black/60 hover:text-black font-['Manrope',_sans-serif] mb-[20px] flex items-center gap-[6px]"
      >
        <span>←</span> back to companies
      </button>

      {/* Company Header */}
      <div className="flex items-start gap-[16px] mb-[28px]">
        <div className="w-[64px] h-[64px] rounded-[16px] bg-gradient-to-br from-[#FFD4C4] to-[#FFC1B6] flex items-center justify-center flex-shrink-0">
          <span className="text-[28px] font-['Manrope',_sans-serif] text-white">
            {company.logo}
          </span>
        </div>
        
        <div className="flex-1">
          <h1 className="text-[24px] font-['Manrope',_sans-serif] text-black mb-[4px]">
            {company.name}
          </h1>
          <p className="text-[11px] text-black/50 font-['Manrope',_sans-serif] mb-[8px]">
            {company.industry} • {company.size}
          </p>
          <div className="flex items-center gap-[8px]">
            <span className="text-[14px] font-['Manrope',_sans-serif] text-black/70">
              your compatibility:
            </span>
            <span className="text-[20px] font-['Manrope',_sans-serif] text-black">
              {company.matchScore}%
            </span>
          </div>
        </div>
      </div>

      {/* Company Overview */}
      <div className="mb-[24px] pb-[24px] border-b border-black/5">
        <h2 className="text-[12px] font-['Manrope',_sans-serif] text-black/70 mb-[10px] uppercase tracking-wider">
          company overview
        </h2>
        
        <div className="mb-[12px]">
          <p className="text-[10px] text-black/50 mb-[4px] font-['Manrope',_sans-serif]">mission:</p>
          <p className="text-[12px] text-black/70 font-['Manrope',_sans-serif] italic">
            "{company.mission}"
          </p>
        </div>

        <div>
          <p className="text-[10px] text-black/50 mb-[4px] font-['Manrope',_sans-serif]">what they do:</p>
          <p className="text-[12px] text-black/70 font-['Manrope',_sans-serif] leading-[1.6]">
            {company.description}
          </p>
        </div>
      </div>

      {/* Your Fit Analysis */}
      <div className="mb-[24px] pb-[24px] border-b border-black/5">
        <h2 className="text-[12px] font-['Manrope',_sans-serif] text-black/70 mb-[12px] uppercase tracking-wider">
          your fit analysis
        </h2>
        
        <div className="bg-[#FFF5F0] border border-[#FFD4C4]/30 rounded-[16px] p-[16px] space-y-[12px]">
          <div>
            <div className="flex items-center gap-[6px] mb-[4px]">
              <span className="text-[#FFC1B6]">✓</span>
              <p className="text-[11px] font-['Manrope',_sans-serif] text-black">
                mission alignment ({Math.min(company.matchScore + 4, 98)}%)
              </p>
            </div>
            <p className="text-[10px] text-black/60 font-['Manrope',_sans-serif] ml-[16px]">
              your ikigai perfectly matches their healthcare mission
            </p>
          </div>

          <div>
            <div className="flex items-center gap-[6px] mb-[4px]">
              <span className="text-[#FFC1B6]">✓</span>
              <p className="text-[11px] font-['Manrope',_sans-serif] text-black">
                skills match ({Math.min(company.matchScore - 2, 92)}%)
              </p>
            </div>
            <p className="text-[10px] text-black/60 font-['Manrope',_sans-serif] ml-[16px]">
              ux design, healthcare domain, user research - exactly what they look for
            </p>
          </div>

          <div>
            <div className="flex items-center gap-[6px] mb-[4px]">
              <span className="text-[#FFC1B6]">✓</span>
              <p className="text-[11px] font-['Manrope',_sans-serif] text-black">
                your engagement (
                {company.yourEngagement.caseStudies + company.yourEngagement.webinars + company.yourEngagement.projects > 0 
                  ? 'high' 
                  : 'medium'}
                )
              </p>
            </div>
            <div className="ml-[16px] space-y-[2px]">
              {company.yourEngagement.caseStudies > 0 && (
                <p className="text-[10px] text-black/60 font-['Manrope',_sans-serif]">
                  • {company.yourEngagement.caseStudies} of their case studies analyzed
                </p>
              )}
              {company.yourEngagement.webinars > 0 && (
                <p className="text-[10px] text-black/60 font-['Manrope',_sans-serif]">
                  • attended webinar on their product design
                </p>
              )}
              {company.yourEngagement.projects > 0 && (
                <p className="text-[10px] text-black/60 font-['Manrope',_sans-serif]">
                  • completed {company.yourEngagement.projects} related project{company.yourEngagement.projects > 1 ? 's' : ''}
                </p>
              )}
              {company.yourEngagement.caseStudies + company.yourEngagement.webinars + company.yourEngagement.projects > 2 && (
                <p className="text-[10px] text-[#FFD4C4] font-['Manrope',_sans-serif] mt-[4px]">
                  you're in the top 5% of engaged candidates
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="mb-[24px] pb-[24px] border-b border-black/5">
        <h2 className="text-[12px] font-['Manrope',_sans-serif] text-black/70 mb-[10px] uppercase tracking-wider">
          tech stack
        </h2>
        
        <div className="flex flex-wrap gap-[6px] mb-[12px]">
          {company.technologies.map((tech) => (
            <span
              key={tech}
              className={`px-[10px] py-[4px] rounded-[8px] text-[10px] font-['Manrope',_sans-serif] ${
                userTechFamiliarity.includes(tech)
                  ? 'bg-[#FFD4C4]/30 text-black border border-[#FFD4C4]/50'
                  : 'bg-white text-black/60 border border-black/10'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-[8px] mb-[6px]">
          <span className="text-[10px] text-black/50 font-['Manrope',_sans-serif]">
            your familiarity:
          </span>
          <div className="flex-1 max-w-[200px] bg-[#FFF5E6] rounded-full h-[6px]">
            <div 
              className="bg-gradient-to-r from-[#FFD4C4] to-[#FFC1B6] h-[6px] rounded-full" 
              style={{ width: `${familiarityPercentage}%` }}
            ></div>
          </div>
          <span className="text-[10px] text-black/70 font-['Manrope',_sans-serif]">
            {familiarityPercentage}%
          </span>
        </div>

        {missingTechs.length > 0 && (
          <p className="text-[10px] text-black/50 font-['Manrope',_sans-serif]">
            consider learning: {missingTechs.join(', ')}
          </p>
        )}
      </div>

      {/* Culture & Values */}
      <div className="mb-[24px] pb-[24px] border-b border-black/5">
        <h2 className="text-[12px] font-['Manrope',_sans-serif] text-black/70 mb-[10px] uppercase tracking-wider">
          culture & values
        </h2>
        
        <div className="grid grid-cols-2 gap-[8px] mb-[12px]">
          {company.culture.map((value) => (
            <div
              key={value}
              className="flex items-center gap-[6px] text-[11px] text-black/70 font-['Manrope',_sans-serif]"
            >
              <span className="text-[#FFD4C4]">•</span>
              {value}
            </div>
          ))}
        </div>

        <div className="bg-white border border-black/5 rounded-[12px] p-[10px]">
          <div className="flex items-center gap-[6px] mb-[4px]">
            <span className="text-[11px] font-['Manrope',_sans-serif] text-black/70">
              employee reviews:
            </span>
            <span className="text-[12px] font-['Manrope',_sans-serif] text-black">
              4.2/5
            </span>
          </div>
          <p className="text-[10px] text-black/60 font-['Manrope',_sans-serif] italic">
            "great mission, challenging work, supportive team"
          </p>
        </div>
      </div>

      {/* Open Opportunities */}
      <div className="mb-[24px] pb-[24px] border-b border-black/5">
        <h2 className="text-[12px] font-['Manrope',_sans-serif] text-black/70 mb-[12px] uppercase tracking-wider">
          open opportunities
        </h2>
        
        <div className="space-y-[10px]">
          {opportunities.map((opp) => (
            <div
              key={opp.id}
              className="bg-white border border-black/5 rounded-[14px] p-[12px] hover:border-[#FFD4C4]/50 transition-all"
            >
              <div className="flex items-start justify-between gap-[12px]">
                <div className="flex-1">
                  <div className="flex items-center gap-[6px] mb-[4px]">
                    <span className="text-[9px] font-['Manrope',_sans-serif] text-black/50 uppercase tracking-wider">
                      {opp.type}
                    </span>
                  </div>
                  <h3 className="text-[13px] font-['Manrope',_sans-serif] text-black mb-[4px]">
                    {opp.title}
                  </h3>
                  <div className="flex items-center gap-[6px] text-[10px] text-black/60 font-['Manrope',_sans-serif]">
                    {opp.duration && <span>{opp.duration}</span>}
                    <span className="text-black/30">•</span>
                    <span>{opp.compensation}</span>
                    {opp.remote && (
                      <>
                        <span className="text-black/30">•</span>
                        <span>remote</span>
                      </>
                    )}
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-[16px] font-['Manrope',_sans-serif] text-black/80 mb-[1px]">
                    {opp.matchScore}%
                  </div>
                  <p className="text-[8px] text-black/40 font-['Manrope',_sans-serif]">match</p>
                </div>
              </div>
              
              <button className="mt-[8px] px-[12px] py-[5px] bg-gradient-to-r from-[#FFD4C4] to-[#FFC1B6] text-white rounded-[10px] text-[10px] hover:opacity-90 transition-opacity font-['Manrope',_sans-serif]">
                {opp.type === 'micro-internship' ? 'quick apply →' : 'apply →'}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Resources */}
      <div>
        <h2 className="text-[12px] font-['Manrope',_sans-serif] text-black/70 mb-[12px] uppercase tracking-wider">
          learning resources
        </h2>
        
        <div className="grid grid-cols-2 gap-[8px] mb-[12px]">
          <div className="bg-white border border-black/5 rounded-[12px] p-[10px]">
            <p className="text-[10px] text-black/50 font-['Manrope',_sans-serif] mb-[2px]">
              case studies
            </p>
            <p className="text-[12px] font-['Manrope',_sans-serif] text-black">
              {company.yourEngagement.caseStudies} read, 3 available
            </p>
          </div>
          
          <div className="bg-white border border-black/5 rounded-[12px] p-[10px]">
            <p className="text-[10px] text-black/50 font-['Manrope',_sans-serif] mb-[2px]">
              webinars
            </p>
            <p className="text-[12px] font-['Manrope',_sans-serif] text-black">
              {company.yourEngagement.webinars} attended
            </p>
          </div>
          
          <div className="bg-white border border-black/5 rounded-[12px] p-[10px]">
            <p className="text-[10px] text-black/50 font-['Manrope',_sans-serif] mb-[2px]">
              engineering blog
            </p>
            <p className="text-[12px] font-['Manrope',_sans-serif] text-black">
              5 posts
            </p>
          </div>
          
          <div className="bg-white border border-black/5 rounded-[12px] p-[10px]">
            <p className="text-[10px] text-black/50 font-['Manrope',_sans-serif] mb-[2px]">
              podcasts
            </p>
            <p className="text-[12px] font-['Manrope',_sans-serif] text-black">
              3 episodes
            </p>
          </div>
        </div>

        <button className="w-full py-[8px] bg-white border border-black/10 rounded-[14px] text-[11px] text-black/70 hover:bg-black/5 transition-colors font-['Manrope',_sans-serif]">
          explore all resources
        </button>
      </div>
    </div>
  );
}
