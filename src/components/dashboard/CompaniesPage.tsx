import { useState } from 'react';
import { CompanyDetail } from './CompanyDetail';

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

export function CompaniesPage() {
  const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);

  const companies: Company[] = [
    {
      id: 'teladoc',
      name: 'teladoc health',
      logo: 'T',
      industry: 'healthcare',
      size: '5,000+ employees',
      matchScore: 94,
      mission: 'empower everyone to live their healthiest life through technology-enabled, whole-person care.',
      description: 'teladoc health is the global leader in virtual care, providing telehealth, expert medical services, and mental health support to 60m+ members worldwide.',
      technologies: ['react', 'node.js', 'aws', 'postgresql', 'docker', 'typescript', 'graphql', 'kubernetes'],
      culture: ['innovation-driven', 'patient-first mindset', 'remote-friendly', 'fast-paced growth'],
      openRoles: 2,
      yourEngagement: {
        caseStudies: 2,
        webinars: 1,
        projects: 1
      }
    },
    {
      id: 'oscar',
      name: 'oscar health',
      logo: 'O',
      industry: 'healthcare',
      size: '1,500+ employees',
      matchScore: 91,
      mission: 'make a healthier life accessible and affordable for all.',
      description: 'oscar health is a tech-focused health insurance company using technology, design, and data to humanize healthcare.',
      technologies: ['react', 'python', 'aws', 'kubernetes', 'terraform', 'graphql'],
      culture: ['member-first', 'data-driven', 'collaborative', 'transparent'],
      openRoles: 3,
      yourEngagement: {
        caseStudies: 1,
        webinars: 0,
        projects: 0
      }
    },
    {
      id: 'headspace',
      name: 'headspace health',
      logo: 'H',
      industry: 'mental health',
      size: '800+ employees',
      matchScore: 89,
      mission: 'improve the health and happiness of the world.',
      description: 'headspace health combines headspace and ginger to provide mental healthcare for everyone through meditation, coaching, therapy, and psychiatry.',
      technologies: ['react native', 'swift', 'kotlin', 'node.js', 'postgresql', 'aws'],
      culture: ['mindfulness-focused', 'inclusive', 'mission-driven', 'creative'],
      openRoles: 1,
      yourEngagement: {
        caseStudies: 0,
        webinars: 0,
        projects: 2
      }
    },
    {
      id: 'lyra',
      name: 'lyra health',
      logo: 'L',
      industry: 'mental health',
      size: '600+ employees',
      matchScore: 87,
      mission: 'transform mental health care through technology with world-class providers.',
      description: 'lyra health provides innovative mental health benefits for employees and their families, connecting them with therapists and coaches.',
      technologies: ['react', 'python', 'django', 'postgresql', 'aws', 'redis'],
      culture: ['evidence-based', 'compassionate', 'innovative', 'growth-oriented'],
      openRoles: 2,
      yourEngagement: {
        caseStudies: 1,
        webinars: 0,
        projects: 0
      }
    },
    {
      id: 'ro',
      name: 'ro',
      logo: 'R',
      industry: 'healthcare',
      size: '400+ employees',
      matchScore: 85,
      mission: 'help patients achieve their health goals by delivering the easiest, most effective care possible.',
      description: 'ro is a direct-to-patient healthcare company building a patient-first healthcare system powered by technology.',
      technologies: ['react', 'typescript', 'node.js', 'postgresql', 'aws', 'docker'],
      culture: ['patient-obsessed', 'ownership', 'continuous learning', 'diverse'],
      openRoles: 4,
      yourEngagement: {
        caseStudies: 0,
        webinars: 1,
        projects: 0
      }
    }
  ];

  if (selectedCompany) {
    return (
      <CompanyDetail
        company={selectedCompany}
        onBack={() => setSelectedCompany(null)}
      />
    );
  }

  return (
    <div className="p-[32px] max-w-[1100px] mx-auto">
      {/* Header */}
      <div className="mb-[24px]">
        <h1 className="text-[20px] font-['Manrope',_sans-serif] text-black mb-[6px]">
          companies for you
        </h1>
        <p className="text-[11px] text-black/50 font-['Manrope',_sans-serif]">
          {companies.length} companies aligned with your ikigai
        </p>
      </div>

      {/* Companies List */}
      <div className="space-y-[12px]">
        {companies.map((company) => (
          <button
            key={company.id}
            onClick={() => setSelectedCompany(company)}
            className="w-full bg-white border border-black/5 rounded-[16px] p-[16px] hover:border-[#FFD4C4]/50 transition-all text-left"
          >
            <div className="flex items-start gap-[14px]">
              {/* Logo */}
              <div className="w-[48px] h-[48px] rounded-[12px] bg-gradient-to-br from-[#FFD4C4] to-[#FFC1B6] flex items-center justify-center flex-shrink-0">
                <span className="text-[20px] font-['Manrope',_sans-serif] text-white">
                  {company.logo}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-[12px] mb-[6px]">
                  <div className="flex-1">
                    <h3 className="text-[14px] font-['Manrope',_sans-serif] text-black mb-[3px]">
                      {company.name}
                    </h3>
                    <p className="text-[10px] text-black/50 font-['Manrope',_sans-serif]">
                      {company.industry} • {company.size}
                    </p>
                  </div>
                  
                  {/* Match Score */}
                  <div className="text-right">
                    <div className="text-[18px] font-['Manrope',_sans-serif] text-black/80 mb-[1px]">
                      {company.matchScore}%
                    </div>
                    <p className="text-[9px] text-black/40 font-['Manrope',_sans-serif]">match</p>
                  </div>
                </div>

                {/* Mission */}
                <p className="text-[11px] text-black/60 font-['Manrope',_sans-serif] mb-[8px] line-clamp-2">
                  {company.mission}
                </p>

                {/* Engagement & Roles */}
                <div className="flex items-center gap-[12px] text-[10px] text-black/50 font-['Manrope',_sans-serif]">
                  {company.yourEngagement.caseStudies > 0 && (
                    <span>{company.yourEngagement.caseStudies} case studies read</span>
                  )}
                  {company.yourEngagement.webinars > 0 && (
                    <span>{company.yourEngagement.webinars} webinar attended</span>
                  )}
                  {company.yourEngagement.projects > 0 && (
                    <span>{company.yourEngagement.projects} related projects</span>
                  )}
                  <span className="text-black/30">•</span>
                  <span className="text-[#FFD4C4]">{company.openRoles} open roles</span>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
