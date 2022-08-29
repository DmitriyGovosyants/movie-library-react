import axios from 'axios';

const API_KEY = 'bfe20768c956c05046c7d088e4b361cd';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

// language
export const fetchMoviesOnTrend = async (pageNumber) => {
  return await axios.get(`trending/movie/day?api_key=${API_KEY}&page=${pageNumber}&language=ru`);
}
// language
export const fetchMoviesByName = async (name, page) => {
  return await axios.get(`search/movie?api_key=${API_KEY}&query=${page}&page=${name}`);
}
// language
export const fetchMovieDetails = async (id) => {
  return await axios.get(`movie/${id}?api_key=${API_KEY}`);
}
// language
export const fetchMovieTrailer = async (id) => {
  return await axios.get(`movie/${id}/videos?api_key=${API_KEY}`);
}

export const fetchLanguages = async () => {
  return await axios.get(`configuration/languages?api_key=${API_KEY}`);
}

export const fetchGenres = async () => {
  return await axios.get(`genre/movie/list?api_key=${API_KEY}`);
}