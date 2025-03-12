import React from 'react';
import { Container, Typography, Box, TextField, Button } from '@mui/material';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Contact Me
      </Typography>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box component="form" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField label="Name" variant="outlined" fullWidth />
          <TextField label="Email" variant="outlined" fullWidth />
          <TextField label="Message" variant="outlined" multiline rows={4} fullWidth />
          <Button variant="contained" color="primary">
            Send
          </Button>
        </Box>
      </motion.div>
    </Container>
  );
};

export default Contact;