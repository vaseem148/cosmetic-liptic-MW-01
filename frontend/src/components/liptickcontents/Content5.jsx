"use client";

import React from "react";
import { motion } from "framer-motion";

export default function LipstickShowcase() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section id="showcase" className="bg-[#f7f4f1] py-24 px-6 md:px-12 overflow-hidden">

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto grid md:grid-cols-3 items-center gap-12"
      >

        {/* LEFT TEXT */}
        <motion.div variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-light leading-tight text-stone-900">
            Discover your <br />
            <span className="italic text-pink-600">perfect shade</span> <br />
            with our luxurious <br />
            lipstick collection
          </h2>

          <p className="mt-6 text-stone-500 text-sm max-w-xs leading-relaxed">
            Premium lipstick infused with hydrating ingredients for
            long-lasting color and a silky smooth finish.
          </p>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 px-8 py-3 bg-black text-white text-xs font-bold uppercase tracking-[0.2em] hover:bg-stone-800 transition shadow-lg"
          >
            Explore Shades
          </motion.button>
        </motion.div>

        {/* CENTER PRODUCT */}
        <motion.div variants={itemVariants} className="relative flex justify-center">

          {/* background circle */}
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute w-72 h-72 bg-pink-200/30 rounded-full blur-3xl opacity-60"
          />

          <motion.div
            animate={{ y: [0, -25, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800"
              alt="lipstick showcase"
              className="w-64 md:w-80 drop-shadow-[0_35px_35px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

        </motion.div>

        {/* RIGHT SIDE CONTENT */}
        <motion.div variants={itemVariants} className="space-y-8">

          {/* mini card */}
          <motion.div 
            whileHover={{ x: 10 }}
            className="bg-white p-6 rounded-2xl shadow-sm flex items-center gap-5 border border-white"
          >
            <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
               <img
                src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=200"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-sm text-stone-600 font-medium leading-snug">
              Hydrating formula enriched with organic botanical oils
            </p>
          </motion.div>

          {/* shade preview */}
          <div className="flex items-center gap-4 bg-white/50 p-4 rounded-2xl backdrop-blur-sm justify-center md:justify-start">
            {["#880d1e", "#f26a4f", "#e295ad", "#6b0504"].map((color, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.2, y: -5 }}
                className="w-10 h-10 rounded-full shadow-md cursor-pointer border-2 border-white"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>

          {/* review */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-2xl shadow-sm text-sm text-stone-600 border border-pink-50 relative"
          >
            <div className="text-pink-200 absolute -top-4 -left-2 text-4xl font-serif">“</div>
            <p className="italic relative z-10">
              “The smoothest lipstick I've ever used. The color stays vibrant all day, through coffee and more.”
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="w-6 h-6 rounded-full bg-pink-100" />
              <div className="font-bold text-stone-900 text-xs uppercase tracking-widest">
                – Sophie M.
              </div>
            </div>
          </motion.div>

        </motion.div>

      </motion.div>
    </section>
  );
}