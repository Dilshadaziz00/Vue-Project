<template>
    <div class="" >
      <nav
        class="navbar navbar-expand-lg"
        :class="isDarkMode ? 'navbar-dark dark' : 'navbar-light bg-light'"
      >
        <a class="navbar-brand" href="#">Brand</a>
        <!-- <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button> -->
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item ">
              <router-link class="nav-link" :to="{name: 'Home' }" >Home<span class="sr-only">(current)</span> </router-link>
              <!-- <a class="nav-link" href="#">Home </a> -->
            </li>
            <li class="nav-item   ">
                <router-link class="nav-link" :to="{name: 'MaxData' }" >MaxData </router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'slotsParent2' }" >Product </router-link>

              <!-- <a class="nav-link" href="#">Pricing</a> -->
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'slotsParent' }" >User </router-link>

              <!-- <a class="nav-link" href="#">Contact</a> -->
            </li>
            <li class="nav-item">
              <router-link class="nav-link" :to="{name: 'About' }" >About </router-link>

             
            </li>
          </ul>
          <button @click="logout" class="btn btn-danger">Logout</button>

        </div>
      </nav>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex';
  export default {
    name: 'NavbarComponent',
    computed: {
      ...mapState(['isDarkMode']),
    },
    methods:{
        logout() {
      const confirmed = confirm("Are you sure you want to log out?");
       if(confirmed){
        localStorage.removeItem('demoUserToken');
        this.$router.push({ name: 'Login' });
       }
     
    },
    }
  };
  </script>
  
  <style scoped>

  </style>
  