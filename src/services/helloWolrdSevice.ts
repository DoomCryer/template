import axios from 'axios';
import { API_URLS } from '../constants';

const baseUrl = API_URLS.HELLO_WORLD_API_URL;

export const helloWorldService = {
  sayHello: (name: string) => axios.post(baseUrl, { name }).then(({ data }) => data),
};
