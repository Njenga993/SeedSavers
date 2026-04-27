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
} from "react-icons/fa";
import "../styles/BlogDetails.css";

export default function BlogDetails() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  const handleShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: post?.title,
          text: post?.excerpt,
          url: window.location.href,
        })
        .catch((error) => {
          console.log("Error sharing:", error);
        });
    } else {
      navigator.clipboard
        .writeText(window.location.href)
        .then(() => {
          alert("Link copied to clipboard!");
        })
        .catch(() => {
          // Fallback for older browsers
          const tempInput = document.createElement("input");
          tempInput.value = window.location.href;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand("copy");
          document.body.removeChild(tempInput);
          alert("Link copied to clipboard!");
        });
    }
  };

  const handleSave = () => {
    // Get existing saved posts or initialize empty array
    const savedPosts = JSON.parse(localStorage.getItem("savedPosts") || "[]");

    // Check if post is already saved
    const isAlreadySaved = savedPosts.some(
      (saved: any) => saved.slug === post?.slug,
    );

    if (isAlreadySaved) {
      // Remove from saved
      const updatedSaved = savedPosts.filter(
        (saved: any) => saved.slug !== post?.slug,
      );
      localStorage.setItem("savedPosts", JSON.stringify(updatedSaved));
      alert("Article removed from your reading list!");
    } else {
      // Add to saved
      savedPosts.push({
        slug: post?.slug,
        title: post?.title,
        excerpt: post?.excerpt,
        date: post?.date,
        savedAt: new Date().toISOString(),
      });
      localStorage.setItem("savedPosts", JSON.stringify(savedPosts));
      alert("Article saved to your reading list!");
    }
  };

  const handleSocialShare = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(post?.title || "");

    let shareUrl = "";

    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${title}`;
        break;
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
        break;
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "noopener,noreferrer");
    }
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
            <span>
              <FaUser /> {post.author || "Anonymous"}
            </span>
          </div>
          <span>
            <FaCalendarAlt /> {post.date}
          </span>
          <span>
            <FaUser /> {post.readTime}
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
      <article className="bd-content">
        {post.content.split("\n\n").map((paragraph, index) => (
          <p
            key={index}
            className={index % 3 === 0 ? "bd-highlight-paragraph" : ""}
          >
            {paragraph.trim()}
          </p>
        ))}

        {post.quote && (
          <blockquote className="bd-quote">"{post.quote}"</blockquote>
        )}
      </article>

      {/* ================= CTA BUTTONS ================= */}
      {post.ctas && post.ctas.length > 0 && (
        <div className="ne-featured-cta-wrapper blog-detail-cta">
          {post.ctas.map((cta, index) => (
            <a
              key={index}
              href={cta.href}
              target={cta.target ?? "_blank"}
              rel="noopener noreferrer"
              className={`ne-featured-cta-btn ${
                cta.variant === "secondary"
                  ? "ne-featured-cta-btn--secondary"
                  : "ne-featured-cta-btn--primary"
              }`}
              onClick={(e) => e.stopPropagation()}
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
              onClick={() => handleSocialShare("twitter")}
            >
              <FaTwitter /> Twitter
            </button>
            <button
              className="bd-facebook"
              onClick={() => handleSocialShare("facebook")}
            >
              <FaFacebookF /> Facebook
            </button>
            <button
              className="bd-linkedin"
              onClick={() => handleSocialShare("linkedin")}
            >
              <FaLinkedin /> LinkedIn
            </button>
          </div>
        </div>
      </div>

      {/* Back Link */}
      <div className="bd-back-button">
        <Link to="/blog">
          <FaArrowLeft /> Back to Blog
        </Link>
      </div>

      {/* Newsletter CTA */}
      <div className="bd-newsletter-cta">
        <h3>Enjoyed this article?</h3>
        <p>Subscribe to our newsletter for more content like this</p>
        <form
          className="bd-subscribe-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <input type="email" placeholder="Your email address" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  );
}
