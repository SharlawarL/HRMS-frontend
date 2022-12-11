import axios from 'axios';
import { apiUrl, userLogin, registerLogin } from '../config/ApiPaths';

export default class EmployeeService {

    /**
     * Login User
     */ 
    authenticateUser = (reqData) => {
        return axios({
            method: 'POST',
            url: `${apiUrl}${userLogin}`,
            data: reqData,
            headers: {
                token: localStorage.getItem("token")
            }
        })
    }  
    
    /**
     * Register User
     */ 
     registerUser = (reqData) => {
        return axios({
            method: 'POST',
            url: `${apiUrl}${registerLogin}`,
            data: reqData,
            headers: {
                token: localStorage.getItem("token")
            }
        })
    }  
}