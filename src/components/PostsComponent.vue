<template>
  <div class="px-3 mt-3">
    <h3 class="text-center">Home</h3>
    <!-- v-slots -->
    <Counter>
      <template v-slot:card>
        <div class="card w-25 text-center">
          <div class="card-body">
            <h1>Hello from card</h1>
          </div>
        </div>
      </template>
      <template v-slot:noCard>
        <div>
          <h1>Hello from No Card</h1>
        </div>
      </template>
    </Counter>

    <!-- v-slots -->
    <div class="row mt-3">
      <div class="d-flex justify-content-between align-items-center w-100">
        <input type="search" v-model.trim="searchData" class="form-control mb-2 w-25"
          placeholder="Search product....." />
        <button @click="logout" class="btn btn-danger">Logout</button>
      </div>
    </div>

    <b-table :per-page="perPage" :current-page="currentPage" class="text-center post-table" show-empty :busy="isLoading"
      striped hover head-variant="dark" table-variant="" responsive="true" :fields="fields" :items="filteredPosts" >
      <template #cell(images)="data">
        <div>
          <img v-if="data.item.images" :src="data.item.images[0]" alt="Product Image"
            style="width: 100px; height: auto; object-fit: cover;" />
        </div>
      </template>
      <template #cell(description)="data">
        <div class="ellipsis-single-line">{{ data.item.description }}</div>
      </template>
      <template #cell(action)="data">
        <div>
          <router-link class="btn btn-primary" :to="{
            name: 'ProductDetail',
            params: { id: data.item.id },
            query: { user: 'alikhan', email: 'alikhangmail.com' }
          }">
            Show Detail
          </router-link>
        </div>
      </template>
      <template #table-busy>
        <div class="text-center text-success my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Loading...</strong>
        </div>
      </template>
      <template #empty>
        <h4 class="text-center">Post Not Found</h4>
      </template>
    </b-table>

    <b-pagination class="d-flex justify-content-center custom-pagination" v-model="currentPage"
      :total-rows="filteredPosts.length" :per-page="perPage" aria-controls="my-table"></b-pagination>
  </div>
</template>

<script>
import Counter from './countNumber.vue';
import { mapState, mapMutations } from 'vuex';
// import axios from 'axios';

export default {
  name: 'PostsData',
  components: {
    Counter
  },
  data() {
    return {
      perPage: 10,
      currentPage: 1,
      isLoading: false,
      fields: [
        { label: 'ID', key: 'id' },
        { label: 'Image', key: 'images' },
        { label: 'Name', key: 'title', sortable: false },
        { label: 'Price', key: 'price' },
        { label: 'Description', key: 'description' },
        { label: 'Category', key: 'category' },
        { label: 'Status', key: 'availabilityStatus' },
        { label: 'Discount', key: 'discountPercentage' },
        { label: 'Action', key: 'action' }
      ],
      searchData: ''
    };
  },
  computed: {
    ...mapState(['objectData']),

    filteredPosts() {
      const searchFilter = this.searchData.toLowerCase();
      return this.objectData.filter(post =>
        post.title.includes(searchFilter) ||
        post.category.includes(searchFilter) ||
        post.availabilityStatus.includes(searchFilter)
      );
    }
  },
  methods: {
    ...mapMutations(['setProduct']),

    async fetchDataApiCall() {
      if (this.objectData.length > 0) {
        // If data is already present in the store, don't fetch again
        return;
      }

      this.isLoading = true;
      try {
        const response =  await this.$axios.get('/products');
        const products = response.data.products;

        // Save fetched data to Vuex store
        this.setProduct(products);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      this.isLoading = false;
    },
    logout() {
      const confirmed = confirm("Are you sure you want to log out?");
       if(confirmed){
        localStorage.removeItem('demoUserToken');
        this.$router.push({ name: 'Login' });
       }
     
    }
  },
  mounted() {
    this.fetchDataApiCall();
  }
};
</script>

<style scoped>
.ellipsis-single-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 200px;
}
</style>

<style>
.custom-pagination .page-item {
  margin: 0 2px;
}

.custom-pagination .page-link {
  border: 1px solid #007bff;
  border-radius: 4px;
  padding: 8px 16px;
  color: #007bff;
  background-color: #ffffff;
  transition: background-color 0.3s, color 0.3s;
}

.custom-pagination .page-link:hover {
  background-color: #00ff4c;
  color: #ffffff;
}

.custom-pagination .page-item.active .page-link {
  background-color: #007bff;
  color: #ffffff;
  border-color: #007bff;
}

.custom-pagination .page-item.disabled .page-link {
  color: #6c757d;
  pointer-events: none;
  background-color: #e9ecef;
}
</style>
