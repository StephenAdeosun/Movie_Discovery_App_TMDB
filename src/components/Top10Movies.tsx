import React, { useEffect, useState } from 'react';
import { Box, Grid,Flex,Text,Heading } from '@chakra-ui/react';
import {ArrowRight} from 'react-feather';
import { fetchTop10PopularMovies } from '../services/api';
import MovieCard from './MovieCard';
import MovieSearch from './MovieSearch';

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

const Top10Movies: React.FC = () => {
  const [top10PopularMovies, setTop10PopularMovies] = useState<Movie[]>([]);
  const [searchResults, setSearchResults] = useState<Movie[]>([]);
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
  const handleSearchResults = (movies: Movie[]) => {
    setSearchResults(movies);
  };
console.log(top10PopularMovies)
  return (
    <Box backgroundColor={'white'} px={{base:'6',sm:'10',lg:'20'}} py={12}>
      <MovieSearch onSearchResults={handleSearchResults} />
    <Flex justifyContent={'space-between'}mt='10' alignItems={'center'} >
    <Text color='black'  fontSize={{base:'md', md:'4xl'}} fontWeight={'50pxg'}>Popular Movies</Text>
  <Flex alignItems={'center'}>
      <Text color='#BE123C'  fontSize={{base:'sm', md:'xl'}} >See more</Text>
    <ArrowRight color={'#BE123C'} />
    </Flex>
    </Flex>
    <Grid
        templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
        gap={4}
        cursor={'pointer'}
      >
        {searchResults.length > 0
          ? searchResults.map((movie) => (
              <Box key={movie.id}>
                <MovieCard movie={movie} />
              </Box>
            ))
          : top10PopularMovies.map((movie) => (
              <Box key={movie.id}>
                <MovieCard movie={movie} />
              </Box>
            ))}
      </Grid>
    </Box>
    
    

  );
};

export default Top10Movies;
