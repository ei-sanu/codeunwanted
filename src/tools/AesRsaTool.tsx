import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Lock, Unlock, Copy, Check } from 'lucide-react';
import ProcessingAnimation from '../components/ProcessingAnimation';
import CryptoJS from 'crypto-js';

const AesRsaTool: React.FC = () => {
  const { t } = useTranslation();
  const [input, setInput] = useState('');
  const [key, setKey] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState<'encrypt' | 'decrypt'>('encrypt');
  const [algorithm, setAlgorithm] = useState<'aes' | 'aes-cbc' | 'tripledes'>('aes');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  
  const encryptAES = (text: string, key: string): string => {
    return CryptoJS.AES.encrypt(text, key).toString();
  };
  
  const decryptAES = (ciphertext: string, key: string): string => {
    const bytes = CryptoJS.AES.decrypt(ciphertext, key);
    return bytes.toString(CryptoJS.enc.Utf8);
  };
  
  const encryptAESCBC = (text: string, key: string): string => {
    // Generate random IV
    const iv = CryptoJS.lib.WordArray.random(16);
    
    // Encrypt with AES-CBC
    const encrypted = CryptoJS.AES.encrypt(text, CryptoJS.enc.Utf8.parse(key), {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    
    // Combine IV and ciphertext
    return iv.toString(CryptoJS.enc.Hex) + '|' + encrypted.toString();
  };
  
  const decryptAESCBC = (ciphertext: string, key: string): string => {
    try {
      // Split IV and ciphertext
      const parts = ciphertext.split('|');
      if (parts.length !== 2) throw new Error('Invalid ciphertext format');
      
      const iv = CryptoJS.enc.Hex.parse(parts[0]);
      const encryptedText = parts[1];
      
      // Decrypt
      const decrypted = CryptoJS.AES.decrypt(encryptedText, CryptoJS.enc.Utf8.parse(key), {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });
      
      return decrypted.toString(CryptoJS.enc.Utf8);
    } catch (error) {
      return 'Error: Invalid ciphertext or key';
    }
  };
  
  const encryptTripleDES = (text: string, key: string): string => {
    return CryptoJS.TripleDES.encrypt(text, key).toString();
  };
  
  const decryptTripleDES = (ciphertext: string, key: string): string => {
    const bytes = CryptoJS.TripleDES.decrypt(ciphertext, key);
    return bytes.toString(CryptoJS.enc.Utf8);
  };
  
  const handleProcess = () => {
    if (!input.trim() || !key.trim()) return;
    
    setIsProcessing(true);
    
    // Simulate processing delay
    setTimeout(() => {
      try {
        if (mode === 'encrypt') {
          switch (algorithm) {
            case 'aes':
              setOutput(encryptAES(input, key));
              break;
            case 'aes-cbc':
              setOutput(encryptAESCBC(input, key));
              break;
            case 'tripledes':
              setOutput(encryptTripleDES(input, key));
              break;
          }
        } else {
          switch (algorithm) {
            case 'aes':
              setOutput(decryptAES(input, key));
              break;
            case 'aes-cbc':
              setOutput(decryptAESCBC(input, key));
              break;
            case 'tripledes':
              setOutput(decryptTripleDES(input, key));
              break;
          }
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
        <Lock className="text-cyber-green-500 mr-2" size={24} />
        <h3 className="text-xl font-cyber-heading text-cyber-green-400">
          {t('tool.aes')}
        </h3>
      </div>
      
      <div className="mb-4">
        <div className="flex mb-4">
          <button
            className={`py-2 px-4 ${
              mode === 'encrypt' 
                ? 'bg-cyber-green-800 text-cyber-green-200' 
                : 'bg-cyber-dark text-gray-400'
            } transition-colors`}
            onClick={() => setMode('encrypt')}
          >
            <Lock size={14} className="inline-block mr-1" />
            Encrypt
          </button>
          <button
            className={`py-2 px-4 ${
              mode === 'decrypt' 
                ? 'bg-cyber-green-800 text-cyber-green-200' 
                : 'bg-cyber-dark text-gray-400'
            } transition-colors`}
            onClick={() => setMode('decrypt')}
          >
            <Unlock size={14} className="inline-block mr-1" />
            Decrypt
          </button>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-400 mb-2 font-cyber">
            Algorithm
          </label>
          <div className="flex flex-wrap gap-2">
            <button
              className={`py-1 px-3 text-sm ${
                algorithm === 'aes' 
                  ? 'bg-cyber-green-800 text-cyber-green-200' 
                  : 'bg-cyber-dark text-gray-400'
              } transition-colors`}
              onClick={() => setAlgorithm('aes')}
            >
              AES
            </button>
            <button
              className={`py-1 px-3 text-sm ${
                algorithm === 'aes-cbc' 
                  ? 'bg-cyber-green-800 text-cyber-green-200' 
                  : 'bg-cyber-dark text-gray-400'
              } transition-colors`}
              onClick={() => setAlgorithm('aes-cbc')}
            >
              AES-CBC
            </button>
            <button
              className={`py-1 px-3 text-sm ${
                algorithm === 'tripledes' 
                  ? 'bg-cyber-green-800 text-cyber-green-200' 
                  : 'bg-cyber-dark text-gray-400'
              } transition-colors`}
              onClick={() => setAlgorithm('tripledes')}
            >
              Triple DES
            </button>
          </div>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-400 mb-2 font-cyber">
            Secret Key
          </label>
          <input
            type="text"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            className="w-full bg-cyber-darker cyber-border py-2 px-4 text-gray-200 focus:outline-none focus:border-cyber-green-500 transition-colors font-cyber"
            placeholder="Enter encryption/decryption key..."
          />
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
            placeholder={mode === 'encrypt' ? 'Enter text to encrypt...' : 'Enter ciphertext to decrypt...'}
          />
        </div>
        
        <button
          onClick={handleProcess}
          disabled={!input.trim() || !key.trim() || isProcessing}
          className={`cyber-button mb-4 ${
            !input.trim() || !key.trim() || isProcessing ? 'opacity-50 cursor-not-allowed' : ''
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

export default AesRsaTool;