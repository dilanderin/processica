import axios from 'axios';

const API = axios.create({
  baseURL: `https://gorest.co.in/public/v1/`,
  headers: {
    Authorization: `Bearer 1a419525cb3241adb7df388c25c4acf22b9075f14fcab56d39b4ed4e0d315e6e`,
  },
});

const UserService = {
  fetchUsers: (pageIndex) =>
    API.get(`users?page=${pageIndex}`).then(({ data }) => data),
  createUser: (user) => API.post('users', { ...user }).then(({ data }) => data),
  deleteUser: (userId) =>
    API.delete(`users/${userId}`).then(({ data }) => data),
  updateUser: (userId, user) =>
    API.put(`users/${userId}`, user).then(({ data }) => data),
  fetchUser: (userId) => API.get(`users/${userId}`).then(({ data }) => data),
};

export default UserService;
