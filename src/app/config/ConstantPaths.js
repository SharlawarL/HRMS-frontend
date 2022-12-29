module.exports = {
    baseUrl: process.env.NODE_ENV === "development" ? process.env.REACT_APP_BASE_DEV : process.env.REACT_APP_BASE_PROD,
    home : '/',
    // Authontication
    userLogin: '/user-pages/login',
    registerLogin: '/user-pages/register',

    // Dashboard
    dashboard : '/dashboard',

    // Organization
    locationList : '/organization/location-list',
    locationMaster : '/organization/location-master',
}