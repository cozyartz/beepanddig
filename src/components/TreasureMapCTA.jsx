import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTreasureChest } from '@fortawesome/pro-solid-svg-icons';

const TreasureMapCTA = () => (
  <motion.section className="py-20 text-center bg-[url('/images/parchment-bg.jpg')] bg-cover bg-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.6, ease: 'easeInOut' }}>
    <h2 className="text-4xl font-semibold text-heading flex items-center justify-center gap-4">
      <FontAwesomeIcon icon={faTreasureChest} size="2x" className="text-accent animate-pulse" />
      Hunt for Hidden Treasures
    </h2>
    <p className="text-2xl text-gray-dark mt-6 font-light">Explore tips, stories, and gear to uncover Michigan’s lost relics.</p>
    <motion.a href="/blog" className="mt-10 inline-block bg-accent text-white px-8 py-4 rounded-2xl shadow-xl hover:shadow-3xl transition-all duration-300" whileHover={{ scale: 1.1, rotate: 2 }} whileTap={{ scale: 0.95 }}>
      Start Digging
    </motion.a>
  </motion.section>
);

export default TreasureMapCTA;