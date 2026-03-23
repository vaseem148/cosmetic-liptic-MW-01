import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { Star, ShieldCheck, Users } from "lucide-react";

const TrustScore = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => latest.toFixed(1));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Starts the count-up animation when the component mounts
    const controls = animate(count, 4.9, { 
      duration: 2, 
      ease: "easeOut",
      delay: 0.5 
    });
    return controls.stop;
  }, []);

  return (
    <div className="flex flex-col items-center justify-center mb-16 relative">
      
      {/* Floating Animated Badge */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        className="relative z-10 flex items-center gap-6 bg-white/40 backdrop-blur-xl border border-white/60 p-2 pr-6 rounded-full shadow-[0_20px_50px_rgba(255,182,193,0.3)]"
      >
        {/* Animated Circular Progress / Star Icon */}
        <div className="relative w-12 h-12 flex items-center justify-center bg-gray-900 rounded-full shadow-lg">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-pink-400/50"
          />
          <Star size={20} fill="#fbbf24" className="text-yellow-400 relative z-10" />
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            {/* The Counter */}
            <motion.span className="text-2xl font-black text-gray-900 tabular-nums">
              {rounded}
            </motion.span>
            <div className="flex text-yellow-400 -space-x-1">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1 + (i * 0.1) }}
                >
                  <Star size={14} fill="currentColor" />
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500">
              Verified Reviews
            </span>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
          </div>
        </div>
      </motion.div>

      {/* Decorative Floating Avatars (Social Proof) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[400px] h-full pointer-events-none">
        {[
          { x: -160, y: -20, delay: 0.2, img: "https://i.pravatar.cc/100?u=1" },
          { x: 150, y: 10, delay: 0.4, img: "https://i.pravatar.cc/100?u=2" },
          { x: -120, y: 60, delay: 0.6, img: "https://i.pravatar.cc/100?u=3" },
        ].map((item, i) => (
          <motion.img
            key={i}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 0.6, scale: 1 }}
            animate={{ 
                y: [0, -10, 0],
            }}
            transition={{ 
                y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: item.delay },
                opacity: { delay: item.delay }
            }}
            src={item.img}
            className="absolute w-8 h-8 rounded-full border-2 border-white shadow-md filter grayscale hover:grayscale-0 transition-all"
            style={{ left: `calc(50% + ${item.x}px)`, top: `${item.y}px` }}
          />
        ))}
      </div>

      {/* Main Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 text-center"
      >
        <h2 className="text-4xl md:text-6xl font-serif text-gray-900 leading-tight">
          Loved by <span className="italic text-pink-600">thousands</span>
        </h2>
      </motion.div>
    </div>
  );
};

export default TrustScore;