import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ShieldAlert } from 'lucide-react';
import LanguageToggle from './LanguageToggle';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const closeMenu = () => {
    setIsOpen(false);
  };
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <nav className="relative z-20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2" onClick={closeMenu}>
            <ShieldAlert className="h-8 w-8 text-cyber-green-500" />
            <span className="text-xl md:text-2xl font-cyber-heading font-bold text-cyber-green-400">
              CodeUnwanted
            </span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <LanguageToggle />
            <button 
              className="text-gray-300 hover:text-cyber-green-400 focus:outline-none" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Menu overlay */}
      <div 
        className={`fixed inset-0 bg-cyber-darker/90 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />
      
      {/* Side menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-cyber-dark cyber-border transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6">
          <div className="flex justify-end mb-8">
            <button 
              onClick={closeMenu}
              className="text-gray-300 hover:text-cyber-green-400 focus:outline-none"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className="flex flex-col space-y-6">
            <Link 
              to="/" 
              className={`text-lg uppercase tracking-wider hover:text-cyber-green-400 transition-colors ${
                isActive('/') ? 'text-cyber-green-400 font-bold' : 'text-gray-300'
              }`}
              onClick={closeMenu}
            >
              {t('nav.home')}
            </Link>
            <Link 
              to="/about" 
              className={`text-lg uppercase tracking-wider hover:text-cyber-green-400 transition-colors ${
                isActive('/about') ? 'text-cyber-green-400 font-bold' : 'text-gray-300'
              }`}
              onClick={closeMenu}
            >
              {t('nav.about')}
            </Link>
            <Link 
              to="/contact" 
              className={`text-lg uppercase tracking-wider hover:text-cyber-green-400 transition-colors ${
                isActive('/contact') ? 'text-cyber-green-400 font-bold' : 'text-gray-300'
              }`}
              onClick={closeMenu}
            >
              {t('nav.contact')}
            </Link>
            <Link 
              to="/how-it-works" 
              className={`text-lg uppercase tracking-wider hover:text-cyber-green-400 transition-colors ${
                isActive('/how-it-works') ? 'text-cyber-green-400 font-bold' : 'text-gray-300'
              }`}
              onClick={closeMenu}
            >
              {t('nav.how')}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;