import { motion } from 'framer-motion';
import { Star, Clock, Shield, Package, ArrowLeft } from 'lucide-react';

function WatchDetails({ watch, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/90 z-50 overflow-y-auto"
    >
      <div className="container mx-auto px-4 py-12">
        <motion.button
          onClick={onClose}
          className="text-gold mb-8 flex items-center group"
          whileHover={{ x: -5 }}
        >
          <ArrowLeft className="mr-2" />
          <span>Back to Collection</span>
        </motion.button>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Watch Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <img
                src={watch.image}
                alt={watch.name}
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            </div>
            
            <div className="mt-6 grid grid-cols-3 gap-4">
              {watch.galleryImages?.map((img, idx) => (
                <motion.img
                  key={idx}
                  src={img}
                  alt={`${watch.name} view ${idx + 1}`}
                  className="rounded-lg cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Watch Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-white"
          >
            <h1 className="text-4xl font-serif text-gold mb-4">{watch.name}</h1>
            <div className="flex items-center mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-gold fill-gold" />
                ))}
              </div>
              <span className="ml-2 text-gold/60">(25 Reviews)</span>
            </div>

            <p className="text-xl font-bold text-gold mb-8">{watch.price}</p>
            <p className="text-gray-300 mb-8">{watch.description}</p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { icon: Clock, text: "Swiss Movement" },
                { icon: Shield, text: "5 Year Warranty" },
                { icon: Package, text: "Free Shipping" },
                { icon: Star, text: "Certificate of Authenticity" }
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center text-gold/80">
                  <Icon size={20} className="mr-2" />
                  <span>{text}</span>
                </div>
              ))}
            </div>

            <motion.button
              className="w-full py-4 bg-gold text-dark font-bold rounded-lg mb-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Add to Cart
            </motion.button>

            <motion.button
              className="w-full py-4 border border-gold text-gold font-bold rounded-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Book a Viewing
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default WatchDetails;