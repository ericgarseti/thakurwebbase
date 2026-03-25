import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, MessageSquare, Linkedin, Twitter } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'General Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Thakur Capital Advisors",
      "telephone": "+91-9960282824",
      "email": "thakurcapitaladvisors@gmail.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Wakad",
        "addressLocality": "Pune",
        "postalCode": "411057",
        "addressRegion": "Maharashtra",
        "addressCountry": "IN"
      }
    }
  };

  return (
    <>
      <SEO 
        title="Contact Us | Request Consultation" 
        description="Get in touch with Thakur Capital Advisors in Pune for strategic financial advisory. Phone: +91-9960282824. Email: thakurcapitaladvisors@gmail.com"
        schema={contactSchema}
      />

      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight"
          >
            The <span className="text-gold">Next Step</span> in Your Growth
          </motion.h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg italic">
            Connect with our advisory board to discuss your capital requirements and strategic objectives.
          </p>
        </div>
      </section>

      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-3xl font-bold text-navy mb-8 font-serif">Reach Our Experts</h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-accent text-gold rounded-full flex items-center justify-center shrink-0 border border-gold/20">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy/50 uppercase tracking-widest mb-1">Call Us</p>
                    <p className="text-xl font-bold text-navy">+91-9960282824</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-accent text-gold rounded-full flex items-center justify-center shrink-0 border border-gold/20">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy/50 uppercase tracking-widest mb-1">Email Us</p>
                    <p className="text-xl font-bold text-navy break-all lg:break-normal">thakurcapitaladvisors@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-6">
                  <div className="w-12 h-12 bg-accent text-gold rounded-full flex items-center justify-center shrink-0 border border-gold/20">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-navy/50 uppercase tracking-widest mb-1">Our Headquarters</p>
                    <p className="text-xl font-bold text-navy">Wakad, Pune, Maharashtra</p>
                    <p className="text-gray-500">India - 411057</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-navy text-white rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl" />
                <h3 className="text-xl font-bold mb-4 font-serif italic text-gold">Follow Our Insights</h3>
                <div className="flex space-x-4">
                    <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-gold/20 transition-colors"><Linkedin size={22} className="text-gold" /></a>
                    <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-gold/20 transition-colors"><Twitter size={22} className="text-gold" /></a>
                    <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-gold/20 transition-colors"><MessageSquare size={22} className="text-gold" /></a>
                </div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-navy ml-1">Full Name</label>
                        <input 
                            required
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe" 
                            className="w-full px-5 py-4 bg-accent border-0 rounded-xl focus:ring-2 focus:ring-gold transition-all text-navy"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-navy ml-1">Business Email</label>
                        <input 
                            required
                            type="email" 
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@company.com" 
                            className="w-full px-5 py-4 bg-accent border-0 rounded-xl focus:ring-2 focus:ring-gold transition-all text-navy"
                        />
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-navy ml-1">Company Name</label>
                        <input 
                            type="text" 
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Enter Company" 
                            className="w-full px-5 py-4 bg-accent border-0 rounded-xl focus:ring-2 focus:ring-gold transition-all text-navy"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-bold text-navy ml-1">Service Required</label>
                        <select 
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full px-5 py-4 bg-accent border-0 rounded-xl focus:ring-2 focus:ring-gold transition-all text-navy appearance-none"
                        >
                            <option>Investment Banking</option>
                            <option>Corporate Finance</option>
                            <option>M&A Advisory</option>
                            <option>Business Consulting</option>
                            <option>Joint Ventures</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>

                <div className="space-y-2">
                    <label className="text-sm font-bold text-navy ml-1">Message</label>
                    <textarea 
                        required
                        name="message"
                        rows="4" 
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your requirements..." 
                        className="w-full px-5 py-4 bg-accent border-0 rounded-xl focus:ring-2 focus:ring-gold transition-all text-navy resize-none"
                    ></textarea>
                </div>

                <button 
                    disabled={submitted}
                    type="submit" 
                    className={`w-full py-5 rounded-xl font-bold text-lg flex items-center justify-center space-x-2 transition-all duration-300 ${submitted ? 'bg-green-600 text-white' : 'bg-gold text-white hover:bg-gold-dark hover:shadow-xl'}`}
                >
                    {submitted ? (
                        <>Successfully Sent!</>
                    ) : (
                        <>Send Inquiry <Send size={20} className="ml-2" /></>
                    )}
                </button>
                <p className="text-center text-xs text-gray-400">
                    We typically respond to institutional inquiries within 24 business hours.
                </p>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
