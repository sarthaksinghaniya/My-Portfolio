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
    },
    {
      name: 'Google Developer',
      href: profile.links.googledev,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
      ),
      description: 'Google Developer profile and contributions',
      color: 'from-green-400 to-blue-500'
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
