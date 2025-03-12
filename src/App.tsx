import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { professionalTheme, funTheme } from './theme';
import ThemeToggleButton from './components/ThemeToggleButton';
import Header from './components/Header';
import WorkExperience from './components/WorkExperience';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import FunVersion from './components/FunVersion';
import './styles/App.css';
function App() {
  const [mode, setMode] = useState<'aam' | 'mentios'>('aam');

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'aam' ? 'mentios' : 'aam'));
  };

  return (
    <ThemeProvider theme={mode === 'aam' ? professionalTheme : funTheme}>
      <CssBaseline />
      <Box className="App">
        <Header mode={mode} toggleMode={toggleMode} />
        
        {mode === 'aam' ? (
          // Professional Version
          <>
            <WorkExperience />
            <TechStack />
            <Projects />
            <Contact />
          </>
        ) : (
          // Fun Version
          <FunVersion />
        )}
      </Box>
    </ThemeProvider>
  );
}

export default App;