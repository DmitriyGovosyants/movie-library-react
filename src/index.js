import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'App';
import 'modern-normalize';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles, theme } from 'styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from 'hooks/userContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/movie-library-react/">
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles} />
          <ToastContainer autoClose={2500} position="bottom-center" />
            <UserProvider>
              <App />
            </UserProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
