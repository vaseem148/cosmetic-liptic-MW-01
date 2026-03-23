"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const title = "Find Your";
const titleHighlight = "Signature Shade";

const shades = [
  { name: "Classic Red", color: "#c1121f" },
  { name: "Soft Nude", color: "#e6b8a2" },
  { name: "Bold Berry", color: "#8b1e3f" },
  { name: "Deep Plum", color: "#2d0b1f" },
];

const letterVariants = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

// Curved Underline Component
const CurvedUnderline = ({ color = "#db2777" }) => (
  <svg className="absolute -bottom-3 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
    <motion.path
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.8, ease: "easeInOut" }}
      d="M0 5 Q 50 10 100 5"
      stroke={color}
      strokeWidth="3"
      fill="transparent"
    />
  </svg>
);

export default function SignatureShade() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <section id="shades"ref={ref} className="relative py-48 overflow-hidden bg-[#FAF9F6]">
      
      {/* LUXURY PARALLAX BG */}
      <motion.div style={{ y: bgY, rotate }} className="absolute inset-0 pointer-events-none flex justify-center items-center">
        <div className="w-[900px] h-[900px] bg-pink-50/60 blur-[140px] rounded-full" />
      </motion.div>

      <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
        
        {/* HEADING WITH HIGHLIGHT */}
        <div className="mb-14">
          <motion.div 
            initial="hidden" whileInView="show" viewport={{ once: true }}
            className="flex flex-col items-center justify-center space-y-2"
          >
            {/* Find Your Text */}
            <div className="flex overflow-hidden py-2">
               {title.split("").map((char, i) => (
                <motion.span key={i} variants={letterVariants} className="text-4xl md:text-5xl font-serif text-stone-400">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>

            {/* Signature Shade Text with Underline */}
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative inline-block text-7xl md:text-9xl font-serif italic text-pink-600 leading-tight py-4"
            >
              {titleHighlight}
              <CurvedUnderline />
            </motion.h2>
          </motion.div>
        </div>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="text-stone-500 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed mb-24"
        >
          Loved by <span className="text-pink-500 italic font-medium relative px-1">thousands
          <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 100 10" preserveAspectRatio="none">
            <path d="M0 8 Q 50 12 100 8" stroke="#ec4899" strokeWidth="2" fill="transparent" />
          </svg>
          </span> of beauty lovers, crafted to elevate your look with our 
          unparalleled <span className="text-stone-900 font-medium">Silk-Matte</span> technology.
        </motion.p>

        {/* INTERACTIVE SHADES */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-20">
          {shades.map((shade, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              className="group flex flex-col items-center"
            >
              <motion.div
                whileHover={{ scale: 1.1, y: -10 }}
                className="relative w-36 h-36 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all cursor-pointer overflow-hidden border-8 border-white"
                style={{
                  background: `linear-gradient(135deg, ${shade.color} 0%, ${shade.color}CC 100%)`,
                }}
              >
                {/* Glossy Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-white/20 to-transparent pointer-events-none" />
                <motion.div 
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12"
                />
              </motion.div>

              <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.4em] text-stone-400 group-hover:text-pink-600 transition-colors duration-300">
                {shade.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* VIEW ALL BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-32"
        >
          <button className="group relative px-16 py-5 bg-stone-900 text-white overflow-hidden rounded-full shadow-2xl transition-all hover:pr-20">
            <span className="relative z-10 text-[11px] font-bold uppercase tracking-[0.4em]">View Signature Series</span>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">
                <ArrowRight size={18} />
            </div>
          </button>
        </motion.div>

      </div>
    </section>
  );
}

// Optional Arrow Icon (add this to your imports if not there)
const ArrowRight = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
);