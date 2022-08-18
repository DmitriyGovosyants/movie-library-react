import { initializeApp } from 'firebase/app';
// import firebase from 'firebase';
import { getDatabase } from 'firebase/database';
// import * as fireBase from 'firebase';
// import { firebase}

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

const app = initializeApp(firebaseConfig);

// import * as firebase from 'firebase';

// const firebaseConfig = {
//   apiKey: 'AIzaSyBCEwsCMaoJrboiUzDnYECR8zXTPfXRKdE',
//   authDomain: 'movie-library-67a22.firebaseapp.com',
//   databaseURL:
//     'https://movie-library-67a22-default-rtdb.europe-west1.firebasedatabase.app',
//   projectId: 'movie-library-67a22',
//   storageBucket: 'movie-library-67a22.appspot.com',
//   messagingSenderId: '606963363509',
//   appId: '1:606963363509:web:7ef8c001fe757b327798fc',
// };

// firebase.initializeApp(firebaseConfig);

export const LogIn = () => {
  // console.log(firebase);
  const db = getDatabase(app);
  // const db = firebase.database();
  console.log(db);

  return (
    <div>
      <input type="text" placeholder="email" />
      <input type="password" placeholder="password" />
      <input type="submit" />
    </div>
  );
};
