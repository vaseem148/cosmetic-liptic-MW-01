import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../../libs/CartContext';
import { ArrowLeft, CreditCard, ShieldCheck, CheckCircle2, ChevronRight, Truck, QrCode, Smartphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { cartItems, cartTotal, clearCart } = useCart();
  const [step, setStep] = useState(1); // 1: Info, 2: Payment, 3: Success
  const [paymentMethod, setPaymentMethod] = useState('card'); // 'card' or 'upi'
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setStep(3);
      clearCart();
    }, 2500);
  };

  
  if (cartItems.length === 0 && step !== 3) {
    return (
      <div className="min-h-screen pt-40 pb-20 px-6 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-serif text-stone-900 mb-6">Your bag is empty</h1>
        <p className="text-stone-500 mb-10 max-w-md">Add some items to your bag to proceed with your purchase.</p>
        <button 
          onClick={() => navigate('/')}
          className="bg-stone-900 text-white px-10 py-4 rounded-full uppercase tracking-widest text-[11px] font-bold hover:bg-pink-600 transition-all shadow-xl"
        >
          Return to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF9F6] pt-32 pb-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Progress Bar */}
        {step < 3 && (
          <div className="flex items-center justify-center mb-16 space-x-4">
            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-pink-600' : 'text-stone-300'}`}>
              <span className={`w-6 h-6 rounded-full border flex items-center justify-center text-[10px] font-bold ${step >= 1 ? 'border-pink-600 bg-pink-50' : 'border-stone-300'}`}>1</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Shipping</span>
            </div>
            <div className={`h-[1px] w-12 ${step >= 2 ? 'bg-pink-600' : 'bg-stone-200'}`} />
            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-pink-600' : 'text-stone-300'}`}>
              <span className={`w-6 h-6 rounded-full border flex items-center justify-center text-[10px] font-bold ${step >= 2 ? 'border-pink-600 bg-pink-50' : 'border-stone-300'}`}>2</span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-bold">Payment</span>
            </div>
          </div>
        )}

        <AnimatePresence mode="wait">
          {step === 3 ? (
            <motion.div 
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-xl mx-auto text-center py-20 bg-white rounded-[3rem] shadow-2xl border border-pink-50 p-12"
            >
              <div className="flex justify-center mb-10">
                <motion.div
                  initial={{ rotate: -45, scale: 0 }}
                  animate={{ rotate: 0, scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 12 }}
                  className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center text-green-500"
                >
                  <CheckCircle2 size={48} />
                </motion.div>
              </div>
              <h2 className="text-4xl font-serif text-stone-900 mb-4">Order Confirmed!</h2>
              <p className="text-stone-500 font-light leading-relaxed mb-10">
                Thank you for choosing VelvetGlow. Your signature shades are being prepared for their journey to you. Check your email for details.
              </p>
              <button 
                onClick={() => navigate('/')}
                className="w-full bg-stone-900 text-white py-5 rounded-full text-[11px] font-bold uppercase tracking-widest hover:bg-pink-600 transition-all"
              >
                Continue Shopping
              </button>
            </motion.div>
          ) : (
            <motion.div 
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid lg:grid-cols-[1fr,400px] gap-12 items-start"
            >
              {/* Left Column: Form */}
              <div className="bg-white rounded-[2.5rem] shadow-sm border border-stone-100 p-8 md:p-12">
                {step === 1 ? (
                  <form onSubmit={(e) => { e.preventDefault(); setStep(2); }} className="space-y-8">
                    <div className="flex items-center gap-4 mb-4">
                      <Truck className="text-pink-600" size={24} />
                      <h2 className="text-2xl font-serif">Shipping Information</h2>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input label="First Name" placeholder="Jane" required />
                      <Input label="Last Name" placeholder="Doe" required />
                    </div>
                    <Input label="Email Address" type="email" placeholder="jane@example.com" required />
                    <Input label="Street Address" placeholder="123 Velvet Lane" required />
                    <div className="grid md:grid-cols-3 gap-6">
                      <Input label="City" placeholder="Paris" required />
                      <Input label="Country" placeholder="France" required />
                      <Input label="Postal Code" placeholder="75001" required />
                    </div>

                    <button 
                      type="submit"
                      className="w-full bg-stone-900 text-white py-5 rounded-full flex items-center justify-center gap-3 group mt-10"
                    >
                      <span className="text-[11px] font-bold uppercase tracking-widest">Continue to Payment</span>
                      <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </form>
                ) : (
                  <div className="space-y-8">
                    <button 
                      type="button"
                      onClick={() => setStep(1)}
                      className="flex items-center gap-2 text-stone-400 hover:text-stone-900 transition-colors mb-4"
                    >
                      <ArrowLeft size={16} />
                      <span className="text-[10px] uppercase tracking-widest font-bold">Back to Shipping</span>
                    </button>

                    <div className="flex items-center gap-4 mb-8">
                      <CreditCard className="text-pink-600" size={24} />
                      <h2 className="text-2xl font-serif">Select Payment Method</h2>
                    </div>

                    {/* Payment Method Selector */}
                    <div className="grid grid-cols-2 gap-4 mb-10">
                      <button 
                        onClick={() => setPaymentMethod('card')}
                        className={`p-6 rounded-[2rem] border-2 transition-all flex flex-col items-center gap-3 ${paymentMethod === 'card' ? 'border-pink-600 bg-pink-50/30' : 'border-stone-100 bg-stone-50/50 hover:border-stone-200'}`}
                      >
                        <CreditCard size={24} className={paymentMethod === 'card' ? 'text-pink-600' : 'text-stone-400'} />
                        <span className={`text-[10px] uppercase tracking-widest font-bold ${paymentMethod === 'card' ? 'text-pink-600' : 'text-stone-500'}`}>Card</span>
                      </button>
                      <button 
                        onClick={() => setPaymentMethod('upi')}
                        className={`p-6 rounded-[2rem] border-2 transition-all flex flex-col items-center gap-3 ${paymentMethod === 'upi' ? 'border-pink-600 bg-pink-50/30' : 'border-stone-100 bg-stone-50/50 hover:border-stone-200'}`}
                      >
                        <Smartphone size={24} className={paymentMethod === 'upi' ? 'text-pink-600' : 'text-stone-400'} />
                        <span className={`text-[10px] uppercase tracking-widest font-bold ${paymentMethod === 'upi' ? 'text-pink-600' : 'text-stone-500'}`}>UPI / QR</span>
                      </button>
                    </div>

                    <form onSubmit={handlePayment} className="space-y-8">
                      <AnimatePresence mode="wait">
                        {paymentMethod === 'card' ? (
                          <motion.div 
                            key="card"
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 10 }}
                            className="space-y-6"
                          >
                            <Input label="Cardholder Name" placeholder="JANE DOE" required />
                            <div className="relative">
                              <Input label="Card Number" placeholder="0000 0000 0000 0000" required />
                            </div>
                            <div className="grid grid-cols-2 gap-6">
                              <Input label="Expiry Date" placeholder="MM/YY" required />
                              <Input label="CVV" placeholder="123" required />
                            </div>
                          </motion.div>
                        ) : (
                          <motion.div 
                            key="upi"
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -10 }}
                            className="space-y-8"
                          >
                            <div className="bg-stone-50 p-8 rounded-[2rem] border border-stone-100 flex flex-col items-center text-center">
                              <div className="w-48 h-48 bg-white p-4 rounded-2xl shadow-sm mb-6 flex items-center justify-center border border-stone-100">
                                <QrCode size={120} className="text-stone-900" strokeWidth={1} />
                              </div>
                              <p className="text-[10px] uppercase tracking-widest font-bold text-stone-400 mb-2">Scan to Pay</p>
                              <p className="text-xl font-serif text-stone-900">Total: ₹{cartTotal.toLocaleString('en-IN')}</p>
                            </div>

                            <div className="relative flex items-center py-4">
                              <div className="flex-grow border-t border-stone-100"></div>
                              <span className="flex-shrink mx-4 text-[10px] uppercase tracking-widest font-bold text-stone-300">OR</span>
                              <div className="flex-grow border-t border-stone-100"></div>
                            </div>

                            <Input label="UPI ID" placeholder="username@upi" required />
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <div className="bg-pink-50/50 p-4 rounded-2xl flex items-start gap-3">
                        <ShieldCheck className="text-pink-600 flex-shrink-0" size={18} />
                        <p className="text-[10px] text-pink-700 leading-relaxed uppercase tracking-wider font-medium">
                          Your transaction is encrypted and secure. We never store your full payment details.
                        </p>
                      </div>

                      <button 
                        type="submit"
                        disabled={isProcessing}
                        className="w-full bg-[#1a1a1a] text-white py-5 rounded-full flex items-center justify-center gap-3 relative overflow-hidden group shadow-2xl disabled:opacity-70"
                      >
                        <span className={`text-[11px] font-bold uppercase tracking-widest transition-opacity ${isProcessing ? 'opacity-0' : 'opacity-100'}`}>
                          {paymentMethod === 'card' ? `Pay ₹${cartTotal.toLocaleString('en-IN')}` : 'Confirm Payment'}
                        </span>
                        {isProcessing && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div 
                              animate={{ rotate: 360 }}
                              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                              className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full"
                            />
                          </div>
                        )}
                      </button>
                    </form>
                  </div>
                )}
              </div>

              {/* Right Column: Order Summary */}
              <div className="sticky top-40">
                <div className="bg-white rounded-[2.5rem] shadow-xl border border-stone-100 overflow-hidden">
                  <div className="p-8 border-b border-stone-50 bg-stone-50/50">
                    <h3 className="text-lg font-serif">Order Summary</h3>
                  </div>
                  
                  <div className="p-8 space-y-6">
                    <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2 custom-scrollbar">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex justify-between items-center gap-4">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-16 bg-stone-50 rounded-lg overflow-hidden flex-shrink-0">
                              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <p className="text-xs font-medium text-stone-900 line-clamp-1">{item.name}</p>
                              <p className="text-[10px] text-stone-400">Qty: {item.quantity}</p>
                            </div>
                          </div>
                          <span className="text-xs font-semibold text-stone-900">₹{(item.price * item.quantity).toLocaleString('en-IN')}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-stone-50 space-y-3">
                      <div className="flex justify-between text-xs text-stone-500">
                        <span>Subtotal</span>
                        <span>₹{cartTotal.toLocaleString('en-IN')}</span>
                      </div>
                      <div className="flex justify-between text-xs text-stone-500">
                        <span>Shipping</span>
                        <span className="text-green-600 font-medium">Free</span>
                      </div>
                      <div className="flex justify-between pt-4">
                        <span className="text-sm font-bold uppercase tracking-widest">Total</span>
                        <span className="text-xl font-serif text-stone-900">₹{cartTotal.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

const Input = ({ label, ...props }) => (
  <div className="space-y-2">
    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 pl-1">{label}</label>
    <input 
      {...props}
      className="w-full bg-stone-50 border border-stone-100 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-pink-500/20 focus:border-pink-500/30 transition-all font-light"
    />
  </div>
);

export default Checkout;
