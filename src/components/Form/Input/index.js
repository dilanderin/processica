import React from 'react';
import PropTypes from 'prop-types';

import { InputArea, Title, Container } from './styles';

const Input = ({
 type, onChange, title, mt, mb, small, ...others
}) => (
  <Container mt={mt} mb={mb} small={small}>
    {title && <Title>{title}</Title>}

    <InputArea type={type} small={small} {...others} onChange={onChange} />
  </Container>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  title: PropTypes.string,
  mt: PropTypes.number,
  mb: PropTypes.number,
  small: PropTypes.bool,
};

export default Input;
