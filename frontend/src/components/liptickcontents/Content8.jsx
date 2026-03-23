import React from "react";
import { motion } from "framer-motion";
import { Star, ShoppingBag, ArrowRight, Heart } from "lucide-react";
import { useCart } from "../../libs/CartContext";
import { useNavigate } from "react-router-dom";

const BestSellers = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const products = [
    { id: 1, name: "Rouge Muse", category: "Matte Liquid", price: "₹2,800", rating: 4.9, tag: "Must Have", image: "https://th.bing.com/th?id=OPAC.f%2bDXfWrX%2fbsiUg474C474&w=220&h=210&c=17&o=5&dpr=1.3&pid=21.1", color: "#9b1b30" },
    { id: 2, name: "Velvet Nude", category: "Satin Finish", price: "₹2,400", rating: 5.0, tag: "Best Seller", image: "https://th.bing.com/th/id/OPAC.cwkFvndjARl4pA474C474?w=160&h=220&c=17&dpr=1.3&pid=21.1", color: "#c38e70" },
    { id: 3, name: "Berry Glaze", category: "High Shine", price: "₹2,600", rating: 4.8, tag: "Trending", image: "https://th.bing.com/th/id/OPAC.fKLvcF1MM6rPng474C474?w=220&h=220&c=17&o=5&dpr=1.3&pid=21.1", color: "#722f37" },
    { id: 4, name: "Peach Sorbet", category: "Creamy Matte", price: "₹2,500", rating: 4.7, tag: "New", image: "https://th.bing.com/th/id/OPAC.nm4wzQ7oMP1xsA474C474?w=220&h=220&c=17&o=5&dpr=1.3&pid=21.1", color: "#ff8b8b" }
  ];

  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const lineDraw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: { pathLength: 1, opacity: 1, transition: { duration: 1.2, ease: "easeInOut", delay: 0.5 } }
  };

  return (
    <section id="bestsellers" className="relative py-32 bg-[#FAF9F6] overflow-hidden">
      
      {/* Animated Background Glows */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-pink-100/40 rounded-full blur-[120px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: "auto" }}
              className="flex items-center gap-3 mb-8 overflow-hidden"
            >
              <div className="h-[1px] w-12 bg-pink-600" />
              <span className="text-pink-600 font-bold tracking-[0.4em] text-[10px] uppercase whitespace-nowrap">
                The Icons
              </span>
            </motion.div>
            
            <motion.h2 
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-6xl md:text-7xl font-serif text-stone-900 leading-[1.1] mb-10"
            >
              Our <span className="relative inline-block italic font-light text-pink-600">
                Best Sellers
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <motion.path variants={lineDraw} initial="hidden" whileInView="visible" d="M0 5 Q 50 10 100 5" stroke="#db2777" strokeWidth="3" fill="transparent" />
                </svg>
              </span>
            </motion.h2>
            
            <motion.p 
              variants={fadeInUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="text-stone-500 text-xl font-light max-w-lg leading-relaxed"
            >
              The shades that defined a generation of beauty. Loved by{" "}
              <span className="relative inline-block text-pink-500 italic font-medium px-1">
                thousands
                <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <motion.path variants={lineDraw} initial="hidden" whileInView="visible" d="M0 8 Q 50 12 100 8" stroke="#ec4899" strokeWidth="2" fill="transparent" />
                </svg>
              </span>
              {" "}of beauty lovers.
            </motion.p>
          </div>
          
          <motion.button 
            onClick={() => navigate('/products')}
            whileHover={{ x: 10 }}
            className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] text-stone-900 group"
          >
            <span className="border-b-2 border-stone-900 pb-1">View Collection</span>
            <div className="p-4 bg-stone-900 text-white rounded-full group-hover:bg-pink-600 transition-colors shadow-lg">
                <ArrowRight size={18} />
            </div>
          </motion.button>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product, idx) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ y: -15 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-[2.5rem] p-4 shadow-[0_4px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_70px_rgba(0,0,0,0.07)] transition-all duration-500 border border-stone-100/50">
                
                {/* Image Container */}
                <div className="relative aspect-[10/13] overflow-hidden rounded-[2rem] bg-stone-50">
                  <motion.img 
                    whileHover={{ scale: 1.15 }}
                    transition={{ duration: 1.2 }}
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Floating Wishlist */}
                  <motion.button 
                    whileTap={{ scale: 0.8 }}
                    className="absolute top-5 right-5 p-3 bg-white/90 backdrop-blur-md rounded-full text-stone-900 hover:text-pink-600 transition-all shadow-sm"
                  >
                    <Heart size={18} strokeWidth={2} />
                  </motion.button>

                  {/* Add to Bag (Slide Up) */}
                  <div className="absolute inset-x-0 bottom-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <button 
                      onClick={() => addToCart({ ...product, price: parseFloat(product.price.replace(/[₹,]/g, '')) })}
                      className="w-full bg-stone-900 text-white py-4 rounded-2xl flex items-center justify-center space-x-3 hover:bg-pink-600 transition-colors"
                    >
                      <ShoppingBag size={18} />
                      <span className="text-[10px] font-bold uppercase tracking-widest">Add to Bag</span>
                    </button>
                  </div>
                </div>

                {/* Info */}
                <div className="mt-8 px-3 pb-3">
                  <h3 className="text-2xl font-serif text-stone-900 mb-1">{product.name}</h3>
                  <div className="flex justify-between items-center mt-4">
                    <p className="text-xl font-medium text-stone-900">{product.price}</p>
                    <motion.div 
                      whileHover={{ scale: 1.3, rotate: 90 }}
                      className="w-6 h-6 rounded-full border-2 border-white shadow-md cursor-pointer"
                      style={{ backgroundColor: product.color }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;