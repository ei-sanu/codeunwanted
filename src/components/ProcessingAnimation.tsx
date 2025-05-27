import React from 'react';
import { motion } from 'framer-motion';

interface ProcessingAnimationProps {
  isProcessing: boolean;
}

const ProcessingAnimation: React.FC<ProcessingAnimationProps> = ({ isProcessing }) => {
  if (!isProcessing) return null;
  
  return (
    <div className="fixed inset-0 bg-cyber-darker/80 flex items-center justify-center z-40">
      <div className="bg-cyber-dark cyber-border p-8 rounded-md max-w-md w-full">
        <div className="flex flex-col items-center">
          <div className="relative h-24 w-24">
            {/* Concentric circles */}
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute border-2 border-cyber-green-500 rounded-full opacity-50"
                style={{ 
                  top: 12 * i, 
                  left: 12 * i, 
                  right: 12 * i, 
                  bottom: 12 * i 
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.7, 0.3]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
            
            {/* Rotating element */}
            <motion.div
              className="absolute inset-4 border-t-2 border-r-2 border-cyber-green-500 rounded-full"
              animate={{ rotate: 360 }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            
            {/* Center dot */}
            <motion.div
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-4 w-4 bg-cyber-green-500 rounded-full"
              animate={{ 
                boxShadow: [
                  '0 0 5px rgba(0, 255, 157, 0.8)', 
                  '0 0 15px rgba(0, 255, 157, 0.8)', 
                  '0 0 5px rgba(0, 255, 157, 0.8)'
                ] 
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
          
          <div className="mt-6 text-center">
            <motion.div
              className="font-cyber text-cyber-green-400 text-lg"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              PROCESSING DATA
            </motion.div>
            
            <div className="mt-2 font-cyber text-cyber-green-400 text-xs">
              <motion.div
                className="flex justify-center space-x-1"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2
                }}
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 0.6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2
                    }}
                  >
                    .
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessingAnimation;