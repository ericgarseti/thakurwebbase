import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Award, Users, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { services } from '../data/services';
import { sectors } from '../data/sectors';

const Home = () => {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "Thakur Capital Advisors",
    "url": "https://thakurcapitaladvisors.com",
    "logo": "https://thakurcapitaladvisors.com/logo.png",
    "description": "Strategic Capital Solutions for Global Growth. Investment Banking & Corporate Finance in Pune.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Wakad",
      "addressRegion": "Pune",
      "addressCountry": "IN"
    },
    "telephone": "+91-9960282824"
  };

  return (
    <>
      <SEO 
        title="Strategic Capital Solutions for Global Growth" 
        description="Thakur Capital Advisors provides expert investment banking, M&A advisory, and corporate finance solutions in Pune, India."
        schema={homeSchema}
      />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-navy/70 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
            alt="Corporate Skyline" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto pt-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Strategic Capital Solutions for <span className="text-gold italic">Global Growth</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto font-light"
          >
            Empowering businesses with sophisticated financial structures and cross-border advisory excellence.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link to="/contact" className="btn-primary flex items-center justify-center text-lg px-8 py-4">
              Get Started <ArrowRight className="ml-2" size={20} />
            </Link>
            <Link to="/about" className="btn-outline border-white text-white hover:bg-white hover:text-navy flex items-center justify-center text-lg px-8 py-4">
              Learn More
            </Link>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/50"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Who We Are */}
      <section className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-gold font-semibold tracking-wider uppercase mb-4 text-sm">Empowering Your Vision</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-navy">Thakur Capital Advisors: Your Strategic Financial Partner</h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              Founded on the principles of integrity and excellence, Thakur Capital Advisors serves as a pivotal bridge for corporate growth in the global marketplace.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We provide data-driven insights combined with relationship-led advisory to handle the most complex financial requirements of modern enterprises. From capital raising to strategic M&A, our focus remains on long-term value creation.
            </p>
            <ul className="space-y-4">
              {[
                "Institutional Expertise",
                "Cross-Border Focus",
                "Data-Driven Insights",
                "Bespoke Financial Solutions"
              ].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-navy font-medium">
                  <CheckCircle2 className="text-gold" size={20} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                alt="Professional Team Meeting" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-white p-8 rounded-xl shadow-xl hidden md:block border-l-4 border-gold">
              <p className="text-3xl font-bold text-navy mb-1 italic">15+</p>
              <p className="text-sm text-gray-500 uppercase tracking-widest font-semibold">Years of Experience</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-accent py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-5xl font-bold text-navy mb-4">Core Service Expertise</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">Comprehensive financial solutions tailored for institutional needs and strategic growth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border-t-2 border-transparent hover:border-gold group"
              >
                <div className="w-16 h-16 bg-navy/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                  <service.icon className="text-navy group-hover:text-gold transition-colors" size={32} />
                </div>
                <h4 className="text-xl font-bold text-navy mb-2">{service.title}</h4>
                <p className="text-gold font-medium text-xs uppercase tracking-wider mb-4">{service.subtitle}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link to="/services" className="text-navy font-bold text-sm flex items-center hover:text-gold group-hover:gap-2 transition-all">
                  Read More <ArrowRight className="ml-1" size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-container">
        <div className="bg-navy rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Founder" 
              className="w-full h-full object-cover min-h-[400px]"
            />
          </div>
          <div className="lg:w-1/2 p-12 lg:p-20 flex flex-col justify-center">
            <h4 className="text-gold uppercase tracking-widest font-semibold mb-4 text-sm">Our Leadership</h4>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6 font-serif uppercase tracking-tight">Principal Advisor</h3>
            <p className="text-white/70 italic text-xl mb-8 leading-relaxed">
              "At Thakur Capital, we don't just facilitate transactions; we cultivate partnerships that drive sustainable economic value across borders."
            </p>
            <div>
              <p className="text-white font-bold text-xl mb-1">Thakur [Name Placeholder]</p>
              <p className="text-gold font-medium">Founder & Managing Principal</p>
            </div>
            <div className="mt-8 flex gap-4">
              <Award className="text-gold" size={24} />
              <Users className="text-gold" size={24} />
              <Globe2 className="text-gold" size={24} />
            </div>
          </div>
        </div>
      </section>

      {/* Industry Marquee Placeholder/Summary */}
      <section className="py-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
          <h3 className="text-3xl font-bold text-navy mb-4">Sectors We Empower</h3>
          <p className="text-gray-600">Cross-industry expertise spanning over 25+ key economic sectors.</p>
        </div>
        <div className="flex space-x-12 animate-marquee whitespace-nowrap py-4">
          {sectors.slice(0, 10).map((sector, i) => (
            <div key={i} className="flex items-center space-x-3 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all cursor-default px-8 py-4 bg-accent rounded-full border border-gray-100 shadow-sm">
              <sector.icon className="text-navy" size={24} />
              <span className="text-navy font-bold uppercase tracking-wider text-sm">{sector.name}</span>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/industries" className="btn-outline inline-flex items-center">
            Explore All Sectors <ArrowRight className="ml-2" size={18} />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy relative py-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/10 skew-x-12 transform translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h3 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to Scale Your Enterprise?</h3>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            Partner with Thakur Capital Advisors for strategic financial solutions that navigate the complexities of global capital markets.
          </p>
          <Link to="/contact" className="btn-primary text-lg px-10 py-5">
            Schedule a Consultation
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;
