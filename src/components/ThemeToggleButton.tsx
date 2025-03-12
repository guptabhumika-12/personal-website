import React from 'react';
import { Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: '24px',
  padding: '8px 24px',
  transition: 'all 0.3s ease',
  background: theme.palette.mode === 'light' ? '#f0f0f0' : '#333',
}));

interface ThemeToggleButtonProps {
  mode: 'aam' | 'mentios';
  toggleMode: () => void;
}

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({ mode, toggleMode }) => {
  return (
    <Box sx={{ position: 'fixed', top: '20px', right: '20px', zIndex: 1100 }}>
      <StyledButton
        onClick={toggleMode}
        variant="contained"
        color="primary"
      >
        Zindagi: {mode === 'aam' ? 'Mentios' : 'Aam'}
      </StyledButton>
    </Box>
  );
};

export default ThemeToggleButton;