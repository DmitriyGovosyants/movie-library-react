import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from 'context/userContext';

export const PrivateRoute = ({ redirectTo = '/' }) => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
};