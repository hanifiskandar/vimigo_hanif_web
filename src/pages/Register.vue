<template>
    <div class="container">
        <div class="col-md-6 m-auto">
            <h1>Register Page</h1>
            <div class="mt-3" style="color:red">
              {{ errorMessages }}
            </div>
            <div class="mt-3">
                <form @submit.prevent="submitRegister">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Name</label>
                        <input type="text" v-model="record.name" class="form-control" id="exampleFormControlInput1"
                            placeholder="Your Name">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email</label>
                        <input type="email" v-model="record.email" class="form-control" id="exampleFormControlInput1"
                            placeholder="name@example.com">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Password</label>
                        <input type="password" v-model="record.password" class="form-control" id="exampleFormControlInput1">
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Password Confirmation</label>
                        <input type="password" v-model="record.password_confirmation" class="form-control" id="exampleFormControlInput1">
                    </div>
                    <div>
                        <button type="submit" class="btn btn-primary">Register</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
</template>


<script>
import axios from 'axios'
import { useRouter } from 'vue-router'
import { authStore} from '../stores/authstore';

export default {
  created() {
    this.router = useRouter();
    this.auth = authStore();
  },
  methods: {
    async submitRegister() {
      await this.auth.getToken();
      axios
        .post("/register", {
          name: this.record.name,
          email: this.record.email,
          password: this.record.password, 
          password_confirmation: this.record.password_confirmation, 
        })
        .then((response) => {
          this.$router.push("/");
        })
        .catch((error) => {
          console.error("Error:", error);
          // if (error.response && error.response.status === 422) {
            this.errorMessages = error.response.data.message;
          // }
        });
    },
  },
  data() {
    return {
      router: null, // Initialize router as null
      auth: null,
      record: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      errorMessages: null, // Initialize errorMessages object
    };
  },
};
</script>
