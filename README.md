# Sarthak Singhaniya — Portfolio

A modern, feature-rich portfolio website with real-time data integration, interactive 3D background, AI assistant, and comprehensive progress tracking.

## 🚀 Live Demo
**https://sarthaksinghaniya.netlify.app**

## ✨ Key Features

### 🎯 Core Portfolio Sections
- **Hero Section** with social links (LinkedIn, Instagram) and brand-colored buttons
- **About** with professional bio and introduction
- **Skills** showcasing AI/ML, Full-Stack, and Business expertise
- **Projects** with smart search and detailed project cards
- **Top GitHub Repositories** with real-time star counts and metrics
- **Experience** highlighting professional journey
- **Certifications** and achievements
- **Progress Insights** with real-time platform metrics
- **Coding Profiles** for LeetCode, Kaggle, and Unstop
- **Contact** section with direct links

### 🤖 AI Assistant (Sarthak's AI Twin)
- **Smart Chat Widget** with contextual responses
- **Real-time Metrics**: LeetCode (59 solved, 31-day streak), Kaggle (32 datasets), GitHub (30 repos, 12 stars)
- **Quick Actions**: Projects, GitHub, Skills, Experience, Insights, Coding Profiles, Resume, Contact
- **Platform Integration**: Direct links to all social and coding platforms
- **Intelligent Responses**: Context-aware answers about skills, experience, and achievements

### 📊 Real-Time Data Integration
- **GitHub**: 30 repositories, 12 total stars, real-time repository data
- **LeetCode**: 59 problems solved, 31-day streak, contest rating
- **Kaggle**: 32 datasets, 3 notebooks, competition participation
- **LinkedIn**: 500+ connections, 25+ skills endorsed, 8 certifications
- **Unstop**: 25+ hackathons participated, top placements

### 🎨 Visual Enhancements
- **Enhanced 3D Background**: 10,000+ particles across 3 layers
- **Glassmorphism Design**: Modern, professional UI elements
- **Smooth Animations**: Framer Motion section reveals and micro-interactions
- **Responsive Layout**: Optimized for all screen sizes
- **Accessibility**: Full keyboard navigation and screen reader support

## 🛠 Tech Stack

### Frontend
- **React 18** with modern hooks and patterns
- **Vite** for lightning-fast development and building
- **Tailwind CSS** for utility-first styling
- **Framer Motion** for animations and transitions

### 3D Graphics
- **Three.js** via `@react-three/fiber`
- **@react-three/drei` for enhanced 3D utilities
- **Optimized particle system** with 10,000+ particles

### Development Tools
- **PostCSS** for CSS processing
- **ESLint** for code quality
- **Netlify** for deployment and hosting

## 📁 Project Structure

```
portfolio-sarthak/
├─ public/
│  ├─ icons/profile.jpeg
│  ├─ Sarthak Singhaniya - Copy.pdf
│  ├─ robots.txt
│  ├─ sitemap.xml
│  └─ favicon.ico
├─ src/
│  ├─ components/
│  │  ├─ Hero.jsx
│  │  ├─ About.jsx
│  │  ├─ Skills.jsx
│  │  ├─ Projects.jsx
│  │  ├─ GitHubRepos.jsx          # NEW: Real-time GitHub repositories
│  │  ├─ Experience.jsx
│  │  ├─ Certifications.jsx
│  │  ├─ Achievements.jsx
│  │  ├─ ProgressInsights.jsx    # NEW: Real-time platform metrics
│  │  ├─ CodingProfiles.jsx
│  │  ├─ ChatWidget.jsx          # ENHANCED: AI Twin with real-time data
│  │  ├─ Navbar.jsx              # UPDATED: New navigation links
│  │  ├─ ThreeBackground.jsx     # ENHANCED: 10,000+ particles
│  │  └─ ...
│  ├─ data/
│  │  ├─ content.js              # UPDATED: 25+ hackathons, new achievements
│  │  └─ ai_knowledge.js         # ENHANCED: Real-time platform integration
│  ├─ styles/index.css
│  └─ App.jsx                    # UPDATED: New sections integrated
├─ netlify.toml
├─ tailwind.config.js
├─ postcss.config.js
└── package.json
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/sarthaksinghaniya/portfolio-sarthak.git
cd portfolio-sarthak

# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:5173 to view the portfolio.

### Build for Production
```bash
npm run build
npm run preview
```

## 📊 Real-Time Data Features

### Platform Integrations
- **GitHub API**: Real-time repository data, star counts, and statistics
- **LeetCode Integration**: Problem solving progress, contest ratings, streak tracking
- **Kaggle API**: Dataset counts, notebook statistics, competition history
- **LinkedIn Profile**: Connection counts, skill endorsements, certifications
- **Unstop Platform**: Hackathon participation, competition rankings

### Progress Tracking
- **25+ Hackathons**: National and international participation
- **GitHub Growth**: 30 repositories, 12 stars, active contributions
- **Coding Progress**: LeetCode 59 problems solved, 31-day streak
- **Data Science**: Kaggle 32 datasets, 3 notebooks published
- **Professional Network**: 500+ LinkedIn connections, 8 certifications

## 🎨 Customization

### Updating Content
Edit `src/data/content.js`:
```javascript
export const profile = {
  name: 'Your Name',
  tagline: 'Your professional tagline',
  // ... other profile details
}

export const projects = [
  {
    title: 'Project Name',
    description: 'Project description',
    tech: ['React', 'Node.js'],
    link: 'https://github.com/username/repo'
  }
]
```

### AI Twin Configuration
Edit `src/data/ai_knowledge.js` to customize AI responses and knowledge base.

### Styling
- **Tailwind Config**: `tailwind.config.js` for theme customization
- **Global Styles**: `src/styles/index.css` for custom CSS
- **Component Styles**: Inline Tailwind classes in components

## 🔧 Advanced Features

### Enhanced 3D Background
- **10,000+ Particles**: 3-layer particle system for depth
- **Performance Optimized**: Efficient rendering with reduced motion support
- **Interactive**: Mouse parallax and scroll-based animations
- **Responsive**: Adapts to device capabilities

### Smart Navigation
- **Section Highlighting**: Active section indicator
- **Smooth Scrolling**: Animated navigation between sections
- **Mobile Responsive**: Hamburger menu for mobile devices
- **Accessibility**: Full keyboard navigation support

### AI Chat Widget
- **Contextual Responses**: Smart answers based on user queries
- **Quick Actions**: One-click access to key sections
- **Real-time Data**: Live platform statistics and metrics
- **Platform Links**: Direct integration with coding platforms

## 📱 Performance & Accessibility

### Performance Optimizations
- **Lazy Loading**: Components load as needed
- **Memoization**: Prevents unnecessary re-renders
- **Optimized 3D**: Efficient particle rendering
- **Minimal Bundle**: Optimized build size

### Accessibility Features
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Full keyboard accessibility
- **Reduced Motion**: Respects user preferences
- **Color Contrast**: WCAG compliant color schemes
- **Focus Management**: Proper focus indicators

## 🚀 Deployment

### Netlify (Recommended)
```bash
# Build and deploy
npm run build
npx netlify deploy --dir=dist --prod --message "Portfolio deploy"
```

### Other Platforms
- **Vercel**: Connect repository and deploy
- **GitHub Pages**: Use `gh-pages` branch
- **AWS S3**: Static site hosting

## 📈 SEO & Analytics

### SEO Features
- **Meta Tags**: Optimized title and description
- **Open Graph**: Social media sharing
- **Sitemap**: Automatic sitemap generation
- **Robots.txt**: Search engine optimization

### Analytics Integration
Add your analytics script to `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

## 🤝 Contributing

### Development Workflow
1. Fork the repository
2. Create feature branch: `git checkout -b feature-name`
3. Make changes and test
4. Commit changes: `git commit -m "Add feature description"`
5. Push to branch: `git push origin feature-name`
6. Submit pull request

### Code Style
- Use ESLint configuration
- Follow React best practices
- Maintain accessibility standards
- Test on multiple devices

## 🐛 Troubleshooting

### Common Issues
- **Build Errors**: Check Node.js version and clear cache
- **3D Performance**: Disable on low-end devices
- **Font Loading**: Ensure proper font file paths
- **API Limits**: Handle rate limiting gracefully

### Debug Mode
Enable debug mode in `src/components/ThreeBackground.jsx`:
```javascript
const DEBUG = true; // Enable particle debugging
```

## 📞 Support & Contact

### Get Help
- **GitHub Issues**: Report bugs and request features
- **Email**: sarthaksinghaniya789@gmail.com
- **LinkedIn**: [linkedin.com/in/sarthak-singhaniya-a4ab9a323](https://linkedin.com/in/sarthak-singhaniya-a4ab9a323)

### Portfolio Links
- **Live Site**: https://sarthaksinghaniya.netlify.app
- **GitHub**: https://github.com/sarthaksinghaniya
- **LeetCode**: https://leetcode.com/u/FYCfvXYnxf/
- **Kaggle**: https://www.kaggle.com/singhaniyasarthak
- **Unstop**: https://unstop.com/u/sarthsin39721

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**👨‍💻 Maintained by Sarthak Singhaniya**

*AI/ML Engineer & Full-Stack Developer | Founder at TechNeekX | 25+ Hackathons Participant*

---

📅 **Last Updated**: January 2026  
🔄 **Version**: 2.0 with Real-Time Data Integration  
⭐ **Features**: AI Assistant, 10K+ Particles, Live Platform Metrics
