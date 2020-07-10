import Vue from 'vue'
import VueRouter from "vue-router";

Vue.use(VueRouter)

const Home = () => import('views/home/Home');
const Category = () => import('views/category/Category');
const ShoppingCart = () => import('views/shoppingcart/ShoppingCart');
const Profile = () => import('views/profile/Profile');

const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shoppingcart',
    component: ShoppingCart
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router;
