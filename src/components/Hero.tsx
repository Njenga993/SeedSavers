// src/components/Hero.tsx
import { FaArrowRight, FaHandshake } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/hero.css';

const Hero = () => {
  return (
    <section className="hero">
  <div className="hero-image">
    <div className="image-overlay"></div>
  </div>

  <div className="hero-content">
    <div className="container hero-layout">
      {/* Text Section */}
      <div className="hero-text">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
              }
            }
          }}
        >
          {/* Main Title */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: {
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1]
                }
              }
            }}
          >
            <h1 className="main-title">
              <div className="hero-overlay">
              <span className="title-line"><h1>Seed Savers Network Kenya</h1></span>
              <span className="highlight-text">
                My Seeds, My Food, My Future
              </span>
              </div>
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.h2
            className="tagline"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { 
                opacity: 1, 
                y: 0,
                transition: {
                  delay: 0.4,
                  duration: 0.8
                }
              }
            }}
          >

          </motion.h2>

          {/* CTA Buttons */}
          <motion.div 
            className="h-hero-cta"
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: {
                  delay: 0.8,
                  duration: 0.8
                }
              }
            }}
          >
            <Link to="/about" className="btn-primary">
              Learn More <FaArrowRight />
            </Link>
            <Link to="/contact" className="btn-primary">
              Get Involved <FaHandshake />
            </Link>
          </motion.div>
        </motion.div>
        
      </div>

      
  
    </div>
    
  </div>
  
</section>
  );
};

export default Hero;