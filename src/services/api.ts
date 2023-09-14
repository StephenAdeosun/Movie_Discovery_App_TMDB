// api.ts

import axios from 'axios';

const API_KEY = "b96a9462ad6fa1c23da0a157fd1adc44" 
const BASE_URL = 'https://api.themoviedb.org/3';

// Function to fetch top 10 movies
export const fetchTop10PopularMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/top_rated`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1, 
        per_page: 10,
      },
    });
    const results = response.data.results.slice(0, 10);
    return results;
  } catch (error) {
    throw error;
  }
};

// Function to search for movies by title
export const fetchMoviesByTitle  = async (query: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        query,
        page: 1, 
      },
    });
    return response.data.results;
  } catch (error) {
    throw error;
  }
};
