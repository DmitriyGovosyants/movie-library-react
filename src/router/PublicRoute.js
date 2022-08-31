import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from 'context/userContext';

export const PublicRoute = ({ restricted, redirectTo = '/' }) => {
  const { user } = useUser();
  const shouldRedirect = user && restricted;

  return shouldRedirect ? <Navigate to={redirectTo} replace /> : <Outlet />;
};