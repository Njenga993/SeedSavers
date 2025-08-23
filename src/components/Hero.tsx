// src/components/Hero.tsx
import { FaArrowRight, FaHandshake } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import '../styles/hero.css';

// Import your images
import slide1Image from '../assets/seed_pic.jpg';
import slide2Image from '../assets/Spectacular.jpg';
import slide3Image from '../assets/cb.jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const slides = [
    {
      image: slide1Image,
      title: "The Biggest Community Seed Bank Network ",
      highlight: "in Africa",
      description: "Preserving biodiversity through community seed sharing for a <strong>sustainable</strong> tomorrow.",
      cta: "Join our movement"
    },
    {
      image: slide2Image,
      title: "Protect Our Heritage",
      highlight: "Ancient Seeds, Modern Solutions",
      description: "Safeguarding <strong>traditional</strong> crop varieties that hold the key to our food security.",
      cta: "Discover how"
    },
    {
      image: slide3Image,
      title: "Grow With Us",
      highlight: "Plant. Share. Thrive.",
      description: "Building a network of <strong>seed guardians</strong> to combat climate change one seed at a time.",
      cta: "Get involved"
    }
  ];

  // Typewriter effect
  useEffect(() => {
    setIsTyping(true);
    const currentHighlight = slides[currentSlide].highlight;
    let i = 0;
    setTypedText('');

    const typingInterval = setInterval(() => {
      if (i <= currentHighlight.length) {
        setTypedText(currentHighlight.slice(0, i));
        i++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [currentSlide]);

  // Auto-advance slides
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % slides.length);
    }, 8000);

    return () => clearInterval(slideInterval);
  }, []);

  return (
    <section className="hero">
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentSlide}
          className="hero-image"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
        >
          <div className="image-overlay"></div>
        </motion.div>
      </AnimatePresence>

      <div className="hero-content">
        <div className="container">
          <div className="hero-blur-overlay">
            <AnimatePresence mode='wait'>
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="hero-text-content"
              >
                <motion.div
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="main-title">
                    {slides[currentSlide].title}
                  </h1>
                  <div className="highlight-container">
                    <span className="highlight-text">
                      {typedText}
                      <span className={`typing-cursor ${isTyping ? 'visible' : ''}`}>|</span>
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 }}
                  className="description"
                  dangerouslySetInnerHTML={{ __html: slides[currentSlide].description }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      
        <motion.div 
          className="h-hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <Link to="/about" className="btn-primary">
            Learn More <FaArrowRight />
          </Link>
          <Link to="/contact" className="btn-primary">
            {slides[currentSlide].cta} <FaHandshake />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;