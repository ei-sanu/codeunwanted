import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert } from 'lucide-react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-cyber-darker flex flex-col items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <motion.div
          animate={{ 
            boxShadow: [
              '0 0 10px rgba(0, 255, 157, 0.5)', 
              '0 0 30px rgba(0, 255, 157, 0.8)', 
              '0 0 10px rgba(0, 255, 157, 0.5)'
            ]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="p-6 rounded-full"
        >
          <ShieldAlert className="h-16 w-16 text-cyber-green-500" />
        </motion.div>
        
        <motion.div 
          className="absolute -inset-1 rounded-full border border-cyber-green-500 opacity-80"
          initial={{ scale: 1 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      </motion.div>
      
      <div className="mt-8">
        <motion.div 
          className="h-1 bg-cyber-green-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: 200 }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="mt-4 font-cyber text-cyber-green-400 terminal-text"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity,
            times: [0, 0.5, 1],
            ease: "easeInOut"
          }}
        >
          INITIALIZING SECURE ENVIRONMENT...
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Loader;