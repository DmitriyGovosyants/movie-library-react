import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from 'services/firebase/frebaseConfig';
import { useState } from 'react';

export const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value);
        break;
      default:
        return;
    }
  };

  const createAccount = async e => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log('password does not match');
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('Created new user!');
    } catch (error) {
      console.log(error);
    }

    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <form onSubmit={createAccount}>
      <input
        type="email"
        name="email"
        placeholder="email"
        value={email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="confirmPassword"
        placeholder="confirmPassword"
        value={confirmPassword}
        onChange={handleChange}
        required
      />
      <input type="submit" />
    </form>
  );
};

export const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        return;
    }
  };

  const createAccount = async e => {
    e.preventDefault();

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log(result.user.email);
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
    }

    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={createAccount}>
      <input
        type="email"
        name="email"
        placeholder="email"
        value={email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={password}
        onChange={handleChange}
        required
      />
      <input type="submit" />
    </form>
  );
};

export const SignOut = () => {
  return (
    <button type="button" onClick={() => signOut(auth)}>
      Sign Out
    </button>
  );
};
