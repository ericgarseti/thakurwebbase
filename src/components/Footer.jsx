import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Brief */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold font-serif italic text-gold">Thakur Capital Advisors</h3>
            <p className="text-white/70 leading-relaxed text-sm">
              Strategic capital solutions for global growth. We act as a bridge for corporate excellence through data-driven insights and relationship-led advisory.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gold transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-gold transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-gold transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/industries" className="hover:text-gold transition-colors">Sectors We Serve</Link></li>
              <li><Link to="/contact" className="hover:text-gold transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services List */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Our Services</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li><Link to="/services" className="hover:text-gold transition-colors">Joint Ventures</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Corporate Finance</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">M&A Advisory</Link></li>
              <li><Link to="/services" className="hover:text-gold transition-colors">Investment Banking</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 border-b border-white/10 pb-2">Contact Us</h4>
            <ul className="space-y-4 text-sm text-white/70">
              <li className="flex items-start space-x-3">
                <MapPin className="text-gold shrink-0" size={18} />
                <span>Wakad, Pune, Maharashtra, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="text-gold shrink-0" size={18} />
                <span>+91-9960282824</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="text-gold shrink-0" size={18} />
                <span>thakurcapitaladvisors@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
          <p>© {new Date().getFullYear()} Thakur Capital Advisors. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
