import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { fetchGenres, fetchLanguages } from 'services/movieApi';

const { createContext } = require('react');
const { useContext } = require('react');

const IMDBDataContext = createContext();
export const useIMDBData = () => useContext(IMDBDataContext);

export const IMDBDataProvider = ({ children }) => {
  const [genresList, setGenresList] = useState([]);
  const [languagesList, setLanguagesList] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const genresSource = await fetchGenres();
        const dataSource = await fetchLanguages();

        setGenresList(genresSource.data.genres);
        setLanguagesList(dataSource.data);
      } catch (e) {
        toast.error('Cannot get genres and languages list. Try later');
      }
    };
    fetch();
  }, []);

  console.log(genresList, languagesList);

  return (
    <IMDBDataContext.Provider value={{ genresList, languagesList }}>
      {children}
    </IMDBDataContext.Provider>
  );
};
