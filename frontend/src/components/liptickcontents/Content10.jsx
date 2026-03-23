import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Sparkles, Flower2 } from "lucide-react";

const OurStory = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [-80, 80]);
  const rotateImg = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  // Curved Underline Animation Component
  const CurvedUnderline = ({ color = "#db2777" }) => (
    <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 100 10" preserveAspectRatio="none">
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
        d="M0 5 Q 50 10 100 5"
        stroke={color}
        strokeWidth="3"
        fill="transparent"
      />
    </svg>
  );

  return (
    <section id="story" ref={containerRef} className="py-32 bg-[#FAF9F6] overflow-hidden relative">
      
      {/* Background Decorative Texture */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-pink-100/30 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          
          {/* Left: Visual Collage */}
          <div className="relative">
            {/* Main Brand Image with Parallax & Rotation */}
            <motion.div 
              style={{ y: imgY, rotate: rotateImg }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.15)] aspect-[4/5] group"
            >
              <img 
                src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800" 
                alt="Brand Heritage" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
              />
              <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors duration-700" />
            </motion.div>

            {/* Floating Glassmorphism Quote Box */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="absolute -bottom-12 -right-12 w-72 bg-white/70 backdrop-blur-xl rounded-3xl p-10 hidden lg:block z-20 border border-white/50 shadow-2xl"
            >
              <Flower2 className="text-pink-500 mb-6" size={32} strokeWidth={1.5} />
              <p className="text-sm font-serif italic text-stone-800 leading-relaxed">
                "We believe beauty isn't just a look, it's a feeling of confidence that starts from within."
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-[1px] w-10 bg-pink-300" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-pink-400">Our Essence</span>
              </div>
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-pink-600" />
                <span className="text-pink-600 font-bold tracking-[0.4em] text-[10px] uppercase">
                  Since 2018 • Paris
                </span>
              </div>
              
              <h2 className="text-6xl md:text-7xl font-serif text-stone-900 leading-[1.1]">
                Crafting the <br /> 
                <span className="relative inline-block italic font-light text-pink-600 mt-2">
                  Perfect Pout
                  <CurvedUnderline />
                </span>
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="space-y-8 text-stone-500 text-lg font-light leading-relaxed max-w-xl"
            >
              <p>
                VelvetGlow started in a small studio in Paris with one simple mission: to create a lipstick that lasts all day without sacrificing comfort. 
              </p>
              <p>
                After 300+ iterations, we perfected our signature <span className="text-stone-900 font-medium">Silk-Matte</span> technology. Hand-blended using sustainable vegan pigments and infused with organic rose-hip oil.
              </p>
            </motion.div>

            {/* Premium Values Grid */}
            <div className="grid grid-cols-2 gap-10 pt-4">
              <motion.div whileHover={{ y: -5 }} className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-pink-600 shadow-sm border border-stone-100">
                  <Heart size={20} fill="currentColor" />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-stone-900">Cruelty Free</h4>
                  <p className="text-xs text-stone-400 mt-2 leading-relaxed">Never tested on animals, ethically sourced.</p>
                </div>
              </motion.div>
              
              <motion.div whileHover={{ y: -5 }} className="flex flex-col gap-4">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-pink-600 shadow-sm border border-stone-100">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h4 className="text-[11px] font-bold uppercase tracking-widest text-stone-900">Pure Vegan</h4>
                  <p className="text-xs text-stone-400 mt-2 leading-relaxed">100% plant-based, organic formula.</p>
                </div>
              </motion.div>
            </div>

            {/* Animated Link Button */}
            <motion.button 
              whileHover={{ x: 15 }}
              className="group flex items-center gap-6 text-[10px] font-bold uppercase tracking-[0.3em] text-stone-900 pt-10"
            >
              <span className="border-b border-stone-300 pb-1 group-hover:border-stone-900 transition-colors">
                Our Process
              </span>
              <div className="p-3 bg-stone-900 text-white rounded-full group-hover:bg-pink-600 transition-all">
                <ArrowRight size={14} />
              </div>
            </motion.button>
          </div>

        </div>
      </div>
    </section>
  );
};

// Simple Arrow Component for internal use
const ArrowRight = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
);

export default OurStory;