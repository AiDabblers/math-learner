import Image from "next/image";
import { Button, Container, Typography, Box, Grid } from '@mui/material';
import { NavBar } from "@/components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: 'primary.main',
          color: 'white',
          py: 8,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h1" gutterBottom>
            Welcome to Math Learner
          </Typography>
          <Typography variant="h5" component="p" gutterBottom>
            Master math concepts with interactive lessons and personalized learning paths.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            href="/sign-up"
            sx={{ mt: 2 }}
          >
            Get Started
          </Button>
        </Container>
      </Box>

      {/* Features Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h4" component="h2" align="center" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                p: 4,
                textAlign: 'center',
                backgroundColor: 'background.paper',
                boxShadow: 1,
                borderRadius: 2,
              }}
            >
              <Typography variant="h6" component="h3" gutterBottom>
                Interactive Lessons
              </Typography>
              <Typography variant="body1">
                Engage with interactive lessons designed to help you understand math concepts better.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                p: 4,
                textAlign: 'center',
                backgroundColor: 'background.paper',
                boxShadow: 1,
                borderRadius: 2,
              }}
            >
              <Typography variant="h6" component="h3" gutterBottom>
                Personalized Learning
              </Typography>
              <Typography variant="body1">
                Receive personalized recommendations based on your learning progress and performance.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                p: 4,
                textAlign: 'center',
                backgroundColor: 'background.paper',
                boxShadow: 1,
                borderRadius: 2,
              }}
            >
              <Typography variant="h6" component="h3" gutterBottom>
                Track Your Progress
              </Typography>
              <Typography variant="body1">
                Monitor your progress with detailed analytics and stay motivated as you improve.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
