<template>
    <div class="container">
        <div class="col-md-6 m-auto">
            <h1>Login Page</h1>
            <div class="mt-3">
                <form @submit.prevent="submitLogin">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email</label>
                        <input type="email" v-model="record.email" class="form-control" id="exampleFormControlInput1"
                            placeholder="name@example.com">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Password</label>
                        <input type="password" v-model="record.password" class="form-control" id="exampleFormControlInput1">
                    </div>
                    <div>
                        <button type="submit" class="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
</template>


<script>
import axios from 'axios'
import { useRouter } from 'vue-router'

export default {
  created() {
    this.router = useRouter();
  },
  methods: {
    async getToken(){
      try {
        await axios.get('/sanctum/csrf-cookie');
      } catch (error) {
        console.error("Error while retrieving CSRF token:", error);
        // Handle error as needed
      }
    },
    async submitLogin() {
      // this.getToken();
      await this.getToken();
      axios
        .post("/login", {
          email: this.record.email,
          password: this.record.password,
        })
        .then((response) => {
          this.$router.push("/");
        })
        .catch((error) => {
          console.error("Error:", error);
          if (error.response && error.response.status === 422) {
            this.errorMessages = error.response.data.errors;
          }
        });
    },
  },
  data() {
    return {
      router: null, // Initialize router as null
      record: {
        email: "",
        password: "",
      },
      errorMessages: {} // Initialize errorMessages object
    };
  },
};
</script>
