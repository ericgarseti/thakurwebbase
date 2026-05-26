import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { services } from '../data/services';
import SEO from '../components/SEO';
import { 
  ChevronRight, 
  CheckCircle,
  Building2,
  TrendingUp,
  Briefcase,
  Handshake,
  BarChart3,
  Wallet
} from 'lucide-react';

const Services = () => {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "provider": {
      "@type": "Organization",
      "name": "Thakur Capital Advisors"
    },
    "serviceType": "Financial Advisory",
    "areaServed": "Global"
  };

  return (
    <>
      <SEO 
        title="Our Services | Corporate Finance & Investment Banking" 
        description="Explore our range of financial services including Joint Ventures, M&A Advisory, Corporate Finance, Investment Banking, and Wealth Management."
        schema={servicesSchema}
      />

      {/* Header */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 uppercase tracking-tight"
          >
            Our <span className="text-gold italic">Strategic</span> Services
          </motion.h1>
          <p className="text-white/60 max-w-3xl mx-auto text-lg">
            Sophisticated financial solutions engineered for institutional excellence and transformative corporate growth.
          </p>
        </div>
      </section>

      {/* Services Detail List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}
              >
                {/* Image/Icon Side */}
                <div className="w-full lg:w-1/2">
                  <div className="relative">
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl bg-accent flex items-center justify-center p-20">
                      <service.icon size={120} className="text-navy opacity-10 absolute" />
                      <div className="relative z-10 text-center">
                        <div className="w-24 h-24 bg-white shadow-xl rounded-2xl flex items-center justify-center mx-auto mb-6 transform -rotate-3 group-hover:rotate-0 transition-transform">
                          <service.icon size={48} className="text-gold" />
                        </div>
                        <h3 className="text-2xl font-bold text-navy">{service.title}</h3>
                      </div>
                    </div>
                    <div className={`absolute -bottom-6 ${index % 2 === 0 ? '-right-6' : '-left-6'} w-32 h-32 bg-gold/5 rounded-full blur-3xl`} />
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <span className="text-gold font-bold tracking-widest uppercase text-xs mb-4 block">{service.subtitle}</span>
                  <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">{service.title}</h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {service.description} We offer specialized consulting focused on delivering measurable outcomes in {service.title.toLowerCase()} and strategic financial planning.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                    {(service.features || [
                      "Strategic Advisory",
                      "Risk Mitigation",
                      "Operational Support",
                      "Capital Optimization"
                    ]).map((item, i) => (
                      <div key={i} className="flex items-center space-x-3 text-sm font-medium text-navy">
                        <CheckCircle className="text-gold shrink-0" size={18} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <Link to="/contact" className="group text-navy font-bold flex items-center hover:text-gold transition-colors">
                    Inquire About Service <ChevronRight className="ml-1 group-hover:ml-2 transition-all mt-0.5" size={20} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Service: FDI/ECB */}
      <section className="bg-navy py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="text-gold font-bold uppercase tracking-widest text-sm mb-6">Market Specialist</h3>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Specialized in FDI & ECB Soft Loans</h2>
          <p className="text-white/70 text-lg mb-12">
            Leverage our deep connections and regulatory expertise to secure optimal terms for your international capital requirements. We simplify the complexities of global funding.
          </p>
          <Link to="/contact" className="btn-primary px-12 py-4">
            Consult Our Specialist
          </Link>
        </div>
      </section>
    </>
  );
};

export default Services;
