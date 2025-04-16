import { Instagram, Twitter, Facebook } from 'lucide-react';
import { useState } from 'react';

export default function Footer() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  
  const currentYear = new Date().getFullYear();
  
  const socials = [
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" },
    { icon: Facebook, label: "Facebook", href: "#" }
  ];
  
  return (
    <footer className="bg-dark border-t border-gold/20 py-12">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and brand */}
          <div className="text-left">
            <h3 className="font-serif text-xl text-offwhite tracking-wider mb-2">LUXETIME</h3>
            <p className="text-gold/70 text-xs tracking-widest">EXCEPTIONAL TIMEPIECES</p>
          </div>
          
          {/* Center links - essential only */}
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm text-offwhite/80">
            <a href="#collection" className="hover:text-gold transition-colors duration-300">Collection</a>
            <a href="#heritage" className="hover:text-gold transition-colors duration-300">Heritage</a>
            <a href="#concierge" className="hover:text-gold transition-colors duration-300">Private Concierge</a>
            <a href="#contact" className="hover:text-gold transition-colors duration-300">Contact</a>
          </div>
          
          {/* Social icons */}
          <div className="flex items-center space-x-6">
            {socials.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="text-offwhite/80 hover:text-gold transition-colors duration-200"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <social.icon 
                  size={20} 
                  className={hoveredIndex === index ? "transform scale-110" : ""} 
                />
              </a>
            ))}
          </div>
        </div>
        
        {/* Bottom section with copyright */}
        <div className="mt-12 pt-6 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-offwhite/50 text-xs">
            © {currentYear} LuxeTime. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0 text-xs text-offwhite/50">
            <a href="#privacy" className="hover:text-gold transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-gold transition-colors">Terms</a>
            <a href="#accessibility" className="hover:text-gold transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}