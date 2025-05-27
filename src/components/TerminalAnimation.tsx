import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TerminalAnimationProps {
  text: string;
  loop?: boolean;
  delay?: number;
}

const TerminalAnimation: React.FC<TerminalAnimationProps> = ({ 
  text, 
  loop = false, 
  delay = 0 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (currentIndex < text.length) {
      timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50); // Speed of typing
    } else if (loop) {
      timeout = setTimeout(() => {
        setDisplayedText('');
        setCurrentIndex(0);
      }, 2000); // Pause before restarting
    }
    
    return () => clearTimeout(timeout);
  }, [currentIndex, text, loop]);
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayedText('');
      setCurrentIndex(0);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [delay]);
  
  return (
    <div className="terminal-window">
      <div className="mb-2 flex items-center space-x-2">
        <div className="h-3 w-3 rounded-full bg-red-500 opacity-70"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500 opacity-70"></div>
        <div className="h-3 w-3 rounded-full bg-green-500 opacity-70"></div>
      </div>
      <div className="font-cyber text-cyber-green-400">
        <span className="text-gray-500">$ </span>
        {displayedText}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-2 h-4 bg-cyber-green-400 ml-1"
        />
      </div>
    </div>
  );
};

export default TerminalAnimation;