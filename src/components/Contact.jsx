import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

function Contact() {
  return (
    <section id="contact" className="py-24 bg-dark relative">
      {/* Subtle gold accent line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-20 h-px bg-gold"></div>
      
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-serif text-gold mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            Connect With Us
          </motion.h2>
          <motion.div 
            className="h-px w-16 bg-gold mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Contact information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <p className="text-offwhite text-lg">
                We invite you to reach out for inquiries about our timepieces or to schedule a private viewing experience.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="text-gold mr-4" size={20} />
                  <span className="text-offwhite">Fifth Avenue, New York, NY 10022</span>
                </div>
                
                <div className="flex items-center">
                  <Phone className="text-gold mr-4" size={20} />
                  <span className="text-offwhite">+1 (212) 555-1234</span>
                </div>
                
                <div className="flex items-center">
                  <Mail className="text-gold mr-4" size={20} />
                  <span className="text-offwhite">contact@luxurytimepieces.com</span>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-serif text-gold mb-4">Hours</h3>
                <p className="text-offwhite">Monday - Saturday: 10:00 AM - 7:00 PM</p>
                <p className="text-offwhite">Sunday: By Appointment</p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-offwhite mb-2 font-light">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-dark border border-gold/30 rounded text-offwhite focus:outline-none focus:border-gold transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-offwhite mb-2 font-light">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-dark border border-gold/30 rounded text-offwhite focus:outline-none focus:border-gold transition-colors"
                    placeholder="Your Email"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-offwhite mb-2 font-light">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full px-4 py-3 bg-dark border border-gold/30 rounded text-offwhite focus:outline-none focus:border-gold transition-colors"
                    rows="4"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="px-8 py-3 bg-gold text-dark font-medium rounded hover:bg-offwhite hover:text-dark flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                  <Send className="ml-2" size={18} />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Subtle gold accent line */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-px bg-gold"></div>
    </section>
  );
}

export default Contact;