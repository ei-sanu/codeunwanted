import React from 'react';
import { motion } from 'framer-motion';

const ScanLine: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-10">
      <motion.div 
        className="absolute left-0 right-0 h-[2px] bg-cyber-green-500 opacity-20"
        initial={{ y: '-100%' }}
        animate={{ y: '100vh' }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      />
    </div>
  );
};

export default ScanLine;