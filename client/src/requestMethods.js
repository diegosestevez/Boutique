import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api'
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTg3N2E0ZTU3ZmJhYzdkZTczNjBiMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0Mzc2MTYxOCwiZXhwIjoxNjQzNzcyNDE4fQ.Ku_JzokAjzJhhv2Mw8oR6TGlCw1Qw5_BVIl73LVZPsM"; //test token

export const publicRequest = axios.create({
  baseURL:BASE_URL,
});

export const userRequest = axios.create({
  baseURL:BASE_URL,
  header:{token:`Bearer ${TOKEN}`}
})
