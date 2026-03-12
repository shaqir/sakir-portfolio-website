/*
 * ═══════════════════════════════════════════════════════════════
 *  SITE DATA — Single source of truth for all portfolio content
 *  Edit this file to customize your entire portfolio.
 * ═══════════════════════════════════════════════════════════════
 */

export const siteConfig = {
  name: 'Sakir Saiyed',
  title: 'AI Developer and Senior Mobile Developer',
  tagline: 'Building AI Powered intelligent mobile and web apps.',
  location: 'Calgary, Alberta, Canada',
  availability: 'Open to opportunities',
  resumeUrl: '/resume.pdf',
  website: 'https://sakiralisaiyed.com',
}

export const socialLinks = {
  email: 'sakirsaiyed29@gmail.com',
  linkedin: 'https://linkedin.com/in/sakirali-saiyed-57387762',
  github: 'https://github.com/shaqir',
  medium: 'https://medium.com/@sakirsaiyed29',
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
]

export const heroStats = [
  { number: '10+', label: 'Years Experience' },
  { number: '15+', label: 'Products Shipped' },
  { number: '5+', label: 'Industries Served' },
]

export const aboutText = [
  `Over the past decade, I've built and shipped software that people depend on daily — from patient-facing healthcare apps to real-time financial trading tools and IoT device monitors. My work sits at the intersection of mobile engineering, clean architecture, and applied AI.`,
  `I started with Java before going deep into the Apple ecosystem with Swift and UIKit. Today, I architect modular iOS applications using SwiftUI and modern concurrency, while also building cross-platform solutions with Flutter for teams that need to move fast.`,
  `Most recently, I engineered an AI-powered emergency triage system — a production-grade ML pipeline built end-to-end for a clinical environment where precision matters most. This project captures what I care about: using technology to solve real, high-stakes problems.`,
  `Currently deepening my expertise in predictive analytics, responsible AI, and human-centred design at SAIT Calgary. I bring the same rigor to AI that I've always brought to mobile: clean code, thoughtful architecture, and a relentless focus on the end user.`,
]

export const aboutHighlights = [
  {
    icon: 'layers',
    title: 'Architecture-First Mindset',
    description:
      'Clean Architecture, MVVM, and modular design patterns that scale with your team and your product.',
  },
  {
    icon: 'brain',
    title: 'AI + Mobile Convergence',
    description:
      'Building end-to-end ML pipelines and integrating CoreML models into production mobile applications.',
  },
  {
    icon: 'heart-pulse',
    title: 'Domain Expertise',
    description:
      'Deep experience in healthcare, fintech, energy, and e-commerce — industries where reliability is non-negotiable.',
  },
  {
    icon: 'rocket',
    title: 'Whiteboard to App Store',
    description: 'Full ownership from concept through architecture, development, and release — 15+ products shipped.',
  },
]

export const skillCategories = [
  {
    icon: 'smartphone',
    title: 'Mobile Development',
    skills: [
      { name: 'Swift', primary: true },
      { name: 'SwiftUI', primary: true },
      { name: 'UIKit', primary: true },
      { name: 'Flutter' },
      { name: 'Dart' },
      { name: 'Combine' },
      { name: 'Async/Await' },
      { name: 'CoreData' },
      { name: 'CoreBluetooth' },
    ],
  },
  {
    icon: 'brain',
    title: 'AI / ML / Data',
    skills: [
      { name: 'Python', primary: true },
      { name: 'scikit-learn', primary: true },
      { name: 'CoreML', primary: true },
      { name: 'Pandas' },
      { name: 'SQL' },
      { name: 'Data Preprocessing' },
      { name: 'Predictive Analytics' },
      { name: 'Model Evaluation' },
    ],
  },
  {
    icon: 'blocks',
    title: 'Architecture & Patterns',
    skills: [
      { name: 'Clean Architecture', primary: true },
      { name: 'MVVM', primary: true },
      { name: 'MVC' },
      { name: 'VIPER' },
      { name: 'Modular Design' },
      { name: 'Protocol-Oriented' },
      { name: 'Dependency Injection' },
    ],
  },
  {
    icon: 'wrench',
    title: 'Tools & Infrastructure',
    skills: [
      { name: 'REST APIs' },
      { name: 'BLE' },
      { name: 'Firebase' },
      { name: 'CI/CD' },
      { name: 'Xcode' },
      { name: 'Instruments' },
      { name: 'VS Code' },
      { name: 'Git' },
      { name: 'TestFlight' },
    ],
  },
  {
    icon: 'code',
    title: 'Languages',
    skills: [
      { name: 'Swift', primary: true },
      { name: 'Python', primary: true },
      { name: 'Dart' },
      { name: 'JavaScript' },
      { name: 'Java' },
      { name: 'SQL' },
      { name: 'Objective-C' },
    ],
  },
  {
    icon: 'target',
    title: 'Leadership & Product',
    skills: [
      { name: 'Team Leadership' },
      { name: 'Code Review' },
      { name: 'Technical Mentoring' },
      { name: 'Agile / Scrum' },
      { name: 'Product Ownership' },
      { name: 'Release Management' },
    ],
  },
]

export const projects = [
  {
    number: '01',
    tag: 'HEALTHCARE × AI',
    title: 'AI Emergency Triage System',
    description:
      'Designed and implemented a machine learning system to classify patient urgency from clinical intake data. Built an end-to-end pipeline including data preprocessing, feature engineering, model training, and evaluation — deployed for use in a healthcare setting where classification accuracy directly impacts patient outcomes.',
    tech: ['Python', 'scikit-learn', 'Pandas', 'ML Pipeline', 'Healthcare'],
    impact: 'Production ML',
    github: 'https://github.com/shaqir',
    demo: null,
  },
  {
    number: '02',
    tag: 'FINTECH × iOS',
    title: 'iStocks — Watchlist & Trading Companion',
    description:
      'A modern iOS application for tracking stock watchlists with real-time price updates and a responsive, fluid interface. Implemented MVVM with Clean Architecture, persistent data layer, and live market data integration for a professional-grade trading experience.',
    tech: ['Swift', 'SwiftUI', 'Clean Architecture', 'MVVM', 'REST API'],
    impact: 'Real-time Data',
    github: 'https://github.com/shaqir/iStocks',
    demo: null,
  },
  {
    number: '03',
    tag: 'IoT × CROSS-PLATFORM',
    title: 'BLE Device Monitor',
    description:
      'Cross-platform mobile application that connects to Bluetooth Low Energy devices to display live sensor data. Engineered reliable device discovery, robust connection management, and real-time data streaming across iOS and Android platforms.',
    tech: ['Flutter', 'Dart', 'BLE', 'Cross-Platform', 'Real-time'],
    impact: 'Cross-Platform',
    github: 'https://github.com/shaqir',
    demo: null,
  },
  {
    number: '04',
    tag: 'ARCHITECTURE DEMOS',
    title: 'iOS Architecture Patterns',
    description:
      'A comprehensive collection of iOS architecture implementations including MVC, MVVM, VIPER, and Clean Architecture — built as reference implementations demonstrating best practices for scalable, testable iOS codebases. Includes Swift Concurrency patterns and protocol-oriented design.',
    tech: ['Swift', 'MVVM', 'Clean Architecture', 'VIPER', 'Concurrency'],
    impact: 'Reference Impl.',
    github: 'https://github.com/shaqir/iOS-Architectures',
    demo: null,
  },
]

export const experiences = [
  {
    title: 'Senior iOS Engineer',
    company: 'Tech Mahindra',
    meta: ['Aug 2022 — Aug 2024'],
    description:
      'Architected production iOS apps using Swift, SwiftUI, MVVM, and Clean Architecture across enterprise client products. Owned full App Store lifecycle including signing, provisioning, and coordinated releases. Led code reviews, mentored junior developers, and integrated third-party SDKs and RESTful APIs.',
    tags: ['Swift', 'SwiftUI', 'MVVM', 'Clean Architecture', 'REST APIs', 'Mentoring'],
  },
  {
    title: 'Principal iOS Engineer',
    company: 'Volansys Technologies',
    meta: ['Sep 2017 — Aug 2022'],
    description:
      'Led architecture for IoT and healthcare iOS apps using Swift, SwiftUI, and MVVM. Built BLE and Wi-Fi communication layers for hardware products. Implemented security-critical features with LocalAuthentication and encryption. Profiled and resolved memory leaks and CPU bottlenecks using Instruments.',
    tags: ['Swift', 'BLE', 'IoT', 'Security', 'Azure', 'Instruments'],
  },
  {
    title: 'iOS Developer',
    company: 'Openxcell Technolabs',
    meta: ['May 2013 — Aug 2017'],
    description:
      'Built and shipped multiple iOS apps using Swift, Objective-C, and foundational Apple frameworks. Delivered interactive UIs with Core Animation and MapKit. Developed systematic debugging and root cause analysis approaches across complex applications.',
    tags: ['Swift', 'Objective-C', 'Core Animation', 'MapKit', 'CocoaPods'],
  },
]

export const education = [
  {
    degree: 'Integrated Artificial Intelligence',
    school: 'Southern Alberta Institute of Technology (SAIT)',
    field: 'Artificial Intelligence',
    meta: ['Calgary, Canada', '2025 — 2026'],
  },
  {
    degree: 'Project Management & Professional Certificate',
    school: 'MacEwan University',
    field: 'Project Management',
    meta: ['2024 — 2025'],
  },
  {
    degree: 'Bachelor of Technology',
    school: 'Dharmsinh Desai University',
    field: 'Information Technology',
    meta: [],
  },
  {
    degree: 'Diploma',
    school: 'BBIT',
    field: 'Information Technology',
    meta: [],
  },
]

export const achievements = [
  {
    icon: 'activity',
    title: 'AI Triage System',
    description:
      'Built a production-grade ML pipeline for clinical patient classification in a high-stakes healthcare environment.',
  },
  {
    icon: 'package',
    title: '15+ Products Shipped',
    description:
      'End-to-end delivery across healthcare, fintech, IoT, and e-commerce — from whiteboard ideation to App Store release.',
  },
  {
    icon: 'trophy',
    title: 'GitHub Pair Extraordinaire ×3',
    description:
      'Recognized for outstanding collaborative development and co-authored contributions across open-source projects.',
  },
  {
    icon: 'pen-tool',
    title: 'Technical Writer',
    description:
      'Published articles on Medium covering React Native, iOS architecture patterns, and mobile development best practices.',
  },
  {
    icon: 'graduation-cap',
    title: 'AI & Data Science Certification',
    description:
      'Advanced credential from SAIT Calgary in predictive analytics, responsible AI, and human-centred system design.',
  },
  {
    icon: 'git-pull-request',
    title: 'Pull Shark ×2',
    description: 'GitHub recognition for sustained open-source contributions and high-quality pull request activity.',
  },
]

export const testimonials = [
  {
    quote:
      "Sakir's passion for all things mobile is matched by very few. Not only does he bring senior experience in software development, but his knowledge of mobile technologies makes him an asset for any company looking to make a mark in the mobile sphere. He is definitely an active contributor and a great person to work with!",
    name: 'Amit Mishra',
    role: 'iOS Product Architect, Signify',
    initials: 'AM',
  },
  {
    quote:
      'He possesses a powerful combination of expert knowledge and great leadership abilities. I highly recommend Sakir as a professional whose work in the team makes other team members strive for better results.',
    name: 'Yash Joshi',
    role: 'Technology Lead, Infosys',
    initials: 'YJ',
  },
  {
    quote:
      "Sakir's creativity and critical thinking have enabled him to produce some of the best work. He was often my go-to person for our most challenging clients — he can single-handedly take responsibility for entire projects. His intuition and fresh approach make him an ideal candidate for any firm.",
    name: 'Lav Patel',
    role: 'CEO, Nexgits',
    initials: 'LP',
  },
  {
    quote:
      'Sakir is a very dedicated and detail-oriented individual. His software development skills are outstanding. He never shied away from complicated or challenging problems. His years of experience in iOS and mobile development makes him robust and effective in any environment.',
    name: 'Roma Chaudhary',
    role: 'Advisory System Analyst, IBM',
    initials: 'RC',
  },
  {
    quote:
      'I have worked with him for 2.5 years and he possesses excellent skills to deliver quality apps and can deliver spectacular results as senior engineer. Sakir is a valuable asset as per his professional and personal qualities.',
    name: 'Akash Mehta',
    role: 'iOS Tech Lead',
    initials: 'AK',
  },
  {
    quote:
      'I have worked with Shaqir on multiple projects and found his ability to work gracefully and effectively under critical conditions most impressive. A quick learner, he remains updated with new technologies and implements them in the most creative ways.',
    name: 'Urvi Mali',
    role: 'Senior iOS Developer',
    initials: 'UM',
  },
]
