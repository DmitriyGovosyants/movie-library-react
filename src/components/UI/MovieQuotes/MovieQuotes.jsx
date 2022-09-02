import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { QuotesArr } from 'data/quotesArray';
import { MovieQuotesBox, Quote, Movie } from './MovieQuotes.styled';

export const MovieQuotes = ({ speed }) => {
  const [quoteIdx, setQuoteIdx] = useState(() =>
    Math.floor(Math.random() * QuotesArr.length)
  );

  useEffect(() => {
    let timerId = setInterval(() => {
      setQuoteIdx(Math.floor(Math.random() * QuotesArr.length));
    }, speed);
    return () => {
      clearInterval(timerId);
    };
  }, [quoteIdx, speed]);

  return (
    <MovieQuotesBox>
      <Quote>{QuotesArr[quoteIdx].quote}</Quote>
      <Movie>{QuotesArr[quoteIdx].movie}</Movie>
    </MovieQuotesBox>
  );
};

MovieQuotes.propTypes = {
  speed: PropTypes.number.isRequired,
};
