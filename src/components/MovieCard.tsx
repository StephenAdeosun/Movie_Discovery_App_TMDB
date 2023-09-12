// components/MovieCard.tsx

import React from 'react';
import { Box, Image,Flex, Text } from '@chakra-ui/react';
import { Heart } from 'react-feather';
import '../styles/MovieCard.css'
interface MovieCardProps {
  movie: {
    title: string;
    poster_path: string;
    release_date: string;
  };
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { title, poster_path, release_date } = movie;
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <Flex
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      boxShadow="lg"
      flexDirection="column" // Set flex direction to column
      p={4}
      _hover={{ boxShadow: 'xl' }} // Add hover effect
    >
      <Image src={imageUrl} alt={title} flexGrow={1} w='100%' /> {/* Set flexGrow to 1 */}
      <Flex 
      position={'absolute'}
      backgroundColor='#F3F4F6'
      borderRadius={'50%'}
      p={1}
      className="heart-icon"
      // top={2}
    // left={2}
      >
        <Heart color={'#D1D5DB'}   size={20}/>
      </Flex>
      <Text fontWeight="bold" fontSize="xl" mt={2} color={'black'}>
        {title}
      </Text>
      <Text fontSize="sm" color="gray.500">
        Release Date: {release_date}
      </Text>
    </Flex>
  );
};

export default MovieCard;
