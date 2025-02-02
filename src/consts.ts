// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const Name = 'Tarun RG';
export const desig = 'Final year student @ Amrita Vishwa Vidyapeetham Chennai';
export const profile1 = '/tarun.jpeg';
export const SITE_DESCRIPTION =
  'Tarun RG, final year CSE student at Amrita Vishwa Vidyapeetham Chennai';

export const SOCIAL_MEDIA = {
  github: 'https://www.github.com/tr1ck-5t3r',
  linkedin: 'https://www.linkedin.com/in/tarun-r-g',
  email: 'tarungovindharaj2003@gmail.com',
};

type IconName = 'seti:java'
  | 'seti:python'
  | 'seti:javascript'
  | 'seti:react'
  | 'seti:docker'
  | 'github' // Add any custom icon names you use
  | 'node'
  | 'astro';

type Interest = {
  name: string;
  icon: IconName;
};

export const interests: Interest[] = [
  { name: 'Java', icon: 'seti:java' },
  { name: 'Python', icon: 'seti:python' },
  { name: 'Javascript', icon: 'seti:javascript' },
  { name: 'React', icon: 'seti:react' },
  { name: 'Node js', icon: 'node' },
  { name: 'Astro js', icon: 'astro' },
  { name: 'Docker', icon: 'seti:docker' },
  { name: 'Github', icon: 'github' },
];

export const current_company = {
  name: 'Tredence',
  path: '/tredence.jpg',
};

export const projectsHome = [
  {
    title: 'Project One',
    description: 'An AI-powered image reconstruction tool using GANs.',
    link: 'https://github.com/yourusername/project-one',
    image: '/project.webp',
  },
  {
    title: 'Project Two',
    description:
      'A responsive portfolio built with Astro.js and GSAP animations.',
    link: 'https://yourportfolio.com',
    image: '/project.webp',
  },
  {
    title: 'Project Three',
    description:
      'A cloud-based data visualization dashboard for real-time analytics.',
    link: 'https://github.com/yourusername/project-three',
    image: '/project.webp',
  },
];

type ExperienceItem = {
  company: string;
  role: string;
  duration: string;
  description: string;
  logo: string;
};

// Define the experience array type
export const experience: ExperienceItem[] = [
  {
    company: 'Prodigy InfoTech',
    role: 'Machine Learning Intern',
    duration: '05/05/2024 - 01/06/2024',
    description: 'Implemented various Machine Learning models and gained practical experience in the field of Artificial Intelligence. \
      Worked on projects like Sentiment Analysis, Image Recognition, and Speech Recognition.',
    logo: '/prodigy-infotech.jpg',
  },
  {
    company: 'NxWeb',
    role: 'Intern',
    duration: '02/12/2024 - 02/03/2025',
    description: 'Understanding client requirements and developing personalized technology-driven solutions that help businesses achieve \
     their goals through innovation and tailored approaches.',
    logo: '/nxweb.jpg',
  }
  // Add more experience objects if needed
];