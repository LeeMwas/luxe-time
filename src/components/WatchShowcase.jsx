import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import WatchDetails from './WatchDetails';

// Mock watch data
const watches = [
  {
    id: 1,
    name: 'Eternal Classic',
    description: 'A masterpiece of timeless design with sapphire crystal.',
    price: '$5,999',
    image: '/src/assets/watch1.jpg',
  },
  {
    id: 2,
    name: 'Midnight Elegance',
    description: 'Crafted for the night with a diamond-encrusted bezel.',
    price: '$7,499',
    image: '/src/assets/watch2.jpg',
  },
  {
    id: 3,
    name: 'Golden Horizon',
    description: 'Bold and luxurious with a 24K gold finish.',
    price: '$9,999',
    image: '/src/assets/watch3.jpg',
  },
];

function WatchShowcase() {
  const [selectedWatch, setSelectedWatch] = useState(null);

  return (
    <section id="collections" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-serif text-gold text-center mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Our Collections
          </motion.h2>
          
          <motion.div 
            className="h-1 w-24 bg-gold mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {watches.map((watch) => (
            <motion.div
              key={watch.id}
              className="bg-dark border border-gold/30 rounded-lg overflow-hidden shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: watch.id * 0.2, ease: 'easeOut' }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                boxShadow: '0 10px 30px rgba(212, 175, 55, 0.3)',
                borderColor: 'rgba(212, 175, 55, 0.6)'
              }}
            >
              <div className="relative">
                <div
                  className="h-72 bg-cover bg-center"
                  style={{
                    backgroundImage: watch.image
                      ? `url(${watch.image})`
                      : 'linear-gradient(to bottom, #2a2a2a, #1a1a1a)',
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-40"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-serif text-gold mb-3">{watch.name}</h3>
                <p className="text-offwhite text-sm mb-6">{watch.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-gold font-bold text-xl">{watch.price}</span>
                  <div className="flex space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="text-gold fill-gold"
                      />
                    ))}
                  </div>
                </div>
                
                <motion.button
                  className="w-full mt-6 py-3 bg-gold text-dark font-medium rounded hover:bg-offwhite hover:text-dark transition-colors"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelectedWatch(watch)}
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.a 
            href="/collection"
            className="inline-block px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-dark transition-colors font-medium rounded-full"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore All Watches
          </motion.a>
        </motion.div>
      </div>

      <AnimatePresence>
        {selectedWatch && (
          <WatchDetails
            watch={selectedWatch}
            onClose={() => setSelectedWatch(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}

export default WatchShowcase;