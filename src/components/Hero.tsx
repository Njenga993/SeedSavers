// src/components/Hero.tsx
import { FaArrowRight, FaLeaf, FaUsers, FaHandshake } from 'react-icons/fa';
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
              <span className="title-line">Seed Savers Network Kenya</span>
              <span className="highlight-text">
                My Seed, My Food, My Future
                <motion.span
                  initial={{ scale: 0, rotate: -30 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    delay: 0.6,
                    type: "spring",
                    stiffness: 150
                  }}
                  className="emoji"
                >
                  🌍
                </motion.span>
              </span>
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
            Preserving Kenya's agricultural heritage through seed conservation, education, and sustainable farming practices for future generations.
          </motion.h2>

          {/* CTA Buttons */}
          <motion.div 
            className="hero-cta"
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

      {/* Feature Cards */}
      <motion.div 
        className="hero-features"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <div className="feature-card">
          <div className="feature-icon">
            <FaLeaf />
          </div>
          <h3>Organic Advocacy</h3>
          <p>Championing organic policies worldwide</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">
            <FaUsers />
          </div>
          <h3>Farmer-Centered</h3>
          <p>Putting organic farmers at the heart of everything we do</p>
        </div>
      </motion.div>
    </div>
  </div>
</section>
  );
};

export default Hero;