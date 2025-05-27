import { motion } from 'framer-motion';
import { Lock, ShieldAlert, Unlock } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import TerminalAnimation from '../components/TerminalAnimation';
import ToolSelector from '../components/ToolSelector';
import { useTool } from '../context/ToolContext';

const Home: React.FC = () => {
  const { t } = useTranslation();
  const { selectedTool, tools } = useTool();
  const [selectedToolComponent, setSelectedToolComponent] = useState<React.ReactNode | null>(null);

  useEffect(() => {
    if (selectedTool) {
      const tool = tools.find(t => t.id === selectedTool);
      if (tool) {
        const ToolComponent = tool.component;
        setSelectedToolComponent(<ToolComponent />);
      }
    } else {
      setSelectedToolComponent(null);
    }
  }, [selectedTool, tools]);

  return (
    <div className="pt-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-cyber-heading text-cyber-green-400 mb-2">
          {t('home.title')}
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          {t('home.subtitle')}
        </p>
        <div className="max-w-2xl mx-auto">
          <div className="cyber-border p-4 bg-cyber-darker/50">
            <p className="text-gray-300">
              Secure, efficient tools for encoding and decoding various formats.
            </p>
            <div className="mt-4">
              <TerminalAnimation
                text="echo 'CyberTools Platform ' | tr 'Dev By' 'somesh.social' "
                loop={true}
                delay={300}
              />
            </div>
          </div>
        </div>
      </motion.div>

      {!selectedTool && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
        >
          <div className="cyber-border p-6 bg-cyber-dark/50">
            <div className="flex items-center mb-4">
              <Lock className="text-cyber-green-500 mr-2" size={24} />
              <h3 className="text-xl font-cyber-heading text-cyber-green-400">
                Encode
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              Transform your plaintext data into various encoded formats for secure transmission and storage.
            </p>
            <TerminalAnimation
              text="echo 'Secret Message' | base64"
              loop={true}
            />
          </div>

          <div className="cyber-border p-6 bg-cyber-dark/50">
            <div className="flex items-center mb-4">
              <Unlock className="text-cyber-green-500 mr-2" size={24} />
              <h3 className="text-xl font-cyber-heading text-cyber-green-400">
                Decode
              </h3>
            </div>
            <p className="text-gray-400 mb-4">
              Convert encoded data back into its original form for analysis and understanding.
            </p>
            <TerminalAnimation
              text="echo 'U2VjcmV0IE1lc3NhZ2U=' | base64 -d"
              loop={true}
              delay={500}
            />
          </div>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <ToolSelector />

        {selectedToolComponent ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="cyber-border p-6 bg-cyber-dark/80"
          >
            {selectedToolComponent}
          </motion.div>
        ) : (
          <motion.div
            className="text-center p-12 cyber-border bg-cyber-dark/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.8, 1] }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <ShieldAlert className="h-16 w-16 text-cyber-green-500 mx-auto mb-4" />
            <p className="text-xl text-cyber-green-400 font-cyber">
              Select a tool to begin encoding or decoding
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Home;
