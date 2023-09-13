// MovieDetails.tsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box,Flex,Heading,Button,Image, Text } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar';
import Poster from '../assets/images/Poster2.png';
import Review from '../assets/images/Rectangle 37.png';

interface MovieDetails {
  title: string;
  release_date: string;
  runtime: number;
  overview: string;
}

const MovieDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movieDetails, setMovieDetails] = useState<MovieDetails | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch movie details from TMDB API using the provided IMDb ID (id)
    const API_KEY = "b96a9462ad6fa1c23da0a157fd1adc44"
    // Example URL for fetching movie details by IMDb ID
    const apiUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch movie details');
        }
        return response.json();
        console.log(response.json())
      })
      .then((data) => {
        setMovieDetails({
          title: data.title,
          release_date: data.release_date,
          runtime: data.runtime,
          overview: data.overview,
        });
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [id]);

  if (error) {
    return (
      <Box>
        <Text>Error: {error}</Text>
      </Box>
    );
  }

  if (!movieDetails) {
    return <Box>Loading...</Box>;
  }

  return (
    <Flex backgroundColor={'white'} flexDirection={{base:'column', md:'row'}}>
      <Sidebar/>
      <Box p='6'>
        <Image src={Poster} h='50%' w='100%' alt="Movie Poster" />
        <Flex mt='4' flexDirection={{base:'column', md:'row'}}>
          <Box width={{base:'100%', md:'60%'}}>
        <Text color={'black'} fontSize={'2xl'} fontWeight={'900'} mt='4' data-testid="movie-title">{movieDetails.title}</Text>
        <Text color={'black'} data-testid="movie-release-date" mt='4'>Release Date (UTC): <Text display={'inline'} color={'#BE123C'}>{movieDetails.release_date}</Text></Text>
        <Text  color={'black'} data-testid="movie-runtime" mt='4'>Runtime (minutes): <Text display={'inline'} color={'#BE123C'}>{movieDetails.runtime}</Text></Text>
        <Text  color={'black'} data-testid="movie-overview" mt='4'>{movieDetails.overview}</Text>
        </Box>
        <Box> 
          <Button bgColor={'#BE123C'} color={'white'} w='100%' 
           _hover={{
        backgroundColor: "#BE123C", // Change background color on hover
        color: "white", // Change text color on hover
        boxShadow: "lg", // Add a shadow on hover
      }}
      >See Showtimes</Button>
          <Button color='black' bgColor="rgba(190, 18, 60, 0.1)" mt={'2'} w='100%' border={'1px solid red'}
               _hover={{
                backgroundColor: "rgba(190, 18, 60, 0.1)", // Change background color on hover
                color: "black", // Change text color on hover
                boxShadow: "lg", // Add a shadow on hover
              }}
          >More Watch Options</Button>
          <Image src={Review} alt="Movie Poster" w={{base:'100%'}} mt={'2'} />
        </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default MovieDetails;
