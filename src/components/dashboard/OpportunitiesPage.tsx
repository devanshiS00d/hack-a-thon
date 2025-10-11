import { useState } from "react";
import { SearchingScreen } from "./SearchingScreen";

interface OpportunitiesPageProps {
  ikigaiType: string;
}

export function OpportunitiesPage({
  ikigaiType,
}: OpportunitiesPageProps) {
  const [isSearching, setIsSearching] = useState(true);
  const [expandedId, setExpandedId] = useState<string | null>(
    null,
  );

  const opportunities = [
    {
      id: "1",
      type: "micro-internship",
      title: "redesign patient portal - teladoc",
      matchScore: 96,
      remote: true,
      duration: "3 weeks",
      compensation: "$800",
      description: [
        "conduct user research with 10 patients",
        "redesign appointment booking flow",
        "present findings to product team",
      ],
      whyPerfect: [
        "matches ux + healthcare ikigai",
        "you've completed similar projects",
        "teladoc engagement: 2 case studies read",
      ],
      valuedBy: ["teladoc", "oscar health", "headspace"],
      applicants: 12,
      postedDays: 2,
    },
    {
      id: "2",
      type: "course",
      title: "accessible design for healthcare apps",
      matchScore: 89,
      platform: "coursera",
      duration: "6 hours",
      compensation: "free",
      description: [
        "wcag 2.1 standards for medical interfaces",
        "designing for elderly and disabled users",
      ],
      whyRecommended: [
        "fills your accessibility skill gap",
        "teladoc lists this as preferred skill",
      ],
      valuedBy: ["teladoc", "lyra health"],
    },
    {
      id: "3",
      type: "project",
      title: "design a mental health check-in app",
      matchScore: 94,
      community: true,
      duration: "2 weeks",
      deadline: "may 20",
      participants: 47,
      valuedBy: ["headspace", "lyra health", "teladoc"],
    },
    {
      id: "4",
      type: "micro-internship",
      title: "user research for medication tracker",
      matchScore: 91,
      remote: true,
      duration: "2 weeks",
      compensation: "$600",
      description: [
        "interview 8 patients about medication adherence",
        "analyze pain points in current workflow",
        "create user journey maps",
      ],
      whyPerfect: [
        "aligns with healthcare focus",
        "research skills match",
        "remote flexibility",
      ],
      valuedBy: ["ro", "oscar health"],
      applicants: 8,
      postedDays: 5,
    },
    {
      id: "5",
      type: "course",
      title: "healthcare data privacy & security",
      matchScore: 85,
      platform: "udemy",
      duration: "4 hours",
      compensation: "$49",
      description: [
        "hipaa compliance fundamentals",
        "secure design patterns for health data",
      ],
      whyRecommended: [
        "required knowledge for healthcare ux",
        "mentioned in 3 job descriptions you viewed",
      ],
      valuedBy: ["teladoc", "oscar health", "ro"],
    },
  ];

  if (isSearching) {
    return (
      <SearchingScreen
        onComplete={() => setIsSearching(false)}
      />
    );
  }

  return (
    <div className="p-[32px] max-w-[1100px] mx-auto">
      {/* Header */}
      <div className="mb-[24px]">
        <h1 className="text-[20px] font-['Manrope',_sans-serif] text-black mb-[6px]">
          opportunities for you
        </h1>
        <p className="text-[11px] text-black/50 font-['Manrope',_sans-serif]">
          showing {opportunities.length} personalized matches
        </p>
      </div>

      {/* Opportunities List */}
      <div className="space-y-[12px] mb-[24px]">
        {opportunities.map((opp) => (
          <div
            key={opp.id}
            className="bg-white border-2 border-black/5 rounded-[16px] p-[16px] hover:border-[#FFD4C4] hover:bg-[#FFF5F0]/30 hover:shadow-[0_4px_16px_rgba(255,212,196,0.15)] transition-all cursor-pointer"
          >
            {/* Header Row */}
            <div className="flex items-start justify-between mb-[10px]">
              <div className="flex-1">
                <div className="flex items-center gap-[8px] mb-[6px]">
                  <span className="text-[9px] font-['Manrope',_sans-serif] text-black/50 uppercase tracking-wider">
                    {opp.type.replace("-", " ")}
                  </span>
                </div>
                <h3 className="text-[14px] font-['Manrope',_sans-serif] text-black mb-[6px]">
                  {opp.title}
                </h3>

                {/* Metadata */}
                <div className="flex items-center gap-[8px] text-[10px] text-black/60 font-['Manrope',_sans-serif] mb-[10px]">
                  {opp.remote && <span>remote</span>}
                  {opp.platform && <span>{opp.platform}</span>}
                  {opp.community && <span>community</span>}
                  <span className="text-black/30">•</span>
                  <span>{opp.duration}</span>
                  <span className="text-black/30">•</span>
                  <span>{opp.compensation}</span>
                </div>
              </div>

              {/* Match Score */}
              <div className="text-right ml-[16px]">
                <div className="text-[20px] font-['Manrope',_sans-serif] text-black/80 mb-[1px]">
                  {opp.matchScore}%
                </div>
                <p className="text-[9px] text-black/40 font-['Manrope',_sans-serif]">
                  match
                </p>
              </div>
            </div>

            {/* Expandable Content */}
            {expandedId === opp.id ? (
              <div className="mt-[12px] space-y-[10px]">
                {/* Description */}
                {opp.description && (
                  <div>
                    <p className="text-[10px] text-black/50 mb-[4px] font-['Manrope',_sans-serif]">
                      {opp.type === "course"
                        ? "what you'll learn:"
                        : opp.type === "project"
                          ? "challenge:"
                          : "what you'll do:"}
                    </p>
                    <ul className="space-y-[2px]">
                      {opp.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-[11px] text-black/70 font-['Manrope',_sans-serif] flex items-start gap-[6px]"
                        >
                          <span className="text-[#FFD4C4] mt-[2px]">
                            •
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Why Perfect/Recommended */}
                {(opp.whyPerfect || opp.whyRecommended) && (
                  <div>
                    <p className="text-[10px] text-black/50 mb-[4px] font-['Manrope',_sans-serif]">
                      {opp.whyPerfect
                        ? "why it's perfect:"
                        : "why ai recommends:"}
                    </p>
                    <ul className="space-y-[2px]">
                      {(
                        opp.whyPerfect || opp.whyRecommended
                      )?.map((item, i) => (
                        <li
                          key={i}
                          className="text-[11px] text-black/70 font-['Manrope',_sans-serif] flex items-start gap-[6px]"
                        >
                          <span className="text-[#FFC1B6]">
                            ✓
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Valued By Companies */}
                {opp.valuedBy && opp.valuedBy.length > 0 && (
                  <div className="pt-[8px] border-t border-black/5">
                    <p className="text-[9px] text-black/50 mb-[3px] font-['Manrope',_sans-serif]">
                      valued by companies:
                    </p>
                    <div className="flex flex-wrap gap-[4px]">
                      {opp.valuedBy.map((company, i) => (
                        <span
                          key={i}
                          className="px-[6px] py-[2px] bg-[#FFF5F0] border border-[#FFD4C4]/30 rounded-[6px] text-[9px] text-black/60 font-['Manrope',_sans-serif]"
                        >
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Additional Info */}
                {(opp.applicants ||
                  opp.participants ||
                  opp.deadline) && (
                  <div className="flex items-center gap-[8px] text-[10px] text-black/60 font-['Manrope',_sans-serif] pt-[8px] border-t border-black/5">
                    {opp.applicants && (
                      <span>{opp.applicants} applicants</span>
                    )}
                    {opp.participants && (
                      <span>
                        {opp.participants} designers
                        participating
                      </span>
                    )}
                    {opp.deadline && (
                      <span>deadline: {opp.deadline}</span>
                    )}
                    {opp.postedDays && (
                      <>
                        <span className="text-black/30">•</span>
                        <span>
                          posted {opp.postedDays} days ago
                        </span>
                      </>
                    )}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex items-center gap-[8px] pt-[10px]">
                  <button className="px-[14px] py-[6px] bg-gradient-to-r from-[#FFD4C4] to-[#FFC1B6] text-white rounded-[10px] text-[10px] hover:opacity-90 transition-opacity font-['Manrope',_sans-serif]">
                    {opp.type === "course"
                      ? "start course"
                      : opp.type === "project"
                        ? "join challenge"
                        : "quick apply"}
                  </button>
                  <button className="px-[14px] py-[6px] bg-white border border-black/10 rounded-[10px] text-[10px] text-black/70 hover:bg-black/5 transition-colors font-['Manrope',_sans-serif]">
                    {opp.type === "course"
                      ? "add to roadmap"
                      : "learn more"}
                  </button>
                  <button className="px-[14px] py-[6px] bg-white border border-black/10 rounded-[10px] text-[10px] text-black/70 hover:bg-black/5 transition-colors font-['Manrope',_sans-serif]">
                    save
                  </button>
                </div>
              </div>
            ) : (
              /* Quick Preview */
              <button
                onClick={() => setExpandedId(opp.id)}
                className="w-full text-left"
              >
                {opp.description && (
                  <p className="text-[11px] text-black/60 font-['Manrope',_sans-serif] line-clamp-2 mb-[8px]">
                    {opp.description[0]}...
                  </p>
                )}
                <span className="text-[10px] text-[rgb(84,0,0)] hover:text-[#FFC1B6] font-['Manrope',_sans-serif]">
                  view details →
                </span>
              </button>
            )}

            {/* Collapse Button */}
            {expandedId === opp.id && (
              <button
                onClick={() => setExpandedId(null)}
                className="text-[10px] text-black/50 hover:text-black/70 font-['Manrope',_sans-serif] mt-[8px]"
              >
                show less ↑
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center">
        <button className="px-[20px] py-[8px] bg-white border border-black/10 rounded-[14px] text-[11px] text-black/70 hover:bg-black/5 transition-colors font-['Manrope',_sans-serif]">
          load more opportunities
        </button>
      </div>
    </div>
  );
}