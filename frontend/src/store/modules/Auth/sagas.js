import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import * as actions from './actions';
import axios from '../../../services/axios';
import * as types from '../types';
import history from '../../../services/history';

function* loginRequest({ payload }) {
  try {
    // post do login e senha e recebendo token
    const response = yield call(axios.post, 'tokens', payload);
    // disponibilizando resposta dados para o reducer
    yield put(actions.loginSuccess({ ...response.data }));
    toast.success('Logado');

    // colocando token no cabeçalho de authorization para liberar acesso as paginas fechadas quando login for feito
    axios.defaults.headers.Authorizations = `Bearer ${response.data.token}`;
    // depois do login feito redirecionando para a ultima pagina acessada que não tinha acesso pq não tava logado
    history.push(payload.prevPath);
  } catch (e) {
    toast.error('Usuário ou senha inválidos');
    // em caso de erro chamando a action failure para retornar o state inicial
    yield put(actions.LoginFailure());
  }
}

// função que mantêm o token no cabeçalho de authorization quando a pagina for atualizada
function persistRehydrate({ payload }) {
  // payload aqui são os dados do state global
  const token = get(payload, 'Auth.token', '');
  if (!token) return;
  axios.defaults.headers.Authorizations = `Bearer ${token}`;
}

function registerRequest({ payload }) {
  const { id, nome, email, password } = payload;
  // continua daqui
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
]);
