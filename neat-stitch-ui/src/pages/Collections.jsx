import React, { useState } from 'react';
import { 
  Container, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  Box, 
  Button, 
  Tabs, 
  Tab,
  Chip,
  IconButton,
  Dialog,
  DialogContent,
  DialogActions,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ZoomInIcon from '@mui/icons-material/ZoomIn';

const collections = {
  ektara: {
    title: 'Ektara Collection',
    description: 'A symphony of traditional elegance and contemporary design, the Ektara collection brings together the finest craftsmanship with modern aesthetics.',
    items: [
      {
        id: 1,
        name: 'Royal Blue Lehenga',
        price: '₹45,000',
        image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
        category: 'Bridal',
        tags: ['Lehenga', 'Bridal', 'Blue'],
        details: 'Handcrafted with intricate embroidery and premium fabrics, this royal blue lehenga is perfect for your special day.'
      },
      {
        id: 2,
        name: 'Emerald Green Saree',
        price: '₹35,000',
        image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
        category: 'Bridal',
        tags: ['Saree', 'Bridal', 'Green'],
        details: 'A stunning emerald green saree with gold zari work, perfect for wedding ceremonies.'
      },
      {
        id: 3,
        name: 'Floral Print Lehenga',
        price: '₹55,000',
        image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
        category: 'Bridal',
        tags: ['Lehenga', 'Bridal', 'Floral'],
        details: 'Delicate floral patterns with modern cuts make this lehenga a perfect choice for contemporary brides.'
      }
    ]
  },
  khwabeeda: {
    title: 'Khwabeeda Collection',
    description: 'Where dreams meet reality in bridal couture. Each piece tells a story of love, tradition, and modern elegance.',
    items: [
      {
        id: 4,
        name: 'Rose Gold Lehenga',
        price: '₹65,000',
        image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
        category: 'Bridal',
        tags: ['Lehenga', 'Bridal', 'Rose Gold'],
        details: 'A luxurious rose gold lehenga with intricate mirror work and embroidery.'
      },
      {
        id: 5,
        name: 'Pearl White Gown',
        price: '₹75,000',
        image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
        category: 'Bridal',
        tags: ['Gown', 'Bridal', 'White'],
        details: 'A modern take on bridal wear, this pearl white gown combines western elegance with Indian craftsmanship.'
      }
    ]
  },
  bridal: {
    title: 'Bridal Collection',
    description: 'Making your special day even more magical with our exclusive bridal collection.',
    items: [
      {
        id: 6,
        name: 'Classic Red Lehenga',
        price: '₹85,000',
        image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
        category: 'Bridal',
        tags: ['Lehenga', 'Bridal', 'Red'],
        details: 'The quintessential bridal lehenga in classic red with gold embroidery.'
      },
      {
        id: 7,
        name: 'Royal Purple Saree',
        price: '₹45,000',
        image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=600&q=80',
        category: 'Bridal',
        tags: ['Saree', 'Bridal', 'Purple'],
        details: 'A regal purple saree with silver zari work and intricate border designs.'
      }
    ]
  }
};

const Collections = () => {
  const [selectedCollection, setSelectedCollection] = useState('ektara');
  const [selectedItem, setSelectedItem] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleCollectionChange = (event, newValue) => {
    setSelectedCollection(newValue);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: '#FFF8F0', pt: 8, pb: 4 }}>
      <Container maxWidth={false} sx={{ maxWidth: 1400 }}>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography 
            variant="h2" 
            align="center" 
            sx={{ 
              mb: 4, 
              color: '#8B4513', 
              fontWeight: 700,
              fontFamily: 'Playfair Display, serif'
            }}
          >
            Our Collections
          </Typography>
        </motion.div>

        <Tabs
          value={selectedCollection}
          onChange={handleCollectionChange}
          centered
          sx={{
            mb: 6,
            '& .MuiTab-root': {
              color: '#8B4513',
              fontSize: '1.1rem',
              fontWeight: 600,
              '&.Mui-selected': {
                color: '#D4AF37',
              },
            },
            '& .MuiTabs-indicator': {
              backgroundColor: '#D4AF37',
            },
          }}
        >
          <Tab label="Ektara" value="ektara" />
          <Tab label="Khwabeeda" value="khwabeeda" />
          <Tab label="Bridal" value="bridal" />
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography 
            variant="h5" 
            align="center" 
            sx={{ 
              mb: 6, 
              color: '#8B4513',
              fontFamily: 'Playfair Display, serif',
              fontStyle: 'italic'
            }}
          >
            {collections[selectedCollection].description}
          </Typography>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={4}>
            {collections[selectedCollection].items.map((item) => (
              <Grid item xs={12} sm={6} md={4} key={item.id}>
                <motion.div variants={itemVariants}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 4,
                      boxShadow: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: 6,
                      },
                      cursor: 'pointer',
                      overflow: 'hidden',
                    }}
                    onClick={() => handleItemClick(item)}
                  >
                    <Box sx={{ position: 'relative' }}>
                      <CardMedia
                        component="img"
                        image={item.image}
                        alt={item.name}
                        sx={{ 
                          height: 400, 
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.05)',
                          }
                        }}
                      />
                      <IconButton
                        sx={{
                          position: 'absolute',
                          top: 8,
                          right: 8,
                          bgcolor: 'rgba(255,255,255,0.9)',
                          '&:hover': {
                            bgcolor: 'white',
                          }
                        }}
                      >
                        <ZoomInIcon />
                      </IconButton>
                    </Box>
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Typography 
                        gutterBottom 
                        variant="h5" 
                        component="h2" 
                        sx={{ 
                          color: '#8B4513', 
                          fontWeight: 600,
                          fontFamily: 'Playfair Display, serif'
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography 
                        variant="h6" 
                        color="secondary" 
                        sx={{ 
                          mb: 2,
                          color: '#D4AF37',
                          fontWeight: 600
                        }}
                      >
                        {item.price}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        {item.tags.map((tag, index) => (
                          <Chip
                            key={index}
                            label={tag}
                            size="small"
                            sx={{
                              bgcolor: '#D4AF37',
                              color: 'white',
                              '&:hover': {
                                bgcolor: '#B8860B',
                              },
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>

        <AnimatePresence>
          {openDialog && selectedItem && (
            <Dialog
              open={openDialog}
              onClose={handleCloseDialog}
              maxWidth="md"
              fullWidth
              PaperProps={{
                sx: {
                  borderRadius: 4,
                  overflow: 'hidden',
                }
              }}
            >
              <DialogContent sx={{ p: 0 }}>
                <Grid container>
                  <Grid item xs={12} md={6}>
                    <Box
                      component="img"
                      src={selectedItem.image}
                      alt={selectedItem.name}
                      sx={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ p: 4 }}>
                      <Typography 
                        variant="h4" 
                        sx={{ 
                          mb: 2, 
                          color: '#8B4513', 
                          fontWeight: 600,
                          fontFamily: 'Playfair Display, serif'
                        }}
                      >
                        {selectedItem.name}
                      </Typography>
                      <Typography 
                        variant="h5" 
                        color="secondary" 
                        sx={{ 
                          mb: 3,
                          color: '#D4AF37',
                          fontWeight: 600
                        }}
                      >
                        {selectedItem.price}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        sx={{ 
                          mb: 3,
                          color: '#8B4513',
                          fontSize: '1.1rem',
                          lineHeight: 1.8
                        }}
                      >
                        {selectedItem.details}
                      </Typography>
                      <Box sx={{ display: 'flex', gap: 1, mb: 3 }}>
                        {selectedItem.tags.map((tag, index) => (
                          <Chip
                            key={index}
                            label={tag}
                            sx={{
                              bgcolor: '#D4AF37',
                              color: 'white',
                            }}
                          />
                        ))}
                      </Box>
                      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
                        <Button
                          variant="contained"
                          color="primary"
                          startIcon={<ShoppingCartIcon />}
                          sx={{
                            bgcolor: '#8B4513',
                            '&:hover': {
                              bgcolor: '#6B3410',
                            },
                          }}
                        >
                          Add to Cart
                        </Button>
                        <IconButton color="secondary">
                          <FavoriteIcon />
                        </IconButton>
                        <IconButton color="secondary">
                          <ShareIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions sx={{ p: 2, bgcolor: '#FFF8F0' }}>
                <Button 
                  onClick={handleCloseDialog} 
                  color="primary"
                  sx={{
                    color: '#8B4513',
                    '&:hover': {
                      color: '#D4AF37',
                    }
                  }}
                >
                  Close
                </Button>
              </DialogActions>
            </Dialog>
          )}
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default Collections; 