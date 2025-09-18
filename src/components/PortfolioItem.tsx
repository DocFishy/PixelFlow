import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PortfolioItemProps {
  image: string;
  title: string;
  category: string;
  delay?: number;
}

export function PortfolioItem({ image, title, category, delay = 0 }: PortfolioItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ scale: 1.05 }}
      className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-white"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
        >
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileHover={{ opacity: 1, y: 0 }}
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      >
        <div className="text-white">
          <h4 className="mb-2">{title}</h4>
          <p className="text-gray-200 opacity-90">{category}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}