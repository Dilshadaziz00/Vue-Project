<template>
     <div :class="{ 'dark-mode': isDarkMode }">

      <!-- Parent Component -->
<data-list :items="items">
  <template v-slot:default="slotProps">
    <li>{{ slotProps.item.name }}</li>
  </template>
</data-list>
  <div v-if="product" class="product-detail d-flex">
    <div class="px-5 mb-3">
      <router-link :to="{ name: 'Posts' }">
        <button type="button" class="btn btn-primary">Go back</button>
      </router-link>
   
       
      
    </div>
    <div class="card w-50 text-center" data-aos="fade-up"
    data-aos-duration="3000">
      <div class="card-body">
        <img
          :src="product.images[0]"
          alt="Product Image"
          style="width: 300px; height: auto; object-fit: cover;"
        />
        <h3>{{ product.title }}</h3>
        <p><strong>Price:</strong> ${{ product.price }}</p>
        <p><strong>Brand:</strong> {{ product.brand }}</p>
        <div class="d-flex justify-content-center">
          <strong>Description: </strong>
          <p class="ellipsis-single-line">{{ product.description }}</p>
        </div>
        <p><strong>Category:</strong> {{ product.category }}</p>
        <div class="d-flex justify-content-center" v-if="product.reviews && product.reviews.length">
          <div v-for="(review, index) in product.reviews" :key="index">
            <strong>Reviewer Names: </strong> {{ review.reviewerName }}<br>
          <strong>Comments: </strong>
          {{ review.comment }}
          </div>
          
        </div>
        <!-- <div class="d-flex justify-content-center" v-if="product.reviews && product.reviews.length">
          <strong>Reviewer Names: </strong>
          <p v-for="(review, index) in product.reviews" :key="'name-' + index">
            {{ review.reviewerName }}
          </p>
        </div> -->
        <p><strong>Minimum Order Quantity:</strong> {{ product.minimumOrderQuantity }}</p>
        <p><strong>Return Policy:</strong> {{ product.returnPolicy }}</p>
        <p><strong>Status:</strong> {{ product.availabilityStatus }}</p>
        <p><strong>Discount:</strong> {{ product.discountPercentage }}%</p>
        <div class="d-flex justify-content-center" v-if="product.reviews && product.reviews.length">
          <strong>Ratings: </strong>
          <p v-for="(review, index) in product.reviews" :key="'rating-' + index">
            {{ review.rating }}
          </p>
        </div>
        <div class="d-flex justify-content-center" v-if="product.tags && product.tags.length">
          <strong>Tags: </strong>
          <p v-for="(tag, index) in product.tags" :key="'tag-' + index">
            {{ tag }}
          </p>
        </div>
      </div>
     
    </div>
    <div class="p-4">
      <p>Timer:{{ getTimer }}</p>
      <p v-if="errorMessage" class="text-danger">{{ errorMessage }} </p>
      <h2 v-if="getFruit.length > 0">.Items list</h2>

      <ull>
        <li class="my-3" v-for="x in getFruit" :key="x">{{ x }}
          <button class="btn btn-primary " @click="removeItems" > Remove item</button>

        </li>
      </ull>
    </div>
  </div>
</div>
</template>
<script>
// import axios from 'axios';
import {mapState, mapGetters,mapMutations } from 'vuex';

export default {
  name: 'ProductDetail',
  props: ['id'],
  computed: {
   ...mapState(['isDarkMode']),

    // Access query parameters
    ...mapGetters(['getFruit','getTimer']),
    user() {
      return this.$route.query.user;
    },
    email() {
      return this.$route.query.email;
    }
  },
  data() {
    return {
      errorMessage:'',
      product: null
    };
  },
  async created() {
    // Fetch product details only if they are not available in Vuex
    // if (!this.getProduct) {
      // try {
      //   const response = await this.$axios.get(`/products/${this.id}`);
      //   this.product = response.data;
      // } catch (error) {
      //   console.error('Error fetching product details:', error);
      // }
    // } else {
      // this.product = this.getProduct.find((p) => p.id === this.id);
    // }
  },
  methods: {
    ...mapMutations(['removeFruit']),
    removeItems(){
      this.removeFruit();

      // if(this.getTimer>0){
      //   this.removeFruit();
      // }
      // else{
      //     this.errorMessage="Sorry you can't remove it "
      //   }
},
    async fetchDataApiCall(){
      try {
        const response = await this.$axios.get(`products/${this.id}`);
        this.product = response.data;
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    }
    // Define methods if necessary
  },
  mounted(){
    this.fetchDataApiCall();
  }
};
</script>

<style scoped>
.dark-mode {
  background-color: #121212;
  color: white;
}
.dark-mode .card{
  background-color: #121212;
  border: 1px solid #3d3d37;
  color: white;
}
.ellipsis-single-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 200px;
}

.product-detail {
  padding: 20px;
}

</style>
