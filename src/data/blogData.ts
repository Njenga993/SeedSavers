// src/data/blogData.ts

import SpectacularImage from '../assets/Spectacular.webp';
import Spectacular from '../assets/Makokha.webp';
import Image from '../assets/vihiga leafy.webp';
import Access from '../assets/seedaccess.webp';
import Journalist from '../assets/journalists.webp';
import Bio from '../assets/Bio-pesticides.webp';
import SpectacularImagecourt from '../assets/DSC_3236.webp';

/* =========================
   CTA TYPE (NEW – SAFE ADD)
========================= */
export type BlogCTA = {
  label: string;
  href: string;
  target?: '_blank' | '_self';
  variant?: 'primary' | 'secondary';
};

/* =========================
   BLOG POST TYPE
========================= */
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
  content: string;
  category?: string;
  imageCaption?: string;
  quote?: string;

  // NEW (OPTIONAL – DOES NOT BREAK EXISTING POSTS)
  ctas?: BlogCTA[];
};

/* =========================
   BLOG DATA
========================= */
export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title:
      'Endorse our Position Paper and Add Your Voice! Why the Draft EAC Seed Bill Needs Change!',
    excerpt:
      'The East African Legislative Assembly (EALA) is in the process of developing the East African Community (EAC) Seed and Plant Varieties Bill, 2025. This legislation has significant implications for farmers, seed systems, and agricultural biodiversity across the EAC region. We urge stakeholders to review our position paper and endorse our call for critical amendments to ensure the bill supports farmers’ rights, seed diversity, and sustainable agriculture.',
    author: '',
    date: '2025',
    readTime: '≈12 min read',
    tags: ['Seed Sovereignty', 'Agriculture', 'Food Security', 'Biodiversity'],
    image: SpectacularImagecourt,
    slug: 'endorse-our-position-paper-eac-seed-bill',
    content: `
The East African Legislative Assembly (EALA) is in the process of developing the East African Community (EAC) Seed and Plant Varieties Bill, 2025. This legislation has significant implications for farmers, seed systems, and agricultural biodiversity across the EAC region. We urge stakeholders to review our position paper and endorse our call for critical amendments to ensure the bill supports farmers’ rights, seed diversity, and sustainable agriculture.

The draft EAC Seed Bill, as it currently stands, contains several provisions that could undermine traditional seed systems, restrict farmers’ access to diverse seed varieties, and favor commercial seed companies over smallholder farmers. Key concerns include stringent registration requirements for seeds, limitations on seed saving and exchange, and inadequate recognition of farmers’ rights to use and conserve indigenous seed varieties.

These provisions threaten to erode the rich agricultural biodiversity that smallholder farmers have cultivated for generations. They also risk marginalizing farmers who rely on traditional seed systems for their livelihoods and food security.

To address these concerns, we have outlined a series of recommended amendments in our position paper. These include:
1. Recognizing and protecting farmers’ rights to save, use, exchange, and sell farm-saved seeds.
2. Simplifying seed registration processes to accommodate diverse seed varieties, including indigenous and farmer-developed seeds.
3. Promoting participatory seed breeding and conservation initiatives that involve farmers in decision-making processes.
4. Ensuring that seed policies support agroecological practices and biodiversity conservation.
5. Establishing mechanisms for stakeholder engagement, including farmers, civil society, and indigenous communities, in the development and implementation of seed policies.

We call on policymakers, civil society organizations, farmers’ groups, and other stakeholders to endorse our position paper and advocate for these critical amendments to the EAC Seed Bill.
    `,
    ctas: [
      {
        label: 'Read Full Document (EN)',
        href:
          '/docs/Joint Civil Society Position on the Draft EAC Seed and Plant Varieties Bill, 2025-4.pdf',
        target: '_blank',
        variant: 'primary',
      },
      {
        label: 'Lire le document (FR)',
        href:
          '/docs/FRENCH Joint Civil Society Position on the Draft EAC Seed and Plant Varieties Bill, 2025-4 fr.pdf',
        target: '_blank',
        variant: 'secondary',
      },
      {
        label: 'Endorse the Position Paper',
        href:
          'https://docs.google.com/forms/d/e/1FAIpQLSekjucQkOaAw0FGinHlq33ZuD8UXsIfawu8a4tgvW_9V7xTuw/viewform',
        target: '_blank',
        variant: 'primary',
      },
    ],
  },

   {
  id: '2',
  title: 'The Seeds of Freedom: Kenya s Landmark Win for Agricultural Sovereignty  Africa Farming Journal',
  excerpt:
    'On 27 November 2025, Kenya’s High Court ruled that farmers have the constitutional right to save, share and exchange indigenous seeds — striking down parts of the Seed and Plant Varieties Act that criminalized traditional seed-saving practices. This decision is hailed as a landmark victory for seed sovereignty, agrobiodiversity, and the rights of smallholder farmers to preserve indigenous seed systems and cultural heritage.',
  author: 'Africa Farming Journal',
  date: '27 November 2025',
  readTime: '≈5 min read',
  tags: ['Seed Sovereignty', 'Agriculture', 'Food Security', 'Biodiversity'],
  image: SpectacularImagecourt,
  slug: 'seeds-of-freedom-kenya-agricultural-sovereignty',
  content: `
On 27 November 2025, the High Court of Kenya delivered a historic ruling affirming that farmers have the right to save and share their indigenous seeds. The court struck down punitive provisions of the Seed and Plant Varieties Act (CAP 326) that criminalized seed-saving, sharing, and exchange — offences previously punishable by up to two years in prison or a fine of KSh 1,000,000. :contentReference[oaicite:3]{index=3}

This legislation threatened to undermine traditional seed systems, erode cultural heritage, and marginalize smallholder farmers who depend on farmer-managed seed systems for food security and biodiversity. :contentReference[oaicite:4]{index=4} The ruling, therefore, is not just a legal win — it represents a reaffirmation of Kenya’s agricultural sovereignty and a triumph for communities preserving indigenous seed varieties. :contentReference[oaicite:5]{index=5}

With this decision, farmers are now free to conserve, exchange, and share indigenous seeds without fear of prosecution. The verdict reinforces the value of indigenous seed systems in climate-resilient agriculture, food security, and long-term sustainability by safeguarding agrobiodiversity and cultural heritage. :contentReference[oaicite:6]{index=6}

This outcome also sends a powerful signal against the push by large commercial seed companies to monopolize the seed supply, and restores agency to farmers to decide what they plant and preserve on their lands. :contentReference[oaicite:7]{index=7}
  `,
},
  {
    id: '3',
    title: 'Empowering Communities through Traditional Vegetables: A Success Story from Vihiga CBO',
    excerpt:
      "At the heart of Vihiga County, a powerful agricultural transformation is unfolding. Thanks to the collaborative efforts of the Seed Savers Network, Bioversity International & CIAT, FAO and ITGPRFA, local farmers are now reaping the benefits of capacity-building initiatives focused on sustainable production of traditional leafy vegetables.",
    author: "Seed Savers Team",
    date: "15 June 2023",
    readTime: "8 min read",
    tags: ["Conservation", "Research", "Indigenous Knowledge"],
    image: SpectacularImage,
    slug: "empowering-communities-traditional-vegetables-vihiga",
    content: `
In the heart of Vihiga County, a powerful agricultural transformation is unfolding. Thanks to the collaborative efforts of the Seed Savers Network, Bioversity International & CIAT, FAO and ITGPRFA, local farmers are now reaping the benefits of capacity-building initiatives focused on sustainable production of traditional leafy vegetables. These efforts, carried out through the Vihiga Community-Based Organization (CBO), are now bearing impressive fruit—both literally and figuratively.

The project centered on reviving and promoting the sustainable cultivation of Neglected and Underutilised Species (NUS), such as millet, sorghum cowpeas, crotalaria (commonly known as mitoo), African black nightshade (managu), Amaranth and Ethiopian kale (Kanzira). Through hands-on training and community empowerment, these vegetables, once overlooked, are now at the core of local food security and economic empowerment.

Seed Sovereignty and Food Security

One of the most notable achievements is the establishment and strengthening of the Vihiga CBO Community Seed Bank. Farmers who once struggled to access quality seeds now have reliable, well-stored seed reserves of these traditional vegetables. This has enabled consistent production cycles, ensuring both food availability at the household level and the opportunity for commercialization.

From Harvest to Income: Adding Value to Local Crops

The success of this initiative extends beyond the fields. Farmers are now engaging in value addition to reduce post-harvest losses and generate income. The vegetables are dried and processed into products that are both nutritious and market-ready.

Leading this innovation is youth chairman Evans Ochuto, who has become a local champion for agribusiness. Under his leadership, the CBO has developed a composite flour made from the dried leafy vegetables, now supplied to two local schools—Lwanda Education Centre and Neema Academy. This initiative generates a steady weekly income of KES 2,000, supporting both nutrition in schools and the livelihoods of local farmers.

In addition, the dried vegetables are being exported by Kenyans living in the diaspora. Packed and sold at KES 2,000 per 250g, this product has opened up a new market stream, earning sellers up to KES 50,000. This is a testament to the market potential of traditional crops when coupled with innovation and entrepreneurship.

Expanding Impact: Youth and Women at the Forefront

The Vihiga CBO has grown rapidly—from a modest group to 500 members drawn from all five sub-counties in Vihiga. The membership includes 100 youth, 50 men, and a remarkable 350 women, showcasing strong female participation in the movement toward food sovereignty and climate-smart agriculture.

The CBO is also now linked to a SACCO to promote savings and financial resilience among its members. This integration of agriculture and financial literacy is helping members build long-term economic stability.

A Hub for Learning and Research

The initiative has also become a center for learning and academic exchange. Currently, the CBO is hosting students from Kisii University and Maseno University, a student from Bukura Agricultural College, and two passionate volunteers. These learners are engaging directly with the farmers, gaining real-world knowledge on sustainable agriculture, seed banking and community-based development.

Conclusion

The Vihiga CBO is a shining example of how traditional knowledge, when empowered with modern techniques and institutional support, can transform communities. From improved nutrition and income generation to education and youth empowerment, this initiative is a model of inclusive and sustainable rural development.

As the movement grows, so too does the hope that other communities will follow in these footsteps—reviving their indigenous crops, safeguarding biodiversity, and building resilient food systems for generations to come.
    `,
  },
  {
    id: '4',
    title: 'Journalists Have a Critical Role in Safeguarding Kenya’s Food Systems',
    excerpt:
      "Agriculture, environment and climate journalists have been urged to take a keen interest in Kenya's agriculture policies by factually reporting on its effects on the country's food system.",
    author: "Seed Savers Team",
    date: "28 May 2025",
    readTime: "5 min read",
    tags: ["Community", "Empowerment", "Media"],
    image: Journalist,
    slug: "journalists-critical-role-safeguarding-food-systems",
    content: `
Agriculture, environment and climate journalists have been urged to take a keen interest in Kenya's agriculture policies by factually reporting on its effects on the country's food system.

Seed Savers Network (Kenya), Chief Executive Officer Daniel Wanjama says the media has a critical role in amplifying the country's hits and misses towards the realization of a food secure status.

"As journalists, you need to understand that whatever happens on the farm directly affects you, whether you are a farmer or not. When bad agricultural policies are passed, the entire nation suffers," Wanjama said.

Wanjama observed that journalists are powerful vessels for amplifying work being done by stakeholders within the food system sector, including farmers.

"The largest food producers in Kenya are the millions of smallholder farmers, and when they are being oppressed, the media has a duty to offer them a voice," he said.

He spoke during a one-day training workshop for journalists on Kenya's Farmer Managed Seed System. The journalists drawn from Nakuru, Nairobi, and Eastern Kenya counties were also updated on the progress of the seed case filed by smallholder farmers.

The case, whose judgment was set for November 27, 2025, was filed at the Machakos High Court challenging the legality of sections of the Seed and Plant Varieties Act (Cap. 326) of 2012 and the Seeds and Plant Varieties (Seeds) Regulations, 2016, which prohibit the sale and exchange of unregistered seed varieties.

During the sessions, the journalists were taken through the legal, social, and economic implications of the case.

Wanjama argued that many smallholder farmers in Kenya depend on the tradition of sharing seeds, and criminalizing the Farmer Managed Seed System threatens their livelihoods and undermines food security.

Elizabeth Atieno, a food campaigner from Greenpeace Africa, called for informed media coverage to help the public stay updated on the progress of the case.

"It is only through the work of journalists that Kenyans will understand the broader implications of such laws that threaten the country's food security," said Atieno.

She added, "The media plays a powerful role in shaping policy debates. By equipping journalists with accurate information, we hope to foster more balanced and inclusive reporting on seed sovereignty issues."

A tour around the Seed Savers farm in Gilgil provided the journalists with a firsthand account of the Farmer-Managed Food System and how it supports and enhances community resilience, biodiversity conservation, and food security.

The journalists were challenged to keep track of the seed litigation progress and continue amplifying the voices of farmers who may otherwise be left out of policy decisions.
    `,
  },
  {
    id: '5',
    title:
      "Farmers, Experts Hail Ban on Hazardous Pesticides, Call for Stronger Oversight",
    excerpt:
      "Biodiversity experts and sustainable agriculture proponents have commended the government's prohibition on the import and use of over 50 pesticide brands, citing its potential to safeguard public health and ecological integrity.",
    author: "Seed Savers Team",
    date: "22 May 2023",
    readTime: "6 min read",
    tags: ["Pesticides", "Health", "Policy"],
    image: Bio,
    slug: "farmers-hail-ban-hazardous-pesticides",
    content: `
Biodiversity experts and sustainable agriculture proponents have commended the government's prohibition on the import and use of over 50 pesticide brands, citing its potential to safeguard public health and ecological integrity.

During a recent inspection of pyrethrum farms in Molo, Nakuru County, Agriculture Cabinet Secretary Mutahi Kagwe emphasized that the policy shift is part of a strategic initiative to boost local agrochemical production and revitalize Kenya's pyrethrum sector as a sustainable pest management solution.

"We are going to stop importing these over 50 products, as they will now be produced here in Kenya. So, your market will not necessarily be abroad. Your market will be right here in Kenya. The government is prioritizing safer, locally-produced alternatives and is reviving the pyrethrum industry as a sustainable solution," Kagwe stated.

While the ban is framed as an economic measure to enhance domestic production, environmental organizations highlight its critical public health and ecological benefits. Many of the prohibited pesticides contain active ingredients already banned in the European Union (EU) and other jurisdictions due to their association with carcinogenicity, reproductive toxicity, and severe ecosystem disruption.

The Seeds Savers Network (SSN) Director, Daniel Wanjama welcomed the decision but questioned the prolonged approval of these hazardous substances in Kenya. He noted the irony of European-manufactured agrochemicals being prohibited in their countries of origin yet exported to Kenya, undermining both environmental and market security.

The excessive application of herbicides and synthetic pesticides has been linked to the alarming decline in pollinator populations, particularly bees, which are important for crop pollination. Their depletion poses a direct threat to ecosystem stability, agricultural productivity, and long-term food security.

"African countries, especially Kenya, are losing access to European markets because of chemical residues in their produce, chemicals ironically manufactured in Europe but banned for use there. As a result, what we grow often can't be exported and ends up being consumed only locally, raising serious health concerns such as cancer," Wanjama observed.

A 2020 report by the Heinrich Böll Foundation revealed concerning levels of pesticide residues in Kenyan agricultural produce, with up to 60 per cent of sampled crops, including tomatoes and kale, exceeding recommended safety thresholds.

At Seed Savers Network, we train farmers to make their own organic herbicides and fertilizers. We also advise them to move away from monoculture, as it increases the risk of pest, weed, and disease outbreaks.
    `,
  },
  {
    id: '6',
    title:
      "Characterization and Documentation of Traditional Leafy Vegetables in Vihiga",
    excerpt:
      "Leafy green vegetables dot the display tables as small holder farmers mill around the Traditional Vegetable Fair in Emaloba, Vihiga County, learning to understand how different varieties behave in various climatic zones.",
    author: "Seed Savers Team",
    date: "10 May 2023",
    readTime: "7 min read",
    tags: ["Nutrition", "Research", "Traditional Vegetables"],
    image: Image,
    slug: "characterization-traditional-leafy-vegetables-vihiga",
    content: `
Leafy green vegetables dot the display tables as small holder farmers mill around the Traditional Vegetable Fair in Emaloba, Vihiga County. Scientifically, the vegetables on display are known as African Nightshade, Jute Mallow, Amaranth, Cowpea, Spider Plant, Crotolaria and Ethiopian Kale but locally to farmers here, these vegetables are easily identified as Kunde, Managu, Sageti, Terere, Nderema, Kanzira and Mrenda.

Joseph Mukuna is one of the more than 60 farmers in this trade fair who was part of the participatory traditional vegetables' variety selection program by Bioversity and Seed Savers Network Kenya. "It all starts from the planting and we record every change in the plant, when it starts fruiting, pods and how long it takes to harvest," explained Mukuna.

The farmers observe the shape, size, and colour of leaves; the breadth and height of the plant, the number of pods a single plant has produced and the number of seeds in the pods. They also look at the colour of the flowers on the plants. All these are done using rulers and strings to help the farmers with data collection.

"I did not have this knowledge and there was no economic benefit to growing these traditional vegetables. Now I have a deeper understanding of the plant and how it behaves in different climatic conditions," added Mukuna.

Joseph is a Community Health Promoter who looks after 102 households. "I am very passionate about the health of pregnant mothers and children under the age of five. These vegetables are nutritious and they are important in meeting the nutritional health needs of the children and expectant mothers," said Mukuna.

According to Terryanne Wamucii, Assistant Programs Coordinator at Seed Savers Network Kenya, "The aim of this characterization is for farmers to be able to identify which crop varieties do well in the area and which pests and diseases attack different crop varieties."

For Seed Savers Network Kenya, having the farmers participate in the characterization of different varieties of traditional vegetables is one way of building their resilience in the age of climate change.
    `,
  },
  {
    id: '7',
    title:
      "Creating Seas of Change: Concepter Makokha's Rise in Agro-Entrepreneurship",
    excerpt:
      "In Musoli village, Vihiga County, Kenya, Concepter Makokha, a single mother of 3 children, transformed her life through training in product diversification and value addition.",
    author: "Seed Savers Team",
    date: "28 April 2023",
    readTime: "4 min read",
    tags: ["Women Empowerment", "Entrepreneurship", "Value Addition"],
    image: Spectacular,
    slug: "concepter-makokha-rise-agro-entrepreneurship",
    content: `
In Musoli village, Luanda Sub-county, Vihiga County, Kenya, Concepter Makokha is a happy and determined woman. As a single mother of 3 children, she faced immense financial struggles after the passing of her husband. However, in October 2024, her life took a significant turning point when she participated in a one-week intensive training organized by Seed Savers Network in partnership with the Alliance of Bioversity International & CIAT at the KIRDI Kisumu Branch.

The training equipped her with knowledge and practical skills, focusing on product diversification, value addition of priority crops including TLVs, red sorghum, finger millet, yellow maize, cassava, groundnuts and soya beans, food labeling and barcoding, legal compliance with KEBS and marketing strategies.

"After the training, I saw an opportunity to expand my 'Uji Power' business," Concepter shares. "Previously, I made porridge using only sorghum, millet and cassava. But through the training, I learned that I could enhance my recipe by adding groundnuts, soya, simsim, arrowroots, sweet potatoes and pumpkin seeds—ingredients known for their immunity boosting properties. Now I attract more customers than before."

For every jerrican of porridge she sells, she earns approximately Ksh1,000. Through her growing business, she has been able to support her daughter's university education—an achievement she takes great pride in.

Concepter's business has grown beyond daily sales; she now offers catering services at community events, providing porridge in various flavors. Her reputation as a skilled agro-entrepreneur was noticeable during the National Seed Fair held in October.

Concepter's story highlights the impact of empowering women in agriculture through training and support. She has turned adversity into opportunity, providing not only for her family but also nourishing her community with healthy, locally produced food.
    `,
  },
  {
    id: '8',
    title: 'Advancing Farmers’ Rights: A Commitment to Promoting Seed Access',
    excerpt:
      "Kenya has made a significant leap in advancing farmers' rights with the introduction of the Seeds and Plant Varieties (Conservation, Access, and Benefit Sharing of Plant Genetic Resources for Food and Agriculture) Regulations, 2024.",
    author: "Seed Savers Team",
    date: "15 April 2023",
    readTime: "5 min read",
    tags: ["Farmers Rights", "Policy", "Seed Access"],
    image: Access,
    slug: "advancing-farmers-rights-seed-access",
    content: `
Kenya has made a significant leap in advancing farmers' rights with the introduction of the Seeds and Plant Varieties (Conservation, Access, and Benefit Sharing of Plant Genetic Resources for Food and Agriculture) Regulations, 2024. These regulations, which align with the International Treaty on Plant Genetic Resources for Food and Agriculture (ITPGRFA), provide a strong framework for conserving agrobiodiversity and promoting equitable seed access.

The ABS Regulations offer critical provisions that address key challenges faced by farmers. Section 8 explicitly recognizes farmers' rights to save, exchange, and use seeds, reinforcing traditional practices vital for food security and cultural heritage. Section 9 introduces a streamlined process for communities to register ownership of plant genetic resources.

Sections 18 to 20 provide a clear protocol for accessing plant genetic resources, requiring prior informed consent (PIC) and mutually agreed terms (MAT) between communities and users. These measures ensure that benefits from the utilization of genetic resources are equitably shared.

Seed Savers Network collaborated with the government to host a public participation forum in Machakos County. This event served as a platform for farmers, community leaders, and stakeholders to share their perspectives on implementing the regulations. Among the suggestions made were calls to simplify registration processes, enhance government support for community seed banks, and strengthen protections for indigenous knowledge.

As Kenya charts a path toward food sovereignty, the Seeds and Plant Varieties (CABS) Regulations, 2024, represent a pivotal moment in protecting farmers' rights and promoting seed access. Through initiatives like public participation, advocacy, and education, SSN continues to empower farming communities to preserve their seeds, protect their knowledge, and secure their livelihoods.
    `,
  },
];

export const featuredPost: BlogPost = blogPosts[0];
export const otherPosts: BlogPost[] = blogPosts.slice(1);

export default blogPosts;
