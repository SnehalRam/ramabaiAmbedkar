import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './Home';
import About from './About';
import './App.css';

const App: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'mr'>('en');
  
  const Navigation: React.FC = () => {
    const location = useLocation();
    
    return (
      <nav>
        <ul>
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
            >
              {language === 'en' ? 'Home' : 'मुख्यपृष्ठ'}
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={location.pathname === '/about' ? 'active' : ''}
            >
              {language === 'en' ? 'About' : 'परिचय'}
            </Link>
          </li>
          <li>
            <button 
              className="language-toggle"
              onClick={() => setLanguage(language === 'en' ? 'mr' : 'en')}
            >
              {language === 'en' ? 'मराठी' : 'English'}
            </button>
          </li>
        </ul>
      </nav>
    );
  };

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home language={language} />} />
          <Route path="/about" element={<About language={language} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
