// src/pages/Home.tsx
import Hero from '../components/Hero';
import '../styles/home.css';
import heroImage from '../assets/women-cultivating-crops-in-green-fields-4771650.jpg';

const Home = () => {
  return (
    <div className="home-page">
      {/* Replaced the old hero section with the new Hero component */}
      <Hero />

      <section className="intro-section">
        <div className="intro-content">
          <h2>Who We Are</h2>
          <p>
            Seed Savers Kenya is a non-profit organization dedicated to conserving traditional seed varieties 
            and supporting sustainable agricultural practices among local communities. Our work focuses on:
          </p>
          <ul className="feature-list">
            <li>Preserving indigenous seed biodiversity</li>
            <li>Empowering smallholder farmers with knowledge and resources</li>
            <li>Promoting climate-resilient farming practices</li>
            <li>Building community seed banks across Kenya</li>
          </ul>
        </div>
      </section>

      <section className="impact-section">
        <div className="impact-content">
          <h2>Our Impact</h2>
          <div className="impact-stats">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Seed Varieties Preserved</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1,200+</span>
              <span className="stat-label">Farmers Trained</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15</span>
              <span className="stat-label">Community Seed Banks</span>
            </div>
          </div>
        </div>
      </section>

      <section className="image-showcase">
        <img src={heroImage} alt="Farming community working in fields" />
      </section>
    </div>
  );
};

export default Home;