// import { defineStore } from "pinia";
// import axios from "axios";

// export const authStore = defineStore("auth",{
//     state:() => ({
//         authUser: null
//     }),

//     getters:{
//         user: (state) => state.authUser
//     },

//     actions:{
//         getToken(){
//             axios
//                 .get('/sanctum/csrf-cookie')
//                 .then(response => {
//                     console.log('Succesfully create new CSRF token');
//                 })
//                 .catch(error => {
//                     console.error('Error while retrieving CSRF token:', error);
//                 });
//           },
//         // getUserData() {
//         //     axios
//         //         .get('/api/user')
//         //         .then(response => {
//         //             this.authUser = response.data;
//         //             console.log(this.authUser);
//         //             console.log('hehe');
//         //         })
//         //         .catch(error => {
//         //             console.error('Error fetching user data:', error);
//         //         });
//         // }
//         async getUserData() {
//             try {
//                 const response = await axios.get('/api/user');
//                 this.authUser = response.data;
//                 return response.data; // Return the user data
//             } catch (error) {
//                 console.error('Error fetching user data:', error);
//                 throw error; // Re-throw the error to handle it in the component
//             }
//         },

//         async logout() {

//         }
//     }
// })