// ---------------------------------------------------------------------------
// All portfolio content lives here.
// Portfolio data for Deep Vadhadiya — Backend Software Engineer
// ---------------------------------------------------------------------------

export const profile = {
  name: 'Deep Vadhadiya',
  firstName: 'Deep',
  lastName: 'Vadhadiya',
  role: 'Backend Software Engineer',
  tagline:
    'Backend Engineer with 2+ years of experience developing production backend applications using Node.js, NestJS, TypeScript, MongoDB, PostgreSQL, GraphQL, and REST APIs. Experienced in CRM, construction management, property management, and modular backend services.',
  location: 'Surat, Gujarat, India',
  email: 'deepvadhadiya@gmail.com',
  phone: '+91 95861 29445',
  linkedin: 'https://www.linkedin.com/in/vadhadiya-deep',
  github: 'https://github.com/hardikvadhadiya',
  resumeUrl: '#',
  avatar: '/profile.jpg',
  creation: '/hero.jpg',
  available: true,
}

export const stats = [
  { label: 'Years Experience', value: '2+' },
  { label: 'Core Databases', value: 'SQL & NoSQL' },
  { label: 'API Protocols', value: 'REST & GraphQL' },
  { label: 'Production Systems', value: '4+ Major' },
]

export const socials = [
  { label: 'LinkedIn', href: profile.linkedin, icon: 'linkedin' },
  { label: 'GitHub', href: profile.github, icon: 'github' },
  { label: 'Email', href: `mailto:${profile.email}`, icon: 'mail' },
]

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export const stack = [
  'Node.js',
  'NestJS',
  'Express.js',
  'TypeScript',
  'JavaScript',
  'MongoDB',
  'PostgreSQL',
  'GraphQL',
  'REST APIs',
  'Mongoose & Sequelize',
  'Role-Based Permissions (RBAC)',
  'Git & GitLab',
  'AI-Assisted Engineering',
]

export const about = {
  heading: 'About Me',
  paragraphs: [
    "I'm a Backend Software Engineer with 2+ years of experience engineering production backend applications and microservices using Node.js, NestJS, TypeScript, MongoDB, PostgreSQL, GraphQL, and REST APIs. Currently at Yashworld Products Private Limited, I design and maintain mission-critical backend systems powering CRM, construction workflows, and property management platforms.",
    "My expertise centers on scalable schema design, complex query optimization, authentication & authorization with role-based permissions, and company/branch-level access control. I build clean, modular architectures that seamlessly integrate with frontend clients while ensuring high reliability and data integrity.",
  ],
  details: [
    { label: 'Name', value: 'Deep Vadhadiya' },
    { label: 'Role', value: 'Backend Software Engineer' },
    { label: 'Experience', value: '2+ Years (May 2024 — Present)' },
    { label: 'Based in', value: 'Surat, Gujarat, India' },
    { label: 'Phone', value: '+91 95861 29445' },
    { label: 'Email', value: 'deepvadhadiya@gmail.com' },
    { label: 'Focus', value: 'Node.js, NestJS & API Architecture' },
    { label: 'Education', value: 'BCA (7.74 SGPA)' },
  ],
}

export const education = [
  {
    id: 'bca',
    degree: 'Bachelor of Computer Applications (BCA)',
    field: 'Computer Applications & Software Development',
    school: 'Bhagwan Mahavir University, Surat, Gujarat',
    period: 'July 2020 — May 2023',
    meta: 'Graduated with 7.74 SGPA',
    status: 'Completed',
  },
]

export const certifications = [
  {
    id: 'backend-arch',
    title: 'Scalable Backend Architecture & Microservices',
    issuer: 'Node.js & NestJS Production Standards',
  },
  {
    id: 'db-design',
    title: 'Relational & NoSQL Schema Design & Optimization',
    issuer: 'PostgreSQL & MongoDB Best Practices',
  },
  {
    id: 'api-security',
    title: 'API Security, RBAC & Role-Based Permissions',
    issuer: 'RESTful & GraphQL Architecture Standards',
  },
]

export const skills = {
  backend: [
    'Node.js',
    'NestJS',
    'Express.js',
    'TypeScript',
    'JavaScript',
    'Modular Architecture',
    'Microservices',
    'Error Handling & Logging',
  ],
  api: [
    'GraphQL',
    'REST APIs',
    'Authentication',
    'Authorization',
    'Role-Based Permissions (RBAC)',
    'Company/Branch-Level Access',
    'Pagination & Filtering',
  ],
  databases: [
    'MongoDB',
    'Mongoose ODM',
    'PostgreSQL',
    'Sequelize ORM',
    'Schema Design',
    'Complex Queries',
    'Data Relationships',
  ],
  systems: [
    'CRM Platforms',
    'Construction Management',
    'Property Management',
    'Clinic Management',
    'Work Orders & BOQ',
    'Attendance & Materials',
    'Payments & Reporting',
  ],
  frontendTools: [
    'React.js',
    'HTML5 & CSS3',
    'Bootstrap',
    'GitHub & GitLab',
    'VS Code',
    'Postman',
  ],
  ai: [
    'ChatGPT',
    'Claude',
    'Gemini',
    'Cursor',
    'GitHub Copilot',
    'Antigravity',
    'Windsurf',
    'Lovable',
    'Hygen',
  ],
}

export const experience = [
  {
    id: 'yashworld',
    company: 'Yashworld Products Private Limited',
    location: 'Surat, Gujarat',
    role: 'Backend Software Engineer',
    period: 'May 2024 — Present',
    points: [
      'Develop and maintain production backend services using Node.js, NestJS, TypeScript, MongoDB, PostgreSQL, GraphQL, and REST APIs.',
      'Design APIs and business workflows for CRM, project management, construction management, property management, attendance, materials, work orders, payments, and reporting.',
      'Implement authentication, authorization, role-based permissions, and company/branch-level access control.',
      'Work with MongoDB/Mongoose and PostgreSQL/Sequelize for schemas, queries, relationships, pagination, filtering, and data management.',
      'Troubleshoot production issues, improve backend logic, and collaborate with frontend developers to deliver reliable features.',
    ],
    tags: [
      'Node.js',
      'NestJS',
      'TypeScript',
      'MongoDB',
      'PostgreSQL',
      'GraphQL',
      'REST APIs',
      'RBAC',
      'Sequelize',
    ],
  },
]

export const projects = [
  {
    id: 'hivestaff',
    index: '01',
    title: 'HiveStaff',
    description:
      'Multi-tenant business management platform. Developed robust backend modules for CRM, clients, projects, role-based permissions, attendance, materials, work orders, reporting, and operational business workflows.',
    tags: ['Node.js', 'NestJS', 'MongoDB', 'GraphQL', 'Multi-Tenant CRM'],
    type: 'Enterprise Business Management',
    featured: true,
  },
  {
    id: 'construction-platform',
    index: '02',
    title: 'Construction Management Platform',
    description:
      'Comprehensive construction ERP backend. Implemented core workflows for leads, clients, properties, projects, BOQ (Bill of Quantities), materials, labour, machinery, vendor payments, work orders, and project reporting.',
    tags: ['Node.js', 'NestJS', 'MongoDB', 'GraphQL', 'BOQ & Materials'],
    type: 'Construction ERP Platform',
    featured: true,
  },
  {
    id: 'property-management',
    index: '03',
    title: 'Property Management Microservice',
    description:
      'High-performance property management service. Built robust REST APIs and relational data models for property cataloging, tenant contracts, maintenance tracking, and project-management workflows.',
    tags: ['Node.js', 'Express.js', 'PostgreSQL', 'Sequelize', 'REST APIs'],
    type: 'Real Estate Microservices',
    featured: true,
  },
  {
    id: 'laserbliss',
    index: '04',
    title: 'LaserBliss Clinic Management Platform',
    description:
      'Modular healthcare clinic platform. Engineered database-driven APIs and business workflows for patient records, appointment scheduling, treatment logging, and clinic management reporting.',
    tags: ['Node.js', 'NestJS', 'PostgreSQL', 'Database APIs', 'Healthcare ERP'],
    type: 'Clinic Management System',
    featured: true,
  },
]

export const contact = {
  heading: "Let's Build Scalable Backend Solutions.",
  sub: "Have a complex backend to architect, APIs to build, or looking for a dedicated Backend Software Engineer? My inbox is open.",
}
