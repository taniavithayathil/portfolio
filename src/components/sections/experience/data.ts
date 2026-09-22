export interface ExperienceItem {
  id: string;
  year: string;
  period: string;
  company: string;
  role: string;
  focusTitle: string;
  description: string;
  tags: string[];
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'primary' | 'secondary' | 'specialized';
  fontStyle?: 'serif' | 'serif-italic' | 'sans' | 'mono';
  scale: 'large' | 'medium' | 'small';
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'tech-mahindra',
    year: '2026',
    period: '2026',
    company: 'Tech Mahindra',
    role: 'Technical Intern',
    focusTitle: 'Keystroke Entropy & Behavioural Analysis',
    description:
      'Engineered behavioural biometric models and keystroke timing dynamics to quantify entropy signatures for continuous authentication and user anomaly detection.',
    tags: [
      'python',
      'csharp',
      'keystroke-analysis',
      'anomaly-detection',
      'machine-learning',
      'scikit-learn',
      'numpy',
      'pandas',
      'data-analysis',
    ],
  },
  {
    id: 'fogtec',
    year: '2025',
    period: '2025',
    company: 'FOGTEC',
    role: 'Technical Intern',
    focusTitle: 'Fire Detection & Suppression Intelligence',
    description:
      'Developed telemetry analysis pipelines, anomaly detection algorithms, and interactive operational dashboards for critical fire suppression systems.',
    tags: [
      'python',
      'data-analysis',
      'anomaly-detection',
      'streamlit',
      'scikit-learn',
      'pandas',
      'numpy',
      'sql',
      'postgresql',
    ],
  },
];

export const SKILLS: SkillItem[] = [
  // Primary (Larger display / editorial serif & sans)
  { id: 'python', name: 'Python', category: 'primary', fontStyle: 'serif-italic', scale: 'large' },
  { id: 'machine-learning', name: 'Machine Learning', category: 'primary', fontStyle: 'serif', scale: 'large' },
  { id: 'cplusplus', name: 'C++', category: 'primary', fontStyle: 'mono', scale: 'medium' },
  { id: 'data-analysis', name: 'Data Analysis', category: 'primary', fontStyle: 'sans', scale: 'large' },
  { id: 'sql', name: 'SQL', category: 'primary', fontStyle: 'mono', scale: 'medium' },
  { id: 'postgresql', name: 'PostgreSQL', category: 'primary', fontStyle: 'serif', scale: 'medium' },

  // Specialized / Methodologies & Libraries
  { id: 'keystroke-analysis', name: 'Keystroke Analysis', category: 'specialized', fontStyle: 'serif-italic', scale: 'medium' },
  { id: 'anomaly-detection', name: 'Anomaly Detection', category: 'specialized', fontStyle: 'sans', scale: 'medium' },
  { id: 'csharp', name: 'C#', category: 'secondary', fontStyle: 'mono', scale: 'small' },
  { id: 'java', name: 'Java', category: 'secondary', fontStyle: 'mono', scale: 'small' },
  { id: 'scikit-learn', name: 'scikit-learn', category: 'secondary', fontStyle: 'sans', scale: 'small' },
  { id: 'pandas', name: 'Pandas', category: 'secondary', fontStyle: 'mono', scale: 'small' },
  { id: 'numpy', name: 'NumPy', category: 'secondary', fontStyle: 'mono', scale: 'small' },
  { id: 'streamlit', name: 'Streamlit', category: 'secondary', fontStyle: 'serif-italic', scale: 'small' },
  { id: 'react', name: 'React', category: 'secondary', fontStyle: 'sans', scale: 'small' },
  { id: 'nextjs', name: 'Next.js', category: 'secondary', fontStyle: 'sans', scale: 'small' },
  { id: 'git', name: 'Git', category: 'secondary', fontStyle: 'mono', scale: 'small' },
];
