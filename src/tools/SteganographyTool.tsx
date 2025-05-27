import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Image, Upload, Download, Eye, EyeOff } from 'lucide-react';
import ProcessingAnimation from '../components/ProcessingAnimation';

const SteganographyTool: React.FC = () => {
  const { t } = useTranslation();
  const [mode, setMode] = useState<'hide' | 'extract'>('hide');
  const [message, setMessage] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [outputImage, setOutputImage] = useState<string | null>(null);
  const [extractedMessage, setExtractedMessage] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFile(file);
      
      // Create preview
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
      
      // Reset outputs
      setOutputImage(null);
      setExtractedMessage('');
    }
  };
  
  const hideMessageInImage = async () => {
    if (!imageFile || !message) return;
    
    setIsProcessing(true);
    
    // Simulate processing delay
    setTimeout(() => {
      // In a real implementation, this would use actual steganography techniques
      // For demo purposes, we'll just return the original image
      setOutputImage(imagePreview);
      setIsProcessing(false);
    }, 1500);
  };
  
  const extractMessageFromImage = async () => {
    if (!imageFile) return;
    
    setIsProcessing(true);
    
    // Simulate processing delay
    setTimeout(() => {
      // In a real implementation, this would extract the hidden message
      // For demo purposes, we'll just show a fake message
      setExtractedMessage("This is a simulated extracted message for demonstration purposes.");
      setIsProcessing(false);
    }, 1500);
  };
  
  const handleProcess = () => {
    if (mode === 'hide') {
      hideMessageInImage();
    } else {
      extractMessageFromImage();
    }
  };
  
  const handleDownload = () => {
    if (outputImage) {
      const link = document.createElement('a');
      link.href = outputImage;
      link.download = 'stego_image.png';
      link.click();
    }
  };
  
  return (
    <div>
      <div className="flex items-center mb-4">
        <Image className="text-cyber-green-500 mr-2" size={24} />
        <h3 className="text-xl font-cyber-heading text-cyber-green-400">
          {t('tool.steg')}
        </h3>
      </div>
      
      <div className="mb-6">
        <p className="text-gray-400 mb-4">
          Steganography allows you to hide information within images. You can hide a secret message inside an image or extract a hidden message from an image.
        </p>
        
        <div className="flex mb-4">
          <button
            className={`py-2 px-4 flex items-center ${
              mode === 'hide' 
                ? 'bg-cyber-green-800 text-cyber-green-200' 
                : 'bg-cyber-dark text-gray-400'
            } transition-colors`}
            onClick={() => setMode('hide')}
          >
            <EyeOff size={16} className="mr-2" />
            Hide Message
          </button>
          <button
            className={`py-2 px-4 flex items-center ${
              mode === 'extract' 
                ? 'bg-cyber-green-800 text-cyber-green-200' 
                : 'bg-cyber-dark text-gray-400'
            } transition-colors`}
            onClick={() => setMode('extract')}
          >
            <Eye size={16} className="mr-2" />
            Extract Message
          </button>
        </div>
        
        <div className="mb-4">
          <label className="block text-gray-400 mb-2 font-cyber">
            Select Image
          </label>
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/png,image/jpeg"
            className="hidden"
          />
          <button
            onClick={() => fileInputRef.current?.click()}
            className="cyber-button flex items-center"
          >
            <Upload size={16} className="mr-2" />
            Choose Image
          </button>
          
          {imagePreview && (
            <div className="mt-4">
              <div className="cyber-border p-2 inline-block">
                <img 
                  src={imagePreview} 
                  alt="Selected" 
                  className="max-w-full max-h-40 object-contain"
                />
              </div>
            </div>
          )}
        </div>
        
        {mode === 'hide' && (
          <div className="mb-4">
            <label className="block text-gray-400 mb-2 font-cyber">
              Secret Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full bg-cyber-darker cyber-border py-2 px-4 text-gray-200 focus:outline-none focus:border-cyber-green-500 transition-colors font-cyber"
              placeholder="Enter the message to hide in the image..."
            />
          </div>
        )}
        
        <button
          onClick={handleProcess}
          disabled={!imageFile || (mode === 'hide' && !message) || isProcessing}
          className={`cyber-button mb-4 ${
            !imageFile || (mode === 'hide' && !message) || isProcessing ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {mode === 'hide' ? 'Hide Message' : 'Extract Message'}
        </button>
        
        {outputImage && (
          <div className="mb-4">
            <label className="block text-gray-400 mb-2 font-cyber">
              Output Image
            </label>
            <div className="cyber-border p-2 inline-block">
              <img 
                src={outputImage} 
                alt="Output" 
                className="max-w-full max-h-40 object-contain"
              />
            </div>
            <div className="mt-2">
              <button
                onClick={handleDownload}
                className="cyber-button flex items-center"
              >
                <Download size={16} className="mr-2" />
                Download Image
              </button>
            </div>
          </div>
        )}
        
        {extractedMessage && (
          <div className="mb-4">
            <label className="block text-gray-400 mb-2 font-cyber">
              Extracted Message
            </label>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="w-full bg-cyber-darker cyber-border py-2 px-4 text-cyber-green-300 font-cyber min-h-[100px] overflow-auto whitespace-pre-wrap"
            >
              {extractedMessage}
            </motion.div>
          </div>
        )}
      </div>
      
      <ProcessingAnimation isProcessing={isProcessing} />
    </div>
  );
};

export default SteganographyTool;