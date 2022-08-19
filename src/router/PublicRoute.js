import { Navigate, Outlet } from 'react-router-dom';
import { useUser } from 'components';

export const PublicRoute = ({ restricted, redirectTo = '/' }) => {
  const { user } = useUser();
  const shouldRedirect = user && restricted;

  if (shouldRedirect) {
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
};