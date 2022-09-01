import axios from 'axios';

const API_KEY = 'bfe20768c956c05046c7d088e4b361cd';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchMoviesOnTrend = async (pageNumber, language) => {
  return await axios.get(`trending/movie/day?api_key=${API_KEY}&page=${pageNumber}&language=${language}`);
}

export const fetchMovieTopRated = async (pageNumber, language) => {
  return await axios.get(`movie/top_rated?api_key=${API_KEY}&page=${pageNumber}&language=${language}`);
}

export const fetchMoviesByGenre = async (pageNumber, language, genre, extraSortStatus) => {
  return await axios.get(`discover/movie?api_key=${API_KEY}&page=${pageNumber}&sort_by=${extraSortStatus}&vote_count.gte=50&language=${language}&with_genres=${genre}`);
}

export const fetchMoviesByName = async (name, page, language) => {
  return await axios.get(`search/movie?api_key=${API_KEY}&query=${page}&page=${name}&language=${language}`);
}

export const fetchMovieDetails = async (id, language) => {
  return await axios.get(`movie/${id}?api_key=${API_KEY}&language=${language}`);
}

export const fetchMovieTrailer = async (id, language) => {
  return await axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=${language}`);
}

export const fetchLanguagesList = async () => {
  return await axios.get(`configuration/languages?api_key=${API_KEY}`);
}

export const fetchGenresList = async () => {
  return await axios.get(`genre/movie/list?api_key=${API_KEY}`);
}



