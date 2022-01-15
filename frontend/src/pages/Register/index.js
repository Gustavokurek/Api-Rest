import React, { useState } from 'react';

import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { get } from 'lodash';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import axios from '../../services/axios';
import history from '../../services/history';

export default function Register() {
  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    let formError = false;

    if (nome.length < 3 || nome.length > 50) {
      formError = true;
      toast.error('nome precisa ter entre 3 e 255 caracteres');
    }
    if (password.length < 3 || password.length > 50) {
      formError = true;
      toast.error('Password precisa ter entre 3 e 50 caracteres');
    }
    if (!isEmail(email)) {
      formError = true;
      toast.error('email inválido');
    }

    if (formError) return;

    try {
      await axios.post('/users', {
        nome,
        email,
        password,
      });
      toast.success('Você se cadastrou com sucesso');
      history.push('/login');
    } catch (err) {
      const errors = get(err, 'response.data.errors', []);

      errors.map((error) => toast.error(error));
    }
  }
  return (
    <Container>
      <h1>Register</h1>

      <Form onSubmit={handleSubmit}>
        <label htmlFor="nome">
          Name:
          <input
            type="text"
            onChange={(e) => setNome(e.target.value)}
            value={nome}
            placeholder="Your name"
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Your password"
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Your email"
          />
        </label>

        <button type="submit"> Register </button>
      </Form>
    </Container>
  );
}
