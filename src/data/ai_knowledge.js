import { profile, projects, skills, experience, certifications, achievements } from './content'

// Build a concise, chat-friendly knowledge object from existing site data
export const kb = {
  bio: `${profile.name.split(' ')[0]} is a ${profile.tagline}`,
  links: {
    github: profile.links?.github || '',
    linkedin: profile.links?.linkedin || '',
    portfolio: profile.links?.portfolio || '',
    email: profile.email || '',
    resume: profile.links?.resume || '', // optional
  },
  stack: {
    primary: [
      ...(skills['Web Development'] || []),
      ...(skills['Programming & Frameworks'] || []),
      ...(skills['AI/ML & Data Science'] || []),
    ].slice(0, 8),
    tools: skills['Tools & Platforms'] || [],
  },
  projects: projects.map(p => ({
    title: p.title,
    summary: p.description,
    stack: p.tech,
    link: p.link,
  })),
  experience: (experience || []).map(e => ({
    role: e.role,
    period: e.period,
    impact: e.points?.slice(0, 2) || [],
  })),
  certifications: certifications || [],
  achievements: achievements || [],
  nav: { about: 'about', skills: 'skills', projects: 'projects', experience: 'experience', achievements: 'achievements', certifications: 'certifications', contact: 'contact' },
}
