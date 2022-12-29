module.exports = {
    apiUrl: process.env.NODE_ENV === "development" ? process.env.REACT_APP_API_DEV : process.env.REACT_APP_API_PROD,
    home : '/',
    // Authontication
    userLogin: 'user/login-user',
    registerLogin: 'user/save-user',

}