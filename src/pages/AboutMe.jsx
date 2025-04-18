import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Avatar, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import { GitHub, LinkedIn, Email } from '@mui/icons-material';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  },
}));

const ProfileSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(4),
  backgroundColor: theme.palette.background.paper,
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[2],
}));

const AboutMe = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Container maxWidth="lg">
        <ProfileSection>
          <Avatar
            src="/pfp.png"
            alt="Arhaan"
            sx={{
              width: 200,
              height: 200,
              mb: 3,
              border: '4px solid',
              borderColor: 'primary.main',
            }}
          />
          <Typography variant="h3" component="h1" gutterBottom>
            Arhaan
          </Typography>
          <Typography variant="h5" color="text.secondary" gutterBottom>
            Full Stack Developer & AI Enthusiast
          </Typography>
          <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
            <IconButton
              color="primary"
              component="a"
              href="https://github.com/yourusername"
              target="_blank"
            >
              <GitHub />
            </IconButton>
            <IconButton
              color="primary"
              component="a"
              href="https://linkedin.com/in/yourusername"
              target="_blank"
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              color="primary"
              component="a"
              href="mailto:your.email@example.com"
            >
              <Email />
            </IconButton>
          </Box>
        </ProfileSection>

        <Typography variant="h4" component="h2" sx={{ mt: 8, mb: 4, textAlign: 'center' }}>
          About J.A.R.V.I.S.
        </Typography>
        <Typography variant="body1" paragraph sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
          J.A.R.V.I.S. (Just A Rather Very Intelligent System) is an AI-powered personal assistant
          designed to help you with various tasks, from answering questions to managing your schedule.
          Built with cutting-edge technology and a focus on user experience, J.A.R.V.I.S. aims to
          make your digital life more efficient and enjoyable.
        </Typography>

        <Grid container spacing={4} sx={{ mt: 4 }}>
          <Grid item xs={12} md={4}>
            <StyledCard>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  Features
                </Typography>
                <Typography variant="body1" component="ul">
                  <li>Natural Language Processing</li>
                  <li>Task Management</li>
                  <li>Information Retrieval</li>
                  <li>Personalized Responses</li>
                  <li>Multi-platform Support</li>
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <StyledCard>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  Tech Stack
                </Typography>
                <Typography variant="body1" component="ul">
                  <li>React & Material-UI</li>
                  <li>Node.js & Express</li>
                  <li>Python & FastAPI</li>
                  <li>MongoDB</li>
                  <li>OpenAI API</li>
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <StyledCard>
              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  Contact
                </Typography>
                <Typography variant="body1" paragraph>
                  Have questions or suggestions? Feel free to reach out!
                </Typography>
                <Typography variant="body1">
                  Email: your.email@example.com
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutMe; 