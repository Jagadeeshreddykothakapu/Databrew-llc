import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import marysvilleImage from '../../assets/img/home/marysville-oh-image.jpg';

const LocationContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '500px',
  overflow: 'hidden',
  borderRadius: '20px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  [theme.breakpoints.down('sm')]: {
    height: '400px',
  },
}));

const LocationBackground = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundImage: `url(${marysvilleImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  filter: 'brightness(0.7)',
  transition: 'filter 0.3s ease-in-out',
  '&:hover': {
    filter: 'brightness(0.8)',
  },
}));

const LocationContent = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  textAlign: 'center',
  padding: theme.spacing(4),
  color: '#fff',
}));

const LocationHeading = styled(Typography)(({ theme }) => ({
  fontSize: '48px',
  fontWeight: 'bold',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.down('sm')]: {
    fontSize: '36px',
  },
}));

const LocationCard = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  borderRadius: '20px',
  padding: theme.spacing(2),
  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
  cursor: 'pointer',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
}));

const LocationIcon = styled(Box)(({ theme }) => ({
  width: '60px',
  height: '60px',
  backgroundColor: '#ff5a5f',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: theme.spacing(2),
  transition: 'background-color 0.3s ease-in-out',
  '&:hover': {
    backgroundColor: '#e53e41',
  },
}));

const LocationDetails = styled(Box)(({ theme }) => ({
  textAlign: 'left',
}));

const LocationCity = styled(Typography)(({ theme }) => ({
  fontSize: '32px',
  fontWeight: 'bold',
  color: '#333',
  marginBottom: theme.spacing(0.5),
  [theme.breakpoints.down('sm')]: {
    fontSize: '24px',
  },
}));

const LocationState = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  color: '#666',
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px',
  },
}));

const Location = () => {
  const handleLocationClick = () => {
    const mapsUrl = 'https://www.google.com/maps/place/Marysville,+OH+43040,+USA';
    window.open(mapsUrl, '_blank');
  };

  return (
    <LocationContainer>
      <LocationBackground />
      <LocationContent>
        <LocationHeading variant="h2">Our Location</LocationHeading>
        <LocationCard onClick={handleLocationClick}>
          <LocationIcon>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </LocationIcon>
          <LocationDetails>
            <LocationCity variant="h6">Marysville</LocationCity>
            <LocationState variant="body1">Ohio</LocationState>
          </LocationDetails>
        </LocationCard>
      </LocationContent>
    </LocationContainer>
  );
};

export default Location;