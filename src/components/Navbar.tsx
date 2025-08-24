// src/components/Navbar.tsx
import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  FaFacebookF,  
  FaInstagram, 
  FaLinkedinIn,
  FaYoutube,
  FaBars, 
  FaTimes, 
  FaSearch,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/navbar.css';
import logo from '../assets/ssklogo-.webp';
import { FaXTwitter } from 'react-icons/fa6';

interface NavItem {
  path: string;
  label: string;
  dropdown?: Array<{
    path: string;
    label: string;
  }>;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const location = useLocation();
  const navbarRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = isOpen ? 'auto' : 'hidden';
  };

  const toggleSearch = () => setSearchOpen(!searchOpen);
  
  const closeAll = () => {
    setIsOpen(false);
    setSearchOpen(false);
    setActiveDropdown(null);
    document.body.style.overflow = 'auto';
  };

  const toggleDropdown = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleMobileNavClick = (item: NavItem, index: number, e: React.MouseEvent) => {
    if (item.dropdown) {
      if (location.pathname === item.path) {
        e.preventDefault();
        toggleDropdown(index);
      } else {
        closeAll();
      }
    } else {
      closeAll();
      if (location.pathname === item.path) {
        scrollToTop();
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    const handleClickOutside = (event: MouseEvent) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target as Node)) {
        closeAll();
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    closeAll();
  }, [location]);

  const navItems: NavItem[] = [
    { path: '/', label: 'Home' },
    { 
      path: '/about', 
      label: 'Our Work',
      dropdown: [
        { path: '/about#about', label: 'About Us' },
        { path: '/about#strategies', label: 'Our Strategies' },
        { path: '/about#journey', label: 'Our Journey' },
        { path: '/about#mission', label: 'Our work' }
      ]
    },

    { path: '/CommunitySeedBankPlatform', label: 'CSB Platform' },
    { path: '/incubation-program', label: 'Incubation Program' },
    { path: '/SeedSchool', label: 'Seed School' },
    {path: '/resources', label: 'News & Resources',
      dropdown: [
        { path: '/news-events', label: 'News & Events' },
        {path: '/newsletter', label: 'Newsletter' },
        { path: '/resources', label: 'Resources' },
        { path: '/blog', label: 'Blogs' }
      ]
    },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      {/* Blur overlay when sidebar is open */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="s-blur-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeAll}
          />
        )}
      </AnimatePresence>

      <header 
        className={`s-header ${scrolled ? 's-scrolled' : ''}`}
        ref={navbarRef}
      >
        {/* TOP BAR */}
        <motion.div 
          className="s-top-bar"
          initial={{ opacity: 1, height: 'auto' }}
          animate={{ 
            opacity: scrolled ? 0 : 1,
            height: scrolled ? 0 : 'auto'
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="s-container">
            <div className="s-social-icons">
              <a href="https://www.facebook.com/profile.php?id=100064035750734" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://www.youtube.com/@seedsaversnetworkkenya8211" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
                <FaYoutube />
              </a>
              <a href="https://www.instagram.com/seedsavers_network?igsh=MXdsZjNwYzh0NDdvbg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaInstagram />
              </a>
               <a href="https://x.com/Seedsavers_KE" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <FaXTwitter />
              </a>
              <a href="https://www.linkedin.com/in/seed-savers-kenya-930346284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
            
            <div className="s-top-links">
              <Link to="/contact" >Support Us</Link>
            </div>
          </div>
        </motion.div>

        {/* MAIN NAVIGATION */}
        <nav className="s-main-nav">
          <div className="s-container">
            <div className="s-logo-box">
              <Link to="/" onClick={scrollToTop}>
                <motion.img 
                  src={logo} 
                  alt="Seed Savers Kenya" 
                  initial={{ height: 60 }}
                  animate={{ height: scrolled ? 45 : 60 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            </div>

            <ul className="s-nav-links">
              {navItems.map((item, index) => (
                <li 
                  key={index}
                  className={item.dropdown ? 's-has-dropdown' : ''}
                  onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
                  onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
                >
                  <Link 
                    to={item.path} 
                    className={location.pathname === item.path ? 's-active' : ''}
                    onClick={(e) => {
                      if (item.dropdown && location.pathname === item.path) {
                        e.preventDefault();
                        toggleDropdown(index);
                      } else if (location.pathname === item.path) {
                        scrollToTop();
                      }
                    }}
                  >
                    {item.label}
                    {item.dropdown && (
                      activeDropdown === index ? <FaChevronUp /> : <FaChevronDown />
                    )}
                  </Link>

                  {item.dropdown && (
                    <AnimatePresence>
                      {activeDropdown === index && (
                        <motion.ul 
                          className="s-dropdown-menu"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.dropdown.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <Link 
                                to={subItem.path}
                                onClick={() => {
                                  closeAll();
                                  if (location.pathname === subItem.path) {
                                    scrollToTop();
                                  }
                                }}
                              >
                                {subItem.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  )}
                </li>
              ))}
            </ul>

            <div className="s-nav-actions">
              <button
                className="s-search-toggle"
                onClick={toggleSearch}
                aria-label="Toggle search"
              >
                <FaSearch />
              </button>
              <button
                className="s-hamburger"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                {isOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>

          {/* MOBILE SIDEBAR */}
          <AnimatePresence>
            {isOpen && (
              <motion.div 
                className="s-sidebar"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween' }}
              >
                <ul className="s-sidebar-links">
                  {navItems.map((item, index) => (
                    <li key={index}>
                      {item.dropdown ? (
                        <div className="s-mobile-dropdown">
                          <Link
                            to={item.path}
                            className={`s-mobile-dropdown-btn ${activeDropdown === index ? 's-open' : ''}`}
                            onClick={(e) => handleMobileNavClick(item, index, e)}
                          >
                            {item.label}
                            {item.dropdown && (
                              activeDropdown === index ? <FaChevronUp /> : <FaChevronDown />
                            )}
                          </Link>
                          
                          <AnimatePresence>
                            {activeDropdown === index && (
                              <motion.ul
                                className="s-mobile-dropdown-content"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                              >
                                {item.dropdown.map((subItem, subIndex) => (
                                  <li key={subIndex}>
                                    <Link 
                                      to={subItem.path} 
                                      onClick={() => {
                                        closeAll();
                                        if (location.pathname === subItem.path) {
                                          scrollToTop();
                                        }
                                      }}
                                    >
                                      {subItem.label}
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link 
                          to={item.path} 
                          onClick={() => {
                            closeAll();
                            if (location.pathname === item.path) {
                              scrollToTop();
                            }
                          }}
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                  
                  <li className="s-sidebar-social">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                      <FaFacebookF />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Youtube">
                      <FaYoutube />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <FaInstagram />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <FaLinkedinIn />
                    </a>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          {/* SEARCH BAR */}
          <AnimatePresence>
            {searchOpen && (
              <motion.div 
                className="s-search-bar"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              >
                <form className="s-search-form">
                  <input
                    type="text"
                    placeholder="Search for seeds, resources, or news..."
                    className="s-search-input"
                  />
                  <button type="submit" className="s-search-submit">
                    <FaSearch />
                  </button>
                  <button
                    type="button"
                    className="s-search-close"
                    onClick={toggleSearch}
                    aria-label="Close search"
                  >
                    <FaTimes />
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  );
};

export default Navbar;