import { useState } from 'react';
import { toast } from 'react-toastify';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'services/firebase/frebaseConfig';
import { Button } from 'components';
import { Section, Container, Form, FormTitle, FormInput } from 'layout';

const Login = () => {
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
      toast.success('You are logged!');
      setEmail('');
      setPassword('');
    } catch (error) {
      toast.error('Cannot login to your account');
    }
  };

  return (
    <Section>
      <Container>
        <Form onSubmit={handleLogin}>
          <FormTitle>Login</FormTitle>
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
          />
          <Button type="submit">Log in</Button>
        </Form>
      </Container>
    </Section>
  );
};

export default Login;
