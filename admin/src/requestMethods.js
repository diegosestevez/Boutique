import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api';
// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;
const TOKEN = JSON.parse(localStorage.getItem("persist:root"));
// const TOKEN = '';

export const publicRequest = axios.create({
  baseURL:BASE_URL,
});

// export const userRequest = axios.create({
//   baseURL:BASE_URL,
//   headers: { Authorization: `Bearer ${TOKEN}` },
// })

export const userRequest = axios.create({
  baseURL:BASE_URL,
  headers: TOKEN ? {Authorization: `Bearer ${JSON.parse(TOKEN.user).currentUser.accessToken}`} : {Authorization: ''},
})
