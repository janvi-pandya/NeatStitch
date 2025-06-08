import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardMedia, CardContent, CardActions, Box, IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { motion, useScroll, useTransform } from 'framer-motion';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Collections from './pages/Collections';

const theme = createTheme({
  palette: {
    primary: {
      main: '#8B4513', // Saddle Brown for luxury feel
    },
    secondary: {
      main: '#D4AF37', // Gold for premium touch
    },
  },
  typography: {
    fontFamily: 'Playfair Display, serif',
    h1: {
      fontFamily: 'Playfair Display, serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Playfair Display, serif',
      fontWeight: 600,
    },
  },
});

const showcaseItems = [
  {
    title: "The Art of Bridal Couture",
    subtitle: "Where Tradition Meets Innovation",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1500&q=80",
    description: "Experience the perfect blend of traditional craftsmanship and contemporary design in our exclusive bridal collection."
  },
  {
    title: "Crafted with Passion",
    subtitle: "Every Stitch Tells a Story",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1500&q=80",
    description: "Our master artisans pour their heart into every creation, ensuring each piece is a masterpiece."
  },
  {
    title: "Timeless Elegance",
    subtitle: "Designs That Transcend Time",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1500&q=80",
    description: "Discover collections that celebrate the eternal beauty of bridal fashion."
  }
];

const App = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Box sx={{ minHeight: '100vh', bgcolor: '#FFF8F0', width: '100vw', overflowX: 'hidden' }}>
          <AppBar position="fixed" elevation={0} sx={{ bgcolor: 'rgba(139,69,19,0.95)', boxShadow: 3 }}>
            <Toolbar sx={{ maxWidth: 1400, mx: 'auto', width: '100%' }}>
              <Typography variant="h5" sx={{ flexGrow: 1, fontWeight: 700, letterSpacing: 2, color: '#D4AF37' }}>
                Neat Stitch
              </Typography>
              <Button 
                component={Link} 
                to="/collections" 
                color="inherit" 
                sx={{ mx: 2 }}
              >
                Collections
              </Button>
              <IconButton color="inherit" sx={{ mx: 1 }}>
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit" sx={{ mx: 1 }}>
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" sx={{ mx: 1 }}>
                <PinterestIcon />
              </IconButton>
              <Button 
                variant="contained" 
                color="secondary" 
                startIcon={<WhatsAppIcon />}
                sx={{ 
                  ml: 2,
                  fontWeight: 600,
                  borderRadius: 2,
                  boxShadow: 2,
                  bgcolor: '#D4AF37',
                  '&:hover': {
                    bgcolor: '#B8860B',
                  }
                }}
              >
                Contact Us
              </Button>
            </Toolbar>
          </AppBar>

          <Routes>
            <Route path="/collections" element={<Collections />} />
            <Route path="/" element={
              <>
                {/* Hero Section with Parallax */}
                <motion.div
                  style={{
                    opacity,
                    scale,
                  }}
                >
                  <Box
                    sx={{
                      width: '100vw',
                      height: '100vh',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      overflow: 'hidden',
                    }}
                  >
                    <motion.div
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      style={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        background: `linear-gradient(rgba(139,69,19,0.7),rgba(212,175,55,0.3)), url(https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1500&q=80) center/cover no-repeat`,
                      }}
                    />
                    <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2, textAlign: 'center', color: 'white' }}>
                      <motion.div
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                      >
                        <Typography 
                          variant="h1" 
                          sx={{ 
                            fontWeight: 800, 
                            mb: 2, 
                            letterSpacing: 2, 
                            textShadow: '0 4px 24px #0008',
                            fontSize: { xs: '2.5rem', md: '4rem' }
                          }}
                        >
                          Bridal Couture Reimagined
                        </Typography>
                        <Typography 
                          variant="h5" 
                          sx={{ 
                            mb: 4, 
                            color: 'white', 
                            textShadow: '0 2px 8px #0006',
                            fontFamily: 'Playfair Display, serif'
                          }}
                        >
                          Experience the future of bridal fashion with our innovative digital platform
                        </Typography>
                        <motion.div
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 1, delay: 1 }}
                        >
                          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                            <Button
                              variant="contained"
                              color="secondary"
                              size="large"
                              sx={{
                                px: 5,
                                py: 1.5,
                                fontWeight: 700,
                                fontSize: '1.2rem',
                                borderRadius: 3,
                                boxShadow: 4,
                                transition: 'transform 0.2s',
                                '&:hover': { transform: 'scale(1.07)', boxShadow: 8 },
                                bgcolor: '#D4AF37',
                                '&:hover': {
                                  bgcolor: '#B8860B',
                                }
                              }}
                            >
                              Explore Collections
                            </Button>
                            <Button
                              variant="outlined"
                              color="secondary"
                              size="large"
                              sx={{
                                px: 5,
                                py: 1.5,
                                fontWeight: 700,
                                fontSize: '1.2rem',
                                borderRadius: 3,
                                borderColor: '#D4AF37',
                                color: '#D4AF37',
                                transition: 'all 0.2s',
                                '&:hover': { 
                                  bgcolor: '#D4AF37', 
                                  color: 'white',
                                  borderColor: '#D4AF37'
                                },
                              }}
                            >
                              Book Consultation
                            </Button>
                          </Box>
                        </motion.div>
                      </motion.div>
                    </Container>
                  </Box>
                </motion.div>

                {/* Showcase Sections */}
                {showcaseItems.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Box
                      sx={{
                        width: '100vw',
                        minHeight: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        overflow: 'hidden',
                        bgcolor: index % 2 === 0 ? '#FFF8F0' : '#8B4513',
                      }}
                    >
                      <Container maxWidth={false} sx={{ maxWidth: 1400, py: 8 }}>
                        <Grid container spacing={4} alignItems="center">
                          <Grid item xs={12} md={6}>
                            <motion.div
                              initial={{ x: -100, opacity: 0 }}
                              whileInView={{ x: 0, opacity: 1 }}
                              transition={{ duration: 1 }}
                              viewport={{ once: true }}
                            >
                              <Typography 
                                variant="h2" 
                                sx={{ 
                                  mb: 2, 
                                  color: index % 2 === 0 ? '#8B4513' : '#D4AF37',
                                  fontWeight: 700 
                                }}
                              >
                                {item.title}
                              </Typography>
                              <Typography 
                                variant="h4" 
                                sx={{ 
                                  mb: 3, 
                                  color: index % 2 === 0 ? '#8B4513' : '#D4AF37',
                                  opacity: 0.8 
                                }}
                              >
                                {item.subtitle}
                              </Typography>
                              <Typography 
                                variant="body1" 
                                sx={{ 
                                  mb: 4,
                                  color: index % 2 === 0 ? '#8B4513' : '#D4AF37',
                                  fontSize: '1.2rem',
                                  lineHeight: 1.8
                                }}
                              >
                                {item.description}
                              </Typography>
                              <Button
                                variant="contained"
                                color="secondary"
                                size="large"
                                sx={{
                                  px: 5,
                                  py: 1.5,
                                  fontWeight: 700,
                                  fontSize: '1.2rem',
                                  borderRadius: 3,
                                  boxShadow: 4,
                                  bgcolor: '#D4AF37',
                                  '&:hover': {
                                    bgcolor: '#B8860B',
                                  }
                                }}
                              >
                                Learn More
                              </Button>
                            </motion.div>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <motion.div
                              initial={{ x: 100, opacity: 0 }}
                              whileInView={{ x: 0, opacity: 1 }}
                              transition={{ duration: 1 }}
                              viewport={{ once: true }}
                            >
                              <Box
                                component="img"
                                src={item.image}
                                alt={item.title}
                                sx={{
                                  width: '100%',
                                  height: 'auto',
                                  borderRadius: 4,
                                  boxShadow: 8,
                                }}
                              />
                            </motion.div>
                          </Grid>
                        </Grid>
                      </Container>
                    </Box>
                  </motion.div>
                ))}

                {/* Footer */}
                <Box sx={{ 
                  width: '100vw', 
                  bgcolor: '#8B4513', 
                  py: 4, 
                  textAlign: 'center', 
                  color: '#D4AF37',
                  borderTop: '1px solid #D4AF37'
                }}>
                  <Container maxWidth={false} sx={{ maxWidth: 1400 }}>
                    <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                      Connect With Us
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <IconButton sx={{ color: '#D4AF37', mx: 1 }}>
                        <InstagramIcon />
                      </IconButton>
                      <IconButton sx={{ color: '#D4AF37', mx: 1 }}>
                        <FacebookIcon />
                      </IconButton>
                      <IconButton sx={{ color: '#D4AF37', mx: 1 }}>
                        <PinterestIcon />
                      </IconButton>
                    </Box>
                    <Typography>
                      © {new Date().getFullYear()} Neat Stitch. All rights reserved.
                    </Typography>
                  </Container>
                </Box>
              </>
            } />
          </Routes>
        </Box>
      </ThemeProvider>
    </Router>
  );
};

export default App;
