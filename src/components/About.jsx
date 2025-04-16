import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronRight, Clock, Shield, Award } from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState('heritage');
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const parallaxRef = useRef(null);

  const tabs = [
    {
      id: 'heritage',
      label: 'Heritage',
      icon: Clock,
      year: '1893'
    },
    {
      id: 'craftsmanship',
      label: 'Craftsmanship',
      icon: Shield,
      year: '130'
    },
    {
      id: 'philosophy',
      label: 'Philosophy',
      icon: Award,
      year: '3000'
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id='about'>
      <motion.section
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="bg-dark text-offwhite py-24 overflow-hidden"
      >
        <div className="max-w-screen-xl mx-auto px-8">
          <motion.div
            variants={fadeInUp}
            className="mb-16 relative"
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              className="h-px bg-gradient-to-r from-transparent via-gold to-transparent absolute -top-12 left-0"
            />
            <h2 className="font-serif text-5xl md:text-6xl mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gold to-[#FFF5D4]">
              Our Legacy
            </h2>
            <motion.div
              className="h-px w-24 bg-gold mb-8"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.5 }}
            />
            <p className="text-offwhite/80 max-w-2xl text-lg">
              Since 1893, LuxeTime has crafted exceptional timepieces that blend artisanal tradition with innovative precision.
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row gap-12 mb-16">
            <motion.div
              className="lg:w-1/2 overflow-hidden rounded-lg"
              variants={fadeInUp}
            >
              <motion.div
                className="h-96 lg:h-full w-full bg-cover bg-center"
                style={{ backgroundImage: "url(/src/assets/workshop-detail.jpg)" }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              >
                <div className="h-full w-full bg-gradient-to-t from-dark/80 to-transparent flex items-end p-8">
                  <div>
                    <div className="text-gold text-sm tracking-widest">ESTABLISHED</div>
                    <div className="text-4xl font-serif">1893</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <div className="lg:w-1/2">
              <div className="flex space-x-4 mb-8">
                {tabs.map(tab => (
                  <motion.button
                    key={tab.id}
                    className={`flex flex-col items-center p-4 rounded-lg transition-all ${activeTab === tab.id
                      ? 'bg-gold/10 text-gold'
                      : 'text-offwhite/60 hover:bg-gold/5'
                      }`}
                    onClick={() => setActiveTab(tab.id)}
                    whileHover={{ y: -2 }}
                  >
                    <tab.icon size={20} className="mb-2" />
                    <span className="text-sm tracking-widest">{tab.label}</span>
                    <motion.div
                      className="h-px bg-gold mt-2"
                      initial={{ width: 0 }}
                      animate={{ width: activeTab === tab.id ? '100%' : 0 }}
                    />
                  </motion.button>
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-6"
                >
                  {activeTab === 'heritage' && (
                    <>
                      <p className="text-offwhite/90">
                        Founded in Geneva by master horologist Antoine LeBlanc, LuxeTime has remained independent for six generations. Each timepiece represents our family's dedication to excellence and passion for mechanical perfection.
                      </p>
                      <p className="text-offwhite/90">
                        Our atelier combines time-honored techniques with cutting-edge innovation, creating watches that serve as both precision instruments and heirloom treasures.
                      </p>
                      <div className="flex items-center pt-6">
                        <img
                          src="/src/assets/founder-signature.jpg"
                          alt="Founder's signature"
                          className="h-20 mr-6"
                        />
                        <div>
                          <p className="font-serif text-lg">Antoine LeBlanc</p>
                          <p className="text-gold/80 text-sm">Founder, 1893</p>
                        </div>
                      </div>
                    </>
                  )}

                  {activeTab === 'craftsmanship' && (
                    <>
                      <p className="text-offwhite/90">
                        Each LuxeTime timepiece represents over 600 hours of meticulous craftsmanship. Our master watchmakers—trained through our prestigious in-house academy—handcraft each component with precision measured to the micron.
                      </p>
                      <p className="text-offwhite/90">
                        We source only the finest materials: 18k gold forged in our foundry, sapphire crystals polished to perfect transparency, and movements assembled by hand with proprietary techniques passed down through generations.
                      </p>
                      <div className="grid grid-cols-3 gap-4 pt-6">
                        <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: "url(/src/assets/movement-detail.jpg)" }}></div>
                        <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: "url(/src/assets/movement-detail.jpg)" }}></div>
                        <div className="aspect-square bg-cover bg-center" style={{ backgroundImage: "url(/src/assets/movement-detail.jpg)" }}></div>
                      </div>
                    </>
                  )}

                  {activeTab === 'philosophy' && (
                    <>
                      <p className="text-offwhite/90">
                        Time is humanity's most precious resource. At LuxeTime, we believe the instruments that measure it should reflect its value. Our philosophy centers on three principles: uncompromising quality, timeless design, and technical innovation.
                      </p>
                      <p className="text-offwhite/90">
                        We create fewer than 3,000 timepieces annually, ensuring each receives the attention to detail it deserves. A LuxeTime watch is not merely an accessory—it is a statement of values, a generational legacy, and a daily companion in the pursuit of excellence.
                      </p>
                      <div className="mt-8 relative">
                        <blockquote className="text-xl font-serif italic text-gold/90 pl-6 border-l border-gold">
                          "Time is not measured by clocks, but by moments that take your breath away."
                        </blockquote>
                        <p className="text-right text-sm mt-4">— Current Maison Director</p>
                      </div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <motion.div
              whileHover={{ y: -10 }}
              className="aspect-video md:aspect-square relative group overflow-hidden rounded-lg"
            >
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url(/src/assets/atelier-exterior.jpg)" }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="absolute bottom-0 left-0 p-6"
              >
                <h3 className="font-serif text-xl">Swiss Atelier</h3>
                <div className="h-px w-12 bg-gold mt-2 mb-2" />
                <p className="text-offwhite/90 text-sm">Where heritage meets innovation</p>
              </motion.div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="aspect-video md:aspect-square relative group overflow-hidden rounded-lg"
            >
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url(/src/assets/watchmaker-closeup.jpg)" }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="absolute bottom-0 left-0 p-6"
              >
                <h3 className="font-serif text-xl">Master Craftsmen</h3>
                <div className="h-px w-12 bg-gold mt-2 mb-2" />
                <p className="text-offwhite/90 text-sm">Perfecting the art of horology</p>
              </motion.div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="aspect-video md:aspect-square relative group overflow-hidden rounded-lg md:col-span-2 lg:col-span-1"
            >
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url(/src/assets/limited-collection.jpg)" }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                className="absolute bottom-0 left-0 p-6"
              >
                <h3 className="font-serif text-xl">Limited Collections</h3>
                <div className="h-px w-12 bg-gold mt-2 mb-2" />
                <p className="text-offwhite/90 text-sm">Rare timepieces for the discerning collector</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </section>
  );
}
