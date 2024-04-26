import axios from "axios";

const Base_URL = 'https://localhost:7152/api/';

class AccountServices {
    login(UserDTO) {
        return axios.post(Base_URL + 'Account/login', UserDTO)
            .then(res => {
                localStorage.setItem('user', JSON.stringify(res.data))
                console.log(res);
                return res.data
            })
            .catch(err => {
                console.log(err.message);
            })
    };
    logout() {
        localStorage.removeItem('user')
    };
    register(UserDTO) {
        return axios.post(Base_URL + 'Account/register', UserDTO)
            .then(res => {
                localStorage.setItem('user', JSON.stringify(res.data))
                console.log(res);
                return res.data
            })
            .catch(err => {
                console.log(err.message);
            })
    }

}

export default new AccountServices();