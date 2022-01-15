import styled from 'styled-components';
import { primaryColor } from '../../config/colors';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  label {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }

  input {
    height: 40px;
    font-size: 19px;
    border: 1px solid #dff;
    border-radius: 5px;
    padding: 5px;

    &:focus {
      border: 1px solid ${primaryColor};
    }
  }
`;
