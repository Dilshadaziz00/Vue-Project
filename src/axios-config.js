import axios from 'axios';
// axios.defaults.baseURL = process.env.VUE_APP_API_BASE_URL

const instance = axios.create({
    // baseURL: process.env.VUE_APP_BASE_URL,
    baseURL: 'https://dummyjson.com',
     // Accessing the environment variable
    // timeout: 10000,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  
// const instance = axios.create({
//   baseURL: 'VUE_APP_BASE_URL', 
//   timeout: 10000,                     
//   headers: {
//     'Content-Type': 'application/json',
 
//   },
// // });
// instance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem('demoUserToken');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
   
//     return Promise.reject(error);
//   }
// );


// instance.interceptors.response.use(
//   (response) => {
   
//     return response;
//   },
//   (error) => {
//     // Handle the response error
//     if (error.response.status === 401) {
//       // Redirect to login if not authenticated
//     //   window.location.href = '/login';
//     }
//     return Promise.reject(error);
//   }
// );

export default instance;
