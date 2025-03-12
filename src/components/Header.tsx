import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import ThemeToggleButton from './ThemeToggleButton';

interface HeaderProps {
  mode: 'aam' | 'mentios';
  toggleMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ mode, toggleMode }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My Resume
        </Typography>
        <ThemeToggleButton mode={mode} toggleMode={toggleMode} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;