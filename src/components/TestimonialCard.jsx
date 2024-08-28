import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      className={`bg-sky-300 p-6 rounded-lg shadow-lg cursor-pointer relative ${isExpanded ? 'z-10' : ''}`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <AnimatePresence>
        {isExpanded ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <motion.div
              className="bg-sky-300 p-8 rounded-lg shadow-xl max-w-2xl w-full m-4 relative"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <button
                className="absolute top-2 right-2 text-sky-600 hover:text-sky-800"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsExpanded(false);
                }}
              >
                <X size={24} />
              </button>
              <p className="text-2xl italic mb-6">{testimonial.quote}</p>
              <p className="text-xl font-semibold">{testimonial.author}</p>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
      <p className="text-xl italic mb-4">{testimonial.quote.length > 100 ? `${testimonial.quote.substring(0, 100)}...` : testimonial.quote}</p>
      <p className="font-semibold">{testimonial.author}</p>
    </motion.div>
  );
};

export default TestimonialCard;