import React, { useState } from 'react';

import { toast } from 'react-toastify';
import { isEmail } from 'validator';
import { useSelector, useDispatch } from 'react-redux';
import { Container } from '../../styles/GlobalStyles';
import { Form } from './styled';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/Auth/actions';

export default function Register() {
  const dispatch = useDispatch();

  // pegando dadps do usuário logado
  const id = useSelector((state) => state.Auth.user.id);
  const { nome: nomeStored } = useSelector((state) => state.Auth.user);
  const { email: emailStored } = useSelector((state) => state.Auth.user);
  const { isLoading } = useSelector((state) => state.Auth);

  const [nome, setNome] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  // colocando dados do usuário logado no formulário de edit
  React.useEffect(() => {
    if (!id) return;
    setNome(nomeStored);
    setEmail(emailStored);
  }, [id, nomeStored, emailStored]);

  async function handleSubmit(e) {
    e.preventDefault();
    let formError = false;

    if (nome.length < 3 || nome.length > 50) {
      formError = true;
      toast.error('nome precisa ter entre 3 e 255 caracteres');
    }
    if ((!id && password.length < 6) || password.length > 50) {
      formError = true;
      toast.error('Password precisa ter entre 6 e 50 caracteres');
    }
    if (!isEmail(email)) {
      formError = true;
      toast.error('email inválido');
    }

    if (formError) return;
    // chamando actions para acionar a saga de register e edit
    dispatch(actions.registerRequest({ nome, email, password, id }));
  }
  return (
    // usando condições verificando se há um id para mudar o formulário de register para editar
    <Container>
      <Loading isLoading={isLoading} Msg="Carregando..." />
      <h1>{!id ? 'Register' : 'Editar Dados'}</h1>

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

        <button type="submit"> {!id ? 'Register' : 'Salvar Dados'} </button>
      </Form>
    </Container>
  );
}
