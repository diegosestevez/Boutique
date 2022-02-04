import axios from 'axios';

const BASE_URL = 'http://localhost:8000/api'
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZTg3N2E0ZTU3ZmJhYzdkZTczNjBiMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzkzMDExMiwiZXhwIjoxNjQzOTQwOTEyfQ.Z9O1ypf54-B0XMuODYgkbe8A9Sk6YaskSYVclqSzjTI"; //test token

export const publicRequest = axios.create({
  baseURL:BASE_URL,
});

export const userRequest = axios.create({
  baseURL:BASE_URL,
  header:{token:`Bearer ${TOKEN}`}
})
