// components/Navbar.tsx
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import Link from 'next/link';

export const NavBar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: 'primary.main', boxShadow: 'none' }}>
      <Toolbar>
        <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MyApp
          </Typography>
          <div>
            <Link href="/" passHref>
              <Button color="inherit" sx={{ ml: 2 }}>
                Home
              </Button>
            </Link>
            <Link href="/about" passHref>
              <Button color="inherit" sx={{ ml: 2 }}>
                About
              </Button>
            </Link>
            <Link href="/contact" passHref>
              <Button color="inherit" sx={{ ml: 2 }}>
                Contact
              </Button>
            </Link>
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
