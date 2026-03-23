import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

const CosmeticHero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 15]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section
            id="home"
            ref={containerRef}
            className="relative w-full min-h-[90vh] bg-[#F7D2D2] overflow-hidden flex items-center py-20"
        >

            {/* Background Texture with slight movement */}
            <motion.div
                style={{ y: y1, opacity: 0.1 }}
                className="absolute inset-0 pointer-events-none"
            >
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/water.png')]"></div>
            </motion.div>

            {/* Floating Blobs */}
            <motion.div
                animate={{
                    x: [0, 30, 0],
                    y: [0, -50, 0],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-[10%] w-64 h-64 bg-pink-300/20 rounded-full blur-3xl -z-10"
            />
            <motion.div
                animate={{
                    x: [0, -40, 0],
                    y: [0, 30, 0],
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 right-[15%] w-96 h-96 bg-rose-300/20 rounded-full blur-3xl -z-10"
            />

            <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

                {/* LEFT CONTENT */}
                <motion.div
                    style={{ y: y2 }}
                    className="flex flex-col space-y-8 order-2 lg:order-1"
                >

                    <div className="space-y-1">
                        <motion.h2
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-3xl md:text-5xl font-sans font-medium tracking-widest text-stone-800 uppercase leading-tight"
                        >
                            Effortless Glow Feels
                        </motion.h2>

                        <motion.h1
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl md:text-6xl font-serif text-stone-500 uppercase tracking-[0.2em] opacity-80"
                        >
                            Luxury
                        </motion.h1>
                    </div>

                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-fit bg-[#1a1a1a] text-white px-10 py-3 text-xs font-bold uppercase tracking-[0.2em] hover:bg-stone-800 transition-all duration-300 shadow-xl"
                    >
                        Enquiry Now
                    </motion.button>

                    <div className="max-w-xs space-y-6">

                        {/* Small product image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 }}
                            className="w-24 drop-shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=200"
                                alt="Product"
                                className="rounded-lg"
                            />
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="text-stone-700 text-sm leading-relaxed font-light"
                        >
                            Nurture your skin with clean, conscious ingredients designed to reveal a naturally luminous, healthy single day.
                        </motion.p>
                    </div>

                    {/* Slider buttons */}
                    <div className="flex space-x-6 items-center pt-4">
                        <button className="p-2 border border-stone-800/20 rounded-full hover:bg-white/20 transition-colors">
                            <ArrowLeft size={20} strokeWidth={1.5} />
                        </button>

                        <button className="p-2 border border-stone-800/20 rounded-full hover:bg-white/20 transition-colors">
                            <ArrowRight size={20} strokeWidth={1.5} />
                        </button>
                    </div>
                </motion.div>

                {/* RIGHT SIDE VIDEO SHAPE */}
                <motion.div
                    style={{ y: y1, rotate }}
                    className="relative order-1 lg:order-2 flex justify-center lg:justify-end"
                >

                    <div className="relative w-full max-w-lg aspect-[4/5]">

                        {/* Organic Shape */}
                        <motion.div
                            initial={{ clipPath: "circle(0% at 50% 50%)" }}
                            whileInView={{ clipPath: "circle(100% at 50% 50%)" }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                            className="w-full h-full overflow-hidden bg-stone-200 shadow-2xl"
                            style={{ borderRadius: '45% 55% 65% 35% / 40% 35% 65% 60%' }}
                        >

                            {/* VIDEO */}
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-full object-cover scale-110"
                            >
                                <source src="/cosmetic.mp4" type="video/mp4" />
                            </video>

                        </motion.div>

                        {/* Sparkle Icons */}
                        <div className="absolute top-10 -right-6 text-white drop-shadow-lg">
                            <Sparkles size={54} fill="white" className="opacity-90 animate-pulse" />
                        </div>

                        <div className="absolute bottom-20 -left-6 text-white drop-shadow-lg">
                            <Sparkles size={30} fill="white" className="opacity-80" />
                        </div>

                        {/* Trusted Customers */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 }}
                            className="absolute -bottom-6 right-0 md:-right-8 bg-white/30 backdrop-blur-xl p-4 flex items-center space-x-3 border border-white/40 rounded-3xl shadow-lg"
                        >

                            <div className="flex -space-x-3">
                                {[1, 2, 3].map((i) => (
                                    <div
                                        key={i}
                                        className="w-10 h-10 rounded-full border-2 border-white overflow-hidden shadow-sm"
                                    >
                                        <img
                                            src={`https://i.pravatar.cc/100?img=${i + 10}`}
                                            alt="customer"
                                        />
                                    </div>
                                ))}
                            </div>

                            <div className="pr-2">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-stone-800">
                                    Trusted by 10k+
                                </p>
                                <p className="text-[10px] uppercase tracking-tighter text-stone-600">
                                    Customers
                                </p>
                            </div>

                        </motion.div>

                    </div>

                </motion.div>

            </div>
        </section>
    );
};

export default CosmeticHero;