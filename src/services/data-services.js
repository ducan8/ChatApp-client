import AuthHeader from "./auth-header";
import axios from 'axios';

const Base_URL = 'https://localhost:7152/api/'

class DataServices {
    getAll() {
        return axios.get(Base_URL + 'Users')
    }

    getMember() {
        return axios.get(Base_URL + 'Users', { headers: AuthHeader })
    }
}

export default new DataServices();