// Interfaces for type safety
export interface Business {
  id: number;
  name: string;
  role: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  website: string;
}

export interface TVExperience {
  id: number;
  role: string;
  show: string;
  network: string;
  description: string;
  highlights?: string;
}

export interface DigitalExperience {
  id: number;
  role: string;
  platforms: string[];
  description: string;
  highlights?: string;
}

export type MediaExperienceItem = TVExperience | DigitalExperience;

export interface PersonalInfo {
  name: string;
  titles: string[];
  location: string;
  email: string;
  about: string;
  socialMedia: {
    instagram: string;
    snapchat: string;
    website: string;
  };
}

// Personal information
export const personalInfo: PersonalInfo = {
  name: 'Reema Alsawalma',
  titles: ['Entrepreneur', 'Media Personality', 'Founder of La Donna di Ferro'],
  location: 'Jeddah, Saudi Arabia',
  email: 'contact@reemasawalma.com',
  about: 'Passionate entrepreneur and media personality with a strong background in business development and television. As the founder of La Donna di Ferro, I\'ve built a platform that empowers women through fashion and self-expression. With appearances on major networks and a growing social media presence, I combine my business acumen with media expertise to create impactful content and experiences.',
  socialMedia: {
    instagram: 'https://www.instagram.com/reema.alsawalma/',
    snapchat: 'reemaalsawalma',
    website: 'https://ladonnediferro.com'
  }
};

// Skills
export const skills: string[] = [
  'Business Development',
  'Brand Management',
  'Media Production',
  'Public Speaking',
  'Content Creation',
  'Fashion Consulting',
  'Social Media Strategy',
  'Event Planning',
  'Leadership',
  'Networking',
  'Strategic Partnerships',
  'Creative Direction'
];

// Business ventures
export const businesses: Business[] = [
  {
    id: 1,
    name: 'La Donna di Ferro',
    role: 'Founder & CEO',
    location: 'Jeddah, Saudi Arabia',
    period: '2018 - Present',
    description: 'Founded and lead a premium fashion brand focused on empowering women through sophisticated, versatile designs. La Donna di Ferro (The Iron Woman) combines luxury aesthetics with practical functionality for the modern professional woman.',
    achievements: [
      'Grew revenue by 200% year-over-year for three consecutive years',
      'Expanded to 5 retail locations across the Middle East',
      'Developed successful e-commerce platform with international shipping',
      'Featured in Vogue Arabia and Harper\'s Bazaar'
    ],
    website: 'ladonnediferro.com'
  },
  {
    id: 2,
    name: 'Alsawalma Investment Group',
    role: 'Director of New Ventures',
    location: 'Riyadh, Saudi Arabia',
    period: '2016 - 2018',
    description: 'Led the identification and evaluation of new business opportunities for one of Saudi Arabia\'s most prominent family businesses. Focused on diversification into emerging sectors including technology and sustainable energy.',
    achievements: [
      'Secured partnerships with 3 international tech companies',
      'Oversaw $15M investment portfolio in sustainable energy startups',
      'Developed corporate innovation strategy adopted company-wide',
      'Represented the company at World Economic Forum regional events'
    ],
    website: 'alsawalma-group.com'
  },
  {
    id: 3,
    name: 'Reema A Consulting',
    role: 'Principal Consultant',
    location: 'Dubai, UAE',
    period: '2015 - Present',
    description: 'Provide strategic consulting services to businesses in the fashion, retail, and media sectors. Specialize in brand positioning, market entry strategies, and digital transformation for luxury and lifestyle brands.',
    achievements: [
      'Guided 12+ brands in successful market entry to the GCC region',
      'Developed digital transformation roadmaps for 5 luxury retailers',
      'Created innovative social media strategies increasing engagement by 150%',
      'Facilitated partnerships between international brands and local influencers'
    ],
    website: 'reemaaconsulting.com'
  }
];

// Media experience
export const mediaExperience: MediaExperienceItem[] = [
  {
    id: 1,
    role: 'Host',
    show: 'Spotlight: Middle East',
    network: 'MBC',
    description: 'Hosted weekly business and entrepreneurship show highlighting innovative companies and leaders across the Middle East and North Africa region. Conducted in-depth interviews with founders, CEOs, and industry experts.',
    highlights: '2.5M average viewers per episode'
  },
  {
    id: 2,
    role: 'Regular Contributor',
    show: 'The Entrepreneur\'s Journey',
    network: 'Dubai One',
    description: 'Featured as a regular expert contributor on entrepreneurship and business development, sharing insights on building successful ventures in the region and navigating challenges specific to women in business.',
    highlights: 'Featured in 24 episodes across 3 seasons'
  },
  {
    id: 3,
    role: 'Content Creator',
    platforms: ['Instagram', 'YouTube', 'TikTok'],
    description: 'Create and manage original content across social media platforms focusing on business insights, fashion industry trends, and behind-the-scenes looks at entrepreneurial life. Combine educational content with lifestyle elements to engage diverse audiences.',
    highlights: '500K+ combined followers across platforms'
  },
  {
    id: 4,
    role: 'Podcast Host',
    platforms: ['Spotify', 'Apple Podcasts', 'Google Podcasts'],
    description: 'Host and produce "The Iron Woman Podcast," featuring conversations with trailblazing women in business, politics, arts, and sciences from the Middle East and around the world. Explore challenges, successes, and lessons learned through their journeys.',
    highlights: 'Top 10 Business Podcast in MENA region'
  }
];

// Achievements
export const achievements: string[] = [
  'Named to Forbes Middle East "30 Under 30" list',
  'Recipient of the Young Entrepreneur Award from the Saudi Chamber of Commerce',
  'Featured speaker at the World Economic Forum in Davos',
  'Appointed to the Saudi Fashion Commission advisory board',
  'Selected as a brand ambassador for Cartier Women\'s Initiative',
  'Graduated with honors from Harvard Business School',
  'Led successful funding round raising $5M in venture capital',
  'Published author with articles in Harvard Business Review and Entrepreneur Magazine',
  'Mentor to over 50 women entrepreneurs through regional accelerator programs',
  'Invited speaker at the United Nations Women\'s Entrepreneurship Day'
];