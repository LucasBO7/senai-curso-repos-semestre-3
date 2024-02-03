// Responsável pela conexão com a API

import axios from "axios";

const apiPort = '8081';
const viaCepApi = `https://viacep.com.br/ws/${apiPort}/json/`;

const api = axios.create({ baseURL: viaCepApi });

export default api;