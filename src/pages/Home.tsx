// src/pages/Home.tsx
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import '../styles/home.css';
import EventPopup from '../components/EventPopup';


const Home = () => {
  return (
    <div className="home-page">
      {/* Replaced the old hero section with the new Hero component */}
      <EventPopup />
        <Hero />
      {/* Who We Are Section */}
      <WhoWeAre />
      {/* Footer or additional sections can be added here */}
    </div>
  );
};

export default Home;