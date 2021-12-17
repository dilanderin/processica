import React from 'react';
import PropTypes from 'prop-types';

import { ButtonArea } from './styles';

const Button = ({ type, children, ...others }) => (
  <ButtonArea type={type} {...others}>
    {children}
  </ButtonArea>
);

Button.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Button;
