// src/pages/BlogDetails.tsx
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { FaArrowLeft, FaCalendarAlt, FaUser, FaTag } from 'react-icons/fa';
import '../styles/BlogDetails.css';

export default function BlogDetails() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="blog-details-container">
        <h2>Article Not Found</h2>
        <Link to="/blog" className="back-link">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="blog-details-container">
      {/* Hero Section */}
      <div className="blog-hero">
        <h1 className="blog-title">{post.title}</h1>
        <div className="blog-meta">
          <span><FaUser /> {post.author}</span>
          <span><FaCalendarAlt /> {post.date}</span>
          <span>{post.readTime}</span>
        </div>
      </div>

      {/* Featured Image */}
      <div className="blog-image-container">
        <img src={post.image} alt={post.title} className="blog-featured-image" />
      </div>

      {/* Content */}
      <div className="blog-content">
        {post.content.split('\n').map((paragraph, index) => (
          <p key={index}>{paragraph.trim()}</p>
        ))}
      </div>

      {/* Tags */}
      <div className="blog-tags">
        {post.tags.map((tag, i) => (
          <span key={i} className="tag"><FaTag /> {tag}</span>
        ))}
      </div>

      {/* Back Link */}
      <div className="back-button">
        <Link to="/blog"><FaArrowLeft /> Back to Blog</Link>
      </div>
    </div>
  );
  
}

