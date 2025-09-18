import { motion } from 'motion/react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

export function TestimonialCard({ quote, author, role, company, rating }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.6 }}
      className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg max-w-2xl mx-auto"
    >
      <div className="flex mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
        ))}
      </div>
      
      <motion.blockquote
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-gray-700 mb-6 italic leading-relaxed"
      >
        "{quote}"
      </motion.blockquote>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <p className="font-medium text-gray-800">{author}</p>
        <p className="text-gray-600">{role} at {company}</p>
      </motion.div>
    </motion.div>
  );
}