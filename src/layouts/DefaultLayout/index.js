import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Wrapper, Main, Center } from './styles';

const DefaultLayout = ({ children }) => (
  <Wrapper>
    <nav>
      <Link to="/">Create User</Link> | <Link to="/user-list">User List</Link>
    </nav>

    <Center>
      <Main>{children}</Main>
    </Center>

    <div>Dilan Derin</div>
  </Wrapper>
);

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
