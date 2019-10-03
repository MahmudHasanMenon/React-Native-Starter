import axios from 'axios';
import { API_BASE_URL } from './index';

axios.defaults.baseURL = `${API_BASE_URL}/api`;
axios.defaults.headers.post['Content-Type'] = 'application/json';

export default axios;
