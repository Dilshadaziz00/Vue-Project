<template>
    <div>
      <div>
    <button @click="toggleDarkMode">{{ isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode' }}</button>
  </div>
      <!-- <h3 class="text-center">Homesss</h3> -->
   
      <!-- <Counter /> -->
    </div>
  
  </template>
  
  <script>
  // import Counter from './countNumber.vue'; 
  
  export default {
    name: 'HomeComponent',
    components: {
      // Counter    
    },
  
  data() {
    return {
      isDarkMode: false,
    };
  },
  mounted() {

    if (localStorage.getItem('theme') === 'dark') {
      this.isDarkMode = true;
      document.body.classList.add('dark-mode');
    }
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      if (this.isDarkMode) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
      } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
      }
    }
  }
};
</script>
  <style scoped>



body.dark-mode {
  --background-color: #121212;
  --text-color: white;
}

  </style>
  