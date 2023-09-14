// components/MovieCard.tsx

import React from 'react';
import { useState } from 'react';
import { Alert, AlertIcon, Box, Image,Flex, Text } from '@chakra-ui/react';
import { Heart } from 'react-feather';
import '../styles/MovieCard.css'
import { Link } from 'react-router-dom';
interface MovieCardProps {
  movie: {
    title: string;
    poster_path: string;
    release_date: string;
    id: number;
  };
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const {id, title, poster_path, release_date } = movie;
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  const [isFavorite, setIsFavorite] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const toggleFavorite = () => {
    if (isFavorite) {
      // Remove the movie from favorites
      setIsFavorite(false);
      showAlertMessage(`${title} removed from favorites`);
    } else {
      // Add the movie to favorites
      setIsFavorite(true);
      showAlertMessage(`${title} added to favorites`);
    }
  };

  const showAlertMessage = (message: string) => {
    // Show the alert message for a few seconds (adjust the duration as needed)
    setAlertMessage(message);
    setShowAlert(true);

    setTimeout(() => {
      setAlertMessage(''); // Clear the alert message when hiding the alert
      setShowAlert(false);
    }, 2000); // 2 seconds
  };


  return (
    <Box>
      {showAlert && (
        <Alert status={isFavorite ? 'success' : 'error'} bg={isFavorite ?  "green.600" : "red.400"} zIndex='10' color={'white'} position="fixed" margin='auto' top={0} left={'0'}>
          <AlertIcon />
          {alertMessage}
        </Alert>
      )}
      
    <Flex
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      flexDirection="column" // Set flex direction to column
      p={4}
      data-testid="movie-card "
      _hover={{ boxShadow: 'xl' }} // Add hover effect
    >  
    <Link to={`/movies/${id}`}>
      <Image src={imageUrl} alt={title}  flexGrow={1} w='100%'  data-testid="movie-poster"/> 
      </Link>
      <Flex  position={'absolute'}backgroundColor='#F3F4F6' borderRadius={'50%'} p={1} className="heart-icon" onClick={toggleFavorite} marginLeft='2' mt='2'
      >
        <Heart color={isFavorite ? 'red' : 'black'}  size={20}/>
      </Flex>
      <Link to={`/movies/${id}`}>
      <Text fontWeight="bold" fontSize="xl" mt={2} color={'black'} data-testid="movie-title">
        {title}
      </Text>
      <Text fontSize="sm" color="gray.500" >
        Release Date: <Text fontSize="sm" color="gray.500" data-testid="movie-release-date">{release_date}</Text>
      </Text>
     </Link>
    </Flex> 
      </Box>
  );
};

export default MovieCard;
