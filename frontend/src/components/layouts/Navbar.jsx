import React, { useState, useEffect } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../../libs/CartContext";
import CartDrawer from "./CartDrawer";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Lipsticks");
  const [isScrolled, setIsScrolled] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Lipsticks", id: "collection" },
    { name: "Shades", id: "shades" },
    { name: "Best Sellers", id: "bestsellers" },
    { name: "Reviews", id: "reviews" },
    { name: "Our Story", id: "story" }
  ];

  const scrollToSection = (id) => {
    if (location.pathname !== '/') {
      navigate('/#' + id);
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled 
        ? "backdrop-blur-2xl bg-white/70 py-0 shadow-sm" 
        : "backdrop-blur-none bg-white py-2"
      } border-b border-pink-50`}>

        {/* Top Banner - Subtle & Clean */}
        <div className="bg-[#FFF5F7] py-2 text-center text-[10px] tracking-[0.2em] uppercase text-pink-700 font-medium">
          Complimentary shipping on orders over ₹4,000
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-gray-800"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Luxury Logo Design */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => scrollToSection("home")}
              className="cursor-pointer text-center md:text-left"
            >
              <h1 className="text-2xl font-serif tracking-[0.15em] text-gray-900 leading-none">
                VELVET<span className="text-pink-600">GLOW</span>
                <span className="block text-[8px] tracking-[0.4em] text-gray-400 mt-1.5 uppercase font-sans">
                  Maison de Beauté
                </span>
              </h1>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-12">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => {
                    setActive(link.name);
                    scrollToSection(link.id);
                  }}
                  className="relative text-[11px] uppercase tracking-[0.2em] font-semibold text-gray-500 hover:text-pink-600 transition-all duration-300"
                >
                  {link.name}
                  {active === link.name && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute left-0 right-0 -bottom-1 h-[1px] bg-pink-600"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Right Side - Shopping Bag */}
            <div className="flex items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 group"
              >
                <ShoppingBag 
                  size={22} 
                  strokeWidth={1.2} 
                  className="text-gray-800 group-hover:text-pink-600 transition-colors" 
                />
                <AnimatePresence>
                  {cartCount > 0 && (
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute top-1 right-0 bg-pink-600 text-white text-[9px] font-bold rounded-full h-4 w-4 flex items-center justify-center shadow-sm"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>

          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-pink-50"
            >
              <div className="flex flex-col p-8 space-y-6">
                {navLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => {
                      setActive(link.name);
                      scrollToSection(link.id);
                      setIsOpen(false);
                    }}
                    className={`text-xs uppercase tracking-[0.2em] text-left transition-colors ${
                      active === link.name ? "text-pink-600 font-bold" : "text-gray-500"
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Cart Drawer Component */}
      <CartDrawer />
    </>
  );
};

export default Header;