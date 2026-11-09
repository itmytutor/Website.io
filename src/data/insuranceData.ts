import { HeroSlide, PromoCard, Agent, BlogPost } from '../types';

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 'tutor-support',
    tagline1: 'LOOKING',
    tagline2: 'FOR',
    subtitle: 'CLEAR AND SIMPLE',
    highlightText: 'LEARNING SUPPORT?',
    ctaText: 'ENROLL NOW',
    image: '/assets/aistudio/7_14700521.jpg',
    imageAlt: 'MyTutorPH dedicated team of educators and special education specialists',
    description: 'Empowering children with individualized tutoring, SPED programs, and developmental interventions tailored to every learner’s pace.'
  },
  {
    id: 'early-intervention',
    tagline1: 'MyTutor',
    tagline2: 'AND',
    subtitle: '',
    highlightText: 'the GiftEd',
    ctaText: 'OFFER SERVICES',
    image: '/assets/aistudio/announcement_template_bfb97eec.jpg',
    imageAlt: 'MyTutor and the GiftEd progressive school partnership announcement',
    description: 'Together, MyTutor and the GiftEd deliver a holistic educational approach—blending tailored SPED instruction, guided tutoring, and progressive preschool learning to empower young minds.'
  },
  {
    id: 'subject-mastery',
    tagline1: 'AVAILABLE',
    tagline2: 'IN',
    subtitle: 'WEBSITE AND',
    highlightText: 'MOBILE',
    ctaText: 'Google Play',
    ctaLink: 'https://play.google.com/store/apps/details?id=com.mytutorph.app&pcampaignid=web_share',
    image: '/assets/aistudio/6_8505cdde.jpg',
    imageAlt: 'MyTutorPH platform available on laptop web browser and mobile smartphone',
    description: '"Your favorite experience, anytime, anywhere." Access all your features seamlessly whether you\'re on your phone or on the web.'
  }
];

export const PROMO_CARDS: PromoCard[] = [
  {
    id: 'sped-card',
    title: 'SPED\n(Special Education)',
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=600&q=80',
    alt: 'Teacher working closely with a child in specialized educational support',
    snippet: 'Customized Individualized Education Plans (IEP) for learners with ADHD, Autism Spectrum, Dyslexia, and unique learning profiles.',
    fullContent: 'Our Special Education (SPED) specialists design and implement research-grounded Individualized Education Plans (IEP) tailored specifically to your child’s cognitive, sensory, and emotional strengths. We partner closely with parents, developmental pediatricians, and schools to ensure cohesive, compassionate, and measurable academic progress.',
    highlights: [
      'Personalized Individualized Education Plans (IEP) aligned with DepEd and international curricula',
      'Certified SPED educators with extensive behavioral and sensory integration training',
      'Routine progress tracking and collaborative reviews with developmental pediatricians',
      'Flexible home-based, center-based, and virtual 1-on-1 tutoring sessions'
    ]
  },
  {
    id: 'assessment-card',
    title: 'Assessment\n& Evaluation',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0NCgJupiKEkxeIKdEnK9rvvxvd2VYbbRZDM712gdB2yB8T7y0Asdit8hHtYA-DivfCNm29b9stsQV-zF6EpM1i048yPB7ig7n7MQRKE7kjFgtkxKLTEXDMaF3ewIOYgqUkIigUk7Xgin7_s22M_Acw-gF4n7Y2NHfs_JXZm4E8xVLibh9j_2kZIMTYxFpXaSMuUmCGT97RRpZkW09vH-zaAuc2FT2mQMS-LXTBnhI_E3hZSxg9xHQXA',
    alt: 'Educational specialists reviewing developmental assessment results',
    snippet: 'Comprehensive diagnostic screening, baseline reading inventory, math fluency checks, and cognitive milestone profiling.',
    fullContent: 'Before recommending any educational plan, our certified diagnosticians conduct thorough baseline assessments to pinpoint exact learning gaps, strengths, and preferred sensory modalities. We identify phonetic decoding levels, mathematical reasoning, working memory, and attention spans to create clear instructional roadmaps.',
    highlights: [
      'Comprehensive diagnostic literacy and numeracy baseline assessments',
      'Executive function, attention span, and learning style profile reports',
      'Detailed parental debriefing with actionable home study recommendations',
      'Standardized developmental milestone checklists for ages 3 to 17'
    ]
  },
  {
    id: 'learning-intervention-card',
    title: 'Learning\nIntervention',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
    alt: 'One-on-one structured reading intervention session',
    snippet: 'Targeted remediation in phonics, reading comprehension, handwriting, working memory, and executive study habits.',
    fullContent: 'Our learning intervention programs bridge academic gaps for students who may be falling behind in classroom pacing or experiencing frustration with reading, writing, or mathematical concepts. Using structured, multisensory techniques (Orton-Gillingham, Singapore Math foundations), we make complex concepts digestible and engaging.',
    highlights: [
      'Multisensory phonics and structured reading remediation',
      'Dyscalculia and core math foundational concept rebuilding',
      'Executive functioning, homework management, and test-prep discipline',
      'Weekly progress documentation shared transparently with parents'
    ]
  },
  {
    id: 'early-intervention-card',
    title: 'Early\nIntervention',
    image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=600&q=80',
    alt: 'Preschool child engaged in early developmental activities',
    snippet: 'Crucial developmental milestone support for toddlers and preschoolers (ages 2-6) building fine motor, speech, and social readiness.',
    fullContent: 'The earliest years are the most transformative for neurodevelopment. MyTutorPH’s Early Intervention program is specially crafted for toddlers and early learners exhibiting speech delays, fine motor hesitation, or social anxiety. Our nurturing specialists foster school readiness through patient, joyful interaction.',
    highlights: [
      'Early literacy, vocabulary enrichment, and expressive language support',
      'Fine and gross motor skills coordination through guided crafts and exercises',
      'Pre-school transition readiness, separation confidence, and group etiquette',
      'Parent coaching with practical developmental games for home routines'
    ]
  },
  {
    id: 'play-based-card',
    title: 'Play-based\nLearning',
    image: 'https://images.unsplash.com/photo-1566438480900-0609be27a4be?auto=format&fit=crop&w=600&q=80',
    alt: 'Children engaged in creative wooden blocks and play-based discovery',
    snippet: 'Inquiry-led sensory play, hands-on manipulatives, and creative storytelling that make foundational concepts fun and natural.',
    fullContent: 'Children learn best when they are genuinely engaged. Our Play-Based Learning methodology blends Montessori, Reggio Emilia, and constructivist principles. By utilizing tactile manipulatives, dramatic play, sensory bins, and puzzle challenges, children master early math, science, and communication without feeling pressured.',
    highlights: [
      'Montessori and Reggio Emilia inspired hands-on manipulative stations',
      'Sensory-rich problem solving that boosts analytical thinking and resilience',
      'Emotional regulation, sharing, and collaborative play facilitation',
      'Ideal for curious toddlers, active kinesthetic learners, and neurodiverse children'
    ]
  },
  {
    id: 'subject-focused-card',
    title: 'Subject\nFocused',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=600&q=80',
    alt: 'Stack of textbooks, notebooks, and learning materials for subject mastery',
    snippet: 'Rigorous 1-on-1 tutoring in Mathematics, Sciences, English, and entrance exam preparation from grade school to senior high.',
    fullContent: 'When students need to excel in specific academic subjects or prepare for competitive high school and university entrance examinations (PSHS, UPCAT, USTET, ACET), our Subject Focused tutoring delivers deep conceptual clarity. Our tutors break down challenging curricula into systematic, manageable modules.',
    highlights: [
      'Elementary, Junior High, and Senior High STEM and Humanities tutoring',
      'Math (Algebra, Geometry, Trigonometry, Calculus) & Sciences (Biology, Chemistry, Physics)',
      'Philippine science high school and college entrance exam review programs',
      'Personalized review materials, mock exams, and test-taking confidence drills'
    ]
  }
];

export interface ServiceCategoryItem {
  id: string;
  name: string;
  typicalCoverage: string;
  startingAt: string;
  desc: string;
  subjects?: string[];
  otherSubjectsText?: string;
}

export interface ServiceCategory {
  title: string;
  items: ServiceCategoryItem[];
}

export const INSURANCE_CATEGORIES: Record<string, ServiceCategory> = {
  spedPrograms: {
    title: 'Learning Assessment',
    items: [
      { id: 'learning-assessment', name: 'Assessment', typicalCoverage: 'One Time Fee', startingAt: '₱975', desc: '' }
    ]
  },
  assessments: {
    title: 'Interventions / Sped',
    items: [
      { id: 'early-intervention', name: 'Early Intervention', typicalCoverage: 'Per Hour', startingAt: '₱475', desc: '' },
      { id: 'learning-intervention', name: 'Learning Intervention', typicalCoverage: 'Per Hour', startingAt: '₱475', desc: '' },
      { id: 'special-needs', name: 'Special Needs Education', typicalCoverage: 'Per Hour', startingAt: '₱475', desc: '' }
    ]
  },
  interventions: {
    title: 'Learning Assistance',
    items: [
      { id: 'kinder-elem', name: 'Kinder - Elementary', typicalCoverage: 'Per Hour', startingAt: '₱349', desc: '' },
      { id: 'high-school', name: 'High School', typicalCoverage: 'Per Hour', startingAt: '₱399', desc: '' },
      { id: 'shs-college', name: 'Senior High - College', typicalCoverage: 'Per Hour', startingAt: '₱495', desc: '' }
    ]
  },
  subjectTutoring: {
    title: 'The GiftEd',
    items: [
      { id: 'pre-kinder', name: 'Pre - Kinder\n(Nursery , Kinder)', typicalCoverage: 'Per Month', startingAt: '₱3,250', desc: '' },
      { id: 'play-school', name: 'Play School', typicalCoverage: 'Per Month', startingAt: '₱3,250', desc: '' },
      { id: 'inclusive-education', name: 'Inclusive Education', typicalCoverage: 'Per Month', startingAt: '₱3,250', desc: '' },
      { id: 'play-school-toddlers', name: 'Play School\n(Toddlers)', typicalCoverage: 'Per Month', startingAt: '₱3,250', desc: '' }
    ]
  }
};

export const AGENTS: Agent[] = [
  {
    id: 'tutor-1',
    name: 'Teacher Carmela Reyes, LPT',
    title: 'Lead SPED Specialist & Reading Interventionist',
    city: 'Quezon City',
    state: 'Metro Manila',
    zip: '1100',
    phone: '(02) 8920-1456',
    email: 'carmela.reyes@mytutorph.com',
    rating: 4.98,
    reviewsCount: 168,
    experienceYears: 12,
    specialties: ['SPED', 'Dyslexia Remediation', 'Play-Based Early Learning'],
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=256&q=80',
    address: 'Katipunan Ave, Diliman, Quezon City'
  },
  {
    id: 'tutor-2',
    name: 'Teacher Mark Bautista, MA Ed.',
    title: 'Educational Diagnostician & Mathematics Lead',
    city: 'Makati City',
    state: 'Metro Manila',
    zip: '1200',
    phone: '(02) 8812-7301',
    email: 'mark.bautista@mytutorph.com',
    rating: 4.95,
    reviewsCount: 144,
    experienceYears: 10,
    specialties: ['Assessment', 'Learning Intervention', 'High School Math'],
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=256&q=80',
    address: 'Ayala Ave, San Lorenzo, Makati City'
  },
  {
    id: 'tutor-3',
    name: 'Teacher Joyce Tan, LPT',
    title: 'Early Intervention & Behavioral Coach',
    city: 'Cebu City',
    state: 'Cebu',
    zip: '6000',
    phone: '(032) 412-8890',
    email: 'joyce.tan@mytutorph.com',
    rating: 4.97,
    reviewsCount: 112,
    experienceYears: 8,
    specialties: ['Early Intervention', 'ADHD & Focus', 'Play-based Learning'],
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=256&q=80',
    address: 'Cebu IT Park, Lahug, Cebu City'
  },
  {
    id: 'tutor-4',
    name: 'Teacher Paolo Santos, MS STEM',
    title: 'Senior Science & Exam Review Specialist',
    city: 'Pasig City',
    state: 'Metro Manila',
    zip: '1600',
    phone: '(02) 8631-5524',
    email: 'paolo.santos@mytutorph.com',
    rating: 4.92,
    reviewsCount: 95,
    experienceYears: 9,
    specialties: ['Subject Focused', 'Physics & Chemistry', 'College Entrance Prep'],
    photo: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=256&q=80',
    address: 'Ortigas Center, San Antonio, Pasig City'
  }
];

export const TESTIMONIALS = [
  {
    quote: 'My son with ADHD struggled with traditional classroom pacing. Teacher Carmela from MyTutorPH tailored every session into fun visual games. His reading improved by two grade levels!',
    author: 'Maria Santos, Quezon City',
    policy: 'SPED & Reading Intervention Member'
  },
  {
    quote: 'The diagnostic baseline assessment gave us total clarity on where our daughter needed help. Within 3 months of learning intervention, her math test anxiety was completely gone.',
    author: 'Dennis & Karen Alcantara, Makati',
    policy: 'Assessment & Learning Intervention Member'
  },
  {
    quote: 'Play-based early intervention made all the difference for our 4-year-old before preschool. Nurturing, patient, and truly dedicated educators.',
    author: 'Dr. Jennifer Lim, Cebu City',
    policy: 'Early Intervention & Play-Based Member'
  }
];
