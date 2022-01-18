import React, { useEffect, useState } from 'react';

import { get } from 'lodash';
import { FaUserCircle, FaEdit, FaWindowClose } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Container } from '../../styles/GlobalStyles';
import axios from '../../services/axios';
import { AlunoContainer, ProfilePicture } from './styled';

import Loading from '../../components/Loading';

export default function Alunos() {
  // useEffect
  // useState
  // get lodash
  // manipulação de componentes
  const [alunos, setAlunos] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getData() {
      setLoading(true);
      const response = await axios.get('/Alunos');
      setAlunos(response.data);
      setLoading(false);
    }
    getData();
  }, []);
  // tava fazendo requisição em loop
  return (
    <Container>
      <Loading isLoading={loading} Msg="Carregando..." />
      <h1>Alunos</h1>
      <AlunoContainer>
        {alunos.map((aluno) => (
          <div key={String(aluno.id)}>
            <ProfilePicture>
              {get(aluno, 'Fotos.[0].url', false) ? (
                <img src={aluno.Fotos[0].url} alt="" />
              ) : (
                <FaUserCircle size={36} />
              )}
            </ProfilePicture>
            <span>{aluno.nome}</span>
            <span>{aluno.email}</span>
            <Link to={`aluno/${aluno.id}/edit`}>
              <FaEdit size={16} />
            </Link>
            <Link to={`aluno/${aluno.id}/delete`}>
              <FaWindowClose size={16} />
            </Link>
          </div>
        ))}
      </AlunoContainer>
    </Container>
  );
}
