import React from 'react';
import { motion } from 'framer-motion';
// Note: This component takes icon as a prop, so we don't need to import specific icons here

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
    {icon && React.cloneElement(icon, { size: 32 })}
  </motion.a>
);

export default SocialLink;
