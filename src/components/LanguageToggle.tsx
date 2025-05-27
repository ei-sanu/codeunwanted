import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Languages } from 'lucide-react';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  
  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };
  
  return (
    <button 
      onClick={toggleLanguage}
      className="flex items-center space-x-1 cyber-button py-1 px-2"
    >
      <Languages size={16} />
      <span>{language === 'en' ? 'हिंदी' : 'English'}</span>
    </button>
  );
};

export default LanguageToggle;