type Project = {
  name: string
  description: string
  link: string
  video: string
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  authors: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Resource Efficient Bayesian Optimization',
    description:
      'An Adaptive Bayesian Optimization framework that reduces cost of optimization while maintaining the same optimization performance',
    link: '/research/Resource Efficient Bayesian Optimization.pdf',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Configurable Morphology Distance Operator',
    description: 'Novel graph-based framework transforms complex material structures into comparable vectors for efficient morphological analysis.',
    link: '/research/Graph-based Strategy for Establishing Morphology Similarity.pdf',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'University at Buffalo',
    title: 'Research Assistant',
    start: '2024',
    end: 'Present',
    link: '',
    id: 'work1',
  },
  {
    company: 'University at Buffalo',
    title: 'Teaching Assistant',
    start: '2022',
    end: '2023',
    link: '',
    id: 'work2',
  },
  {
    company: 'Zeblok',
    title: 'Data Scientist',
    start: '2018',
    end: '2020',
    link: 'https://zeblok.com',
    id: 'work3',
  },
  {
    company: 'Knowlarity',
    title: 'Software Engineer',
    start: '2016',
    end: '2018',
    link: 'https://knowlarity.com',
    id: 'work4',
  },
  {
    company: 'Sloopstream - Analytics',
    title: 'Founder',
    start: '2017',
    end: '2019',
    link: '',
    id: 'work5',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Resource Efficient Bayesian Optimization',
    description: 'IEEE CLOUD, 2024',
    authors: 'Namit Juneja, Varun Chandola, Jaroslaw Zola, Olga Wodo and Parth Desai',
    link: '/research/Resource Efficient Bayesian Optimization.pdf',
    uid: 'blog-1',
  },
  {
    title: 'COMODO: Configurable Morphology Distance Operator ',
    description:
      'Computational Materials Science, 2024',
    authors: 'Parth Desai, Namit Juneja, Varun Chandola, Jaroslaw Zola, and Olga Wodo',
    link: '/research/COMODO.pdf',
    uid: 'blog-2',
  },
  {
    title: 'Graph-based Strategy for Establishing Morphology Similarity',
    description:
      'SSDBM, 2021',
    authors: 'Namit Juneja, Jaroslaw Zola, Varun Chandola and Olga Wodo ',
    link: '/research/Graph-based Strategy for Establishing Morphology Similarity.pdf',
    uid: 'blog-3',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/namitjuneja',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/namitjuneja',
  },
  {
    label: 'Instagram',
    link: 'https://www.instagram.com/junejasahab',
  },
]

export const EMAIL = 'juneja.namit@gmail.com'
