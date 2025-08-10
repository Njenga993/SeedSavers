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
      <section className="resources-hero">
        <div className="hero-overlay">
          <h1 className="ssk-blog-main-title">Seed Knowledge Hub</h1>
          <p className="ssk-blog-subtitle">
            Insights, stories, and research on seed conservation and sustainable agriculture
          </p>
        </div>
      </section>

      <div className="ssk-blog-layout">
        {/* Featured Post */}
        <section className="ssk-featured-post">
          <div className="ssk-featured-image-container">
            <img src={featuredPost.image} alt={featuredPost.title} className="ssk-featured-image" />
            <div className="ssk-featured-badge">Featured</div>
          </div>
          <div className="ssk-featured-content">
            <div className="ssk-post-meta">
              <span className="ssk-meta-item">
                <FaUser /> {featuredPost.author}
              </span>
              <span className="ssk-meta-item">
                <FaCalendarAlt /> {featuredPost.date}
              </span>
              <span className="ssk-meta-item">
                <BiTime /> {featuredPost.readTime}
              </span>
            </div>
            <h2>{featuredPost.title}</h2>
            <p>{featuredPost.excerpt}</p>
            <div className="ssk-tag-container">
              {featuredPost.tags.map((tag, i) => (
                <span key={i} className="ssk-tag">{tag}</span>
              ))}
            </div>
            <Link to={`/blog/${featuredPost.slug}`} className="ssk-read-more">
  Read Article <FaArrowRight className="ssk-arrow-icon" />
</Link>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <div className="ssk-blog-main">
          <section className="ssk-posts-section">
            <h2>Latest Articles</h2>
            <div className="ssk-posts-grid">
              {otherPosts.map((post) => (
                <article key={post.id} className="ssk-post-card">
                  <div className="ssk-post-image-container">
                    <img src={post.image} alt={post.title} />
                  </div>
                  <div className="ssk-post-content">
                    <div className="ssk-post-meta">
                      <span><FaUser /> {post.author}</span>
                      <span><FaCalendarAlt /> {post.date}</span>
                    </div>
                    <h3>{post.title}</h3>
                    <p>{post.excerpt}</p>
                    <div className="ssk-post-footer">
                      <div className="ssk-tag-container">
                        {post.tags.map((tag, i) => (
                          <span key={i} className="ssk-tag">{tag}</span>
                        ))}
                      </div>
                      <Link to={`/blog/${post.slug}`} className="ssk-read-more">
  Read More <FaArrowRight />
</Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
