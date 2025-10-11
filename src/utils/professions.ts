// PROFESSION DATABASE
export const PROFESSIONS = {
  'healthtech-designer': {
    title: 'HealthTech UX/UI Designer',
    industry: 'Healthcare Technology',
    salary: '$65k-$110k',
    growth: 'High',
    companies: ['Teladoc', 'Oscar Health', 'Headspace', 'Calm', 'One Medical'],
    skills: ['UI/UX Design', 'Healthcare Domain', 'User Research', 'Figma', 'Accessibility'],
    description: 'Design digital health experiences that improve patient outcomes',
    requiredScores: { love: 75, goodAt: 70, worldNeeds: 85, paidFor: 70 },
    tags: ['design', 'healthcare', 'creative', 'impact']
  },
  'clinical-ai-specialist': {
    title: 'Clinical AI Product Manager',
    industry: 'Healthcare AI',
    salary: '$90k-$150k',
    growth: 'Very High',
    companies: ['Google Health', 'IBM Watson', 'Tempus', 'PathAI'],
    skills: ['Product Management', 'Healthcare Knowledge', 'AI/ML Basics', 'Regulatory'],
    description: 'Bridge clinical needs with AI technology to revolutionize diagnosis',
    requiredScores: { love: 70, goodAt: 85, worldNeeds: 90, paidFor: 85 },
    tags: ['tech', 'healthcare', 'analytical', 'impact']
  },
  'health-data-analyst': {
    title: 'Healthcare Data Analyst',
    industry: 'Healthcare Analytics',
    salary: '$60k-$95k',
    growth: 'High',
    companies: ['Epic Systems', 'Cerner', 'Optum', 'CVS Health'],
    skills: ['SQL', 'Python', 'Healthcare Data', 'Statistics', 'Tableau'],
    description: 'Transform healthcare data into insights that improve patient care',
    requiredScores: { love: 65, goodAt: 90, worldNeeds: 80, paidFor: 75 },
    tags: ['analytical', 'healthcare', 'data', 'impact']
  },
  'edtech-designer': {
    title: 'Learning Experience Designer',
    industry: 'Education Technology',
    salary: '$55k-$95k',
    growth: 'High',
    companies: ['Coursera', 'Khan Academy', 'Duolingo', 'Udemy'],
    skills: ['Instructional Design', 'UX Design', 'Learning Science', 'Content Creation'],
    description: 'Create engaging educational experiences that transform how people learn',
    requiredScores: { love: 85, goodAt: 75, worldNeeds: 90, paidFor: 65 },
    tags: ['design', 'education', 'creative', 'impact']
  },
  'curriculum-developer': {
    title: 'Tech Curriculum Developer',
    industry: 'Education',
    salary: '$50k-$85k',
    growth: 'Medium',
    companies: ['General Assembly', 'Lambda School', 'Code.org', 'Codecademy'],
    skills: ['Curriculum Design', 'Technical Writing', 'Pedagogy', 'Subject Expertise'],
    description: 'Design educational programs that prepare people for tech careers',
    requiredScores: { love: 80, goodAt: 75, worldNeeds: 85, paidFor: 70 },
    tags: ['education', 'teaching', 'creative', 'impact']
  },
  'sustainability-analyst': {
    title: 'ESG Data Analyst',
    industry: 'Sustainability',
    salary: '$60k-$100k',
    growth: 'Very High',
    companies: ['Watershed', 'Persefoni', 'Sweep', 'Normative'],
    skills: ['Data Analysis', 'ESG Frameworks', 'Carbon Accounting', 'Excel/SQL'],
    description: 'Help companies measure and reduce their environmental impact',
    requiredScores: { love: 70, goodAt: 85, worldNeeds: 95, paidFor: 75 },
    tags: ['analytical', 'climate', 'data', 'impact']
  },
  'climate-product-manager': {
    title: 'Climate Tech Product Manager',
    industry: 'Climate Technology',
    salary: '$85k-$140k',
    growth: 'Very High',
    companies: ['Tesla', 'Rivian', 'Impossible Foods', 'Climeworks'],
    skills: ['Product Management', 'Climate Science', 'Strategy', 'Stakeholder Mgmt'],
    description: 'Build products that accelerate the transition to a sustainable future',
    requiredScores: { love: 80, goodAt: 85, worldNeeds: 95, paidFor: 85 },
    tags: ['product', 'climate', 'leadership', 'impact']
  },
  'social-impact-designer': {
    title: 'Social Impact Product Designer',
    industry: 'Non-Profit Tech',
    salary: '$50k-$85k',
    growth: 'Medium',
    companies: ['Code for America', 'Charity: Water', 'DonorsChoose', 'Kiva'],
    skills: ['Service Design', 'Community Research', 'UX Design', 'Empathy'],
    description: 'Design digital solutions for underserved communities',
    requiredScores: { love: 90, goodAt: 75, worldNeeds: 95, paidFor: 60 },
    tags: ['design', 'social-impact', 'creative', 'community']
  },
  'community-manager': {
    title: 'Impact Community Manager',
    industry: 'Social Enterprise',
    salary: '$45k-$75k',
    growth: 'Medium',
    companies: ['B Corp Certified Companies', 'Social Startups', 'Impact Ventures'],
    skills: ['Community Building', 'Communication', 'Event Planning', 'Social Media'],
    description: 'Build engaged communities around social missions',
    requiredScores: { love: 85, goodAt: 70, worldNeeds: 90, paidFor: 65 },
    tags: ['community', 'social-impact', 'communication', 'people']
  },
  'fullstack-developer': {
    title: 'Full-Stack Software Engineer',
    industry: 'Technology',
    salary: '$75k-$130k',
    growth: 'Very High',
    companies: ['Google', 'Meta', 'Amazon', 'Startups'],
    skills: ['JavaScript', 'React', 'Node.js', 'Databases', 'APIs'],
    description: 'Build web applications that millions of people use daily',
    requiredScores: { love: 85, goodAt: 90, worldNeeds: 60, paidFor: 90 },
    tags: ['tech', 'coding', 'building', 'analytical']
  },
  'ai-engineer': {
    title: 'AI/ML Engineer',
    industry: 'Artificial Intelligence',
    salary: '$95k-$170k',
    growth: 'Very High',
    companies: ['OpenAI', 'Anthropic', 'DeepMind', 'Tech Giants'],
    skills: ['Python', 'TensorFlow', 'PyTorch', 'ML Algorithms', 'Math'],
    description: 'Develop AI systems that push the boundaries of what\'s possible',
    requiredScores: { love: 80, goodAt: 95, worldNeeds: 70, paidFor: 95 },
    tags: ['tech', 'ai', 'analytical', 'cutting-edge']
  },
  'devrel-engineer': {
    title: 'Developer Relations Engineer',
    industry: 'Technology',
    salary: '$80k-$140k',
    growth: 'High',
    companies: ['Stripe', 'Twilio', 'GitHub', 'MongoDB'],
    skills: ['Programming', 'Technical Writing', 'Public Speaking', 'Community'],
    description: 'Help developers succeed by creating tools, content, and community',
    requiredScores: { love: 85, goodAt: 85, worldNeeds: 65, paidFor: 85 },
    tags: ['tech', 'teaching', 'communication', 'community']
  },
  'brand-designer': {
    title: 'Brand & Visual Designer',
    industry: 'Design/Marketing',
    salary: '$55k-$95k',
    growth: 'Medium',
    companies: ['Design Studios', 'Agencies', 'In-house Teams'],
    skills: ['Visual Design', 'Branding', 'Adobe CC', 'Typography', 'Strategy'],
    description: 'Create visual identities that make brands unforgettable',
    requiredScores: { love: 95, goodAt: 85, worldNeeds: 50, paidFor: 75 },
    tags: ['design', 'creative', 'visual', 'branding']
  },
  'ux-researcher': {
    title: 'UX Researcher',
    industry: 'User Research',
    salary: '$70k-$120k',
    growth: 'High',
    companies: ['Tech Companies', 'Design Agencies', 'Consulting Firms'],
    skills: ['User Research', 'Qualitative Analysis', 'Usability Testing', 'Data Analysis'],
    description: 'Uncover user insights that shape better product decisions',
    requiredScores: { love: 80, goodAt: 85, worldNeeds: 70, paidFor: 80 },
    tags: ['research', 'analytical', 'empathy', 'design']
  },
  'product-manager': {
    title: 'Product Manager',
    industry: 'Technology',
    salary: '$85k-$150k',
    growth: 'Very High',
    companies: ['Tech Companies', 'Startups', 'Enterprises'],
    skills: ['Product Strategy', 'Stakeholder Mgmt', 'Data Analysis', 'Communication'],
    description: 'Define product vision and bring innovative solutions to market',
    requiredScores: { love: 75, goodAt: 85, worldNeeds: 70, paidFor: 90 },
    tags: ['product', 'strategy', 'leadership', 'analytical']
  },
  'growth-marketer': {
    title: 'Growth Marketing Manager',
    industry: 'Marketing',
    salary: '$65k-$110k',
    growth: 'High',
    companies: ['Startups', 'Tech Companies', 'Agencies'],
    skills: ['Marketing Analytics', 'A/B Testing', 'SEO/SEM', 'Content Strategy'],
    description: 'Drive user acquisition and retention through data-driven experiments',
    requiredScores: { love: 75, goodAt: 80, worldNeeds: 55, paidFor: 85 },
    tags: ['marketing', 'analytical', 'creative', 'data']
  }
};

export type Profession = typeof PROFESSIONS[keyof typeof PROFESSIONS] & {
  matchScore?: number;
  matchReasons?: string[];
};
