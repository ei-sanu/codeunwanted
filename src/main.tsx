import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import { LanguageProvider } from './context/LanguageContext';
import { ToolProvider } from './context/ToolContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <LanguageProvider>
        <ToolProvider>
          <App />
        </ToolProvider>
      </LanguageProvider>
    </Router>
  </StrictMode>
);