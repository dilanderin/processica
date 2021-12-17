import React, { useState, useEffect } from 'react';
import UserService from '../../services/user';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await UserService.fetchUsers(1);
    setUsers(response.data);
  };

  const deleteUser = async (id) => {
    await UserService.deleteUser(id);
    fetchUsers();
  };

  return (
    <div>
      <h1>User List</h1>
      <table>
        <thead>
        <tr>
          <th>Email</th>
          <th>Name</th>
          <th>Gender</th>
          <th>Status</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.email}</td>
              <td>{user.name}</td>
              <td>{user.gender}</td>
              <td>{user.status}</td>
              <td>
                <Link to={`/edit-user/${user.id}`}>
                  <Button variant="outlined" color="secondary">
                    Edit
                  </Button>
                </Link>
              </td>
              <td>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => deleteUser(user.id)}
                >
                  <DeleteIcon />
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default UserList;
