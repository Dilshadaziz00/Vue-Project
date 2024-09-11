import Vue from 'vue';
import Router from 'vue-router';
import Login from './components/LoginComponent.vue';
import ProductDetail from './components/ProductsDetails.vue';
import Posts from './components/PostsComponent.vue'
import PostRouterView from './components/PostRouterView.vue';
import NotFound from './components/NotFound.vue';
Vue.use(Router); // Install Vue Router plugin

// Define your routes
const routes = [
  {
    path: '/',
    redirect: '/posts',
  },
  
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { title: 'Login', auth: false },
  },
  {
    path:'*',
    name:'NotFound',
    component:  NotFound,
  },
  {
    path: '/',
    name: 'Posts',
    component: PostRouterView,

    children: [
      {
        path: '/posts',
        name: 'Posts',
        component: Posts,
        meta: { title: 'Posts', auth: true }
      },
      {
        path: '/posts/product-detail/:id', // Child route path
        name: 'ProductDetail',
        component: ProductDetail,
        props: true, // Pass route params as props
        meta: { title: 'ProductDetail', auth: true },
      }
    ]
  },
 
  //   {
  //     path: '/posts',
  //     name: 'Posts',
  //     component: Posts, // Add the Posts route
  //   },
  //   {
  //     path: '/ProductDetail/:id',
  //     name: 'ProductDetail',
  //     component: ProductDetail,
  //     props: true 
  //   },
];

const router = new Router({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('demoUserToken');

  if (to.meta.auth) {
    if (!token) {
      if (!to.meta.auth) {
        next();
      }
      else {
        // Stay on the login page
        next({ name: 'Login' });
      }
    } else {

      next();
    }
  } else {
    if (token)
      next({ name: 'Posts' });
    next();
  }
});

export default router;
