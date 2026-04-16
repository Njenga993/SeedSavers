// src/pages/BlogDetails.tsx
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data/blogData";
import {
  FaArrowLeft,
  FaCalendarAlt,
  FaUser,
  FaTag,
  FaShareAlt,
  FaBookmark,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
  FaClock,
} from "react-icons/fa";
import "../styles/BlogDetails.css";

export default function BlogDetails() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post?.title,
        text: post?.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  const handleSave = () => {
    // Implement save to reading list functionality
    localStorage.setItem("savedPost", JSON.stringify(post));
    alert("Article saved to your reading list!");
  };

  if (!post) {
    return (
      <div className="bd-container">
        <div className="bd-not-found">
          <h2>Article Not Found</h2>
          <p>
            The article you're looking for doesn't exist or may have been moved.
          </p>
          <Link to="/blog" className="bd-back-link">
            <FaArrowLeft /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Format content with proper paragraph splitting
  const formatContent = (content: string) => {
    // Split by double newlines for paragraphs
    const paragraphs = content.split("\n\n");
    return paragraphs.map((paragraph, index) => {
      // Check if paragraph contains HTML tags
      if (
        paragraph.includes("<h2>") ||
        paragraph.includes("<h3>") ||
        paragraph.includes("<ul>")
      ) {
        return (
          <div key={index} dangerouslySetInnerHTML={{ __html: paragraph }} />
        );
      }
      if (paragraph.trim()) {
        return <p key={index}>{paragraph.trim()}</p>;
      }
      return null;
    });
  };

  return (
    <div className="bd-container">
      {/* Hero Section */}
      <div className="bd-hero">
        <div className="bd-breadcrumb">
          <Link to="/blog">Blog</Link> / {post.category ?? "Seed Stories"}
        </div>
        <h1 className="bd-title">{post.title}</h1>
        <p className="bd-excerpt">{post.excerpt}</p>

        <div className="bd-meta">
          <div className="bd-author-info">
            <div className="bd-author-avatar">
              {post.author ? post.author.charAt(0).toUpperCase() : "S"}
            </div>
            <span>
              <FaUser /> {post.author || "Seed Savers Network"}
            </span>
          </div>
          <span>
            <FaCalendarAlt /> {post.date}
          </span>
          <span>
            <FaClock /> {post.readTime}
          </span>
        </div>

        <div className="bd-action-buttons">
          <button className="bd-share-button" onClick={handleShare}>
            <FaShareAlt /> Share
          </button>
          <button className="bd-save-button" onClick={handleSave}>
            <FaBookmark /> Save
          </button>
        </div>
      </div>

      {/* Featured Image */}
      <div className="bd-image-container">
        <img src={post.image} alt={post.title} className="bd-featured-image" />
        {post.imageCaption && (
          <p className="bd-image-caption">{post.imageCaption}</p>
        )}
      </div>

      {/* Quote (if present) */}
      {post.quote && (
        <div className="bd-quote-container">
          <blockquote className="bd-quote">"{post.quote}"</blockquote>
        </div>
      )}

      {/* Content */}
      <article className="bd-content">{formatContent(post.content)}</article>

      {/* CTA BUTTONS */}
      {post.ctas && post.ctas.length > 0 && (
        <div className="bd-cta-wrapper">
          <div className="bd-cta-container">
            <h3 className="bd-cta-title">Take Action</h3>
            <div className="bd-cta-buttons">
              {post.ctas.map((cta, index) => (
                <a
                  key={index}
                  href={cta.href}
                  target={cta.target ?? "_blank"}
                  rel={
                    cta.target === "_blank" ? "noopener noreferrer" : undefined
                  }
                  className={`bd-cta-btn ${cta.variant === "secondary" ? "bd-cta-btn-secondary" : "bd-cta-btn-primary"}`}
                >
                  {cta.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tags and Social Sharing */}
      <div className="bd-footer">
        <div className="bd-tags">
          <h3>Topics:</h3>
          <div className="bd-tags-container">
            {post.tags.map((tag, i) => (
              <span key={i} className="bd-tag">
                <FaTag /> {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="bd-social-sharing">
          <h3>Share this article:</h3>
          <div className="bd-social-buttons">
            <button
              className="bd-twitter"
              onClick={() =>
                window.open(
                  `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`,
                  "_blank",
                )
              }
            >
              <FaTwitter /> Twitter
            </button>
            <button
              className="bd-facebook"
              onClick={() =>
                window.open(
                  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
                  "_blank",
                )
              }
            >
              <FaFacebookF /> Facebook
            </button>
            <button
              className="bd-linkedin"
              onClick={() =>
                window.open(
                  `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`,
                  "_blank",
                )
              }
            >
              <FaLinkedin /> LinkedIn
            </button>
          </div>
        </div>
      </div>

      {/* Back Link */}
      <div className="bd-back-button">
        <Link to="/blog">
          <FaArrowLeft /> Back to All Articles
        </Link>
      </div>

      {/* Newsletter CTA */}
      <div className="bd-newsletter-cta">
        <h3>Enjoyed this article?</h3>
        <p>Subscribe to our newsletter for more content like this</p>
        <form
          className="bd-subscribe-form"
          onSubmit={(e) => {
            e.preventDefault();
            const email = (
              e.currentTarget.elements.namedItem("email") as HTMLInputElement
            ).value;
            alert(`Thanks for subscribing! We'll send updates to ${email}`);
            e.currentTarget.reset();
          }}
        >
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
}
