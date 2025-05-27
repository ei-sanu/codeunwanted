import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useTool } from '../context/ToolContext';

const ToolSelector: React.FC = () => {
  const { t } = useTranslation();
  const { selectedTool, setSelectedTool, tools } = useTool();
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectTool = (toolId: string) => {
    setSelectedTool(toolId);
    setIsOpen(false);
  };

  const getSelectedToolName = () => {
    if (!selectedTool) return t('home.select');
    const tool = tools.find(t => t.id === selectedTool);
    return tool ? t(tool.translationKey) : t('home.select');
  };

  return (
    <div className="relative mb-8 w-full max-w-md mx-auto">
      <button
        onClick={toggleDropdown}
        className="cyber-border bg-cyber-dark w-full py-3 px-4 flex justify-between items-center transition-all duration-300 hover:bg-cyber-dark/80"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <span className="font-cyber text-cyber-green-400">
          {getSelectedToolName()}
        </span>
        <ChevronDown
          className={`text-cyber-green-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          size={20}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-20 w-full mt-2 cyber-border bg-cyber-dark shadow-lg"
          >
            <ul className="py-2">
              {tools.map((tool) => (
                <motion.li
                  key={tool.id}
                  whileHover={{ backgroundColor: 'rgba(0, 255, 157, 0.1)' }}
                >
                  <button
                    onClick={() => selectTool(tool.id)}
                    className="w-full px-4 py-2 text-left text-gray-300 hover:text-cyber-green-400 transition-colors duration-200"
                  >
                    {t(tool.translationKey)}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ToolSelector;
