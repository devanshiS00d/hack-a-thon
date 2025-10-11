import { PROFESSIONS, type Profession } from './professions';

// ENHANCED IKIGAI CALCULATION ENGINE
export const IkigaiCalculator = {
  // Dimension weights for each question
  questionWeights: {
    1: { love: 1.0 },
    2: { love: 1.0 },
    3: { love: 0.8, worldNeeds: 0.2 },
    4: { love: 0.9, goodAt: 0.1 },
    5: { goodAt: 1.0 },
    6: { goodAt: 1.0 },
    7: { goodAt: 0.9, paidFor: 0.1 },
    8: { goodAt: 0.8 },
    9: { worldNeeds: 1.0 },
    10: { worldNeeds: 1.0 },
    11: { worldNeeds: 0.9, love: 0.1 },
    12: { worldNeeds: 0.8, paidFor: 0.2 },
    13: { paidFor: 1.0 },
    14: { paidFor: 0.9, worldNeeds: 0.1 },
    15: { paidFor: 0.8, goodAt: 0.2 }
  } as Record<number, Record<string, number>>,

  // Enhanced answer scoring with tags
  answerScores: {
    1: {
      'create': { love: 90, goodAt: 70, tags: ['creative', 'building'] },
      'learn': { love: 85, goodAt: 60, tags: ['analytical', 'curious'] },
      'help': { love: 80, worldNeeds: 85, tags: ['empathy', 'impact'] },
      'build': { love: 85, goodAt: 80, tags: ['technical', 'building'] },
      'connect': { love: 75, worldNeeds: 70, tags: ['people', 'community'] },
      'explore': { love: 88, goodAt: 65, tags: ['research', 'curious'] }
    },
    2: {
      'teaching': { love: 85, goodAt: 80, worldNeeds: 75, tags: ['teaching', 'communication'] },
      'designing': { love: 90, goodAt: 85, tags: ['design', 'creative'] },
      'analyzing': { love: 70, goodAt: 90, tags: ['analytical', 'data'] },
      'leading': { love: 75, goodAt: 85, paidFor: 80, tags: ['leadership', 'management'] },
      'advocating': { love: 88, worldNeeds: 90, tags: ['impact', 'communication'] },
      'experimenting': { love: 92, goodAt: 75, tags: ['innovative', 'tech'] }
    },
    3: {
      'tech': { love: 85, paidFor: 85, tags: ['tech', 'innovation'] },
      'health': { worldNeeds: 90, love: 80, tags: ['healthcare', 'impact'] },
      'justice': { worldNeeds: 95, love: 85, tags: ['social-impact', 'advocacy'] },
      'business': { paidFor: 90, goodAt: 80, tags: ['business', 'strategy'] },
      'art': { love: 95, goodAt: 80, tags: ['creative', 'artistic'] },
      'education': { worldNeeds: 90, love: 85, tags: ['education', 'teaching'] },
      'environment': { worldNeeds: 95, love: 80, tags: ['climate', 'sustainability'] },
      'psychology': { worldNeeds: 85, love: 85, tags: ['mental-health', 'empathy'] }
    },
    6: {
      'speaking': { goodAt: 85, paidFor: 75, tags: ['communication', 'leadership'] },
      'writing': { goodAt: 88, paidFor: 70, tags: ['communication', 'creative'] },
      'data': { goodAt: 90, paidFor: 85, tags: ['analytical', 'data'] },
      'design': { goodAt: 85, love: 80, tags: ['design', 'creative'] },
      'coding': { goodAt: 92, paidFor: 88, tags: ['tech', 'coding'] },
      'managing': { goodAt: 80, paidFor: 85, tags: ['leadership', 'management'] },
      'strategy': { goodAt: 85, paidFor: 82, tags: ['strategy', 'analytical'] }
    },
    9: {
      'climate': { worldNeeds: 95, love: 85, tags: ['climate', 'sustainability'] },
      'healthcare': { worldNeeds: 92, paidFor: 85, tags: ['healthcare', 'impact'] },
      'education': { worldNeeds: 90, love: 80, tags: ['education', 'teaching'] },
      'mental-health': { worldNeeds: 93, love: 88, tags: ['mental-health', 'empathy'] },
      'economic': { worldNeeds: 85, paidFor: 80, tags: ['social-impact', 'economic'] },
      'tech-ethics': { worldNeeds: 88, goodAt: 75, tags: ['tech', 'ethics'] },
      'community': { worldNeeds: 87, love: 82, tags: ['community', 'social-impact'] },
      'food': { worldNeeds: 85, love: 70, tags: ['sustainability', 'health'] }
    },
    10: {
      'individuals': { worldNeeds: 85, love: 90, tags: ['empathy', 'direct-impact'] },
      'systemic': { worldNeeds: 92, goodAt: 80, tags: ['strategy', 'systems-thinking'] },
      'tools': { worldNeeds: 78, goodAt: 90, paidFor: 85, tags: ['tech', 'building'] },
      'preserve': { worldNeeds: 88, love: 75, tags: ['conservation', 'protection'] },
      'create': { worldNeeds: 82, love: 92, goodAt: 85, tags: ['innovative', 'creative'] }
    },
    13: {
      'student': { paidFor: 60, love: 85, tags: ['learning', 'exploring'] },
      'early-career': { paidFor: 75, goodAt: 70, tags: ['growing', 'building'] },
      'career-changer': { paidFor: 70, love: 80, worldNeeds: 75, tags: ['pivoting', 'brave'] },
      'mid-career': { paidFor: 85, goodAt: 80, tags: ['experienced', 'leadership'] }
    },
    14: {
      'tech': { paidFor: 90, goodAt: 85, tags: ['tech', 'innovation'] },
      'healthcare': { worldNeeds: 92, paidFor: 85, tags: ['healthcare', 'impact'] },
      'education': { worldNeeds: 90, paidFor: 70, tags: ['education', 'teaching'] },
      'finance': { paidFor: 95, goodAt: 85, tags: ['finance', 'analytical'] },
      'marketing': { paidFor: 80, love: 75, tags: ['marketing', 'creative'] },
      'nonprofit': { worldNeeds: 95, love: 85, paidFor: 60, tags: ['social-impact', 'mission'] },
      'design': { love: 90, goodAt: 85, tags: ['design', 'creative'] },
      'consulting': { paidFor: 90, goodAt: 85, tags: ['strategy', 'problem-solving'] }
    },
    15: {
      'income': { paidFor: 95, tags: ['financial', 'ambitious'] },
      'balance': { paidFor: 70, love: 85, tags: ['wellbeing', 'sustainable'] },
      'impact': { worldNeeds: 95, love: 88, tags: ['impact', 'mission-driven'] },
      'creative': { love: 92, goodAt: 80, tags: ['creative', 'autonomy'] },
      'security': { paidFor: 88, tags: ['stability', 'practical'] },
      'growth': { paidFor: 85, goodAt: 80, tags: ['ambitious', 'learning'] },
      'people': { love: 88, worldNeeds: 75, tags: ['collaborative', 'people'] },
      'remote': { paidFor: 75, love: 70, tags: ['flexible', 'autonomous'] }
    }
  } as Record<number, Record<string, any>>,

  // Map user responses to answer keys
  mapUserResponse(questionId: number, response: string): string {
    const mappings: Record<number, Record<string, string>> = {
      1: {
        'Create something (art/code/content)': 'create',
        'Learn something new': 'learn',
        "Help solve someone's problem": 'help',
        'Build/fix things': 'build',
        'Connect with people': 'connect',
        'Explore ideas/research': 'explore'
      },
      2: {
        "Teaching someone a skill you're good at": 'teaching',
        'Designing/building something from scratch': 'designing',
        'Analyzing data to find insights': 'analyzing',
        'Leading a team toward a goal': 'leading',
        'Advocating for a cause you believe in': 'advocating',
        'Experimenting with new technologies/methods': 'experimenting'
      },
      3: {
        'Tech & Innovation': 'tech',
        'Health & Wellness': 'health',
        'Social Justice': 'justice',
        'Business & Entrepreneurship': 'business',
        'Art & Design': 'art',
        'Education': 'education',
        'Environment': 'environment',
        'Psychology': 'psychology'
      },
      6: {
        'Explaining complex things simply': 'speaking',
        'Writing/communication': 'writing',
        'Technical problem-solving': 'data',
        'Creative/visual work': 'design',
        'Organizing projects/events': 'strategy',
        'Strategy & planning': 'strategy',
        'Building relationships': 'managing',
        'Hands-on making/fixing': 'data'
      },
      9: {
        'Climate Change': 'climate',
        'Healthcare Access': 'healthcare',
        'Education Inequality': 'education',
        'Mental Health': 'mental-health',
        'Economic Opportunity': 'economic',
        'Technology Ethics': 'tech-ethics',
        'Community Building': 'community',
        'Food Security': 'food'
      },
      10: {
        'I want to help individuals improve their lives': 'individuals',
        'I want to create systemic change in how society works': 'systemic',
        "I want to build tools that make people's work easier": 'tools',
        'I want to preserve/protect what we already have': 'preserve',
        "I want to create new things that didn't exist before": 'create'
      },
      13: {
        'Student (exploring options)': 'student',
        'Early career (0-3 years experience)': 'early-career',
        'Career changer (pivoting from another field)': 'career-changer',
        'Mid-career (looking to realign)': 'mid-career'
      },
      14: {
        'Tech/Software': 'tech',
        'Healthcare': 'healthcare',
        'Education': 'education',
        'Finance': 'finance',
        'Marketing/Media': 'marketing',
        'Non-Profit/Social Impact': 'nonprofit',
        'Design/Creative': 'design',
        'Consulting': 'consulting'
      },
      15: {
        'High income potential': 'income',
        'Work-life balance': 'balance',
        'Making a meaningful impact': 'impact',
        'Creative freedom': 'creative',
        'Job security/stability': 'security',
        'Rapid growth opportunities': 'growth',
        'Working with great people': 'people',
        'Location flexibility/remote work': 'remote'
      }
    };

    return mappings[questionId]?.[response] || response.toLowerCase().replace(/\s+/g, '-');
  },

  // Calculate dimension scores from answers with tags
  calculateDimensionScores(answers: Record<number, string>) {
    const dimensions = { love: 0, goodAt: 0, worldNeeds: 0, paidFor: 0 };
    const dimensionCounts = { love: 0, goodAt: 0, worldNeeds: 0, paidFor: 0 };
    const tags: string[] = [];

    Object.entries(answers).forEach(([questionId, answer]) => {
      const qId = parseInt(questionId);
      const weights = this.questionWeights[qId];
      const answerData = this.answerScores[qId]?.[answer] || {};

      if (answerData.tags) {
        tags.push(...answerData.tags);
      }

      Object.entries(weights).forEach(([dim, weight]) => {
        const score = answerData[dim as keyof typeof answerData] || 70;
        dimensions[dim as keyof typeof dimensions] += score * weight;
        dimensionCounts[dim as keyof typeof dimensionCounts] += weight;
      });
    });

    Object.keys(dimensions).forEach(dim => {
      const key = dim as keyof typeof dimensions;
      dimensions[key] = dimensionCounts[key] > 0 
        ? Math.round(dimensions[key] / dimensionCounts[key])
        : 0;
    });

    return { dimensions, tags };
  },

  // Calculate overall ikigai alignment score
  calculateIkigaiScore(dimensions: Record<string, number>) {
    const avg = Object.values(dimensions).reduce((a, b) => a + b, 0) / 4;
    const variance = Object.values(dimensions)
      .reduce((sum, val) => sum + Math.pow(val - avg, 2), 0) / 4;
    const std = Math.sqrt(variance);
    
    const balanceScore = 100 - (std * 2);
    const overallScore = (avg + balanceScore) / 2;
    
    return Math.round(Math.max(0, Math.min(100, overallScore)));
  },

  // Match professions to user profile
  matchProfessions(dimensions: Record<string, number>, tags: string[]): Profession[] {
    const matches: Profession[] = [];

    Object.entries(PROFESSIONS).forEach(([key, profession]) => {
      let score = 0;
      const reasons: string[] = [];

      // Dimension matching (60% weight)
      const dimensionMatch = Object.entries(profession.requiredScores).reduce((sum, [dim, required]) => {
        const userScore = dimensions[dim as keyof typeof dimensions];
        if (userScore >= required) {
          const diff = userScore - required;
          if (diff > 0) {
            reasons.push(`${dim}: +${diff}%`);
          }
          return sum + 15;
        } else {
          const gap = required - userScore;
          return sum + Math.max(0, 15 - gap / 2);
        }
      }, 0);
      score += dimensionMatch;

      // Tag matching (40% weight)
      const matchingTags = profession.tags.filter(tag => tags.includes(tag));
      const tagScore = (matchingTags.length / profession.tags.length) * 40;
      score += tagScore;

      if (matchingTags.length > 0) {
        reasons.push(`Aligned: ${matchingTags.join(', ')}`);
      }

      matches.push({
        ...profession,
        matchScore: Math.round(score),
        matchReasons: reasons
      });
    });

    return matches.sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0)).slice(0, 5);
  },

  // Determine specific ikigai type
  determineIkigaiType(dimensions: Record<string, number>, topProfession?: Profession) {
    const { love, goodAt, worldNeeds, paidFor } = dimensions;
    
    if (worldNeeds >= 85 && love >= 80 && topProfession?.tags.includes('healthcare')) {
      return {
        type: 'Healthcare Innovator',
        motto: 'Healing through Innovation',
        description: 'You blend deep empathy for health challenges with creative problem-solving. You see healthcare not as it is, but as it could be.'
      };
    }
    
    if (worldNeeds >= 85 && love >= 80 && topProfession?.tags.includes('education')) {
      return {
        type: 'Learning Catalyst',
        motto: 'Transforming Lives Through Education',
        description: 'You believe everyone deserves access to knowledge. You design experiences that make learning stick.'
      };
    }
    
    if (worldNeeds >= 85 && topProfession?.tags.includes('climate')) {
      return {
        type: 'Planet Protector',
        motto: 'Building a Sustainable Future',
        description: 'Urgency meets optimism in your approach. You tackle climate challenges with both head and heart.'
      };
    }
    
    if (goodAt >= 85 && paidFor >= 85 && topProfession?.tags.includes('tech')) {
      return {
        type: 'Technical Architect',
        motto: 'Building Tomorrow\'s Infrastructure',
        description: 'You combine deep technical expertise with business acumen. Code is your craft, impact is your compass.'
      };
    }
    
    if (love >= 85 && goodAt >= 80 && topProfession?.tags.includes('design')) {
      return {
        type: 'Experience Sculptor',
        motto: 'Crafting Delight in Every Detail',
        description: 'You see beauty and potential everywhere. Your work makes people\'s days better in subtle but powerful ways.'
      };
    }
    
    if (goodAt >= 85 && topProfession?.tags.includes('data')) {
      return {
        type: 'Insight Alchemist',
        motto: 'Transforming Data into Decisions',
        description: 'You see patterns where others see noise. Numbers tell you stories that drive real-world impact.'
      };
    }
    
    if (worldNeeds >= 85 && topProfession?.tags.includes('social-impact')) {
      return {
        type: 'Equity Champion',
        motto: 'Justice Through Action',
        description: 'You fight for the underserved with strategy and heart. Systems need changing, and you\'re here to do it.'
      };
    }
    
    if (love >= 85 && goodAt >= 80 && topProfession?.tags.includes('creative')) {
      return {
        type: 'Creative Visionary',
        motto: 'Imagination Made Real',
        description: 'Your creativity isn\'t just aesthetic—it solves problems. You make the world more beautiful and functional.'
      };
    }
    
    if (paidFor >= 85 && goodAt >= 80 && topProfession?.tags.includes('leadership')) {
      return {
        type: 'Strategic Leader',
        motto: 'Vision Meets Execution',
        description: 'You see the big picture and know how to get there. Teams follow you because you make success inevitable.'
      };
    }
    
    if (Math.min(...Object.values(dimensions)) >= 75) {
      return {
        type: 'Renaissance Professional',
        motto: 'Excellence Across Domains',
        description: 'Your versatility is your strength. You bridge disciplines and thrive in ambiguity.'
      };
    }
    
    if (love >= 80 && paidFor < 70) {
      return {
        type: 'Passionate Pioneer',
        motto: 'Forging New Paths',
        description: 'You follow your heart even when the path isn\'t clear. Your authenticity will create your own market.'
      };
    }
    
    return {
      type: 'Emerging Talent',
      motto: 'Discovery in Progress',
      description: 'You\'re in an exciting phase of exploration. Each step reveals more about your unique path.'
    };
  },

  // Determine archetype (legacy - for backwards compatibility)
  determineArchetype(dimensions: Record<string, number>) {
    const ikigaiType = this.determineIkigaiType(dimensions);
    return {
      title: ikigaiType.type,
      path: ikigaiType.motto,
      description: ikigaiType.description
    };
  }
};
