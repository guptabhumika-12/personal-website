import React from 'react';
import { Container, Typography, Box, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const WorkExperience: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Work Experience
      </Typography>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Software Engineer at XYZ Corp
            </Typography>
            <Typography variant="body1">
              Developed and maintained web applications using React and Node.js.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Frontend Developer at ABC Inc
            </Typography>
            <Typography variant="body1">
              Created responsive UI components with Material-UI and TypeScript.
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </Container>
  );
};

export default WorkExperience;