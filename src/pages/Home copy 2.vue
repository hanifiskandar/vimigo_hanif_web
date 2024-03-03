<template>
    <div class="container">
        <h1>Home Page</h1>
        <h3>{{ record.user?.id }}</h3>
        <h3>{{ record.user?.name }}</h3>
        <h3>{{ record.user?.email }}</h3>
    </div>
</template>

<!-- <script>
import axios from 'axios';
import { useRouter } from 'vue-router';
import { authStore} from '../stores/authstore';


export default {
    created() {
        this.auth = authStore();
    },
    mounted() {
        this.auth = authStore();
        this.fetchUserData();
    },
    // methods: {
    //     fetchUserData() {
    //         axios
    //             .get('/api/user')
    //             .then(response => {
    //                 console.log(response);
    //                 this.record.user = response.data;
    //                 console.log('hehe');
    //                 console.log(this.record.user);
    //             })
    //             .catch(error => {
    //                 console.error('Error fetching user data:', error);
    //                 // Handle error, for example setting error messages
    //                 this.errorMessages.user = 'Failed to fetch user data';
    //             });
    //     }
    // },
    data() {
        return {
            record: {
                user: {},
            },
            errorMessages: {}
        };
    },
};
</script> -->
