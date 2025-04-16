import { motion, AnimatePresence } from 'framer-motion';

export default function TestimonialPreview({ isVisible, onClose }) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 z-[70] flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", damping: 15 }}
            className="relative bg-gradient-to-br from-dark/90 to-black/90 p-8 rounded-2xl border border-gold/20 max-w-lg mx-auto text-center shadow-xl"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ delay: 0.2 }}
              className="w-20 h-20 bg-gold/10 rounded-full mx-auto mb-6 flex items-center justify-center"
            >
              <span className="text-4xl">✨</span>
            </motion.div>
            
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-2xl font-serif text-gold mb-4"
            >
              Be Our First Reviewer
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-offwhite/80 mb-6"
            >
              Share your LuxeTime experience and help us build a legacy of satisfied customers.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center space-x-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onClose}
                className="px-6 py-2 bg-gold text-dark rounded-full font-medium"
              >
                Leave a Review
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}