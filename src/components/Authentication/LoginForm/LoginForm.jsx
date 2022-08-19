import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'services/firebase/frebaseConfig';
import { useState } from 'react';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  const handleLogin = async e => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('You are logged!');
    } catch (error) {
      console.log(error);
    }

    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleLogin}>
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
