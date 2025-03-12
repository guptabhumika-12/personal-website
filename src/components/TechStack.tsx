import React from 'react';
import { Container, Typography, Box, Chip } from '@mui/material';
import { motion } from 'framer-motion';

const TechStack: React.FC = () => {
  const skills = ['React', 'TypeScript', 'Node.js', 'Material-UI', 'GraphQL'];

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Tech Stack and Skills
      </Typography>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {skills.map((skill) => (
            <Chip key={skill} label={skill} color="primary" />
          ))}
        </Box>
      </motion.div>
    </Container>
  );
};

export default TechStack;