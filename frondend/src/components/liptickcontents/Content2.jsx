
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const BrandIdentity = () => {
  const categories = [
    {
      title: "Eye Brow",
      tag: "Definition",
      description: "Infused with nourishing actives to help define and perfect brows naturally.",
      image: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Hair Revival",
      tag: "Restoration",
      description: "Restorative treatment for strong, nourished, and healthy hair from root to tip.",
      image: "https://images.unsplash.com/photo-1527799822394-465555c473bb?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Hand Serum",
      tag: "Hydration",
      description: "Deep hydration and protection for soft, radiant hands all day long.",
      image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80&w=800",
    }
  ];

  // Animation Variants
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }
  };

  const textReveal = {
    initial: { y: "100%" },
    whileInView: { y: 0 },
    transition: { duration: 1, ease: [0.6, 0.01, 0.05, 0.95] }
  };

  return (
    <section className="bg-[#fdf9f6] py-24 px-4 md:px-10 overflow-hidden">
      {/* --- Header --- */}
      <div className="max-w-7xl mx-auto mb-20">
        <motion.p 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-[11px] uppercase tracking-[0.5em] text-stone-400 mb-6 font-medium"
        >
          Nourish Your Skin Naturally
        </motion.p>
        
        <div className="overflow-hidden">
          <motion.h2 
            {...textReveal}
            className="text-4xl md:text-7xl font-light tracking-tight leading-[1.1] text-stone-900"
          >
            EXPERIENCE THE SYNERGY <br />
            <span className="flex items-center flex-wrap gap-4">
              ADVANCED 
              <span className="inline-block w-20 h-10 md:w-32 md:h-16 bg-pink-100 rounded-full overflow-hidden shadow-inner grayscale hover:grayscale-0 transition-all duration-700">
                <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=200" className="object-cover w-full h-full" alt="" />
              </span> 
              INGREDIENTS 
            </span>
            <span className="italic font-serif">Minimalist Skincare.</span>
          </motion.h2>
        </div>
      </div>

      {/* --- Advanced Grid --- */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-auto md:h-[80vh]">
        {categories.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.15 }}
            viewport={{ once: true }}
            className={`group relative overflow-hidden rounded-2xl ${
              index === 1 ? 'md:mt-12 md:mb-[-12px]' : '' // Staggered height effect
            }`}
          >
            {/* Image Parallax Effect */}
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-full h-full"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Overlay Gradient (More sophisticated than flat black) */}
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

            {/* Content */}
            <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
              <div className="overflow-hidden">
                <p className="text-[10px] uppercase tracking-widest translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  {item.tag}
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-light mb-3 tracking-wide">{item.title}</h3>
                <p className="text-sm text-stone-200 line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-xs uppercase tracking-tighter cursor-pointer"
                  >
                    View Details
                  </motion.div>
                  
                  <div className="p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 group-hover:bg-white group-hover:text-black transition-all duration-500">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BrandIdentity;
