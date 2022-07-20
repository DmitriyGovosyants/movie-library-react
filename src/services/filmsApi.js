import axios from 'axios';

const API_KEY = 'bfe20768c956c05046c7d088e4b361cd';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
// axios.defaults.params = {};

export const fetchTrending = async (pageNumber) => {
  return await axios.get(`trending/movie/day?api_key=${API_KEY}&page=${pageNumber}`);
}