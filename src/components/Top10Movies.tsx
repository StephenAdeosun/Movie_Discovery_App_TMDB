import React, { useEffect, useState } from 'react';
import { Box, Grid,Flex,Text,Heading } from '@chakra-ui/react';
import {ArrowRight} from 'react-feather';
import { fetchTop10PopularMovies } from '../services/api';
import MovieCard from './MovieCard';


interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
  // Add other properties as needed
}

const Top10Movies: React.FC = () => {
  const [top10PopularMovies, setTop10PopularMovies] = useState<Movie[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await fetchTop10PopularMovies();
        setTop10PopularMovies(movies);
      } catch (error) {
        console.error('Error fetching top 10 popular movies:', error);
      }
    };

    fetchData();
  }, []);
console.log(top10PopularMovies)
  return (
    <Box backgroundColor={'white'} px={{base:'14',sm:'10',lg:'20'}} py={12}>
    <Flex justifyContent={'space-between'} alignItems={'center'} >
    <Text color='black' fontSize={'4xl'} fontWeight={'50pxg'}>Popular Movies</Text>
  <Flex alignItems={'center'}>
      <Text color='#BE123C' fontSize={'xl'}>See more</Text>
    <ArrowRight color={'#BE123C'} />
    </Flex>
    </Flex>
    <Grid templateColumns={{base:'1fr', sm:'repeat(2,1fr)', md:'repeat(4,1fr)'}} gap={4} cursor={'pointer'} >
      {top10PopularMovies.map((movie) => (
        <Box key={movie.id}>
          <MovieCard movie={movie} />
        </Box>
      ))}
    </Grid>
    </Box>
    
    

  );
};

export default Top10Movies;
