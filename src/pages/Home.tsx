// src/pages/Home.tsx
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import '../styles/home.css';



const Home = () => {
  return (
    <div className="home-page">
      {/* Replaced the old hero section with the new Hero component */}
    
        <Hero />
      {/* Who We Are Section */}
      <WhoWeAre />
      {/* Footer or additional sections can be added here */}
    </div>
  );
};

export default Home;