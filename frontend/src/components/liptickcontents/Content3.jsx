"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "../../libs/CartContext";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 101,
    name: "Scarlet Desire",
    category: "Matte Liquid",
    price: "₹1,999",
    image: "https://th.bing.com/th/id/OPAC.CRgQXaZgpeQSfg474C474?w=592&h=550&o=5&dpr=1.3&pid=21.1",
  },
  {
    id: 102,
    name: "Nude Bliss",
    category: "Satin Finish",
    price: "₹1,850",
    image: "https://th.bing.com/th?id=OPAC.85ZZ8WJ9A3%2fenw474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
  },
  {
    id: 103,
    name: "Pink Allure",
    category: "High Shine",
    price: "₹1,850",
    image: "https://th.bing.com/th?id=OPAC.G%2fgHVSnbmIFvhg474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1",
  },
];

// Curved Underline Component
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

export default function FeaturedCollection() {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <section id="collection" className="py-32 bg-[#FAF9F6] relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-pink-100/30 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-10 bg-pink-600" />
              <span className="text-pink-600 font-bold tracking-[0.4em] text-[10px] uppercase">
                Curated Selection
              </span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-serif text-stone-900 leading-tight">
              Discover Our <br />
              <span className="relative inline-block italic font-light text-pink-600 mt-2">
                New Arrivals
                <CurvedUnderline />
              </span>
            </h2>
          </motion.div>

          <motion.button 
            onClick={() => navigate('/products')}
            whileHover={{ gap: '20px' }}
            className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] text-stone-900 group"
          >
            <span className="border-b border-stone-300 pb-1 group-hover:border-stone-900 transition-colors">
              Explore All
            </span>
            <div className="p-3 bg-stone-900 text-white rounded-full group-hover:bg-pink-600 transition-all">
                <ArrowRight size={14} />
            </div>
          </motion.button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative bg-white rounded-[2.5rem] p-4 shadow-[0_4px_25px_rgba(0,0,0,0.03)] group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-700 border border-stone-100/50">
                
                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-stone-50">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
                  />

                  {/* Add to Bag (Slide Up Overlay) */}
                  <div className="absolute inset-x-0 bottom-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[0.22, 1, 0.36, 1]">
                    <button 
                      onClick={() => addToCart({ ...product, price: parseFloat(product.price.replace(/[₹,]/g, '')) })}
                      className="w-full bg-white/90 backdrop-blur-md text-stone-900 py-4 rounded-2xl flex items-center justify-center space-x-3 shadow-xl hover:bg-stone-900 hover:text-white transition-all duration-300"
                    >
                      <ShoppingBag size={18} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Add to Bag</span>
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-8 px-4 pb-4 text-center">
                  <p className="text-[10px] text-stone-400 uppercase tracking-[0.2em] mb-2 font-medium">
                    {product.category}
                  </p>
                  <h3 className="text-2xl font-serif text-stone-900 group-hover:text-pink-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  
                  <div className="mt-4 pt-4 border-t border-stone-50">
                    <p className="text-xl font-medium text-stone-900">
                      {product.price}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
