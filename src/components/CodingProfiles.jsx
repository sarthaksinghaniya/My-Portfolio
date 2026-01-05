import React from 'react'
import { profile } from '../data/content'

export default function CodingProfiles() {
  const platforms = [
    {
      name: 'LeetCode',
      href: profile.links.leetcode,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226a3.007 3.007 0 0 0-.785 1.865v6.517a1.374 1.374 0 0 0 1.374 1.374h9.964a1.374 1.374 0 0 0 1.374-1.374V8.09a3.007 3.007 0 0 0-.785-1.865L14.444.438A1.374 1.374 0 0 0 13.483 0zm2.665 6.829h-2.665V4.064h2.665v2.765zm-4.039 0H9.444V4.064h2.665v2.765z"/>
        </svg>
      ),
      description: 'Solve coding challenges and improve algorithmic skills',
      color: 'from-orange-400 to-yellow-500'
    },
    {
      name: 'Unstop',
      href: profile.links.unstop,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
        </svg>
      ),
      description: 'Participate in competitions and hackathons',
      color: 'from-purple-400 to-pink-500'
    },
    {
      name: 'Kaggle',
      href: profile.links.kaggle,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M18.825 21.362l-2.902-5.713c1.879-.544 3.262-2.279 3.262-4.323 0-2.485-2.024-4.509-4.509-4.509-2.485 0-4.509 2.024-4.509 4.509 0 2.044 1.383 3.779 3.262 4.323l-2.902 5.713h7.298zM12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2z"/>
        </svg>
      ),
      description: 'Data science competitions and machine learning projects',
      color: 'from-blue-400 to-cyan-500'
    }
  ]

  return (
    <section id="coding-profiles" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
          Coding Profiles
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Explore my coding journey and achievements across various platforms
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <a
              key={platform.name}
              href={platform.href}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-slate-900/50"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${platform.color} mb-6`}>
                  <div className="text-white">
                    {platform.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-slate-200 group-hover:to-slate-400 transition-all duration-300">
                  {platform.name}
                </h3>
                
                <p className="text-slate-400 mb-4 leading-relaxed">
                  {platform.description}
                </p>
                
                <div className="flex items-center text-slate-300 group-hover:text-white transition-colors duration-300">
                  <span className="text-sm font-medium">View Profile</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
