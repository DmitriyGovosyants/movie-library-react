import axios from 'axios';

const API_KEY = 'bfe20768c956c05046c7d088e4b361cd';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const fetchMoviesOnTrend = async (pageNumber, language) => {
  return await axios.get(`trending/movie/day?api_key=${API_KEY}&page=${pageNumber}&language=${language}`);
}

export const fetchMovieTopRated = async (pageNumber, language) => {
  return await axios.get(`movie/top_rated?api_key=${API_KEY}&page=${pageNumber}&language=${language}`);
}

export const fetchMoviesByGenre = async (pageNumber, language, genre) => {
  return await axios.get(`discover/movie?api_key=${API_KEY}&page=${pageNumber}&sort_by=popularity.desc&language=${language}&with_genres=${genre}`);
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

// В карточке фильма можно кликнуть по жанру и перейти на поиск по жанру (привязать к селекту жанра)
// Также добавить внизу кнопки-ссылки
// 1 Фильмы-рекомендации
// 2 Похожие фильмы
// 3 Картинки
// 3.1 backdrop
// 3.2 logos
// 3.3 posters
// 4 Команда
// 4.1 Актеры
// 4.2 Разработчики

// КАРТОЧКА ФИЛЬМА
// 1 массив - фильмы-рекомендации
export const fetchMovieRecommendations = async (id) => {
  return await axios.get(`movie/${id}/recommendations?api_key=${API_KEY}`);
}
// 1 массив - похожие фильмы
export const fetchMovieSimilar = async (id) => {
  return await axios.get(`movie/${id}/similar?api_key=${API_KEY}`);
}
// 3 массива - backdrop, logos, posters
export const fetchMovieImg = async (id) => {
  return await axios.get(`movie/${id}/images?api_key=${API_KEY}`);
}
// 2 массива - команда актеров и разработчиков
export const fetchMovieCredits = async (id) => {
  return await axios.get(`movie/${id}/credits?api_key=${API_KEY}`);
}
// КОМАНДА
// 1 - актер или кто-то из команды фильма
export const fetchMoviePerson = async (personId) => {
  return await axios.get(`person/${personId}?api_key=${API_KEY}`);
}



