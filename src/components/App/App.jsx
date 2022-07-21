import { useState } from 'react';
import { Header, GalleryList } from 'components';

export const App = () => {
  const [search, setSearch] = useState('');

  const onSearch = value => {
    setSearch(value);
  };

  return (
    <>
      <Header onSearch={onSearch} />
      <GalleryList query={search} />
    </>
  );
};
