import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'services/firebase/frebaseConfig';
import { useState } from 'react';
import { Section, Container, Button } from 'components';
import { Form, FormTitle, FormInput } from './AuthForm.styled';

export const SigninForm = () => {
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
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Section>
      <Container>
        <Form onSubmit={createAccount}>
          <FormTitle>Signin</FormTitle>
          <FormInput
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={handleChange}
            required
          />
          <FormInput
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={handleChange}
            required
            minLength={6}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            placeholder="confirm password"
            value={confirmPassword}
            onChange={handleChange}
            required
            minLength={6}
          />
          <Button type="submit">Sign in</Button>
        </Form>
      </Container>
    </Section>
  );
};
