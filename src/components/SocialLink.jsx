import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialLink = ({ href, label, icon }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center text-foreground hover:text-accent transition-all duration-300"
    whileHover={{ scale: 1.2, rotate: 3 }}
    whileTap={{ scale: 0.9 }}
  >
    <span className="sr-only">{label}</span>
    <FontAwesomeIcon icon={icon} size="2x" />
  </motion.a>
);

export default SocialLink;
