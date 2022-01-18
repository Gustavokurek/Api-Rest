import React from 'react';

import PropTypes from 'prop-types';
import { Conteiner } from './styled';

export default function Loading({ isLoading, Msg }) {
  if (!isLoading) return <></>;
  return (
    <Conteiner>
      <div />
      <span>{Msg}</span>
    </Conteiner>
  );
}

Loading.defaultProps = {
  isLoading: false,
  Msg: '',
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
  Msg: PropTypes.string,
};
