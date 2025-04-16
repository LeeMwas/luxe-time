import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Clock, Award, Star } from 'lucide-react';
import styles from '../styles/Hero.module.css';

function Hero() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 z-10">
        <div className={styles.shimmerOverlay} />
      </div>

      {/* Parallax background */}
      <motion.div 
        className={`absolute inset-0 z-0 ${styles.heroImage}`}
        style={{
          backgroundImage: `url(/src/assets/hero-bg.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y
        }}
      />

      {/* Main content */}
      <div className="container mx-auto px-4 text-center z-20 mt-[-2rem]">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="mb-6 relative"
        >
          <span className={`text-gold uppercase tracking-widest text-sm font-bold ${styles.glowText}`}>
            Luxury Timepieces
          </span>
        </motion.div>

        <motion.h1
          className={`text-5xl md:text-7xl font-serif text-white mb-4 font-bold ${styles.glowText}`}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            className="text-gold inline-block"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Timeless
          </motion.span>{" "}
          Elegance Awaits
        </motion.h1>

        <motion.div 
          className="h-1 w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto my-6"
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: 96, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        />

        <motion.p
          className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          Discover our exquisite collection of luxury watches crafted with precision and passion for the truly discerning connoisseur.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.a
            href="#collections"
            className="inline-flex items-center px-8 py-4 bg-gold text-black font-bold rounded-md hover:bg-white transition-all shadow-lg relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Explore Collection</span>
            <motion.div
              className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"
              initial={false}
              whileHover={{ scale: 1.5, rotate: 15 }}
            />
            <ArrowRight className="ml-2 relative z-10" size={20} />
          </motion.a>
          
          <motion.a
            href="#about"
            className="inline-flex items-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-md hover:border-gold hover:text-gold transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Our Story
          </motion.a>
        </motion.div>

        {/* Enhanced features bar */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {[
            { Icon: Clock, text: "Swiss Precision" },
            { Icon: Award, text: "Lifetime Warranty" },
            { Icon: Star, text: "Expert Craftsmanship" }
          ].map(({ Icon, text }, index) => (
            <motion.div
              key={text}
              className="flex items-center justify-center gap-3 group"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <Icon className="text-gold transition-transform group-hover:scale-110" size={24} />
              </motion.div>
              <span className="text-gray-300 group-hover:text-gold transition-colors">
                {text}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;