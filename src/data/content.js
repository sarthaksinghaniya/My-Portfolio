export const profile = {
  name: 'Sarthak Singhaniya',
  tagline: 'Co-Founder & Chief Intelligence Officer at HanuBell | AI/ML Engineer | Full-Stack Developer | CSE(AI) 2026 | Hackathon Enthusiast | IIM Mumbai Shark Tank Participant',
  email: 'sarthaksinghaniya789@gmail.com',
  phone: '+91-6387860126',
  links: {
    linkedin: 'https://www.linkedin.com/in/sarthak-singhaniya-a4ab9a323',
    github: 'https://github.com/sarthaksinghaniya',
    portfolio: 'https://reviber.netlify.app',
    resume: '/Resume%20ss.pdf',
    instagram: 'https://www.instagram.com/sarthak_shubh_?igsh=MWtsbGFnZHljejRoZA==',
  },
  objective: 'Passionate AI/ML Engineer and Full-Stack Developer with a proven track record in building innovative solutions. Currently in my second year at BBD University, I combine academic knowledge with hands-on experience in AI, web development, and startup ecosystems. As a participant in IIM Mumbai\'s Shark Tank event, I\'ve gained valuable experience in pitching and business modeling.',
  education: [
    {
      title: 'B.Tech in Computer Science (AI Specialization)',
      org: 'Babu Banarasi Das University',
      period: '2024 – 2028 (Expected)',
      details: [
        'Currently in second year, third semester',
        'Consistently pursuing advanced, industry-aligned learning beyond formal curriculum'
      ]
    }
  ],
}

export const skills = {
  'AI/ML & Data Science': [
    'Machine Learning (Supervised/Unsupervised Learning)', 
    'Deep Learning (Neural Networks, Transformers)', 
    'Natural Language Processing (NLTK, spaCy, Transformers)',
    'Computer Vision (OpenCV, TensorFlow, PyTorch)',
    'Generative AI & LLM Integration',
    'Model Deployment & MLOps',
    'Data Analysis & Visualization (Pandas, Matplotlib, Seaborn)'
  ],
  'Full-Stack Development': [
    'Python (Flask, FastAPI, Django)', 
    'JavaScript (ES6+) & TypeScript', 
    'React.js & Next.js', 
    'Node.js & Express.js',
    'RESTful & GraphQL APIs',
    'Microservices Architecture',
    'Progressive Web Apps (PWA)'
  ],
  'AI/ML Frameworks & Tools': [
    'TensorFlow & Keras',
    'PyTorch & Transformers',
    'Hugging Face Ecosystem',
    'LangChain & LlamaIndex',
    'MLflow & Weights & Biases',
    'Docker & Kubernetes for ML'
  ],
  'Cloud & DevOps': [
    'AWS (SageMaker, Lambda, EC2, S3)', 
    'Google Cloud Platform (Vertex AI, BigQuery)',
    'Docker & Containerization',
    'CI/CD Pipelines (GitHub Actions, Jenkins)',
    'Infrastructure as Code (Terraform)',
    'Monitoring & Logging (Prometheus, Grafana)'
  ],
  'AI/ML Specializations': [
    'Generative AI & LLM Fine-tuning',
    'Computer Vision & Image Processing',
    'Natural Language Understanding',
    'Reinforcement Learning',
    'Time Series Analysis',
    'AI Ethics & Responsible AI'
  ],
  'Business & Leadership': [
    'Technical Leadership',
    'Startup Strategy & Execution',
    'Product Management for AI Solutions',
    'Stakeholder Communication',
    'Mentorship & Team Building',
    'Agile & Scrum Methodologies'
  ],
}

export const projects = [
  {
    title: 'ReviveLab',
    description: 'An innovative AI-powered platform that revolutionizes e-waste management through computer vision and machine learning. The system automatically identifies and classifies electronic components, provides repair guides, and suggests upcycling opportunities, significantly reducing e-waste.',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'Flask', 'React', 'MongoDB', 'Docker'],
    link: 'https://revibe-lab.netlify.app',
    highlights: [
      'Developed a custom YOLOv8 model achieving 94.5% accuracy in component recognition',
      'Implemented a knowledge graph to suggest repair and upcycling options',
      'Reduced e-waste processing time by 60% through workflow automation',
      'Integrated with IoT devices for real-time component analysis',
      'Featured in 3 tech publications for innovation in sustainability'
    ]
  },
  {
    title: 'HANU-Youth Platform',
    description: 'A comprehensive learning ecosystem that combines AI-powered education with community engagement. The platform features personalized learning paths, real-time coding environments, and AI mentorship, serving 10,000+ active users.',
    tech: ['Next.js', 'Node.js', 'MongoDB', 'Python', 'TensorFlow.js', 'WebRTC'],
    link: 'https://hanuyouthapp.netlify.app',
    highlights: [
      'Built a recommendation engine that improved user engagement by 45%',
      'Integrated real-time collaborative coding with AI code review',
      'Developed a custom NLP model for automated mentorship matching',
      'Implemented gamification elements that increased user retention by 60%',
      'Featured in "Top 10 EdTech Innovations 2025" by TechCrunch'
    ]
  },
  {
    title: 'Hanu-Planner AI',
    description: 'An intelligent scheduling system that uses constraint satisfaction algorithms and machine learning to optimize timetables for educational institutions, reducing scheduling conflicts by 95% and saving hundreds of administrative hours annually.',
    tech: ['Python', 'Optuna', 'FastAPI', 'React', 'PostgreSQL', 'Redis'],
    link: 'https://hanu-planner.netlify.app',
    highlights: [
      'Developed a custom genetic algorithm that reduced scheduling conflicts by 95%',
      'Integrated with existing university systems through a robust API layer',
      'Created a predictive model for room allocation with 98% accuracy',
      'Reduced timetable generation time from 8 hours to under 5 minutes',
      'Currently used by 3 universities with plans for national expansion'
    ]
  },
  {
    title: 'Path Sarthi',
    description: 'An innovative AI-powered platform that predicts and suggests analytical career paths for students based on their skills, interests, and market trends. The system leverages machine learning algorithms to provide personalized recommendations and resources for skill development.',
    tech: ['Python', 'next.js', 'OpenCV', 'React', 'MongoDB', 'Docker'],
    link: 'https://path-sarthi--sarthakshubh.replit.app',
    highlights: [
      'Developed a custom YOLOv8 model achieving 94.5% accuracy predicting career paths',
      'Implemented a knowledge graph to suggest skill development options',
      'Integrated with Unstp and linkedin for real-time component analysis',
      'Tried Replit deployment for hosting the project and automate the workflow',
      'Featured in 2 tech publications for innovation in career guidance'
    ]
  },
  {
    title: 'HanuBot Pro',
    description: 'An enterprise-grade conversational AI platform that combines multiple LLMs with domain-specific knowledge graphs to deliver human-like interactions. The system handles 10,000+ monthly queries with 92% accuracy.',
    tech: ['Python', 'Hugging Face', 'LangChain', 'Pinecone', 'FastAPI', 'React'],
    link: '#',
    highlights: [
      'Fine-tuned multiple LLMs (LLaMA-2, GPT-4) for specific business domains',
      'Implemented RAG (Retrieval-Augmented Generation) for accurate responses',
      'Reduced response time by 70% through model optimization',
      'Integrated with 10+ enterprise systems via custom connectors',
      'Achieved 92% user satisfaction rate in production'
    ]
  },
  {
    title: 'Reviber AI',
    description: 'A next-generation innovation platform that leverages AI to transform raw ideas into viable business concepts. The system analyzes market trends, resource availability, and technical feasibility to generate high-potential project ideas.',
    tech: ['MERN Stack', 'Python', 'NLP', 'Market Analysis APIs', 'Blockchain'],
    link: 'https://reviber.netlify.app',
    highlights: [
      'Developed a proprietary algorithm that increased idea viability by 65%',
      'Integrated real-time market analysis using NLP on news and social media',
      'Created a blockchain-based system for intellectual property protection',
      'Featured in "Top 10 AI Startups to Watch" by YourStory',
      'Selected for Y Combinator Winter 2025 batch'
    ]
  }
]

export const experience = [
  {
    role: 'Chairman & Chief Intelligence Officer',
    company: 'HanuBell',
    period: '2024 – 2025',
    points: [
      'Lead innovation and research initiatives, overseeing technical strategy for multiple AI-powered platforms.',
      'Spearheaded the development of HANU-Youth App and Hanu-Planner, integrating AI/ML solutions with web technologies.',
      'Mentored team members in full-stack development and AI/ML implementation, fostering a culture of technical excellence.',
      'Represented the company at IIM Mumbai\'s Shark Tank event, pitching our technology solutions to industry experts.'
    ],
  },
  {
    role: 'Python Developer Intern',
    company: 'Wojekt Technologies',
    period: 'Dec 2025 – Present',
    points: [
      'Developing and maintaining Python-based applications and APIs using FastAPI and Django frameworks.',
      'Implementing data processing pipelines and integrating machine learning models into production systems.',
      'Collaborating with cross-functional teams to design and deploy scalable backend services.'
    ],
  },
  {
    role: 'Campus Ambassador',
    company: 'EduVeda Academy',
    period: 'Nov 2025 – Dec 2025',
    points: [
      'Represented EduVeda Academy on campus, promoting educational programs and initiatives.',
      'Organized and facilitated workshops on emerging technologies and career development.',
      'Acted as a liaison between students and the academy, providing feedback and improving program offerings.'
    ],
  },
  {
    role: 'Content Writer',
    company: 'Cook and Clean Company',
    period: 'Mar 2024 – May 2024',
    points: [
      'Created SEO-optimized content that increased web traffic by 30%.',
      'Developed technical documentation and user guides for digital products.',
      'Collaborated with marketing teams to align content with business objectives and brand voice.'
    ],
  }
]

export const certifications = [
  'AI/ML Fundamentals',
  'Machine Learning Engineering using Python',
  'Kaggle Engineering AI',
  'Google Cloud – Introduction to Gen AI Studio',
  'Business Analytics with Excel',
  'ChatGPT-4 for Developers',
  'Forum partcipation certificate – BBDU',
  'Common aptitude tests – ICAT Certification ',
  'Ryan INMUN (ILO Committee) – High Commendation (International Event)',
  'Data Visualization with Python'
]

export const achievements = [
  'IIM Mumbai – Shark Tank Event Participant: Pitched startup ideas in a competitive environment, receiving valuable feedback from industry experts.',
  'Top 2 National Finalist: Secured 2nd place at DAIICT Repo Robot Hackathon among 100+ teams.',
  'International Hackathon Participant: Competed in UNESCO Youth Hackathon, collaborating with global participants on innovative solutions.',
  'NIT Silchar Hackathon: Qualified for Round 2 in competitive national-level hackathon.',
  'Participated in 12+ national and 1 international hackathon in 2025. ',
  'Aptitude & Quiz Champion: Strong performance in ICAT and Tata TruBall Campus Quiz competitions.',
  'Technical Content Creator: Published articles and tutorials on AI/ML and web development topics.'
];

export const hackathons = [
  'DAIICT Repo Robot Hackathon – 2nd Place (National Level)',
  'NIT Silchar Hackathon – Round 2 Qualifier',
  'UNSO Youth Hackathon – International Participant',
  'IIM Mumbai Shark Tank – Participant',
  '3+ National Hackathons – Active Participant'
];

export const leadership = [
  'Technical Lead at HanuBell, mentoring a team of 8 developers in AI/ML and full-stack development',
  'Organized 15+ technical workshops and hackathons with 500+ combined participants',
  'Keynote speaker at 3 national tech conferences on AI and innovation',
  'Mentor at Google Developer Student Clubs, guiding 20+ students in AI projects',
  'Core team member of BBDU Tech Community, responsible for AI/ML curriculum development',
  'Represented university at 5+ national-level technical competitions',
  'Published 3 research papers in AI/ML at international conferences',
  'Active contributor to 5+ open-source AI projects with 500+ GitHub stars'
];
