// src/pages/FutureOfIndigenousSeeds.tsx
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaArrowLeft } from 'react-icons/fa';
import SpectacularImage from '../assets/Spectacular.webp';
import Image from '../assets/vihiga leafy.webp';
import '../styles/Blog.css';
import SEO from "../components/SEO";


const FutureOfIndigenousSeeds = () => {

    <SEO
    title="Empowering Communities Through Traditional Vegetables | Future of Indigenous Seeds in Kenya"
    description="Discover how indigenous vegetables are transforming livelihoods in Vihiga County. Learn how Seed Savers Network Kenya is empowering communities through traditional crops, seed conservation, and agroecology."
    url="https://seedsaverskenya.org/blog/future-of-indigenous-seeds"
    image={SpectacularImage}
    keywords={[
      "indigenous seeds kenya",
      "traditional vegetables kenya",
      "vihiga county agriculture",
      "seed savers network kenya",
      "agroecology kenya",
      "community seed banks kenya",
      "local vegetables kenya",
      "african leafy vegetables",
      "food sovereignty kenya",
      "indigenous crop revival kenya"
    ]}
    jsonLd={{
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: "Empowering Communities through Traditional Vegetables",
      image: [SpectacularImage],
      author: {
        "@type": "Organization",
        name: "Seed Savers Network Kenya"
      },
      publisher: {
        "@type": "Organization",
        name: "Seed Savers Network Kenya",
        logo: {
          "@type": "ImageObject",
          url: "https://seedsaverskenya.org/logo.png"
        }
      },
      datePublished: "2023-06-15",
      description:
        "How traditional vegetables are empowering communities in Vihiga County through indigenous seed revival and sustainable agriculture initiatives.",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://seedsaverskenya.org/blog/future-of-indigenous-seeds"
      }
    }}
  />

  return (
    <div className="ssk-blog-post">
      <Link to="/blog" className="ssk-back-button">
        <FaArrowLeft /> Back to Blog
      </Link>

      <h1 className="ssk-post-title">Empowering Communities through Traditional Vegetables</h1>
      
      <div className="ssk-post-meta">
        <span><FaUser /> Seed Savers Team</span>
        <span><FaCalendarAlt /> 15 June 2023</span>
      </div>

      <div className="ssk-post-hero-image">
        <img src={SpectacularImage} alt="Traditional vegetables in Vihiga" />
      </div>

      <div className="ssk-post-content">
        <p className="ssk-post-intro">
          At the heart of Vihiga County, a powerful agricultural transformation is unfolding...
        </p>

        <h2>The Revival of Indigenous Crops</h2>
        <p>For decades, indigenous crops were overlooked...</p>

        <div className="ssk-post-image-container">
          <img src={Image} alt="Farmer holding vegetables" />
        </div>
      </div>
    </div>
  );
};

export default FutureOfIndigenousSeeds;