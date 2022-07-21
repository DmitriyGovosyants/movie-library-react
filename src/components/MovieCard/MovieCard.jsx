import { useEffect } from 'react';
import { fetchMovieDetails } from 'services/filmsApi';

export const MovieCard = ({ id }) => {
  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await fetchMovieDetails(id);

        console.log(data);
      } catch (e) {
        // setError(e.message);
      }
    };
    fetch();
  }, [id]);

  return <p>{id}</p>;
};
