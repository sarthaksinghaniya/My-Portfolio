import { profile, projects, skills, experience, certifications, achievements } from './content';

// Enhanced AI Knowledge Base with advanced features and comprehensive data
export const kb = {
  // Core Profile Information
  profile: {
    name: profile.name,
    firstName: profile.name.split(' ')[0],
    title: profile.tagline,
    bio: profile.bio || `${profile.name.split(' ')[0]} is a ${profile.tagline}`,
    location: profile.location || '',
    availability: 'Available for new opportunities',
    timezone: 'IST (UTC+5:30)',
  },

  // Enhanced Contact Information
  contact: {
    email: profile.email || '',
    phone: profile.phone || '',
    social: {
      github: profile.links?.github || '',
      linkedin: profile.links?.linkedin || '',
      portfolio: profile.links?.portfolio || '',
      instagram: profile.links?.instagram || '',
      leetcode: profile.links?.leetcode || '',
      unstop: profile.links?.unstop || '',
      kaggle: profile.links?.kaggle || '',
    },
    resume: profile.links?.resume || '',
  },

  // Advanced Skills Categorization
  skills: {
    technical: {
      ai_ml: skills.filter(s => s.type === 'AI/ML').map(s => s.name),
      fullstack: skills.filter(s => ['Frontend', 'Backend', 'Databases'].includes(s.type)).map(s => s.name),
      languages: skills.filter(s => s.type === 'Languages').map(s => s.name),
      devops: skills.filter(s => s.type === 'DevOps').map(s => s.name),
    },
    proficiency: (() => {
      const expert = skills.filter(s => s.rarity === 'Legendary').map(s => s.name);
      const advanced = skills.filter(s => s.rarity === 'Epic').map(s => s.name);
      return { expert, advanced };
    })(),
  },

  // Enhanced Projects with Metrics and Impact
  projects: projects.map(p => ({
    title: p.title,
    summary: p.description,
    stack: p.tech,
    link: p.link,
    role: 'Lead Developer',
    period: '',
    impact: p.highlights || [],
    metrics: [],
    challenges: [],
    repository: p.link || '',
    demo: p.link || '',
    isFeatured: ['ReviveLab', 'HANU-Youth Platform', 'Hospital Pulse AI'].includes(p.title),
  })).sort((a, b) => (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0)),

  // Detailed Professional Experience
  experience: (experience || []).map(e => ({
    company: e.company || '',
    role: e.role,
    period: e.period,
    location: e.location || '',
    type: e.type || 'Full-time',
    description: e.description || '',
    responsibilities: e.points || [],
    achievements: e.achievements || [],
    technologies: e.technologies || [],
    teamSize: e.teamSize || 'Solo',
  })),

  // Enhanced Certifications with Validation
  certifications: (certifications || []).map(c => ({
    name: c.name,
    issuer: c.issuer || '',
    issueDate: c.issueDate || '',
    expiryDate: c.expiryDate || 'No Expiry',
    credentialId: c.credentialId || '',
    credentialUrl: c.credentialUrl || '',
    skills: c.skills || [],
    isVerified: c.isVerified || false,
  })),

  // Detailed Achievements
  achievements: (achievements || []).map(a => ({
    title: a.title,
    issuer: a.issuer || '',
    date: a.date || '',
    description: a.description || '',
    impact: a.impact || '',
    link: a.link || '',
    isFeatured: a.isFeatured || false,
  })),

  // AI Twin Capabilities
  capabilities: {
    technical: {
      codeAnalysis: true,
      projectRecommendations: true,
      skillAssessment: true,
      techTrends: true,
    },
    professional: {
      resumeReview: true,
      interviewPrep: true,
      careerGuidance: true,
      networkingTips: true,
    },
    learning: {
      resourceRecommendations: true,
      learningPath: true,
      skillGapAnalysis: true,
    },
  },

  // Navigation Structure
  navigation: {
    main: [
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Projects', href: '#projects' },
      { name: 'Experience', href: '#experience' },
      { name: 'Certifications', href: '#certifications' },
      { name: 'Achievements', href: '#achievements' },
      { name: 'Coding Profiles', href: '#coding-profiles' },
      { name: 'Contact', href: '#contact' },
    ],
    social: [
      { name: 'GitHub', href: profile.links?.github || '#', icon: 'github' },
      { name: 'LinkedIn', href: profile.links?.linkedin || '#', icon: 'linkedin' },
      { name: 'LeetCode', href: profile.links?.leetcode || '#', icon: 'code' },
      { name: 'Kaggle', href: profile.links?.kaggle || '#', icon: 'chart' },
      { name: 'Unstop', href: profile.links?.unstop || '#', icon: 'trophy' },
      { name: 'Email', href: `mailto:${profile.email}`, icon: 'email' },
    ],
  },

  // AI Twin Personality & Behavior
  personality: {
    tone: 'professional',
    communicationStyle: 'clear and concise',
    expertiseLevel: 'expert',
    responseSpeed: 'fast',
    language: 'English',
  },

  // Contextual Awareness
  context: {
    lastUpdated: new Date().toISOString(),
    version: '2.0.0',
    dataSources: ['LinkedIn', 'GitHub', 'Portfolio', 'Resume'],
  },

  // Helper Methods
  utils: {
    getPrimarySkills: () => skills.filter(s => ['Languages', 'AI/ML'].includes(s.type)).map(s => s.name).slice(0, 12),
    
    getExperienceYears: () => {
      if (!experience?.length) return '2+ years';
      return '2+ years of experience';
    },
    
    getTopProjects: (count = 3) => 
      [...(projects || [])]
        .filter(p => ['ReviveLab', 'HANU-Youth Platform', 'Hospital Pulse AI'].includes(p.title))
        .slice(0, count)
        .map(p => ({
          title: p.title,
          description: p.description,
          technologies: p.tech || [],
          link: p.link,
        })),
    
    getAllLinks: () => ({
      linkedin: profile.links?.linkedin || '',
      github: profile.links?.github || '',
      portfolio: profile.links?.portfolio || '',
      instagram: profile.links?.instagram || '',
      leetcode: profile.links?.leetcode || '',
      unstop: profile.links?.unstop || '',
      kaggle: profile.links?.kaggle || '',
      email: profile.email || '',
      phone: profile.phone || '',
      resume: profile.links?.resume || '',
    }),
  },
};
