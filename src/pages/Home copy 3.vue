<template>
    <div class="container">
        <h1>Home Page</h1>
        <div v-if="record.user">
            <h3>{{ record.user?.id }}</h3>
            <h3>{{ record.user?.name }}</h3>
            <h3>{{ record.user?.email }}</h3>
        </div>
        <div v-else>
            <h3>No Data</h3>
        </div>        
    </div>
</template>

<script>
import axios from 'axios';
import { useRouter } from 'vue-router';
import { authStore} from '../stores/authstore';

export default {
    created() {
        this.auth = authStore();
    },
    mounted() {
        this.auth.getUserData().then(userData => {
            console.log('User data:', userData);
            // Save userData to another variable
            this.record.user = userData;
        }).catch(error => {
            console.error('Error fetching user data:', error);
        });
    },

    data() {
        return {
            record: {
                user: {},
            },
            auth: null,
            errorMessages: {}
        };
    },
};
</script>
