import { MovieItem, Modal, MovieCard } from 'components';
import { useState } from 'react';
import { MovieListBox } from './MovieList.styled';

export const MovieList = ({ movies, setRefreshPage }) => {
  const [showModal, setShowModal] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const moviesIds = movies.map(movie => movie.id); //total = moviesIds.length

  const handleNextMovieCard = () => {
    const currentIdx = moviesIds.indexOf(currentId); //page = page + 1
    const nextIdx = currentIdx + 1; //setPage
    setCurrentId(moviesIds[nextIdx]);
  };

  return (
    <>
      <MovieListBox>
        {movies.map(
          ({ id, poster_path, title, vote_average, release_date }) => {
            return (
              <MovieItem
                key={id}
                itemId={id}
                itemPoster={poster_path}
                itemTitle={title}
                itemRating={vote_average}
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
            handleNextMovieCard={handleNextMovieCard}
          />
        </Modal>
      )}
    </>
  );
};
