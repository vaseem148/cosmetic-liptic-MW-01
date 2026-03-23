import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, Search, ChevronDown, Filter, X, ArrowUp } from "lucide-react";
import { useCart } from "../../libs/CartContext";

const allProducts = [
  { id: 1, name: "Rouge Muse", category: "Matte Liquid", price: "₹2,800", image: "https://th.bing.com/th/id/OPAC.756JSY6wveZpYw474C474?w=592&h=550&o=5&dpr=1.3&pid=21.1" },
  { id: 2, name: "Velvet Nude", category: "Satin Finish", price: "₹2,400", image: "https://th.bing.com/th/id/OPAC.gPsaAwW3VuQ03w474C474?w=592&h=550&o=5&dpr=1.3&pid=21.1" },
  { id: 3, name: "Berry Glaze", category: "High Shine", price: "₹2,600", image: "https://th.bing.com/th?id=OPAC.LP%2f1Rbk3Qy%2b8xw474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1" },
  { id: 4, name: "Peach Sorbet", category: "Creamy Matte", price: "₹2,500", image: "https://th.bing.com/th?id=OPAC.vNi84q%2frIu7%2bNw474C474&w=592&h=550&o=5&dpr=1.3&pid=21.1" },
  { id: 5, name: "Scarlet Desire", category: "Matte Liquid", price: "₹1,999", image: "https://th.bing.com/th/id/OPAC.qHy0T10Wji4jNQ474C474?w=592&h=550&o=5&dpr=1.3&pid=21.1" },
  { id: 6, name: "Nude Bliss", category: "Satin Finish", price: "₹1,850", image: "https://th.bing.com/th?id=OPAC.XWlEAHLgla%2boJQ474C474&w=140&h=140&c=17&dpr=1.3&pid=21.1" },
  { id: 7, name: "Pink Allure", category: "High Shine", price: "₹1,850", image: "https://th.bing.com/th/id/OPAC.WOFgcvCQKm5YPA474C474?w=140&h=140&c=17&dpr=1.3&pid=21.1" },
  { id: 8, name: "Crimson Silk", category: "Satin Finish", price: "₹2,200", image: "https://th.bing.com/th/id/OPAC.Ps3VQnVtye3q4w474C474?w=140&h=140&dpr=1.3&pid=21.1" },
  { id: 9, name: "Amber Glow", category: "Sheer Tint", price: "₹1,450", image: "https://th.bing.com/th?id=OPAC.Agbsocbm%2bJCaKw474C474&w=140&h=140&dpr=1.3&pid=21.1" },
  { id: 10, name: "Cocoa Satin", category: "Creamy Matte", price: "₹2,100", image: "https://th.bing.com/th?id=OPAC.K1tHdt0%2fwpqFEQ474C474&w=220&h=210&c=17&o=5&dpr=1.3&pid=21.1" },
  { id: 11, name: "Plum Royale", category: "Matte Liquid", price: "₹2,750", image: "https://th.bing.com/th/id/OPAC.djAPJuNEwu2upA474C474?w=220&h=210&c=17&o=5&dpr=1.3&pid=21.1" },
  { id: 12, name: "Mauve Mist", category: "Satin Finish", price: "₹2,300", image: "https://th.bing.com/th/id/OPAC.mfx4WY2u5HsWXg474C474?w=220&h=210&c=17&o=5&dpr=1.3&pid=21.1" },
];

const categories = ["All", "Matte Liquid", "Satin Finish", "High Shine", "Creamy Matte", "Sheer Tint"];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProducts = allProducts.filter(p => 
    (selectedCategory === "All" || p.category === selectedCategory) &&
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#FAF9F6] pt-32 pb-24">
      
      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-10 right-10 z-50 p-4 bg-stone-900 text-white rounded-full shadow-2xl hover:bg-pink-600 transition-colors"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-10 bg-pink-600" />
              <span className="text-pink-600 font-bold tracking-[0.4em] text-[10px] uppercase">Our Collection</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-serif text-stone-900 leading-[1.1]">
              The Full <br />
              <span className="italic font-light text-pink-600">Lipstick Gallery</span>
            </h1>
          </motion.div>

          {/* Search & Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
            <div className="relative group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-stone-400 group-focus-within:text-pink-600 transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search shades..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-[300px] bg-white border border-stone-100 rounded-full pl-14 pr-8 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-pink-500/20 focus:border-pink-500/30 transition-all shadow-sm"
              />
            </div>
          </div>
        </div>

        {/* Categories Tab */}
        <div className="flex gap-4 overflow-x-auto pb-8 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`whitespace-nowrap px-8 py-3 rounded-full text-[10px] uppercase tracking-widest font-bold transition-all ${
                selectedCategory === cat 
                ? "bg-stone-900 text-white shadow-xl scale-105" 
                : "bg-white text-stone-500 hover:bg-stone-50 border border-stone-100 shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-12">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="group p-4 bg-white rounded-[2.5rem] shadow-sm hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] border border-stone-100 transition-all duration-500"
              >
                {/* Image Container */}
                <div className="relative aspect-[10/13] overflow-hidden rounded-[2rem] bg-stone-50">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]"
                  />
                  
                  {/* Add to Bag Overlay */}
                  <div className="absolute inset-0 bg-stone-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <button 
                      onClick={() => addToCart({ ...product, price: parseFloat(product.price.replace(/[₹,]/g, '')) })}
                      className="bg-white/95 backdrop-blur-md text-stone-900 p-6 rounded-full shadow-2xl hover:bg-pink-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-500"
                    >
                      <ShoppingBag size={24} />
                    </button>
                  </div>

                  <div className="absolute top-5 left-5">
                    <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[9px] uppercase tracking-widest font-bold text-stone-600 shadow-sm">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="mt-8 px-2 text-center">
                  <h3 className="text-2xl font-serif text-stone-900 mb-2 truncate px-2">{product.name}</h3>
                  <p className="text-xl font-medium text-pink-600">{product.price}</p>
                  
                  <button 
                    onClick={() => addToCart({ ...product, price: parseFloat(product.price.replace(/[₹,]/g, '')) })}
                    className="mt-6 w-full py-4 rounded-2xl bg-stone-50 text-stone-900 text-[10px] items-center justify-center font-bold uppercase tracking-widest hover:bg-stone-900 hover:text-white transition-all flex gap-3 group/btn"
                  >
                    <ShoppingBag size={14} className="group-hover/btn:rotate-12 transition-transform" />
                    Add to Bag
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-40 text-center">
            <div className="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search size={32} className="text-stone-300" />
            </div>
            <h3 className="text-2xl font-serif text-stone-900 mb-2">No shades found</h3>
            <p className="text-stone-500 font-light italic">Try searching for a different shade or category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
