import axios from 'axios';
import { URLS } from '../constants';

const baseUrl = URLS.HELLO_WORLD_API_URL;

export const helloWorldService = {
  sayHello: (name: string) => axios.post(baseUrl, { name }).then(({ data }) => data),
};
