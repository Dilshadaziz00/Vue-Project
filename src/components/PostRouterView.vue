<template>
    <div class="">
        <div class=""> <Navbar /></div>

        <router-view></router-view>

    </div>
</template>
<script>
 import Navbar from './NavbarComponent.vue';
 export default {
  components:{
    Navbar
  },
};
</script>