// src/pages/Home.tsx
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import SEO from '../components/SEO';   // <-- IMPORTANT
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home-page">

      {/* ---------- SEO Metadata ---------- */}
      <SEO
        title="Seed Savers Network Kenya – Indigenous Seed Preservation, Community Seed Banks & Agroecology Training"
        description="Seed Savers Network Kenya promotes indigenous seed preservation, agro-biodiversity, community seed banks, farmer-led seed conservation, food sovereignty, and agroecology training across Kenya."
        url="https://seedsaverskenya.org/"
        image="https://seedsaverskenya.org/og-image.jpg"
        keywords={[
          "Seed Savers Network Kenya",
          "indigenous seed preservation Kenya",
          "community seed saving Kenya",
          "agro-biodiversity Kenya",
          "heirloom seeds Kenya",
          "community seed banks Africa",
          "farmer-led seed management",
          "agroecology Kenya",
          "food security Kenya",
          "seed sovereignty Kenya",
          "traditional seeds Kenya",
          "seed school Kenya",
        ]}
      />

      {/* ---------- H1 (Needed for SEO) ---------- */}
      <h1 className="visually-hidden">
        Seed Savers Network Kenya – Indigenous Seed Preservation & Agroecology Programs
      </h1>

      {/* Hero Section */}
      <Hero />

      {/* Who We Are Section */}
      <WhoWeAre />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Seed Savers Network Kenya",
          "url": "https://seedsaverskenya.org",
          "logo": "https://seedsaverskenya.org/logo.png",
          "description": "Seed Savers Network Kenya supports indigenous seed preservation, agroecology training, farmer empowerment, and community seed banks across Kenya.",
          "areaServed": ["Kenya", "Vihiga County", "Gilgil", "East Africa"],
          "sameAs": [
            "https://www.facebook.com/seedsaverskenya",
            "https://twitter.com/seedsaverskenya",
            "https://www.instagram.com/seedsaverskenya"
          ]
        })}
      </script>

    </div>
  );
};

export default Home;
