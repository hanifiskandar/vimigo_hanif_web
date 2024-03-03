<template>
    <div class="container">
        <h1>Home Page</h1>
        <div v-if="auth.user">
            <h3>{{ auth.user?.id }}</h3>
            <h3>{{ auth.user?.name }}</h3>
            <h3>{{ auth.user?.email }}</h3>
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
        this.auth.getUserData();
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
