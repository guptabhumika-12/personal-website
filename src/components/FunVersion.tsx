import React from 'react';
import { Box, Container, Typography, Card, CardContent, Button } from '@mui/material';

const FunVersion: React.FC = () => {
  const [dadJoke, setDadJoke] = React.useState('');

  const fetchDadJoke = async () => {
    try {
      const response = await fetch('https://icanhazdadjoke.com/', {
        headers: {
          'Accept': 'application/json'
        }
      });
      const data = await response.json();
      setDadJoke(data.joke);
    } catch (error) {
      console.error('Error fetching dad joke:', error);
    }
  };

  React.useEffect(() => {
    fetchDadJoke();
  }, []);

  return (
    <Container>
      <Box sx={{ py: 4 }}>
        <Typography variant="h3" gutterBottom>
          Welcome to My Fun Side! 🎉
        </Typography>
        
        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Random Dad Joke
            </Typography>
            <Typography variant="body1">
              {dadJoke}
            </Typography>
            <Button onClick={fetchDadJoke} sx={{ mt: 2 }}>
              Get Another Joke
            </Button>
          </CardContent>
        </Card>

        <Card sx={{ mb: 4 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Things I Love
            </Typography>
            <Typography variant="body1" component="div">
              <ul>
                <li>Reading Mystery Novels 📚</li>
                <li>Coffee Adventures ☕</li>
                <li>Travel Photography 📸</li>
                {/* Add more personal interests */}
              </ul>
            </Typography>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              My Recommendations
            </Typography>
            <Typography variant="body1" component="div">
              <ul>
                <li>Favorite Books 📚</li>
                <li>Must-Watch Shows 🎬</li>
                <li>Hidden Gem Cafes ☕</li>
                {/* Add more recommendations */}
              </ul>
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default FunVersion;