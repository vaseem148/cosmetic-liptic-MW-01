import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle, Heart } from "lucide-react";

const Reviews = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sowmya R.",
      date: "2 days ago",
      rating: 5,
      shade: "Midnight Rose",
      comment: "Finally found the perfect red! It stays on even after a full dinner. The matte finish doesn't dry out my lips at all.",
      avatar: "https://i.pravatar.cc/150?u=sowmya"
    },
    {
      id: 2,
      name: "Priya Lakshmi",
      date: "1 week ago",
      rating: 5,
      shade: "Nude Velvet",
      comment: "Best everyday lipstick. It feels like I'm wearing nothing. Already ordered two more shades!",
      avatar: "https://i.pravatar.cc/150?u=priya"
    },
    {
      id: 3,
      name: "Anjali K.",
      date: "3 days ago",
      rating: 5,
      shade: "Sunset Peach",
      comment: "The color payoff is insane. One swipe is enough. Shipping was also very fast to Chennai!",
      avatar: "https://i.pravatar.cc/150?u=anjali"
    },
    // Duplicating for seamless infinite scroll
    {
        id: 4,
        name: "Meera V.",
        date: "5 days ago",
        rating: 5,
        shade: "Berry Blast",
        comment: "Absolutely love the texture. It's so creamy and lasts all day long!",
        avatar: "https://i.pravatar.cc/150?u=meera"
    }
  ];

  // Double the list for infinite animation loop
  const scrollList = [...testimonials, ...testimonials];

  return (
    <section id="reviews" className="py-24 bg-[#FFF9F9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-md border border-pink-100 px-6 py-2 rounded-full shadow-sm mb-6"
          >
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
            </div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-pink-600">
              4.9/5 Trust Score
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif text-gray-900 leading-tight"
          >
            Loved by <span className="relative inline-block">
                <span className="italic text-pink-600">thousands</span>
                <motion.svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <motion.path 
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        d="M0,5 Q50,10 100,5" stroke="#F472B6" strokeWidth="2" fill="transparent" 
                    />
                </motion.svg>
            </span> <br /> of beauty lovers.
          </motion.h2>
        </div>

        {/* Infinite Scroll Container */}
        <div className="relative flex overflow-hidden py-10">
          <motion.div 
            className="flex space-x-8"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ 
                repeat: Infinity, 
                ease: "linear", 
                duration: 30 
            }}
            whileHover={{ animationPlayState: "paused" }} // Stops on hover
          >
            {scrollList.map((review, index) => (
              <div
                key={index}
                className="w-[350px] flex-shrink-0 bg-white p-8 rounded-[40px] shadow-[0_15px_40px_-15px_rgba(255,182,193,0.2)] border border-pink-50 relative group transition-all duration-500 hover:shadow-pink-200/50"
              >
                <Quote className="absolute top-6 right-8 text-pink-50 group-hover:text-pink-100 transition-colors" size={48} />
                
                {/* User Info */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="relative">
                    <img src={review.avatar} alt={review.name} className="w-14 h-14 rounded-full border-2 border-pink-200 object-cover" />
                    <div className="absolute -bottom-1 -right-1 bg-blue-500 rounded-full p-1 border-2 border-white">
                        <CheckCircle size={10} className="text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                    <p className="text-[10px] text-gray-400 uppercase tracking-widest">{review.date}</p>
                  </div>
                </div>

                {/* Rating & Shade */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-pink-500">
                    {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <span className="text-[10px] bg-pink-50 text-pink-600 px-3 py-1 rounded-full font-bold">
                    {review.shade}
                  </span>
                </div>

                {/* Comment */}
                <p className="text-gray-600 text-sm leading-relaxed italic h-[60px] overflow-hidden">
                  "{review.comment}"
                </p>

                {/* Footer */}
                <div className="mt-6 pt-6 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-[9px] font-bold text-gray-300 uppercase tracking-widest">Verified Purchase</span>
                  <motion.button 
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center gap-1 text-[10px] text-pink-600 font-bold"
                  >
                    <Heart size={12} /> Helpful
                  </motion.button>
                </div>
              </div>
            ))}
          </motion.div>
          
          {/* Gradient Fades for Smoothness */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FFF9F9] to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FFF9F9] to-transparent z-10" />
        </div>

        {/* CTA */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-12 text-center"
        >
          <button className="group relative bg-gray-900 text-white px-12 py-5 rounded-full text-xs font-bold uppercase tracking-[0.2em] overflow-hidden transition-all hover:pr-16">
            <span className="relative z-10">Write a Review</span>
            <span className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">→</span>
            <div className="absolute inset-0 bg-pink-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Reviews;