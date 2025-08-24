import { useEffect, useRef, useState } from 'react';
import '../styles/whoWeAre.css';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

// Replace with your actual image path
import teamPhoto from '../assets/about_us.jpg';

const stats = [
  { label: 'Farmers in Network', value: 96.5, suffix: 'K+' },
  { label: 'Documented Local Crop Varieties', value: 188 },
  { label: 'Seedbanks', value: 112, suffix: '+' },
  { label: 'Documented Lost Crop Varieties', value: 89 },
  { label: 'Kitchen Gardens', value: 7, suffix: 'K+' }
];

const WhoWeAre = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={`who-section ${visible ? 'fade-in' : ''}`}>
      <h2 className="section-title">Who We Are</h2>
      
      <div className="content-container">
        <div ref={textRef} className={`text-content ${visible ? 'slide-in-left' : ''}`}>
          <p className="intro-text">
            We believe that access to a wide variety of seeds is crucial for enhancing food sovereignty, resilience, and sustainability in agriculture. Our goal is to empower farmers by providing them with the resources and knowledge needed to cultivate diverse crops, thereby preserving biodiversity and adapting to changing climate conditions.
          </p>
        </div>
        
        <div ref={imageRef} className={`image-content ${visible ? 'slide-in-right' : ''}`}>
          <img src={teamPhoto} alt="Our team working with farmers" className="team-photo" />
          <div className="image-overlay"></div>
        </div>
      </div>

      <Link ref={ctaRef} to="/about" className={`btn-primary cta-button ${visible ? 'fade-in-up' : ''}`}>
        Read More <FaArrowRight />
      </Link>

      <div ref={cardsRef} className="card-container">
        <div className={`w-info-card ${visible ? 'slide-in-up' : ''}`} style={{ animationDelay: visible ? '0.2s' : '0s' }}>
          <div className="card-icon"></div>
          <h2>Our Mission</h2>
          <p>We are on a mission to conserve agrobiodiversity by strengthening communities' seed systems for improved seed access and enhanced food sovereignty.</p>
        </div>
        <div className={`w-info-card ${visible ? 'slide-in-up' : ''}`} style={{ animationDelay: visible ? '0.4s' : '0s' }}>
          <div className="w-card-icon"></div>
          <h2>Our Vision</h2>
          <p>To be a leading agent in promoting diverse seed access to farming communities.</p>
        </div>
      </div>

      <div ref={statsRef} className="who-stats-grid">
        {stats.map((stat, idx) => (
          <StatCard 
            key={idx} 
            {...stat} 
            trigger={visible} 
            order={idx}
          />
        ))}
      </div>
    </section>
  );
};

const StatCard = ({
  value,
  label,
  suffix = '',
  trigger,
  order
}: {
  value: number;
  label: string;
  suffix?: string;
  trigger: boolean;
  order: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 10);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 10);

    return () => clearInterval(counter);
  }, [trigger, value]);

  return (
    <div className="stat-card" style={{ animationDelay: trigger ? `${order * 0.1}s` : '0s' }}>
      <div className="stat-icon"></div>
      <h3>{count.toLocaleString()}<span>{suffix}</span></h3>
      <p>{label}</p>
    </div>
  );
};

export default WhoWeAre;