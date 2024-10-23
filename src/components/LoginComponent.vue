<template>
  <div class="container mt-5" >
    <div class="row justify-content-center">
      <div class="col-md-5">
        <h4 class="text-center">Login</h4>
        <div class="card"  data-aos="fade-up"
        data-aos-duration="3000">
          <div class="card-body">
            <form @submit.prevent="submitForm">
              <div class="form-group my-3">
                <label for="Username">Username:</label>
                <input type="text" id="Username" class="form-control  my-2" v-model="formData.username" required>
              </div>
              <div class="form-group my-3">
                <label for="password">Password:</label>
                <div class="password-container">
                  <input :type="pwd_type" id="password" class="form-control my-2" v-model="formData.password" required />
                  <svg @click="show_pwd_type" xmlns="http://www.w3.org/2000/svg" width="15" height="15"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" id="toggle-password" class="feather feather-eye">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                </div>
              </div>

              <div class="text-center text-danger" v-if="showErrorMessage">
                <h6>Invalid Username or password</h6>
              </div>
              <button type="submit" class="btn btn-primary w-100 mt-2">Login</button>
              <div class="d-flex justify-content-center mt-2 font-weight-bold">
                <!-- <router-link :to="{name:'SignUp'}">Signup now</router-link> -->
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'; 

export default {
  name: 'LoginComponent',
  data() {
    return {
        pwd_type:'password',

      showErrorMessage: false,
      formData: {
        username: 'michaelw',
        password: 'michaelwpass',
        // expiresInMins: 30,
      }
    };
  },
  computed: {

  },
  methods: {
    show_pwd_type() {
      if (this.pwd_type == 'password') { this.pwd_type = 'text'; } else { this.pwd_type = 'password'; }
    },
    async submitForm() {
      console.log("Form Data:", this.formData);
      try {
        const response = await this.$axios.post('/auth/login', this.formData);
        console.log('Login successful. Response:', response);
        if (response && response.data.refreshToken) {
          localStorage.setItem('demoUserToken', response.data.refreshToken);
          this.$router.push({ name: 'Posts' });
        }
      } catch (error) {
        this.showErrorMessage = true;
        console.error('Error during login:', error);
        if (error.response && error.response.status === 401) {
          console.error('Unauthorized error:', error.response);
        } else {
          console.error('Unhandled error:', error.message);
        }
      }
    }
  },

  mounted() {


  }
};
</script>

<style scoped>
label {
  display: flex;
  text-align: start;
}

.password-container {
  position: relative;
}

.password-container input {
  padding-right: 35px;
 
}

.password-container svg {
  position: absolute;
  right: 10px;
  top: 50%;
  color: #8a8a8a;
  transform: translateY(-50%);
  cursor: pointer;
}
</style>
