import { motion } from 'framer-motion';
import { Pickaxe } from 'lucide-react';

export default function HeroSection() {
  return (
    <motion.section
      className="py-24 text-center bg-gradient-to-br from-accent/20 via-background to-accent/10 rounded-3xl shadow-2xl border border-gray-light/20 overflow-hidden relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent animate-pulse"></div>
      
      <motion.div
        className="relative z-10 inline-block mb-8"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 3,
          ease: 'easeInOut'
        }}
      >
        <Pickaxe 
          size={64} 
          className="text-accent drop-shadow-lg" 
        />
      </motion.div>

      <motion.h1 
        className="text-6xl md:text-7xl font-extrabold text-heading uppercase tracking-wider drop-shadow-lg mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <span className="bg-gradient-to-r from-heading to-accent bg-clip-text text-transparent">
          Beep & Dig
        </span>
      </motion.h1>

      <motion.p 
        className="text-xl md:text-2xl text-gray-dark mt-6 font-light leading-relaxed max-w-3xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Unearth Michigan's treasures with the best metal detecting gear, expert tips, and local knowledge
      </motion.p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 px-4">
        <motion.a
          href="/gear"
          className="bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          whileHover={{ scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
        >
          Shop Premium Gear ⚒️
        </motion.a>

        <motion.a
          href="/blog"
          className="border-2 border-accent text-accent hover:bg-accent hover:text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          whileHover={{ scale: 1.05, rotate: -1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1 }}
        >
          Read Expert Tips 📚
        </motion.a>
      </div>
    </motion.section>
  );
}