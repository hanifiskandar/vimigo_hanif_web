<!-- <template>
    <h1>Home Page</h1>
</template>

<script>
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
  data() {
    return {
      record:{
        user: {},
      },
      errorMessages: {}
    };
  },
  mounted() {
    this.fetchUserData();
  },
  methods: {
    async fetchUserData() {
      try {
        const response = await axios.get('/api/user');
        console.log(response);
        this.user = response.data;
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Handle error, for example setting error messages
        this.errorMessages.user = 'Failed to fetch user data';
      }
    },
    fetchUserData() {
      axios
      .get('/api/user')
      .then(response => {
        this.record.user = response.data
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        // Handle error, for example setting error messages
        this.errorMessages.user = 'Failed to fetch user data';
    });
    },

  }
};
</script>



<script setup>
import {ref, onMounted} from 'vue';
import axios from 'axios';

const user = ref();

onMounted(async () => {
    const data = await axios.get('/api/user');
    console.log(data);
    user.data = data.data;
})
</script>
   -->