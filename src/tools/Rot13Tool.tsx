import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { RotateCw, Copy, Check } from 'lucide-react';
import ProcessingAnimation from '../components/ProcessingAnimation';

const Rot13Tool: React.FC = () => {
  const { t } = useTranslation();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  
  const rot13 = (str: string): string => {
    return str.replace(/[a-zA-Z]/g, (char) => {
      const code = char.charCodeAt(0);
      
      // A-Z (65-90) a-z (97-122)
      const base = code < 91 ? 65 : 97;
      
      // Shift by 13 and wrap around if necessary
      return String.fromCharCode(((code - base + 13) % 26) + base);
    });
  };
  
  const handleProcess = () => {
    if (!input.trim()) return;
    
    setIsProcessing(true);
    
    // Simulate processing delay
    setTimeout(() => {
      try {
        setOutput(rot13(input));
      } catch (error) {
        setOutput('Error: Invalid input');
      }
      
      setIsProcessing(false);
    }, 800);
  };
  
  const handleCopy = () => {
    if (!output) return;
    
    navigator.clipboard.writeText(output);
    setIsCopied(true);
    
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  
  return (
    <div>
      <div className="flex items-center mb-4">
        <RotateCw className="text-cyber-green-500 mr-2" size={24} />
        <h3 className="text-xl font-cyber-heading text-cyber-green-400">
          {t('tool.rot13')}
        </h3>
      </div>
      
      <div className="mb-4">
        <p className="text-gray-400 mb-4">
          ROT13 is a simple letter substitution cipher that replaces a letter with the 13th letter after it. It's often used to hide spoilers or puzzle answers.
        </p>
        
        <div className="mb-4">
          <label className="block text-gray-400 mb-2 font-cyber">
            {t('home.tool.input')}
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={5}
            className="w-full bg-cyber-darker cyber-border py-2 px-4 text-gray-200 focus:outline-none focus:border-cyber-green-500 transition-colors font-cyber"
            placeholder="Enter text to apply ROT13 cipher..."
          />
        </div>
        
        <button
          onClick={handleProcess}
          disabled={!input.trim() || isProcessing}
          className={`cyber-button mb-4 ${
            !input.trim() || isProcessing ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {t('home.tool.process')}
        </button>
        
        {output && (
          <div className="mb-4">
            <label className="block text-gray-400 mb-2 font-cyber flex justify-between items-center">
              <span>{t('home.tool.output')}</span>
              <button
                onClick={handleCopy}
                className="text-cyber-green-400 hover:text-cyber-green-300 transition-colors focus:outline-none"
                title="Copy to clipboard"
              >
                {isCopied ? <Check size={18} /> : <Copy size={18} />}
              </button>
            </label>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full bg-cyber-darker cyber-border py-2 px-4 text-cyber-green-300 font-cyber min-h-[100px] overflow-auto whitespace-pre-wrap"
            >
              {output}
            </motion.div>
          </div>
        )}
      </div>
      
      <ProcessingAnimation isProcessing={isProcessing} />
    </div>
  );
};

export default Rot13Tool;