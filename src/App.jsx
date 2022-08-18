import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout, GalleryList } from 'components';

export const App = () => {
  const [search, setSearch] = useState('');

  return (
    <Routes>
      <Route path="/" element={<SharedLayout setSearch={setSearch} />}>
        <Route index element={<GalleryList query={search} />} />
        <Route path="library" element={<div>Let</div>} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
