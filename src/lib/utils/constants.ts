import type { Feature, CaseStudy, TechStackItem, PricingTier, ResearchHighlight } from '../types';

export const NAVIGATION_ITEMS = [
  { name: 'Platform', href: '/platform' },
  { name: 'Solutions', href: '/solutions' },
  { name: 'Research', href: '/research' },
  { name: 'Security', href: '/security' },
  { name: 'Company', href: '/company' }
];

export const FEATURES: Feature[] = [
  {
    title: 'Clinical Validation',
    description: 'Peer-reviewed studies demonstrating improved diagnostic accuracy and workflow efficiency.',
    icon: 'chart'
  },
  {
    title: 'HIPAA Compliance',
    description: 'Enterprise-grade security with full HIPAA compliance and data protection.',
    icon: 'shield'
  },
  {
    title: 'Seamless Integration',
    description: 'Easy integration with existing PACS systems and clinical workflows.',
    icon: 'integration'
  },
  {
    title: 'AI-Powered Analysis',
    description: 'State-of-the-art deep learning models for accurate medical image analysis.',
    icon: 'brain'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    title: 'CathEF Study Results',
    institution: 'JAMA Cardiology',
    description: 'Novel AI-powered biomarker extraction achieving 0.90 AUC with TTE LVEF measurements in just 4 seconds.',
    image: '/images/case-study-1.jpg',
    stats: [
      { value: '0.90', label: 'AUC Score' },
      { value: '4s', label: 'Analysis Time' }
    ],
    link: 'https://jamanetwork.com/journals/jamacardiology/fullarticle/2804713',
    citation: 'Avram et al., JAMA Cardiology, 2023'
  },
  {
    title: 'Workflow Optimization',
    institution: 'Regional Healthcare Network',
    description: 'Streamlined radiology workflow with containerized AI models.',
    image: '/images/case-study-2.jpg',
    stats: [
      { value: '3x', label: 'Faster Analysis' },
      { value: '60%', label: 'Cost Reduction' }
    ]
  }
];

export const TECH_STACK: TechStackItem[] = [
  {
    title: 'Docker Containers',
    description: 'Custom containers for rapid deployment and consistent environments.',
    icon: 'docker'
  },
  {
    title: 'Modular Architecture',
    description: 'Plug-and-play AI models for different imaging modalities.',
    icon: 'module'
  },
  {
    title: 'Secure Infrastructure',
    description: 'End-to-end encryption and HIPAA-compliant data handling.',
    icon: 'security'
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    name: 'Research Use',
    price: 'Contact Us',
    period: 'research license',
    description: 'Ideal for academic and research institutions exploring AI in medical imaging.',
    disclaimer: 'Non-FDA/Health Canada approved models. For research purposes only.',
    features: [
      'Access to research-focused AI models',
      'Data collection tools',
      'Research collaboration support',
      'Academic publication rights',
      'Technical documentation access'
    ]
  },
  {
    name: 'Healthcare System',
    price: 'Contact Us',
    period: 'enterprise license',
    description: 'Complete solution for healthcare providers and hospital networks.',
    features: [
      'Full suite of FDA-cleared AI models',
      'Enterprise PACS integration',
      'Priority support & SLA',
      'Custom workflow optimization',
      'Advanced analytics dashboard',
      'Multi-site deployment support'
    ]
  },
  {
    name: 'Custom Deployment',
    price: 'Contact Us',
    period: 'custom license',
    description: 'Tailored solutions for unique healthcare environments.',
    features: [
      'Custom AI model development',
      'Specialized integration needs',
      'On-premise deployment options',
      'Dedicated support team',
      'Custom compliance requirements',
      'Extended API access'
    ]
  }
];

export const RESEARCH_HIGHLIGHTS: Record<string, ResearchHighlight> = {
  cathef: {
    title: "CathEF Study: AI-Powered Cardiac Function Analysis",
    authors: "Robert Avram et al.",
    journal: "JAMA Cardiology",
    year: "2023",
    highlights: [
      "0.90 AUC with TTE LVEF measurements",
      "4-second analysis time per case",
      "Novel biomarker extraction techniques",
      "Validated against clinical standards"
    ],
    abstract: "This groundbreaking study demonstrates the effectiveness of AI-powered analysis in cardiac function assessment, achieving remarkable accuracy while significantly reducing analysis time.",
    link: "https://jamanetwork.com/journals/jamacardiology/fullarticle/2804713"
  }
};