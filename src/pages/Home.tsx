// src/pages/Home.tsx
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import Maps from '../components/Maps';
import ContactSection from '../components/ContactSection';
import Newsletter from '../components/Newsletter';
import '../styles/home.css';
import heroImage from '../assets/women-cultivating-crops-in-green-fields-4771650.jpg';


const Home = () => {
  return (
    <div className="home-page">
      {/* Replaced the old hero section with the new Hero component */}
      <Hero />

      {/* Who We Are Section */}
      <WhoWeAre />

      <section className="image-showcase">
        <img src={heroImage} alt="Farming community working in fields" />
      </section>
      <Maps />
      <Newsletter />
      <ContactSection />

      {/* Footer or additional sections can be added here */}
    </div>
  );
};

export default Home;