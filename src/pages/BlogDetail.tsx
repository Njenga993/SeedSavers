// src/pages/BlogDetails.tsx
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { FaArrowLeft, FaCalendarAlt, FaUser, FaTag, FaShareAlt, FaBookmark } from 'react-icons/fa';
import '../styles/BlogDetails.css';

export default function BlogDetails() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="blog-details-container">
        <div className="not-found-content">
          <h2>Article Not Found</h2>
          <p>The article you're looking for doesn't exist or may have been moved.</p>
          <Link to="/blog" className="back-link">
            <FaArrowLeft /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-details-container">
      {/* Hero Section */}
      <div className="blog-hero">
        <div className="breadcrumb">
          <Link to="/blog">Blog</Link> / {post.category}
        </div>
        <h1 className="blog-title">{post.title}</h1>
        <p className="blog-excerpt">{post.excerpt}</p>
        
        <div className="blog-meta">
          <div className="author-info">
            <div className="author-avatar">
              {post.author.charAt(0).toUpperCase()}
            </div>
            <span><FaUser /> {post.author}</span>
          </div>
          <span><FaCalendarAlt /> {post.date}</span>
          <span>{post.readTime} read</span>
        </div>
        
        <div className="action-buttons">
          <button className="share-button"><FaShareAlt /> Share</button>
          <button className="save-button"><FaBookmark /> Save</button>
        </div>
      </div>

      {/* Featured Image */}
      <div className="blog-image-container">
        <img src={post.image} alt={post.title} className="blog-featured-image" />
        {post.imageCaption && <p className="image-caption">{post.imageCaption}</p>}
      </div>

      {/* Content */}
      <article className="blog-content">
        {post.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className={index % 3 === 0 ? "highlight-paragraph" : ""}>
            {paragraph.trim()}
          </p>
        ))}
        
        {post.quote && (
          <blockquote className="blog-quote">
            "{post.quote}"
          </blockquote>
        )}
      </article>

      {/* Tags and Social Sharing */}
      <div className="blog-footer">
        <div className="blog-tags">
          <h3>Topics:</h3>
          <div className="tags-container">
            {post.tags.map((tag, i) => (
              <span key={i} className="tag"><FaTag /> {tag}</span>
            ))}
          </div>
        </div>
        
        <div className="social-sharing">
          <h3>Share this article:</h3>
          <div className="social-buttons">
            <button className="twitter">Twitter</button>
            <button className="facebook">Facebook</button>
            <button className="linkedin">LinkedIn</button>
          </div>
        </div>
      </div>

      {/* Back Link */}
      <div className="back-button">
        <Link to="/blog"><FaArrowLeft /> Back to Blog</Link>
      </div>
      
      {/* Newsletter CTA */}
      <div className="newsletter-cta">
        <h3>Enjoyed this article?</h3>
        <p>Subscribe to our newsletter for more content like this</p>
        <form className="subscribe-form">
          <input type="email" placeholder="Your email address" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
}