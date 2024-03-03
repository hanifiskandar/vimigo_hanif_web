<template>
    <div class="container">
        <div class="col-md-6 m-auto">
            <h1>Login Page</h1>
            <div class="mt-3" style="color:red">
              {{ errorMessages }}
            </div>
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
import { authStore} from '../stores/authstore';

export default {
  created() {
    this.router = useRouter();
    this.auth = authStore();
  },
  methods: {
    async submitLogin() {
      await this.auth.getToken();
      axios
        .post("/login", {
          email: this.record.email,
          password: this.record.password,
        })
        .then((response) => {
            console.log("RESTEST: ",response);
            this.$router.push("/");

          // if(response.status === 204){
          //   this.$router.push("/");
          // }
          // else{
          //   this.errorMessages = response.data.message;
          // }
          // console.log('boomsdsd');
        })
        .catch((error) => {
          console.log('boom');
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
        email: "",
        password: "",
      },
      errorMessages: null, // Initialize errorMessages object
    };
  },
};
</script>
