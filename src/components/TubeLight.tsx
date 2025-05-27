import React from 'react';
import { motion } from 'framer-motion';

export const TubeLight: React.FC = () => {
  return (
    <motion.div
      className="tube-light animate-tube-flicker"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  );
};
