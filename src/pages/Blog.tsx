import React from 'react';
import { FaCalendarAlt, FaUser,  FaArrowRight } from 'react-icons/fa';
import { BiTime } from 'react-icons/bi';
import SpectacularImage from '../assets/Spectacular.jpg';
import Spectacular from '../assets/Makokha.jpg';
import Image from '../assets/vihiga leafy.png';
import Access from '../assets/seedaccess.jpeg';
import Journalist from '../assets/journalists.jpeg';
import Bio from '../assets/Bio-pesticides.jpeg';
import '../styles/Blog.css';

type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  image: string;
  slug: string;
};

const BlogPage: React.FC = () => {
  const featuredPost: BlogPost = {
    id: '1',
    title: 'Empowering Communities through Traditional Vegetables: A Success Story from Vihiga CBO',
    excerpt: 'At the heart of Vihiga County, a powerful agricultural transformation is unfolding. Thanks to the collaborative efforts of the Seed Savers Network, Bioversity International & CIAT, FAO and ITGPRFA,',
    author: 'Seed Savers Team',
    date: '15 June 2023',
    readTime: '8 min read',
    tags: ['Conservation', 'Research', 'Indigenous Knowledge'],
    image: SpectacularImage,
    slug: 'future-of-indigenous-seeds'
  };

  const blogPosts: BlogPost[] = [
    {
      id: '2',
      title: 'Journalists Have a Critical Role in Safeguarding Kenya’s Food Systems',
      excerpt: 'Agriculture, environment and climate journalists have been urged to take a keen interest in Kenya’s agriculture policies by factually reporting on its effects on the country’s food system.  Seed Savers Network (Kenya),',
      author: 'Seed Savers Team',
      date: '2 June 2023',
      readTime: '5 min read',
      tags: ['Community', 'Empowerment'],
      image: Journalist,
      slug: 'community-seed-banks'
    },
    {
      id: '3',
      title: 'Farmers, Experts Hail Ban on Hazardous Pesticides, Call for Stronger Oversight',
      excerpt: 'Biodiversity experts and sustainable agriculture proponents have commended the government’s prohibition on the import and use of over 50 pesticide brands, citing its potential to safeguard public health and ecological integrity. ',
      author: 'Seed Savers Team',
      date: '22 May 2023',
      readTime: '6 min read',
      tags: ['Youth', 'Education'],
      image: Bio,
      slug: 'youth-agroecology'
    },
    {
      id: '4',
      title: 'Characterization and Documentation of Traditional Leafy Vegetables in Vihiga',
      excerpt: 'Leafy green vegetables dot the display tables as small holder farmers mill around the Traditional Vegetable Fair in Emaloba, Vihiga County. Scientifically, the vegetables on display are known as..',
      author: 'Seed Savers Team',
      date: '10 May 2023',
      readTime: '7 min read',
      tags: ['Nutrition', 'Research'],
      image: Image,
      slug: 'traditional-crops-nutrition'
    },
    {
      id: '5',
      title: 'Creating Seas of Change: Concepter Makokha’s Rise in Agro-Entrepreneurship.',
      excerpt: ' In Musoli village, Luanda Sub-county, Vihiga County, Kenya, Concepter Makokha is a happy and determined woman. As a single mother of 3 children, she faced immense financial struggles after..',
      author: 'Seed Savers Team',
      date: '28 April 2023',
      readTime: '4 min read',
      tags: ['Techniques', 'Climate Adaptation'],
      image: Spectacular,
      slug: 'seed-saving-dry-regions'
    },
    {
      id: '6',
      title: 'Advancing Farmers’ Rights: A Commitment to Promoting Seed Access',
      excerpt: 'Kenya has made a significant leap in advancing farmers’ rights with the introduction of the Seeds and Plant Varieties (Conservation, Access, and Benefit Sharing of Plant Genetic Resources for Food and Agriculture)',
      author: 'Seed Savers Team',
      date: '15 April 2023',
      readTime: '5 min read',
      tags: ['Women', 'Community'],
      image: Access,
      slug: 'women-seed-conservation'
    }
  ];

  const popularTags = [
    'Conservation', 'Indigenous Knowledge', 'Climate Change',
    'Community', 'Research', 'Nutrition', 'Youth', 'Women'
  ];

  return (
    <div className="ssk-blog-container">
      {/* Hero Section */}
     <section className="resources-hero">
        <div className="hero-overlay">
          <h1 className="ssk-blog-main-title">Seed Knowledge Hub</h1>
          <p className="ssk-blog-subtitle">
            Insights, stories, and research on seed conservation and sustainable agriculture
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="ssk-blog-layout">
        {/* Featured Post */}
        <section className="ssk-featured-post">
          <div className="ssk-featured-image-container">
            <img 
              src={featuredPost.image} 
              alt={featuredPost.title} 
              className="ssk-featured-image"
            />
            <div className="ssk-featured-badge">Featured</div>
          </div>
          <div className="ssk-featured-content">
            <div className="ssk-post-meta">
              <span className="ssk-meta-item">
                <FaUser className="ssk-meta-icon" /> {featuredPost.author}
              </span>
              <span className="ssk-meta-item">
                <FaCalendarAlt className="ssk-meta-icon" /> {featuredPost.date}
              </span>
              <span className="ssk-meta-item">
                <BiTime className="ssk-meta-icon" /> {featuredPost.readTime}
              </span>
            </div>
            <h2 className="ssk-featured-title">{featuredPost.title}</h2>
            <p className="ssk-featured-excerpt">{featuredPost.excerpt}</p>
            <div className="ssk-tag-container">
              {featuredPost.tags.map((tag, index) => (
                <span key={index} className="ssk-tag">{tag}</span>
              ))}
            </div>
            <a href={`/blog/${featuredPost.slug}`} className="ssk-read-more">
              Read Article <FaArrowRight className="ssk-arrow-icon" />
            </a>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <div className="ssk-blog-main">
          <section className="ssk-posts-section">
            <h2 className="ssk-section-title">Latest Articles</h2>
            <div className="ssk-posts-grid">
              {blogPosts.map((post) => (
                <article key={post.id} className="ssk-post-card">
                  <div className="ssk-post-image-container">
                    <img src={post.image} alt={post.title} className="ssk-post-image" />
                  </div>
                  <div className="ssk-post-content">
                    <div className="ssk-post-meta">
                      <span className="ssk-meta-item">
                        <FaUser className="ssk-meta-icon" /> {post.author}
                      </span>
                      <span className="ssk-meta-item">
                        <FaCalendarAlt className="ssk-meta-icon" /> {post.date}
                      </span>
                    </div>
                    <h3 className="ssk-post-title">{post.title}</h3>
                    <p className="ssk-post-excerpt">{post.excerpt}</p>
                    <div className="ssk-post-footer">
                      <div className="ssk-tag-container">
                        {post.tags.map((tag, index) => (
                          <span key={index} className="ssk-tag">{tag}</span>
                        ))}
                      </div>
                      <a href={`/blog/${post.slug}`} className="ssk-read-more">
                        Read More <FaArrowRight className="ssk-arrow-icon" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Pagination */}
          <div className="ssk-pagination">
            <button className="ssk-pagination-button ssk-active">1</button>
            <button className="ssk-pagination-button">2</button>
            <button className="ssk-pagination-button">3</button>
            <button className="ssk-pagination-button ssk-next-button">
              Next <FaArrowRight />
            </button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="ssk-blog-sidebar">
          {/* Search */}
          <div className="ssk-sidebar-widget">
            <h3 className="ssk-widget-title">Search Articles</h3>
            <div className="ssk-search-container">
              <input
                type="text"
                placeholder="Search blog..."
                className="ssk-search-input"
              />
              <button className="ssk-search-button">
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Categories */}
          <div className="ssk-sidebar-widget">
            <h3 className="ssk-widget-title">Categories</h3>
            <ul className="ssk-category-list">
              <li className="ssk-category-item">
                <a href="#" className="ssk-category-link">
                  Conservation <span className="ssk-category-count">12</span>
                </a>
              </li>
              <li className="ssk-category-item">
                <a href="#" className="ssk-category-link">
                  Indigenous Knowledge <span className="ssk-category-count">8</span>
                </a>
              </li>
              <li className="ssk-category-item">
                <a href="#" className="ssk-category-link">
                  Community Projects <span className="ssk-category-count">15</span>
                </a>
              </li>
              <li className="ssk-category-item">
                <a href="#" className="ssk-category-link">
                  Research <span className="ssk-category-count">6</span>
                </a>
              </li>
              <li className="ssk-category-item">
                <a href="#" className="ssk-category-link">
                  Success Stories <span className="ssk-category-count">9</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Popular Tags */}
          <div className="ssk-sidebar-widget">
            <h3 className="ssk-widget-title">Popular Tags</h3>
            <div className="ssk-tags-container">
              {popularTags.map((tag, index) => (
                <a key={index} href="#" className="ssk-tag-link">{tag}</a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="ssk-sidebar-widget">
            <h3 className="ssk-widget-title">Stay Updated</h3>
            <p className="ssk-newsletter-text">
              Subscribe to our newsletter for the latest articles on seed conservation
            </p>
            <form className="ssk-newsletter-form">
              <input
                type="email"
                placeholder="Your email address"
                className="ssk-newsletter-input"
                required
              />
              <button type="submit" className="ssk-newsletter-button">
                Subscribe
              </button>
            </form>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogPage;