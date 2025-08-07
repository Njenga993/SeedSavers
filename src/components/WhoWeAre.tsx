import { useEffect, useRef, useState } from 'react';
import '../styles/whoWeAre.css';

const stats = [
  { label: 'Farmers in Network', value: 96.5, suffix: 'K+' },
  { label: 'Documented Local Crop Varieties', value: 188 },
  { label: 'Seedbanks', value: 120, suffix: '+' },
  { label: 'Documented Lost Crop Varieties', value: 89 },
  { label: 'Kitchen Gardens', value: 7, suffix: 'K+' }
];

const WhoWeAre = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
      <h2>Who We Are</h2>
      <p className="intro-text">
        We believe that access to a wide variety of seeds is crucial for enhancing food sovereignty, resilience, and sustainability in agriculture. Our goal is to empower farmers by providing them with the resources and knowledge needed to cultivate diverse crops, thereby preserving biodiversity and adapting to changing climate conditions.
      </p>

      <a href="/about" className="read-more-btn">Read More</a>

      <div className="card-container">
        <div className="info-card">
          <h3>Our Mission</h3>
          <h3><p>We are on a mission to conserve agrobiodiversity by strengthening communities’ seed systems for improved seed access and enhanced food sovereignty.</p></h3>
        </div>
        <div className="info-card">
          <h3>Our Vision</h3>
          <h3><p>To be a leading agent in promoting diverse seed access to farming communities.</p></h3>
        </div>
      </div>

      <div className="stats-grid">
        {stats.map((stat, idx) => (
          <StatCard key={idx} {...stat} trigger={visible} />
        ))}
      </div>
    </section>
  );
};

const StatCard = ({
  value,
  label,
  suffix = '',
  trigger
}: {
  value: number;
  label: string;
  suffix?: string;
  trigger: boolean;
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
    <div className="stat-card">
      <h3>{count.toLocaleString()}<span>{suffix}</span></h3>
      <p>{label}</p>
    </div>
  );
};

export default WhoWeAre;
