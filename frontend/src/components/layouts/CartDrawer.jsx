import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Plus, Minus, ArrowRight, Trash2 } from 'lucide-react';
import { useCart } from '../../libs/CartContext';
import { useNavigate } from 'react-router-dom';

const CartDrawer = () => {
  const { 
    cartItems, 
    isCartOpen, 
    setIsCartOpen, 
    updateQuantity, 
    removeFromCart, 
    cartTotal 
  } = useCart();
  
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-stone-900/40 backdrop-blur-sm z-[100]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-[101] flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-stone-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} className="text-pink-600" />
                <h2 className="text-xl font-serif text-stone-900">Your Bag</h2>
                <span className="bg-stone-100 text-stone-600 text-[10px] font-bold px-2 py-1 rounded-full px-2">
                  {cartItems.length} {cartItems.length === 1 ? 'Item' : 'Items'}
                </span>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-stone-50 rounded-full transition-colors"
              >
                <X size={20} className="text-stone-400" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-20 h-20 bg-stone-50 rounded-full flex items-center justify-center">
                    <ShoppingBag size={32} className="text-stone-200" />
                  </div>
                  <p className="text-stone-400 font-light italic">Your bag is currently empty.</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="text-xs uppercase tracking-widest font-bold text-pink-600 border-b border-pink-200 pb-1"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-24 h-32 bg-stone-50 rounded-xl overflow-hidden flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                    </div>
                    
                    <div className="flex-1 flex flex-col justify-between py-1">
                      <div>
                        <div className="flex justify-between items-start">
                          <h3 className="text-sm font-medium text-stone-900 leading-tight">{item.name}</h3>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-stone-300 hover:text-red-400 transition-colors"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                        <p className="text-[10px] text-stone-400 uppercase tracking-widest mt-1">Signature Series</p>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center border border-stone-200 rounded-full px-2 py-1">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 text-stone-400 hover:text-stone-900"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="w-8 text-center text-xs font-medium tabular-nums">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 text-stone-400 hover:text-stone-900"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <span className="text-sm font-semibold text-stone-900">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cartItems.length > 0 && (
              <div className="p-8 bg-stone-50 border-t border-stone-200 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-stone-500 font-light">Subtotal</span>
                  <div className="text-right">
                    <span className="text-2xl font-serif text-stone-900 leading-none">₹{cartTotal.toLocaleString('en-IN')}</span>
                    <p className="text-[10px] text-stone-400 uppercase tracking-widest mt-1">Shipping calculated at checkout</p>
                  </div>
                </div>

                <button 
                  onClick={handleCheckout}
                  className="w-full bg-stone-900 text-white py-5 rounded-full flex items-center justify-center gap-4 group hover:bg-pink-600 transition-all duration-500 shadow-xl"
                >
                  <span className="text-xs font-bold uppercase tracking-[0.2em]">Proceed to Checkout</span>
                  <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
