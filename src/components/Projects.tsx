import React from 'react';
import { Container, Typography, Box, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Projects
      </Typography>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Project A
            </Typography>
            <Typography variant="body1">
              Description of Project A.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Project B
            </Typography>
            <Typography variant="body1">
              Description of Project B.
            </Typography>
          </CardContent>
        </Card>
      </motion.div>
    </Container>
  );
};

export default Projects;