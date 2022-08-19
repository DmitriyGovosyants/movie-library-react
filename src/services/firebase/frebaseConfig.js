import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyBCEwsCMaoJrboiUzDnYECR8zXTPfXRKdE',
  authDomain: 'movie-library-67a22.firebaseapp.com',
  databaseURL:
    'https://movie-library-67a22-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'movie-library-67a22',
  storageBucket: 'movie-library-67a22.appspot.com',
  messagingSenderId: '606963363509',
  appId: '1:606963363509:web:7ef8c001fe757b327798fc',
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const db = getDatabase(firebaseApp);