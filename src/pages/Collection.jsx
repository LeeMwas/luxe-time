import { motion } from 'framer-motion';
import { Star, Search, Filter } from 'lucide-react';

function Collection() {
  return (
    <section className="min-h-screen bg-dark pt-24 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-serif text-gold mb-4">Our Collection</h1>
          <div className="h-1 w-24 bg-gold mx-auto mb-8" />
        </motion.div>

        <div className="flex flex-wrap gap-6 mb-12">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gold/60" />
              <input
                type="text"
                placeholder="Search our collection..."
                className="w-full pl-12 pr-4 py-3 bg-dark border border-gold/30 rounded-lg text-white focus:border-gold outline-none"
              />
            </div>
          </div>
          <motion.button
            className="flex items-center px-6 py-3 border border-gold/30 rounded-lg text-gold"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Filter className="mr-2" />
            Filter
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Add your watch grid here, similar to WatchShowcase but with more items */}
        </div>
      </div>
    </section>
  );
}

export default Collection;