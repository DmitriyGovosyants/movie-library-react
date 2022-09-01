import { MovieQuotesBox, Quote, Movie } from './MovieQuotes.styled';
import { QuotesArr } from 'data/quotesArray';
import { useState } from 'react';
import { useEffect } from 'react';

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
