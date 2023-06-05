import axios from 'axios';
import Cookies from "js-cookie"

const token = Cookies.get("token");
const url = 'https://par-kud.azurewebsites.net'; 

axios.defaults.baseURL = url;
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

export default axios;