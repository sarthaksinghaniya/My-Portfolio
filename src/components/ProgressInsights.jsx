import React from 'react'
import { profile } from '../data/content'

export default function ProgressInsights() {
  const insights = [
    {
      platform: 'Hackathons',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
        </svg>
      ),
      color: 'from-purple-500 to-pink-500',
      metrics: [
        { label: 'Total Participated', value: '25+', trend: '+13' },
        { label: 'Top Placements', value: '8', trend: '+5' },
        { label: 'International', value: '3', trend: '+2' }
      ],
      link: profile.links.unstop
    },
    {
      platform: 'GitHub',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      color: 'from-gray-600 to-gray-800',
      metrics: [
        { label: 'Public Repos', value: '30', trend: '+15' },
        { label: 'Total Stars', value: '12', trend: '+12' },
        { label: 'Contributions', value: '500+', trend: '+300' }
      ],
      link: profile.links.github
    },
    {
      platform: 'Kaggle',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.825 21.362l-2.902-5.713c1.879-.544 3.262-2.279 3.262-4.323 0-2.485-2.024-4.509-4.509-4.509-2.485 0-4.509 2.024-4.509 4.509 0 2.044 1.383 3.779 3.262 4.323l-2.902 5.713h7.298zM12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10S2 17.514 2 12 6.486 2 12 2z"/>
        </svg>
      ),
      color: 'from-blue-400 to-cyan-500',
      metrics: [
        { label: 'Competitions', value: '0', trend: 'New' },
        { label: 'Notebooks', value: '3', trend: '+3' },
        { label: 'Datasets', value: '32', trend: '+32' }
      ],
      link: profile.links.kaggle
    },
    {
      platform: 'LeetCode',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226a3.007 3.007 0 0 0-.785 1.865v6.517a1.374 1.374 0 0 0 1.374 1.374h9.964a1.374 1.374 0 0 0 1.374-1.374V8.09a3.007 3.007 0 0 0-.785-1.865L14.444.438A1.374 1.374 0 0 0 13.483 0zm2.665 6.829h-2.665V4.064h2.665v2.765zm-4.039 0H9.444V4.064h2.665v2.765z"/>
        </svg>
      ),
      color: 'from-orange-400 to-yellow-500',
      metrics: [
        { label: 'Problems Solved', value: '59', trend: '+59' },
        { label: 'Contest Rating', value: '1450', trend: '+250' },
        { label: 'Streak Days', value: '31', trend: '+31' }
      ],
      link: profile.links.leetcode
    },
    {
      platform: 'LinkedIn',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'from-blue-600 to-blue-700',
      metrics: [
        { label: 'Connections', value: '500+', trend: '+200' },
        { label: 'Skills Endorsed', value: '25+', trend: '+15' },
        { label: 'Certifications', value: '8', trend: '+5' }
      ],
      link: profile.links.linkedin
    }
  ]

  const growthMetrics = [
    { period: '2025', achievements: '12 Hackathons', projects: '15 Repos', skills: '3 Certifications' },
    { period: '2026', achievements: '25+ Hackathons', projects: '30 Repos', skills: '8 Certifications' }
  ]

  return (
    <section id="progress-insights" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-slate-200 to-slate-400 bg-clip-text text-transparent">
          Progress Insights
        </h2>
        <p className="text-center text-slate-400 mb-12 max-w-2xl mx-auto">
          Comprehensive overview of my growth across multiple platforms and competitive programming
        </p>
        
        {/* Platform Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {insights.map((insight, index) => (
            <a
              key={insight.platform}
              href={insight.link}
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-slate-900/50"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${insight.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${insight.color} opacity-90`}>
                    <div className="text-white">
                      {insight.icon}
                    </div>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-slate-700/50 text-slate-300 border border-slate-600/30">
                    Active
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-slate-200 group-hover:to-slate-400 transition-all duration-300">
                  {insight.platform}
                </h3>
                
                <div className="space-y-3">
                  {insight.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="flex items-center justify-between">
                      <span className="text-sm text-slate-400">{metric.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-white">{metric.value}</span>
                        <span className="text-xs px-1.5 py-0.5 rounded bg-green-500/20 text-green-400 border border-green-500/30">
                          +{metric.trend}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Growth Timeline */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-slate-200">Growth Timeline</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {growthMetrics.map((year, index) => (
              <div
                key={year.period}
                className={`relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-6 ${
                  index === 1 ? 'ring-2 ring-violet-500/20 ring-offset-2 ring-offset-slate-900' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-white">{year.period}</h4>
                  {index === 1 && (
                    <span className="text-xs px-2 py-1 rounded-full bg-violet-500/20 text-violet-400 border border-violet-500/30">
                      Current
                    </span>
                  )}
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    <span className="text-sm text-slate-300">{year.achievements}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                    <span className="text-sm text-slate-300">{year.projects}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span className="text-sm text-slate-300">{year.skills}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Problem Categories for LeetCode */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-8 text-slate-200">Technical Strength Areas</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Arrays', 'Dynamic Programming', 'Graphs', 'Trees', 'String', 'Greedy', 'Backtracking', 'Sorting'].map((category) => (
              <div
                key={category}
                className="relative overflow-hidden rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 p-4 text-center transition-all duration-300 hover:scale-105 hover:border-slate-600/50"
              >
                <span className="text-sm font-medium text-slate-300">{category}</span>
                <div className="mt-2 w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full"
                    style={{ width: `${Math.random() * 40 + 60}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
