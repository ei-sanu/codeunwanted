import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Languages, Copy, Check } from 'lucide-react';
import ProcessingAnimation from '../components/ProcessingAnimation';

const AsciiUnicodeTool: React.FC = () => {
  const { t } = useTranslation();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState<'toUnicode' | 'toAscii'>('toUnicode');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  
  const handleProcess = () => {
    if (!input.trim()) return;
    
    setIsProcessing(true);
    
    // Simulate processing delay
    setTimeout(() => {
      try {
        if (mode === 'toUnicode') {
          // Convert to Unicode code points
          const unicodePoints = Array.from(input)
            .map(char => `U+${char.charCodeAt(0).toString(16).toUpperCase().padStart(4, '0')}`)
            .join(' ');
          setOutput(unicodePoints);
        } else {
          // Convert from Unicode code points to characters
          const asciiText = input
            .split(/\s+/)
            .map(point => {
              if (point.startsWith('U+') || point.startsWith('u+')) {
                const hexValue = point.substring(2);
                return String.fromCharCode(parseInt(hexValue, 16));
              }
              return point;
            })
            .join('');
          setOutput(asciiText);
        }
      } catch (error) {
        setOutput('Error: Invalid input for ' + mode);
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
        <Languages className="text-cyber-green-500 mr-2" size={24} />
        <h3 className="text-xl font-cyber-heading text-cyber-green-400">
          {t('tool.ascii')}
        </h3>
      </div>
      
      <div className="mb-4">
        <div className="flex mb-2">
          <button
            className={`py-2 px-4 ${
              mode === 'toUnicode' 
                ? 'bg-cyber-green-800 text-cyber-green-200' 
                : 'bg-cyber-dark text-gray-400'
            } transition-colors`}
            onClick={() => setMode('toUnicode')}
          >
            Text → Unicode
          </button>
          <button
            className={`py-2 px-4 ${
              mode === 'toAscii' 
                ? 'bg-cyber-green-800 text-cyber-green-200' 
                : 'bg-cyber-dark text-gray-400'
            } transition-colors`}
            onClick={() => setMode('toAscii')}
          >
            Unicode → Text
          </button>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-400 mb-2 font-cyber">
            {t('home.tool.input')}
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={5}
            className="w-full bg-cyber-darker cyber-border py-2 px-4 text-gray-200 focus:outline-none focus:border-cyber-green-500 transition-colors font-cyber"
            placeholder={mode === 'toUnicode' ? 'Enter text to convert to Unicode...' : 'Enter Unicode points (e.g., U+0048 U+0065 U+006C U+006C U+006F)...'}
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

export default AsciiUnicodeTool;