import { Github, Linkedin, ShieldAlert, Twitter } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cyber-dark border-t border-cyber-green-900 mt-8 relative z-10">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <ShieldAlert className="h-6 w-6 text-cyber-green-500 mr-2" />
            <span className="text-lg font-cyber-heading font-bold text-cyber-green-400">
              CodeUnwanted
            </span>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0 ml-32">
            <a href="https://github.com/ei-sanu" className="text-gray-400 hover:text-cyber-green-400 transition-colors">
              <Github size={20} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://x.com/SomeshR82674271" className="text-gray-400 hover:text-cyber-green-400 transition-colors">
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="https://www.linkedin.com/in/somesh-biswal-b73576320?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-400 hover:text-cyber-green-400 transition-colors">
              <Linkedin size={20} />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>

          <div className="text-sm text-gray-400">
            &copy; {currentYear} CodeUnwanted. {t('footer.rights')}
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-800 flex flex-col md:flex-row justify-center md:justify-between items-center text-xs text-gray-500">
          <div className="mb-2 md:mb-0">
            <Link to="/privacy" className="hover:text-cyber-green-400 transition-colors mr-4">
              {t('footer.privacy')}
            </Link>
            <Link to="/terms" className="hover:text-cyber-green-400 transition-colors">
              {t('footer.terms')}
            </Link>
          </div>
          <div>
            <span>Made with 💚 by <a href="https://www.somesh.social/" target="_blank" rel="noopener noreferrer" className="hover:text-cyber-green-400 transition-colors">somesh.social</a><br></br> for cybersecurity enthusiasts</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
