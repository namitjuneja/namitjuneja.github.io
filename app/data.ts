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
  description: string
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
      'Adaptive Bayesian Optimization framework that reduces cost of optimization while maintaining the same optimization guaruntees',
    link: '/research/Resource Efficient Bayesian Optimization.pdf',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/newProfileItem/d898be8a-7037-4c71-af0c-8997239b050d.mp4?_a=DATAdtAAZAA0',
    id: 'project1',
  },
  {
    name: 'Configurable Morphology Distance Operator',
    description: 'Novel graph-based framework that transforms complex material structures into comparable vectors for efficient morphological analysis',
    link: '/research/Graph-based Strategy for Establishing Morphology Similarity.pdf',
    video:
      'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
    id: 'project2',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'University at Buffalo',
    title: 'Doctoral Candidate',
    description: `
    <p className="text-zinc-950 dark:text-zinc-100">Reserach Assistant</p>
    <ul className="list-disc list-outside ml-5">
      <li>Center for Hybrid Rocket Exascale Simulation Technology (CHREST)</li>
      <li>Scalable Non-linear Dimensionality Reduction Methods to Accelerate Scientific Discovery</li>
    </ul>
    <p className="text-zinc-950 dark:text-zinc-100 pt-4">Teaching Assistant</p>
    <ul className="list-disc list-outside ml-5">
      <li>CSE 574: Introduction to Machine Learning (Head TA)</li>
      <li>CSE 503: Introduction to Computer Science for Non Majors</li>
    </ul>`,
    start: '2020',
    end: 'Present',
    link: '',
    id: 'work1',
  },
  {
    company: 'Zeblok',
    title: 'Data Scientist',
    description: 'Developed statistical models analyzing patient gait patterns (cadence, asymmetry, velocity) and created machine learning algorithms using foot pressure sensor data to accurately determine muscle characteristics, combining biomedical data analysis with practical healthcare applications.',
    start: '2018',
    end: '2020',
    link: 'https://zeblok.com',
    id: 'work2',
  },
  {
    company: 'Knowlarity',
    title: 'Software Engineer',
    description: 'Developed machine learning models that analyze user behavior through historical and real-time data, optimizing personalized experiences that reduced support calls by ~30%. Built comprehensive data pipelines leveraging AWS infrastructure to support large-scale predictive analytics implementation.',
    start: '2016',
    end: '2018',
    link: 'https://knowlarity.com',
    id: 'work3',
  },
  {
    company: 'Sloopstream Analytics',
    title: 'Founder',
    description: 'Engineered an award-winning retail analytics device using computer vision and deep learning to track customer movement patterns, engagement rates, and dwell times in open spaces. The solution optimized store layouts and increased conversion rates by 25% across 30+ New Delhi retail locations.',
    start: '2017',
    end: '2019',
    link: '',
    id: 'work4',
  },
  {
    company: 'Educatrium',
    title: 'Software Engineer Intern',
    description: 'Developed a data-driven testing framework for Chinese high school students preparing for the SAT, employing statistical modeling to create personalized study plans. This scalable solution has been adopted by 200,000+ students across China, significantly improving test performance and college admission rates.',
    start: '2016',
    end: '2016',
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
  {
    label: 'Resume',
    link: '/resume',
  },
]

export const EMAIL = 'juneja.namit@gmail.com'
