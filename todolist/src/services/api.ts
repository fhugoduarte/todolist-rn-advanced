import axios from 'axios';

const BASE_URL = 'http://192.168.1.10:3000/';

export const api = axios.create({
  baseURL: BASE_URL,
});

export function composeApiUrl(endpoint: string) {
  const baseUrl = BASE_URL.replace(/\/$/, '');
  const suffix = endpoint.replace(/^\//, '');

  return `${baseUrl}/${suffix}`;
}
