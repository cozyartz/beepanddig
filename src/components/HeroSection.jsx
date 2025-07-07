import { motion } from 'framer-motion';
import { Pickaxe, Zap, Sparkles, Search } from 'lucide-react';
import { useEffect, useState } from 'react';

const FloatingParticle = ({ delay = 0, duration = 4 }) => (
  <motion.div
    className="absolute w-2 h-2 bg-accent/30 rounded-full"
    initial={{ 
      x: Math.random() * 400 - 200,
      y: Math.random() * 300 + 100,
      opacity: 0 
    }}
    animate={{
      x: Math.random() * 400 - 200,
      y: Math.random() * 300 + 100,
      opacity: [0, 1, 0],
      scale: [0.5, 1.2, 0.5]
    }}
    transition={{
      duration,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
  />
);

const AnimatedIcon = ({ Icon, className, delay = 0 }) => (
  <motion.div
    className={`absolute ${className}`}
    initial={{ opacity: 0, scale: 0, rotate: -180 }}
    animate={{ 
      opacity: [0, 1, 0.7, 1],
      scale: [0, 1.2, 0.8, 1],
      rotate: [0, 10, -10, 0],
      y: [0, -20, 0]
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      delay,
      ease: "easeInOut"
    }}
  >
    <Icon size={24} className="text-accent/60" />
  </motion.div>
);

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <motion.section
      className="py-32 text-center bg-gradient-to-br from-accent/20 via-background to-accent/10 rounded-3xl shadow-2xl border border-gray-light/20 overflow-hidden relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
    >
      {/* Animated background layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/5 to-transparent animate-pulse"></div>
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-accent/5"
        animate={{
          background: [
            'radial-gradient(circle at 20% 20%, rgba(165, 94, 63, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, rgba(165, 94, 63, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 80%, rgba(165, 94, 63, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 20%, rgba(165, 94, 63, 0.1) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 20%, rgba(165, 94, 63, 0.1) 0%, transparent 50%)'
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <FloatingParticle key={i} delay={i * 0.3} duration={4 + i * 0.2} />
      ))}

      {/* Animated icons */}
      <AnimatedIcon Icon={Sparkles} className="top-16 left-16" delay={0} />
      <AnimatedIcon Icon={Zap} className="top-24 right-20" delay={0.5} />
      <AnimatedIcon Icon={Search} className="bottom-32 left-24" delay={1} />
      <AnimatedIcon Icon={Sparkles} className="bottom-24 right-16" delay={1.5} />

      {/* Mouse-following glow effect */}
      <motion.div
        className="absolute w-96 h-96 bg-accent/5 rounded-full blur-3xl pointer-events-none"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 15 }}
      />

      {/* Enhanced main icon */}
      <motion.div
        className="relative z-10 inline-block mb-8"
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
          y: [0, -10, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 4,
          ease: 'easeInOut'
        }}
      >
        <motion.div
          className="relative"
          whileHover={{ scale: 1.2, rotate: 15 }}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <Pickaxe 
            size={80} 
            className="text-accent drop-shadow-2xl" 
          />
          <motion.div
            className="absolute inset-0 bg-accent/20 rounded-full blur-xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>

      {/* Enhanced title with staggered animation */}
      <motion.h1 
        className="text-6xl md:text-8xl font-extrabold text-heading uppercase tracking-wider drop-shadow-2xl mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <motion.span 
          className="bg-gradient-to-r from-heading via-accent to-accent-hover bg-clip-text text-transparent inline-block"
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundSize: '200% 200%'
          }}
        >
          Beep & Dig
        </motion.span>
      </motion.h1>

      {/* Enhanced subtitle with typewriter effect */}
      <motion.p 
        className="text-xl md:text-2xl text-gray-dark mt-6 font-light leading-relaxed max-w-4xl mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          Unearth Michigan's treasures with the best metal detecting gear, expert tips, and local knowledge
        </motion.span>
      </motion.p>

      {/* Enhanced CTA buttons */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center mt-16 px-4">
        <motion.a
          href="/gear"
          className="group relative bg-accent hover:bg-accent-hover text-white font-bold px-10 py-5 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
          whileHover={{ scale: 1.05, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.9 }}
        >
          <span className="relative z-10 flex items-center justify-center gap-3">
            <motion.span 
              className="text-2xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ⚒️
            </motion.span>
            <span>Shop Premium Gear</span>
          </span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
          />
          <motion.div
            className="absolute inset-0 bg-accent-hover/50 rounded-2xl"
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>

        <motion.a
          href="/blog"
          className="group relative border-2 border-accent text-accent hover:bg-accent hover:text-white font-bold px-10 py-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
          whileHover={{ scale: 1.05, rotate: -1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1 }}
        >
          <span className="relative z-10 flex items-center justify-center gap-3">
            <motion.span 
              className="text-2xl"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              📚
            </motion.span>
            <span>Read Expert Tips</span>
          </span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent"
            initial={{ x: '-100%' }}
            whileHover={{ x: '100%' }}
            transition={{ duration: 0.6 }}
          />
        </motion.a>
      </div>

      {/* Floating achievement badges */}
      <motion.div
        className="absolute top-12 left-12 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-accent/20"
        initial={{ opacity: 0, scale: 0, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 2, duration: 0.5 }}
        whileHover={{ scale: 1.1, rotate: 5 }}
      >
        <div className="text-accent text-2xl mb-1">🏆</div>
        <div className="text-sm font-semibold text-gray-dark">Michigan's #1</div>
      </motion.div>

      <motion.div
        className="absolute top-12 right-12 bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-accent/20"
        initial={{ opacity: 0, scale: 0, rotate: 10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 2.2, duration: 0.5 }}
        whileHover={{ scale: 1.1, rotate: -5 }}
      >
        <div className="text-accent text-2xl mb-1">⭐</div>
        <div className="text-sm font-semibold text-gray-dark">Expert Guide</div>
      </motion.div>
    </motion.section>
  );
}