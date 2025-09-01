import React from 'react';
import { FaCalendarAlt, FaUser, FaArrowRight } from 'react-icons/fa';
import { BiTime } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import '../styles/Blog.css';

const BlogPage: React.FC = () => {
  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <div className="ssk-blog-container">
      {/* Hero Section */}
      <section className="ne-hero">
         <div className="blog-hero-overlay">
        <div className="blog-hero-content">
          <div className="blog-hero-text">
            <h1 className="blog-main-title">Seed Knowledge Hub</h1>
            <p className="blog-subtitle">
              Insights, stories, and research on seed conservation and sustainable agriculture
            </p>
          </div>
        </div>
        </div>
      </section>

      <div className="blog-content-wrapper">
        {/* Featured Post */}
        <section className="blog-featured-section">
          <div className="section-header">
            <h2>Featured Story</h2>
            <div className="section-divider"></div>
          </div>
          
          
          <article className="featured-article">
            <div className="featured-image-container">
              <img src={featuredPost.image} alt={featuredPost.title} className="featured-image" />
              <div className="featured-badge">
                
                Featured
              </div>
            </div>
            
            <div className="featured-content">
              <div className="article-meta">
                <span className="meta-item">
                  <FaUser /> {featuredPost.author}
                </span>
                <span className="meta-item">
                  <FaCalendarAlt /> {featuredPost.date}
                </span>
                <span className="meta-item">
                  <BiTime /> {featuredPost.readTime}
                </span>
              </div>
              
              <h3 className="article-title">{featuredPost.title}</h3>
              <p className="article-excerpt">{featuredPost.excerpt}</p>
              
              <div className="article-tags">
                {featuredPost.tags.map((tag, i) => (
                  <span key={i} className="article-tag">{tag}</span>
                ))}
              </div>
              
              <Link to={`/blog/${featuredPost.slug}`} className="article-read-more">
                Read Full Story
                <FaArrowRight className="arrow-icon" />
              </Link>
            </div>
          </article>
        </section>

        {/* Blog Posts Grid */}
        <section className="blog-posts-section">
          <div className="section-header">
            <h2>Latest Articles</h2>
            <div className="section-divider"></div>
          </div>

          <div className="posts-grid">
            {otherPosts.map((post) => (
              <article key={post.id} className="post-card">
                <div className="post-image-container">
                  <img src={post.image} alt={post.title} />
                  <div className="post-overlay"></div>
                </div>
                
                <div className="post-content">
                  <div className="post-meta">
                    <span className="meta-item">
                      <FaUser /> {post.author}
                    </span>
                    <span className="meta-item">
                      <FaCalendarAlt /> {post.date}
                    </span>
                  </div>
                  
                  <h4 className="post-title">{post.title}</h4>
                  <p className="post-excerpt">{post.excerpt}</p>
                  
                  <div className="post-footer">
                    <div className="post-tags">
                      {post.tags.slice(0, 2).map((tag, i) => (
                        <span key={i} className="post-tag">{tag}</span>
                      ))}
                    </div>
                    
                    <Link to={`/blog/${post.slug}`} className="post-read-more">
                      Read More
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default BlogPage;