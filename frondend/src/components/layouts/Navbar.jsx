






import React, { useState } from "react";
import { ShoppingBag, Search, Menu, X, User, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Lipsticks");

  const navLinks = [
    { name: "Lipsticks" },
    { name: "Shades" },
    { name: "Best Sellers" },
    { name: "Reviews" },
    { name: "Our Story" }
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-pink-100">

      {/* Top Bar */}
      <div className="bg-pink-50 py-2 text-center text-xs tracking-widest uppercase text-pink-600">
        Free shipping on all lipstick orders
      </div>

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-20">

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="cursor-pointer"
          >
            <h1 className="text-2xl font-serif tracking-tight text-pink-600">
              VELVETGLOW
              <span className="block text-[10px] tracking-widest text-pink-400 -mt-1">
                LIPSTICK
              </span>
            </h1>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-10 relative">

            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => setActive(link.name)}
                className="relative text-sm font-medium text-gray-600 hover:text-pink-600 transition"
              >
                {link.name}

                {active === link.name && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 -bottom-2 h-[2px] bg-pink-500"
                  />
                )}
              </button>
            ))}

          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">

            <motion.button whileHover={{ scale: 1.2 }}>
              <Search size={20} />
            </motion.button>

            <motion.button whileHover={{ scale: 1.2 }}>
              <User size={20} />
            </motion.button>

            <motion.button whileHover={{ scale: 1.2 }} className="hidden sm:block">
              <Heart size={20} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.2 }}
              className="relative"
            >
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-[10px] rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </motion.button>

          </div>

        </div>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>

        {isOpen && (

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-white border-t"
          >

            <div className="flex flex-col p-6 space-y-6">

              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  whileHover={{ x: 10 }}
                  onClick={() => {
                    setActive(link.name);
                    setIsOpen(false);
                  }}
                  className="text-lg text-left text-gray-700"
                >
                  {link.name}
                </motion.button>
              ))}

            </div>

          </motion.div>

        )}

      </AnimatePresence>

    </header>
  );
};

export default Header;