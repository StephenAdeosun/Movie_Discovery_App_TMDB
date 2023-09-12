import React, { useState, useEffect } from 'react';
import { Box, Input, Button, Flex, Spinner, Text, Grid } from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi'; // Import the search icon from react-icons
import { fetchMoviesByTitle } from '../services/api'; // Import your API function for searching movies
import MovieCard from './MovieCard';

interface MovieSearchProps {
  onSearchResults: (movies: Movie[]) => void;
}

interface Movie {
  id: number;
  title: string;
  poster_path: string;
  release_date: string;
}

const MovieSearch: React.FC<MovieSearchProps> = ({ onSearchResults }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchResults, setSearchResults] = useState<Movie[]>([]);

  const searchMovies = async () => {
    setIsLoading(true);
    try {
      const movies = await fetchMoviesByTitle(searchQuery);
  
      if (movies.length === 0) {
        setError('Movie not found.');
        setSearchResults([]); // Clear previous search results if any
      } else {
        setSearchResults(movies);
        onSearchResults(movies);
      }
    } catch (err) {
      setError('An error occurred while fetching search results.');
    } finally {
      setIsLoading(false);
    }
  };

  // Function to trigger the search
  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      // Handle empty search query here if needed
      setError('Please enter a search query.');
      setSearchResults([]);
      onSearchResults([]);
      
      return;
    }

    searchMovies();
  };

  return (
    <Box>
      <Flex alignItems={'center'}>
        <Input
          placeholder="Search for movies..."
          value={searchQuery}
          border={'1px solid black'}
         _placeholder={{ color: 'black' }}
         color={'black'}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button
          onClick={handleSearch}
          ml={2}
          leftIcon={<FiSearch />} // Search icon
          isLoading={isLoading}
          loadingText="Searching"
          color={'black'}
        >
          Search
        </Button>
      </Flex>
      {error && <Text color="red">{error}</Text>}
      <Grid
        templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
        gap={4}
      >
        {searchResults.map((movie) => (
          <Box key={movie.id}>
            <MovieCard movie={movie} />
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default MovieSearch;
