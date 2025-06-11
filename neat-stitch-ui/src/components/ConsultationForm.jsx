import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  Typography,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const ConsultationForm = ({ open, onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    onClose();
  };

  return (
    <Dialog 
      open={open} 
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          borderRadius: 2,
          bgcolor: '#FFF8F0',
        }
      }}
    >
      <DialogTitle sx={{ 
        bgcolor: '#8B4513', 
        color: '#D4AF37',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        py: 2
      }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Book a Consultation
        </Typography>
        <IconButton 
          onClick={onClose} 
          sx={{ 
            color: '#D4AF37',
            '&:hover': {
              color: '#FFF8F0'
            }
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ py: 3 }}>
        <Typography 
          variant="body1" 
          sx={{ 
            mb: 3, 
            color: '#8B4513',
            textAlign: 'center'
          }}
        >
          Every inquiry is of equal importance to us. We receive a lot of inquiries on a daily basis, so we would request you to be patient. Please be assured that our team shall reach out to you for sure.
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            required
            label="Your Name"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            required
            label="Your Email"
            type="email"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            required
            label="Phone Number"
            type="tel"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            required
            label="Subject"
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            required
            label="Your Message"
            multiline
            rows={4}
            variant="outlined"
            sx={{ mb: 2 }}
          />
        </Box>
      </DialogContent>

      <DialogActions sx={{ 
        px: 3, 
        py: 2, 
        bgcolor: '#FFF8F0',
        borderTop: '1px solid #D4AF37'
      }}>
        <Button 
          onClick={onClose}
          sx={{ 
            color: '#8B4513',
            '&:hover': {
              bgcolor: 'rgba(139,69,19,0.1)'
            }
          }}
        >
          Cancel
        </Button>
        <Button 
          variant="contained"
          onClick={handleSubmit}
          sx={{ 
            bgcolor: '#D4AF37',
            color: '#8B4513',
            fontWeight: 600,
            '&:hover': {
              bgcolor: '#B8860B'
            }
          }}
        >
          Send Message
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConsultationForm; 