import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { fetchGenresList, fetchLanguagesList } from 'services/movieApi';

const { createContext } = require('react');
const { useContext } = require('react');

const TMDBDataContext = createContext();
export const useTMDBData = () => useContext(TMDBDataContext);

export const TMDBDataProvider = ({ children }) => {
  const [genresList, setGenresList] = useState([]);
  const [languagesList, setLanguagesList] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const genresSource = await fetchGenresList();
        const dataSource = await fetchLanguagesList();

        setGenresList(genresSource.data.genres);
        setLanguagesList(dataSource.data);
      } catch (e) {
        toast.error('Cannot get genres and/or languages list. Try again');
      }
    };
    fetch();
  }, []);

  return (
    <TMDBDataContext.Provider value={{ genresList, languagesList }}>
      {children}
    </TMDBDataContext.Provider>
  );
};

TMDBDataProvider.propTypes = {
  children: PropTypes.node,
};
