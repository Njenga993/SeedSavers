// src/data/blogData.ts
import SpectacularImage from '../assets/Spectacular.jpg';
import Spectacular from '../assets/Makokha.jpg';
import Image from '../assets/vihiga leafy.png';
import Access from '../assets/seedaccess.jpeg';
import Journalist from '../assets/journalists.jpeg';
import Bio from '../assets/Bio-pesticides.jpeg';

export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  slug: string;
  content: string; // full blog content
};

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Empowering Communities through Traditional Vegetables: A Success Story from Vihiga CBO',
    excerpt:
      'At the heart of Vihiga County, a powerful agricultural transformation is unfolding. Thanks to the collaborative efforts of the Seed Savers Network, Bioversity International & CIAT, FAO and ITGPRFA,',
    author: 'Seed Savers Team',
    date: '15 June 2023',
    readTime: '8 min read',
    tags: ['Conservation', 'Research', 'Indigenous Knowledge'],
    image: SpectacularImage,
    slug: 'future-of-indigenous-seeds',
    content: `
In Vihiga County, the collaboration between Seed Savers Network, Bioversity International, CIAT, FAO, and ITGPRFA has empowered communities to grow, conserve, and benefit from traditional vegetables.

This initiative has strengthened local seed systems, improved nutrition, and fostered food sovereignty by enabling farmers to control their own seed resources.

Farmers have been trained in seed saving, agroecology, and community-based seed banking, ensuring indigenous varieties are preserved for future generations.
    `,
  },
  {
    id: '2',
    title: 'Journalists Have a Critical Role in Safeguarding Kenya’s Food Systems',
    excerpt:
      'Agriculture, environment and climate journalists have been urged to take a keen interest in Kenya’s agriculture policies by factually reporting on its effects on the country’s food system.  Seed Savers Network (Kenya),',
    author: 'Seed Savers Team',
    date: '28 May 2025',
    readTime: '5 min read',
    tags: ['Community', 'Empowerment'],
    image: Journalist,
    slug: 'community-seed-banks',
    content: `
Agriculture, environment and climate journalists have been urged to take a keen interest in Kenya’s agriculture policies by factually reporting on its effects on the country’s food system. 

Seed Savers Network (Kenya), Chief Executive Officer Daniel Wanjama says the media has a critical role in amplifying the country’s hits and misses towards the realization of a food secure status.

“As journalists, you need to understand that whatever happens on the farm directly affects you, whether you are a farmer or not. When bad agricultural policies are passed, the entire nation suffers,” Wanjama said.

Wanjama observed that journalists are powerful vessels for amplifying work being done by stakeholders within the food system sector, including farmers.

“The largest food producers in Kenya are the millions of smallholder farmers, and when they are being oppressed, the media has a duty to offer them a voice,” he said.

Seed ambassadors explain to journalists the concept of seed banking and seed bank operations at the SSN seed bank in Gilgil.

He spoke during a one-day training workshop for journalists on Kenya’s Farmer Managed Seed System. The journalists drawn from Nakuru, Nairobi, and Eastern Kenya counties were also updated on the progress of the seed case filed by smallholder farmers.

The case, whose judgment is set for November 27, 2025, was filed at the Machakos High Court challenging the legality of sections of the Seed and Plant Varieties Act (Cap. 326) of 2012 and the Seeds and Plant Varieties (Seeds) Regulations, 2016, which prohibit the sale and exchange of unregistered seed varieties.

During the sessions, the journalists were taken through the legal, social, and economic implications of the case.

Wanjama argued that many smallholder farmers in Kenya depend on the tradition of sharing seeds, and criminalizing the Farmer Managed Seed System threatens their livelihoods and undermines food security.

Elizabeth Atieno, a food campaigner from Greenpeace Africa, called for informed media coverage to help the public stay updated on the progress of the case.

“It is only through the work of journalists that Kenyans will understand the broader implications of such laws that threaten the country’s food security,” said Atieno.

She added, “The media plays a powerful role in shaping policy debates. By equipping journalists with accurate information, we hope to foster more balanced and inclusive reporting on seed sovereignty issues.”

A tour around the Seed Savers farm in Gilgil provided the journalists with a firsthand account of the Farmer-Managed Food System and how it supports and enhances community resilience, biodiversity conservation, and food security.

The journalists were challenged to keep track of the seed litigation progress and continue amplifying the voices of farmers who may otherwise be left out of policy decisions.

Atieno, at the same time, underscored the importance of accurate, people-centred reporting in the agriculture and food systems sector.
    `,
  },
  {
    id: '3',
    title:
      'Farmers, Experts Hail Ban on Hazardous Pesticides, Call for Stronger Oversight',
    excerpt:
      'Biodiversity experts and sustainable agriculture proponents have commended the government’s prohibition on the import and use of over 50 pesticide brands, citing its potential to safeguard public health and ecological integrity.',
    author: 'Seed Savers Team',
    date: '22 May 2023',
    readTime: '6 min read',
    tags: ['Youth', 'Education'],
    image: Bio,
    slug: 'youth-agroecology',
    content: `
Kenya’s recent ban on hazardous pesticides marks a milestone in safeguarding public health and protecting ecosystems.

Experts emphasize the importance of strict enforcement and continued research into eco-friendly pest control methods such as biopesticides and integrated pest management.
    `,
  },
  {
    id: '4',
    title:
      'Characterization and Documentation of Traditional Leafy Vegetables in Vihiga',
    excerpt:
      'Leafy green vegetables dot the display tables as small holder farmers mill around the Traditional Vegetable Fair in Emaloba, Vihiga County. Scientifically, the vegetables on display are known as..',
    author: 'Seed Savers Team',
    date: '10 May 2023',
    readTime: '7 min read',
    tags: ['Nutrition', 'Research'],
    image: Image,
    slug: 'traditional-crops-nutrition',
    content: `
The Traditional Vegetable Fair in Emaloba showcased a variety of leafy greens rich in nutrients and cultural value.

Through proper documentation and characterization, these vegetables can be promoted for improved diets, income generation, and biodiversity conservation.
    `,
  },
  {
    id: '5',
    title:
      'Creating Seas of Change: Concepter Makokha’s Rise in Agro-Entrepreneurship.',
    excerpt:
      'In Musoli village, Luanda Sub-county, Vihiga County, Kenya, Concepter Makokha is a happy and determined woman. As a single mother of 3 children, she faced immense financial struggles after..',
    author: 'Seed Savers Team',
    date: '28 April 2023',
    readTime: '4 min read',
    tags: ['Techniques', 'Climate Adaptation'],
    image: Spectacular,
    slug: 'seed-saving-dry-regions',
    content: `
Concepter Makokha’s journey into agro-entrepreneurship demonstrates resilience and innovation.

Through training from Seed Savers Network, she adopted climate-smart farming techniques, diversified her crops, and established a thriving seed enterprise.
    `,
  },
  {
    id: '6',
    title: 'Advancing Farmers’ Rights: A Commitment to Promoting Seed Access',
    excerpt:
      'Kenya has made a significant leap in advancing farmers’ rights with the introduction of the Seeds and Plant Varieties (Conservation, Access, and Benefit Sharing of Plant Genetic Resources for Food and Agriculture)',
    author: 'Seed Savers Team',
    date: '15 April 2023',
    readTime: '5 min read',
    tags: ['Women', 'Community'],
    image: Access,
    slug: 'women-seed-conservation',
    content: `
The enactment of the Seeds and Plant Varieties regulations enhances farmers’ rights to access, conserve, and share indigenous seeds.

This legislative progress is a victory for community-based seed systems and sustainable agriculture in Kenya.
    `,
  },
];

export const featuredPost: BlogPost = blogPosts[0];
export const otherPosts: BlogPost[] = blogPosts.slice(1);

export default blogPosts;
