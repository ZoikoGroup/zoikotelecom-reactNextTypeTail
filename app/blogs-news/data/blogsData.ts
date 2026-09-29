export interface BlogItem {
  id: number | string;
  slug: string;
  title: string;
  category: string;
  author: string;
  authorRole?: string;
  date: string;
  readTime: string;
  featured_image: string;
  seo_title: string;
  seo_description: string;
  seo_keywords?: string;
  excerpt: string;
  content?: string;
}

export const BLOGS_DATA: BlogItem[] = [
  {
    id: 1,
    slug: "why-digital-literacy-is-a-workplace-must-have",
    title: "Why Digital Literacy Is a Workplace Must-Have",
    category: "BLOG",
    author: "lennox",
    authorRole: "Tech Training Consultant",
    date: "10 June 2026",
    readTime: "5 min read",
    featured_image: "/image/image 5 (1).png",
    seo_title: "Why Digital Literacy Is a Workplace Must-Have | Zoiko Telecom",
    seo_description: "How digital communication literacy drives workplace productivity and empowers hybrid workforce collaboration.",
    excerpt: "Effortless Communication: Reliable Digital landline with Crystal Clear Calls...",
  },
  {
    id: 2,
    slug: "ee-network-adds-another-jewel-in-their-crown",
    title: "EE Network Adds Another Jewel in Their Crown",
    category: "BLOG",
    author: "lennox",
    authorRole: "Mobile Technology Writer",
    date: "10 June 2026",
    readTime: "4 min read",
    featured_image: "/image/image 4.png",
    seo_title: "EE Network Adds Another Jewel in Their Crown | Zoiko Telecom",
    seo_description: "Explore the latest network reliability and speed milestones achieved by the UK's leading mobile operator.",
    excerpt: "Effortless Communication: Reliable Digital landline with Crystal Clear Calls...",
  },
  {
    id: 3,
    slug: "the-urgency-of-quick-switch-off-deadline-from-copper-to-digital",
    title: "The Urgency of Quick Switch-off Deadline from Copper to Digital",
    category: "BLOG",
    author: "lennox",
    authorRole: "Network Infrastructure Analyst",
    date: "10 June 2026",
    readTime: "5 min read",
    featured_image: "/image/image 3.png",
    seo_title: "The Urgency of Quick Switch-off Deadline from Copper to Digital | Zoiko Telecom",
    seo_description: "Understand the PSTN copper switch-off deadline and how UK businesses can transition seamlessly to digital VoIP networks.",
    excerpt: "Effortless Communication: Reliable Digital landline with Crystal Clear Calls...",
  },
  {
    id: 4,
    slug: "why-top-9-voip-features-are-a-game-changer-for-small-businesses",
    title: "Why Top 9 VoIP Features are a Game-Changer for Small Businesses",
    category: "BLOG",
    author: "lennox",
    authorRole: "VoIP Specialist",
    date: "10 June 2026",
    readTime: "6 min read",
    featured_image: "/image/image 2.png",
    seo_title: "Why Top 9 VoIP Features are a Game-Changer for Small Businesses | Zoiko Telecom",
    seo_description: "Effortless Communication: Reliable Digital landline with Crystal Clear Calls and top VoIP features for small businesses.",
    excerpt: "Effortless Communication: Reliable Digital landline with Crystal Clear Calls...",
  },
  {
    id: 5,
    slug: "why-more-uk-customers-are-switching-broadband-providers-in-2026",
    title: "Why More UK Customers Are Switching Broadband Providers in 2026",
    category: "BLOG",
    author: "lennox",
    authorRole: "Connectivity & Telecom Specialists",
    date: "29 September 2026",
    readTime: "8 min read",
    featured_image: "/Images/blog-images/Header_card.jpg",
    seo_title: "Why More UK Customers Are Switching Broadband Providers in 2026 | Zoiko Telecom",
    seo_description: "Over 3.5 million UK customers have switched broadband provider. Learn why out-of-contract users can save £100+ annually, how One Touch Switch works, and how to find the best deal.",
    seo_keywords: "UK broadband switching 2026, Ofcom One Touch Switch, cheap broadband UK, out of contract broadband savings, Zoiko Telecom BT broadband, business broadband",
    excerpt: "For many households across the UK, broadband has become an essential part of everyday life. According to Ofcom, around 3.5 million people have switched broadband provider, with out-of-contract customers saving over £100 a year...",
  },
];

export function getBlogBySlug(slug: string): BlogItem | undefined {
  return BLOGS_DATA.find((blog) => blog.slug === slug);
}
