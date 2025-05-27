import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { KeyRound, Copy, Check } from 'lucide-react';
import ProcessingAnimation from '../components/ProcessingAnimation';

const CaesarTool: React.FC = () => {
  const { t } = useTranslation();
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState<'caesar' | 'vigenere'>('caesar');
  const [key, setKey] = useState('');
  const [shift, setShift] = useState(3);
  const [operation, setOperation] = useState<'encrypt' | 'decrypt'>('encrypt');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  
  const caesarCipher = (text: string, shift: number, decrypt = false): string => {
    const actualShift = decrypt ? (26 - (shift % 26)) : shift;
    
    return text.replace(/[a-zA-Z]/g, (char) => {
      const code = char.charCodeAt(0);
      const isUpperCase = code >= 65 && code <= 90;
      const base = isUpperCase ? 65 : 97;
      
      return String.fromCharCode(((code - base + actualShift) % 26) + base);
    });
  };
  
  const vigenereCipher = (text: string, key: string, decrypt = false): string => {
    if (!key) return text;
    
    const keyRepeated = key.toUpperCase().replace(/[^A-Z]/g, '');
    if (keyRepeated.length === 0) return text;
    
    let result = '';
    let keyIndex = 0;
    
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      if (/[a-zA-Z]/.test(char)) {
        const isUpperCase = char === char.toUpperCase();
        const base = isUpperCase ? 65 : 97;
        const charCode = char.toUpperCase().charCodeAt(0) - 65;
        const keyChar = keyRepeated[keyIndex % keyRepeated.length].charCodeAt(0) - 65;
        
        let newCharCode;
        if (decrypt) {
          newCharCode = (charCode - keyChar + 26) % 26;
        } else {
          newCharCode = (charCode + keyChar) % 26;
        }
        
        result += String.fromCharCode(newCharCode + (isUpperCase ? 65 : 97));
        keyIndex++;
      } else {
        result += char;
      }
    }
    
    return result;
  };
  
  const handleProcess = () => {
    if (!input.trim()) return;
    if (mode === 'vigenere' && !key.trim()) return;
    
    setIsProcessing(true);
    
    // Simulate processing delay
    setTimeout(() => {
      try {
        if (mode === 'caesar') {
          setOutput(caesarCipher(input, shift, operation === 'decrypt'));
        } else {
          setOutput(vigenereCipher(input, key, operation === 'decrypt'));
        }
      } catch (error) {
        setOutput('Error: Invalid input or key');
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
        <KeyRound className="text-cyber-green-500 mr-2" size={24} />
        <h3 className="text-xl font-cyber-heading text-cyber-green-400">
          {t('tool.caesar')}
        </h3>
      </div>
      
      <div className="mb-4">
        <div className="flex mb-4">
          <button
            className={`py-2 px-4 ${
              mode === 'caesar' 
                ? 'bg-cyber-green-800 text-cyber-green-200' 
                : 'bg-cyber-dark text-gray-400'
            } transition-colors`}
            onClick={() => setMode('caesar')}
          >
            Caesar Cipher
          </button>
          <button
            className={`py-2 px-4 ${
              mode === 'vigenere' 
                ? 'bg-cyber-green-800 text-cyber-green-200' 
                : 'bg-cyber-dark text-gray-400'
            } transition-colors`}
            onClick={() => setMode('vigenere')}
          >
            Vigenère Cipher
          </button>
        </div>
        
        <div className="flex mb-4">
          <button
            className={`py-2 px-4 ${
              operation === 'encrypt' 
                ? 'bg-cyber-green-800 text-cyber-green-200' 
                : 'bg-cyber-dark text-gray-400'
            } transition-colors`}
            onClick={() => setOperation('encrypt')}
          >
            Encrypt
          </button>
          <button
            className={`py-2 px-4 ${
              operation === 'decrypt' 
                ? 'bg-cyber-green-800 text-cyber-green-200' 
                : 'bg-cyber-dark text-gray-400'
            } transition-colors`}
            onClick={() => setOperation('decrypt')}
          >
            Decrypt
          </button>
        </div>
        
        {mode === 'caesar' ? (
          <div className="mb-4">
            <label className="block text-gray-400 mb-2 font-cyber">
              Shift Value (1-25)
            </label>
            <input
              type="number"
              min="1"
              max="25"
              value={shift}
              onChange={(e) => setShift(Math.max(1, Math.min(25, parseInt(e.target.value) || 3)))}
              className="w-full bg-cyber-darker cyber-border py-2 px-4 text-gray-200 focus:outline-none focus:border-cyber-green-500 transition-colors font-cyber"
            />
          </div>
        ) : (
          <div className="mb-4">
            <label className="block text-gray-400 mb-2 font-cyber">
              Key
            </label>
            <input
              type="text"
              value={key}
              onChange={(e) => setKey(e.target.value)}
              className="w-full bg-cyber-darker cyber-border py-2 px-4 text-gray-200 focus:outline-none focus:border-cyber-green-500 transition-colors font-cyber"
              placeholder="Enter the key (letters only)..."
            />
          </div>
        )}
        
        <div className="mb-4">
          <label className="block text-gray-400 mb-2 font-cyber">
            {t('home.tool.input')}
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={5}
            className="w-full bg-cyber-darker cyber-border py-2 px-4 text-gray-200 focus:outline-none focus:border-cyber-green-500 transition-colors font-cyber"
            placeholder={`Enter text to ${operation}...`}
          />
        </div>
        
        <button
          onClick={handleProcess}
          disabled={!input.trim() || (mode === 'vigenere' && !key.trim()) || isProcessing}
          className={`cyber-button mb-4 ${
            !input.trim() || (mode === 'vigenere' && !key.trim()) || isProcessing ? 'opacity-50 cursor-not-allowed' : ''
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

export default CaesarTool;