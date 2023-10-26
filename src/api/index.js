import axios from 'axios'

export const jikan = axios.create({
  baseURL: 'https://api.jikan.moe/v4'
});

export const rest = axios.create({
  baseURL: 'http://localhost:5000'
});
