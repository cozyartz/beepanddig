import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden flex items-center justify-center w-12 h-12 rounded-xl hover:bg-gray-light/20 transition-all duration-300 hover:scale-105"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <motion.div
          className="w-6 h-6 flex flex-col justify-center items-center"
          animate={isOpen ? "open" : "closed"}
        >
          <motion.span
            className="w-full h-0.5 bg-heading rounded-full"
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 6 }
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-full h-0.5 bg-heading rounded-full mt-1.5"
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 }
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-full h-0.5 bg-heading rounded-full mt-1.5"
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -6 }
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
            />

            {/* Menu Panel */}
            <motion.div
              className="lg:hidden fixed top-0 right-0 w-80 h-full bg-background/95 backdrop-blur-lg shadow-2xl z-50 border-l border-gray-light/20"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
            >
              <div className="p-6 pt-20">
                <motion.div
                  className="flex flex-col space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, staggerChildren: 0.1 }}
                >
                  <motion.a
                    href="/"
                    className="text-xl font-semibold text-heading hover:text-accent transition-colors duration-300 flex items-center gap-3 p-3 rounded-xl hover:bg-accent/10"
                    onClick={closeMenu}
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-accent">🏠</span> Home
                  </motion.a>
                  
                  <motion.a
                    href="/blog"
                    className="text-xl font-semibold text-heading hover:text-accent transition-colors duration-300 flex items-center gap-3 p-3 rounded-xl hover:bg-accent/10"
                    onClick={closeMenu}
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-accent">📚</span> Blog
                  </motion.a>
                  
                  <motion.a
                    href="/about"
                    className="text-xl font-semibold text-heading hover:text-accent transition-colors duration-300 flex items-center gap-3 p-3 rounded-xl hover:bg-accent/10"
                    onClick={closeMenu}
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-accent">ℹ️</span> About
                  </motion.a>
                  
                  <motion.a
                    href="/contact"
                    className="text-xl font-semibold text-heading hover:text-accent transition-colors duration-300 flex items-center gap-3 p-3 rounded-xl hover:bg-accent/10"
                    onClick={closeMenu}
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-accent">✉️</span> Contact
                  </motion.a>
                  
                  <motion.a
                    href="/gear"
                    className="text-xl font-semibold text-heading hover:text-accent transition-colors duration-300 flex items-center gap-3 p-3 rounded-xl hover:bg-accent/10"
                    onClick={closeMenu}
                    whileHover={{ scale: 1.05, x: 10 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-accent">⚒️</span> Gear
                  </motion.a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  className="mt-8 pt-6 border-t border-gray-light/20"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex gap-4 justify-center">
                    <motion.a
                      href="https://x.com/DiggityDogHunt"
                      className="text-gray-dark hover:text-accent transition-all duration-300 hover:scale-110 p-3 rounded-full hover:bg-accent/10"
                      aria-label="Follow on X"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      🐦
                    </motion.a>
                    <motion.a
                      href="https://github.com/DiggityDog/beepanddig"
                      className="text-gray-dark hover:text-accent transition-all duration-300 hover:scale-110 p-3 rounded-full hover:bg-accent/10"
                      aria-label="GitHub"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      🔗
                    </motion.a>
                  </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                  className="mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.a
                    href="/gear"
                    className="w-full bg-accent hover:bg-accent-hover text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                    onClick={closeMenu}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>Shop Premium Gear</span>
                    <span>⚒️</span>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}