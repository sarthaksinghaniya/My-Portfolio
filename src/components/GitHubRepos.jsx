import React from 'react'
import { profile } from '../data/content'

export default function GitHubRepos() {
  const repositories = [
    {
      name: 'HANU-AI',
      description: 'Enterprise-grade conversational AI platform combining multiple LLMs with domain-specific knowledge graphs',
      tech: ['Python', 'Hugging Face', 'LangChain', 'Pinecone', 'FastAPI', 'React'],
      link: 'https://github.com/sarthaksinghaniya/HANU-AI',
      stars: '5',
      forks: '2',
      language: 'Python'
    },
    {
      name: 'ReviveLab',
      description: 'AI-powered e-waste management platform using computer vision and machine learning for component classification',
      tech: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'React', 'MongoDB'],
      link: 'https://github.com/sarthaksinghaniya/ReviveLab',
      stars: '3',
      forks: '1',
      language: 'Python'
    },
    {
      name: 'Hospital-Pulse-AI',
      description: 'Healthcare stress forecasting system predicting operational stress and recommending preventive actions',
      tech: ['Python', 'TensorFlow', 'Scikit-learn', 'React', 'Node.js', 'MongoDB'],
      link: 'https://github.com/ByteQuest-2025/GFGBQ-Team-hopx',
      stars: '2',
      forks: '1',
      language: 'Python'
    },
    {
      name: 'Team-TechNeekX',
      description: 'Professional team portfolio website showcasing collective expertise and team collaboration features',
      tech: ['React', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Netlify'],
      link: 'https://github.com/sarthaksinghaniya/Team-TechNeekX',
      stars: '1',
      forks: '0',
      language: 'JavaScript'
    },
    {
      name: 'Teddy_Day_Project',
      description: 'A creative Teddy Day celebration project featuring interactive web experiences and engaging animations for special occasions',
      tech: ['React', 'JavaScript', 'CSS3', 'HTML5', 'Web Animations', 'Responsive Design'],
      link: 'https://github.com/sarthaksinghaniya/Teddy_Day_Project',
      stars: '0',
      forks: '0',
      language: 'JavaScript'
    },
    {
      name: 'Computer_Vision',
      description: 'Comprehensive computer vision learning journey covering image processing, CNNs, object detection, and real-world CV applications',
      tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'PIL', 'NumPy', 'Matplotlib'],
      link: 'https://github.com/sarthaksinghaniya/Computer_Vision-',
      stars: '1',
      forks: '0',
      language: 'Python'
    }
  ]

  return (
    <section id="github-repos" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
          Top GitHub Repositories
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Explore my most impactful open-source projects with active community engagement
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repositories.map((repo, index) => (
            <a
              key={repo.name}
              href={repo.link}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-slate-900/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-violet-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-slate-200 group-hover:to-slate-400 transition-all duration-300">
                    {repo.name}
                  </h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-slate-700/50 text-slate-300 border border-slate-600/30">
                    {repo.language}
                  </span>
                </div>
                
                <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                  {repo.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {repo.tech.slice(0, 3).map((tech, techIndex) => (
                    <span key={techIndex} className="text-xs px-2 py-1 rounded bg-slate-700/30 text-slate-300 border border-slate-600/20">
                      {tech}
                    </span>
                  ))}
                  {repo.tech.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded bg-slate-700/30 text-slate-300 border border-slate-600/20">
                      +{repo.tech.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                      <span>{repo.stars}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                      <span>{repo.forks}</span>
                    </div>
                  </div>
                  <div className="flex items-center text-slate-300 group-hover:text-white transition-colors">
                    <span>View Repository</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-slate-700 to-slate-600 text-white hover:from-slate-600 hover:to-slate-500 transition-all duration-300 border border-slate-500/30"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>View All Repositories</span>
          </a>
        </div>
      </div>
    </section>
  )
}
