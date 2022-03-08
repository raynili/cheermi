// for making HTTP requests
// sending data back
// and setting any data in local storage

import axios from 'axios';

const API_URL = '/api/v1/users/'

// Register User
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if (response.data) { // axios puts response inside field called data
        localStorage.setItem('user', JSON.stringify(response.data)); // this includes the token, which is now stored in local storage
    }

    return response.data;
}

// Login User
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)

    if (response.data) { // axios puts response inside field called data
        localStorage.setItem('user', JSON.stringify(response.data)); // this includes the token, which is now stored in local storage
    }

    return response.data;
}

// Logout User
const logout = () => {
    localStorage.removeItem('user'); // advance: use the server and send an http cookie
}

const authService = {
    register,
    logout,
    login
}

export default authService;