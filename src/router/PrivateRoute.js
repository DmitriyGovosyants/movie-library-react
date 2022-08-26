import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from 'hooks/userContext';

export const PrivateRoute = ({ redirectTo = '/' }) => {
  const { user } = useUser();

  return user ? <Outlet /> : <Navigate to={redirectTo} replace />
};