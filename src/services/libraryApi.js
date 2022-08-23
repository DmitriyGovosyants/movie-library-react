import { ref, set, get, child, update, remove } from 'firebase/database';
import { db } from 'services/firebase/frebaseConfig';

export const fetchAllLibraryMovies = async (user) => {
  return await get(child(ref(db), `/users/${user?.uid}/movies`));
}

export const fetchLibraryMovieStatus = async (user, itemId) => {
  return await get(child(ref(db), `/users/${user?.uid}/movies/${itemId}`));
}

export const addNewMovieInLibrary = async (
  status,
  user,
  title,
  poster_path,
  vote_average,
  release_date,
  genresNames,
  id) => {  
  return await set(ref(db, `/users/${user?.uid}/movies/${id}`), {
    watched: false,
    queue: false,
    [status]: true,
    [`${status}DateAdded`]: Date.now(),
    id: id,
    poster_path,
    title,
    vote_average,
    release_date,
    genres: genresNames,
  }); 
}

export const addSecondStatus = async (status, user, id) => {
  return await update(ref(db, `/users/${user?.uid}/movies/${id}`), {
    [status]: true,
    [`${status}DateAdded`]: Date.now(),
  });
}

export const removeOneOfTwoStatus = async (status, user, id) => {
  return await update(ref(db, `/users/${user?.uid}/movies/${id}`), {
    [status]: false,
  });
}

export const removeFromLibrary = async (user, id) => {
  return await remove(ref(db, `/users/${user?.uid}/movies/${id}`));
}