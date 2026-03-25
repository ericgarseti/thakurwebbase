import React from 'react';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users2, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const About = () => {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Thakur Capital Advisors",
      "description": "Financial consultancy specializing in FDI, ECB, and corporate advisory."
    }
  };

  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To drive financial excellence by providing sophisticated capital solutions that empower global growth and sustainable value creation."
    },
    {
      icon: Lightbulb,
      title: "Our Expertise",
      description: "Combining deep domain knowledge in corporate finance with data-driven insights to navigate complex regulatory and market landscapes."
    },
    {
      icon: Users2,
      title: "Our Approach",
      description: "A relationship-led advisory model that prioritizes long-term partnership, transparency, and tailored strategies for every client."
    }
  ];

  return (
    <>
      <SEO 
        title="About Us | Our Mission & Expertise" 
        description="Learn about Thakur Capital Advisors, our mission to drive financial excellence, and our specialized expertise in FDI/ECB and global capital solutions."
        schema={aboutSchema}
      />

      {/* Header Section */}
      <section className="bg-navy pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            The Core Story of <span className="text-gold">Thakur Capital</span>
          </motion.h1>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            A bridge for corporate excellence through strategic financial advisory and global network integration.
          </p>
        </div>
      </section>

      {/* Values/Mission Grid */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="p-8 bg-accent rounded-2xl border border-gray-100 h-full hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 bg-navy text-gold rounded-xl flex items-center justify-center mb-6">
                <value.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed font-sans">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Specialized Expertise Section */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-navy rounded-[2rem] p-8 md:p-16 relative overflow-hidden flex flex-col lg:flex-row items-center gap-12">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mb-32" />
            
            <div className="lg:w-3/5 relative z-10">
              <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">Specialized Advisory</span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                FDI, ECB & <span className="text-gold">Strategic Equity Funding</span>
              </h2>
              <div className="space-y-6 text-white/80 text-lg">
                <p>
                  Thakur Capital Advisors specializes in complex cross-border financial instruments. We provide end-to-old support for Foreign Direct Investment (FDI) and External Commercial Borrowings (ECB).
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Soft Loan Structuring",
                    "Equity Capital Raising",
                    "Regulatory Compliance",
                    "Cross-border Tax Planning",
                    "Institutional Round Funding",
                    "Debt Re-structuring"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center space-x-3 text-sm">
                      <ShieldCheck className="text-gold" size={18} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-10">
                <Link to="/contact" className="btn-primary inline-flex items-center">
                  Consult our Experts <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>
            
            <div className="lg:w-2/5 relative z-10 hidden lg:block">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-navy">
                    <Target size={24} />
                  </div>
                  <h4 className="text-white font-bold">Strategic Insight</h4>
                </div>
                <p className="text-white/60 text-sm leading-relaxed italic">
                  "Our approach ensures that every transaction is backed by rigorous data analysis and focused on the long-term strategic goals of our clients."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="section-container text-center">
        <h2 className="text-3xl font-bold text-navy mb-6">Driven by Excellence</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Our team comprises seasoned financial professionals and strategic advisors dedicated to your success.
        </p>
        <Link to="/contact" className="btn-outline">
          Connect with our Leadership
        </Link>
      </section>
    </>
  );
};

export default About;
