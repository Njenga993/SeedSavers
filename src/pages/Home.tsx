// src/pages/Home.tsx
import Hero from '../components/Hero';
import WhoWeAre from '../components/WhoWeAre';
import Maps from '../components/Maps';
import ContactSection from '../components/ContactSection';
import Newsletter from '../components/Newsletter';
import '../styles/home.css';

import Testimonials from '../components/Testimonials';
import EventPopup from '../components/EventPopup';
import SeedSchool from '../components/SeedSchool';
import IncubationProgram from '../components/IncubationProgram';
import CommunitySeedBank from '../components/CommunitySeedBank';


const Home = () => {
  return (
    <div className="home-page">
      {/* Replaced the old hero section with the new Hero component */}
      <EventPopup />
        <Hero />

      {/* Who We Are Section */}
      <WhoWeAre />


      <CommunitySeedBank />
      <IncubationProgram />
      <SeedSchool />
      <Testimonials />
      <Maps />
      <Newsletter />
      <ContactSection />

      {/* Footer or additional sections can be added here */}
    </div>
  );
};

export default Home;