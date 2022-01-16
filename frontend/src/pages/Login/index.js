import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useDispatch } from 'react-redux';

import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import * as actions from '../../store/modules/Auth/actions';

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    let formError = false;

    if (password.length < 3 || password.length > 50) {
      formError = true;
      toast.error('Password Inválida');
    }
    if (!isEmail(email)) {
      formError = true;
      toast.error('email inválido');
    }

    if (formError) return;
    dispatch(actions.loginRequest({ email, password }));
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="Email">
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </label>

        <button type="submit"> Entrar </button>
      </Form>
    </Container>
  );
}