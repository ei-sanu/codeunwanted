import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { CheckCircle, Layers, ArrowRight, FileText } from 'lucide-react';
import TerminalAnimation from '../components/TerminalAnimation';

const HowItWorks: React.FC = () => {
  const { t } = useTranslation();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <div className="pt-4">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-cyber-heading text-cyber-green-400 mb-2">
          {t('how.title')}
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          {t('how.subtitle')}
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="cyber-border p-6 bg-cyber-dark/50 mb-12"
      >
        <div className="mb-6">
          <TerminalAnimation 
            text="./codeunwanted.sh --help" 
            loop={false}
          />
        </div>
        <p className="text-gray-300">
          CodeUnwanted provides various encoding and decoding tools to help you work with different data formats. All processing happens locally in your browser, ensuring your data never leaves your device.
        </p>
      </motion.div>
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-12"
      >
        {/* Step 1 */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center md:items-start gap-6"
        >
          <div className="flex-shrink-0 cyber-border bg-cyber-dark/70 p-4 w-16 h-16 flex items-center justify-center">
            <span className="text-cyber-green-400 font-cyber-heading text-2xl">1</span>
          </div>
          <div className="flex-grow cyber-border p-6 bg-cyber-dark/70">
            <h3 className="text-xl font-cyber-heading text-cyber-green-400 mb-2 flex items-center">
              <CheckCircle className="text-cyber-green-500 mr-2" size={20} />
              {t('how.step1')}
            </h3>
            <p className="text-gray-400 mb-4">
              {t('how.step1.text')}
            </p>
            <div className="bg-cyber-darker p-4 border border-cyber-green-900 rounded">
              <div className="flex items-center text-cyber-green-400 font-cyber text-sm">
                <Layers size={16} className="mr-2" />
                <span>TOOL SELECTOR</span>
              </div>
              <div className="mt-2 flex items-center space-x-2">
                <div className="bg-cyber-green-900/20 px-2 py-1 text-cyber-green-300 rounded text-xs">Base64</div>
                <div className="bg-cyber-green-900/20 px-2 py-1 text-cyber-green-300 rounded text-xs">Hex</div>
                <div className="bg-cyber-green-900/20 px-2 py-1 text-cyber-green-300 rounded text-xs">Binary</div>
                <ArrowRight size={12} className="text-gray-500" />
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Step 2 */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center md:items-start gap-6"
        >
          <div className="flex-shrink-0 cyber-border bg-cyber-dark/70 p-4 w-16 h-16 flex items-center justify-center">
            <span className="text-cyber-green-400 font-cyber-heading text-2xl">2</span>
          </div>
          <div className="flex-grow cyber-border p-6 bg-cyber-dark/70">
            <h3 className="text-xl font-cyber-heading text-cyber-green-400 mb-2 flex items-center">
              <CheckCircle className="text-cyber-green-500 mr-2" size={20} />
              {t('how.step2')}
            </h3>
            <p className="text-gray-400 mb-4">
              {t('how.step2.text')}
            </p>
            <div className="bg-cyber-darker p-4 border border-cyber-green-900 rounded">
              <div className="flex items-center text-cyber-green-400 font-cyber text-sm">
                <FileText size={16} className="mr-2" />
                <span>INPUT DATA</span>
              </div>
              <div className="mt-2 py-2 text-gray-300 font-cyber text-sm">
                Hello, World!
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Step 3 */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center md:items-start gap-6"
        >
          <div className="flex-shrink-0 cyber-border bg-cyber-dark/70 p-4 w-16 h-16 flex items-center justify-center">
            <span className="text-cyber-green-400 font-cyber-heading text-2xl">3</span>
          </div>
          <div className="flex-grow cyber-border p-6 bg-cyber-dark/70">
            <h3 className="text-xl font-cyber-heading text-cyber-green-400 mb-2 flex items-center">
              <CheckCircle className="text-cyber-green-500 mr-2" size={20} />
              {t('how.step3')}
            </h3>
            <p className="text-gray-400 mb-4">
              {t('how.step3.text')}
            </p>
            <div className="bg-cyber-darker p-4 border border-cyber-green-900 rounded">
              <motion.div 
                className="bg-cyber-green-700 text-cyber-darker px-4 py-2 inline-block rounded"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-cyber uppercase">Encode</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* Step 4 */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center md:items-start gap-6"
        >
          <div className="flex-shrink-0 cyber-border bg-cyber-dark/70 p-4 w-16 h-16 flex items-center justify-center">
            <span className="text-cyber-green-400 font-cyber-heading text-2xl">4</span>
          </div>
          <div className="flex-grow cyber-border p-6 bg-cyber-dark/70">
            <h3 className="text-xl font-cyber-heading text-cyber-green-400 mb-2 flex items-center">
              <CheckCircle className="text-cyber-green-500 mr-2" size={20} />
              {t('how.step4')}
            </h3>
            <p className="text-gray-400 mb-4">
              {t('how.step4.text')}
            </p>
            <div className="bg-cyber-darker p-4 border border-cyber-green-900 rounded">
              <div className="flex items-center text-cyber-green-400 font-cyber text-sm">
                <FileText size={16} className="mr-2" />
                <span>OUTPUT DATA</span>
              </div>
              <div className="mt-2 py-2 text-cyber-green-300 font-cyber text-sm overflow-x-auto">
                SGVsbG8sIFdvcmxkIQ==
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HowItWorks;