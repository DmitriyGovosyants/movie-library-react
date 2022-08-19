import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SharedLayout } from 'components';
import { routesPath, PrivateRoute, PublicRoute } from 'router';

const Home = lazy(() =>
  import('pages/Home' /* webpackChunkName: "home-page" */)
);
const Library = lazy(() =>
  import('pages/Library' /* webpackChunkName: "library-page" */)
);
const Signin = lazy(() =>
  import('pages/Signin' /* webpackChunkName: "signin-page" */)
);
const Login = lazy(() =>
  import('pages/Login' /* webpackChunkName: "login-page" */)
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route element={<PublicRoute />}>
          <Route index element={<Home />} />
        </Route>

        <Route element={<PrivateRoute redirectTo={routesPath.login} />}>
          <Route path={routesPath.library} element={<Library />} />
          <Route path="*" element={<Navigate to="/library" replace />} />
        </Route>

        <Route
          element={<PublicRoute restricted redirectTo={routesPath.library} />}
        >
          <Route path={routesPath.signin} element={<Signin />} />
          <Route path={routesPath.login} element={<Login />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
