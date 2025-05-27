import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Shield, Lock, Cpu, Code } from 'lucide-react';
import TerminalAnimation from '../components/TerminalAnimation';

const About: React.FC = () => {
  const { t } = useTranslation();
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <div className="pt-4">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-cyber-heading text-cyber-green-400 mb-2">
          {t('about.title')}
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          {t('about.subtitle')}
        </p>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="cyber-border p-6 bg-cyber-dark/50 mb-8"
      >
        <p className="text-gray-300 mb-4">
          {t('about.description')}
        </p>
        <div className="mt-6">
          <TerminalAnimation 
            text="cat /etc/codeunwanted/mission.txt" 
            loop={false}
          />
        </div>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          className="cyber-border p-6 bg-cyber-dark/70"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center mb-4">
            <Shield className="text-cyber-green-500 mr-2" size={24} />
            <h3 className="text-xl font-cyber-heading text-cyber-green-400">
              {t('about.security')}
            </h3>
          </div>
          <p className="text-gray-400">
            {t('about.security.text')}
          </p>
        </motion.div>
        
        <motion.div 
          className="cyber-border p-6 bg-cyber-dark/70"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center mb-4">
            <Cpu className="text-cyber-green-500 mr-2" size={24} />
            <h3 className="text-xl font-cyber-heading text-cyber-green-400">
              {t('about.modern')}
            </h3>
          </div>
          <p className="text-gray-400">
            {t('about.modern.text')}
          </p>
        </motion.div>
        
        <motion.div 
          className="cyber-border p-6 bg-cyber-dark/70"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center mb-4">
            <Code className="text-cyber-green-500 mr-2" size={24} />
            <h3 className="text-xl font-cyber-heading text-cyber-green-400">
              {t('about.open')}
            </h3>
          </div>
          <p className="text-gray-400">
            {t('about.open.text')}
          </p>
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-12 text-center"
      >
        <div className="inline-block cyber-border bg-cyber-dark/50 p-6 relative">
          <div className="absolute -top-3 left-4 bg-cyber-dark px-2 text-cyber-green-400 font-cyber text-sm">
            VERSION
          </div>
          <p className="text-cyber-green-400 font-cyber">
            CodeUnwanted v1.0.0 - Secure Encoding/Decoding Platform
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;