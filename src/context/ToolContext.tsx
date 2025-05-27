import React, { createContext, useState, useContext, ReactNode } from 'react';
import { tools } from '../constants/tools';

type ToolContextType = {
  selectedTool: string | null;
  setSelectedTool: (toolId: string | null) => void;
  tools: typeof tools;
};

const ToolContext = createContext<ToolContextType | undefined>(undefined);

export const ToolProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedTool, setSelectedTool] = useState<string | null>(null);

  return (
    <ToolContext.Provider value={{ selectedTool, setSelectedTool, tools }}>
      {children}
    </ToolContext.Provider>
  );
};

export const useTool = (): ToolContextType => {
  const context = useContext(ToolContext);
  if (context === undefined) {
    throw new Error('useTool must be used within a ToolProvider');
  }
  return context;
};