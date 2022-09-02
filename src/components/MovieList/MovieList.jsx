import PropTypes from 'prop-types';
import { useState } from 'react';
import { MovieItem, Modal, MovieCard } from 'components';
import { MovieListBox } from './MovieList.styled';

export const MovieList = ({ movies, setRefreshPage }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const handleChangeMovieCard = payload => {
    const moviesIds = movies.map(movie => movie.id);
    const currentIdx = moviesIds.indexOf(currentId);
    const nextIdx = currentIdx + payload;

    if (nextIdx < 0) {
      return setCurrentId(moviesIds[moviesIds.length - 1]);
    }

    if (nextIdx === moviesIds.length) {
      return setCurrentId(moviesIds[0]);
    }

    setCurrentId(moviesIds[nextIdx]);
  };

  return (
    <>
      <MovieListBox>
        {movies?.map(
          ({ id, poster_path, title, vote_average, release_date }) => {
            return (
              <MovieItem
                key={id}
                itemId={id}
                itemRating={vote_average}
                itemPoster={poster_path}
                itemTitle={title}
                itemData={release_date}
                setShowModal={setShowModal}
                setCurrentId={setCurrentId}
              />
            );
          }
        )}
      </MovieListBox>
      {showModal && (
        <Modal closeModal={setShowModal}>
          <MovieCard
            itemId={currentId}
            setShowModal={setShowModal}
            setRefreshPage={setRefreshPage}
            handleChangeMovieCard={handleChangeMovieCard}
          />
        </Modal>
      )}
    </>
  );
};

MovieList.propTypes = {
  movies: PropTypes.array.isRequired,
  setRefreshPage: PropTypes.func,
};
