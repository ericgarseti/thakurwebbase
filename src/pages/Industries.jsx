import React from 'react';
import { motion } from 'framer-motion';
import { sectors } from '../data/sectors';
import SEO from '../components/SEO';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const Industries = () => {
  const industriesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Sectors Served by Thakur Capital Advisors",
    "itemListElement": sectors.map((sector, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": sector.name
    }))
  };

  return (
    <>
      <SEO 
        title="Sectors We Serve | Industry Expertise" 
        description="Explore the 25+ industrial and economic sectors we serve with specialized financial advisory and capital solutions."
        schema={industriesSchema}
      />

      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Sectors We <span className="text-gold">Empower</span>
          </motion.h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg font-light">
            Providing tailored financial advisory across the core drivers of the global economy.
          </p>
        </div>
      </section>

      <section className="section-container bg-accent/30">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {sectors.map((sector, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 4) * 0.1 }}
              whileHover={{ y: -5, backgroundColor: '#ffffff' }}
              className="p-6 bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all group cursor-default"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-navy/5 text-navy rounded-lg flex items-center justify-center group-hover:bg-gold/10 group-hover:text-gold transition-colors">
                  <sector.icon size={24} />
                </div>
                <ArrowUpRight className="text-gray-300 group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" size={20} />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">{sector.name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {sector.proposition}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Specialty callout */}
      <section className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
            <h2 className="text-white/80 text-xl font-medium">Don't see your sector? 
                <Link to="/contact" className="text-gold font-bold ml-2 hover:underline decoration-2">
                    Inquire for Bespoke Advisory
                </Link>
            </h2>
        </div>
      </section>
    </>
  );
};

export default Industries;
