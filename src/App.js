import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import GlobalStyle from './styles/global';

import UserForm from './containers/UserForm';
import UserList from './containers/UserList';

export default function App() {
  return (
    <Router>
      <GlobalStyle />

      <Routes>
        <Route path="/" exact element={<UserForm />} />
        <Route path="/user-list" element={<UserList />} />
        <Route path="/edit-user/:id" element={<UserForm />} />
      </Routes>
    </Router>
  );
}
