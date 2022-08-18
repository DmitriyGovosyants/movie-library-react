import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout, GalleryList } from 'components';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<GalleryList />} />
        <Route path="library" element={<div>Let</div>} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
