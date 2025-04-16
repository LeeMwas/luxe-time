import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Watch, Clock, Crown } from 'lucide-react';
import ParallaxTilt from 'react-parallax-tilt';
import gsap from 'gsap';
import TestimonialPreview from './TestimonialPreview';

function Header({ aboutRef }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [showTestimonialPreview, setShowTestimonialPreview] = useState(false);
  const timeRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: '#collections', label: 'Collections', icon: Watch },
    { href: '#about', label: 'About', icon: Crown },
    { href: '#home', label: 'LuxeTime', isLogo: true },
    { href: '#testimonials', label: 'Testimonials', icon: Clock },
    { href: '#contact', label: 'Contact', icon: Crown },
  ];

  // Handle scroll for header styling and parallax
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [isOpen]);

  // Custom cursor effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Update current time effect
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      if (timeRef.current) {
        timeRef.current.textContent = now.toLocaleTimeString('en-US', {
          hour12: true,
          hour: 'numeric',
          minute: 'numeric',
        });
      }
    };
    const timer = setInterval(updateTime, 1000);
    updateTime();
    return () => clearInterval(timer);
  }, []);

  // Add smooth scroll handler
  const handleNavClick = (e, href) => {
    e.preventDefault();
    
    if (href === '#testimonials') {
      setShowTestimonialPreview(true);
      setTimeout(() => {
        setShowTestimonialPreview(false);
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 3000);
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    
    setIsOpen(false); // Close mobile menu if open
  };

  // Animation variants
  const logoVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.1, rotate: 5, transition: { duration: 0.3 } },
  };

  const linkVariants = {
    initial: { y: -20, opacity: 0 },
    animate: (custom) => ({
      y: 0,
      opacity: 1,
      transition: { delay: custom * 0.1, duration: 0.5 },
    }),
    hover: { y: -5, color: '#D4AF37', transition: { duration: 0.2 } },
  };

  const mobileMenuVariants = {
    initial: { x: '100%' },
    animate: { x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    exit: { x: '100%', transition: { duration: 0.3, ease: 'easeIn' } },
  };

  const logoAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const renderNavLink = (link, index) => (
    <motion.div
      key={link.label}
      onHoverStart={() => setHoveredIndex(index)}
      onHoverEnd={() => setHoveredIndex(null)}
      className="relative group"
    >
      {link.isLogo ? (
        <motion.div
          variants={logoAnimation}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <span ref={timeRef} className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-xs text-gold/60" />
          <h1 className="text-2xl font-serif text-gold font-bold px-6 border-x border-gold/20">
            {link.label}
          </h1>
          <motion.div
            className="absolute -bottom-1 left-0 w-full h-px bg-gold"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      ) : (
        <motion.a
          href={link.href}
          onClick={(e) => handleNavClick(e, link.href)}
          className="flex items-center space-x-2 text-offwhite hover:text-gold transition-colors"
          whileHover={{ y: -2 }}
        >
          {link.icon && (
            <motion.div
              animate={{ 
                rotate: hoveredIndex === index ? 360 : 0,
                scale: hoveredIndex === index ? 1.2 : 1
              }}
              transition={{ duration: 0.3 }}
            >
              <link.icon size={18} />
            </motion.div>
          )}
          <span>{link.label}</span>
          <motion.div
            className="absolute -bottom-1 left-0 h-px bg-gold"
            initial={{ width: 0 }}
            whileHover={{ width: '100%' }}
            transition={{ duration: 0.2 }}
          />
        </motion.a>
      )}
    </motion.div>
  );

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-4 h-4 rounded-full bg-gold/50 pointer-events-none z-[100] hidden md:block"
        style={{ x: cursorPos.x - 8, y: cursorPos.y - 8 }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      />

      {/* Animated Background Gradient */}
      <div className="fixed inset-0 z-40 bg-gradient-to-r from-dark/80 via-gold/5 to-dark/80 pointer-events-none">
        <motion.div
          className="absolute inset-0 opacity-20"
          animate={{
            background: [
              'radial-gradient(circle at 0% 0%, #D4AF37 0%, transparent 50%)',
              'radial-gradient(circle at 100% 100%, #D4AF37 0%, transparent 50%)',
              'radial-gradient(circle at 0% 0%, #D4AF37 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <motion.header
        className={`fixed w-full top-0 z-50 backdrop-blur-sm ${
          scrolled ? 'py-3 border-b border-gold/20' : 'py-6'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
      >
        <div className="container mx-auto px-4">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-center">
            <div className="flex items-center space-x-12">
              {navLinks.map((link, index) => renderNavLink(link, index))}
            </div>
          </nav>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center justify-between">
            <ParallaxTilt
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              scale={1.05}
              transitionSpeed={400}
            >
              <motion.a
                href="#home"
                className="text-2xl font-serif text-gold font-bold"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                LuxeTime
              </motion.a>
            </ParallaxTilt>
            <motion.button
              className="text-offwhite focus:outline-none"
              onClick={toggleMenu}
              whileHover={{ scale: 1.2, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="fixed inset-0 bg-dark/95 z-[60] flex items-center justify-center min-h-screen overflow-y-auto"
                variants={mobileMenuVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <motion.button
                  className="absolute top-6 right-4 text-offwhite"
                  onClick={toggleMenu}
                  whileTap={{ scale: 0.9 }}
                >
                  <X size={24} />
                </motion.button>

                <motion.div
                  className="flex flex-col items-center space-y-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {navLinks.map((link, index) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      className={`${
                        link.isLogo
                          ? 'text-3xl font-serif text-gold mb-6'
                          : 'text-2xl text-offwhite'
                      } relative`}
                      onClick={(e) => handleNavClick(e, link.href)}
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 * index + 0.2 }}
                      whileHover={{ scale: 1.1, color: '#D4AF37' }}
                    >
                      {link.label}
                      {!link.isLogo && (
                        <motion.span
                          className="absolute -bottom-1 left-0 h-px bg-gold shadow-[0_0_8px_#D4AF37]"
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 0.4 }}
                        />
                      )}
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Add TestimonialPreview */}
      <TestimonialPreview 
        isVisible={showTestimonialPreview}
        onClose={() => setShowTestimonialPreview(false)}
      />
    </>
  );
}

export default Header;