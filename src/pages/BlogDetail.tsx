import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { 
  FaArrowLeft, FaCalendarAlt, FaUser, FaTag, 
  FaShareAlt, FaBookmark, FaFacebookF, FaTwitter, FaLinkedin 
} from 'react-icons/fa';
import '../styles/BlogDetails.css';

export default function BlogDetails() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="bd-container">
        <div className="bd-not-found">
          <h2>Article Not Found</h2>
          <p>The article you're looking for doesn't exist or may have been moved.</p>
          <Link to="/blog" className="bd-back-link">
            <FaArrowLeft /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bd-container">
      {/* Hero Section */}
      <div className="bd-hero">
        <div className="bd-breadcrumb">
          <Link to="/blog">Blog</Link> / {post.category ?? "General"}
        </div>
        <h1 className="bd-title">{post.title}</h1>
        <p className="bd-excerpt">{post.excerpt}</p>
        
        <div className="bd-meta">
          <div className="bd-author-info">
            <div className="bd-author-avatar">
              {post.author ? post.author.charAt(0).toUpperCase() : "A"}
            </div>
            <span><FaUser /> {post.author || "Anonymous"}</span>
          </div>
          <span><FaCalendarAlt /> {post.date}</span>
          <span>{post.readTime} read</span>
        </div>
        
        <div className="bd-action-buttons">
          <button className="bd-share-button"><FaShareAlt /> Share</button>
          <button className="bd-save-button"><FaBookmark /> Save</button>
        </div>
      </div>

      {/* Featured Image */}
      <div className="bd-image-container">
        <img src={post.image} alt={post.title} className="bd-featured-image" />
        {post.imageCaption && <p className="bd-image-caption">{post.imageCaption}</p>}
      </div>

      {/* Content */}
      <article className="bd-content">
        {post.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className={index % 3 === 0 ? "bd-highlight-paragraph" : ""}>
            {paragraph.trim()}
          </p>
        ))}
        
        {post.quote && (
          <blockquote className="bd-quote">
            "{post.quote}"
          </blockquote>
        )}
      </article>

      {/* ================= CTA BUTTONS ================= */}
      {post.ctas && post.ctas.length > 0 && (
        <div className="ne-featured-cta-wrapper blog-detail-cta">
          {post.ctas.map((cta, index) => (
            <a
              key={index}
              href={cta.href}
              target={cta.target ?? '_blank'}          // open in new tab by default
              rel="noopener noreferrer"               // safe for external links
              className={`ne-featured-cta-btn ${
                cta.variant === 'secondary'
                  ? 'ne-featured-cta-btn--secondary'
                  : 'ne-featured-cta-btn--primary'
              }`}
              onClick={(e) => e.stopPropagation()}    // prevent React Router interference
            >
              {cta.label}
            </a>
          ))}
        </div>
      )}

      {/* Tags and Social Sharing */}
      <div className="bd-footer">
        <div className="bd-tags">
          <h3>Topics:</h3>
          <div className="bd-tags-container">
            {post.tags.map((tag, i) => (
              <span key={i} className="bd-tag"><FaTag /> {tag}</span>
            ))}
          </div>
        </div>
        
        <div className="bd-social-sharing">
          <h3>Share this article:</h3>
          <div className="bd-social-buttons">
            <button className="bd-twitter">
              <FaTwitter /> Twitter
            </button>
            <button className="bd-facebook">
              <FaFacebookF /> Facebook
            </button>
            <button className="bd-linkedin">
              <FaLinkedin /> LinkedIn
            </button>
          </div>
        </div>
      </div>

      {/* Back Link */}
      <div className="bd-back-button">
        <Link to="/blog"><FaArrowLeft /> Back to Blog</Link>
      </div>
      
      {/* Newsletter CTA */}
      <div className="bd-newsletter-cta">
        <h3>Enjoyed this article?</h3>
        <p>Subscribe to our newsletter for more content like this</p>
        <form className="bd-subscribe-form">
          <input type="email" placeholder="Your email address" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
}
