import VueRouter from "vue-router";
import Vue from 'vue';

Vue.use(VueRouter);

const SimpleTransition = () => import('../components/simple-transition/SimpleTransition')
const SimpleAnimation = () => import('../components/simple-animation/SimpleAnimation')
const SimpleVelocity = () => import('../components/velocity/SimpleVelocity')
const StateButton = () => import('../components/state-button/StateButton')
const StateTable = () => import('../components/state-table/StateTable')
const TabControl = () => import('../components/tab-switch/TabControl')
const Numbers = () => import('../components/list-transition/Numbers')
const Stagger = () => import('../components/list-transition/Stagger')

const routes = [
  {
    path: '/simple-trans',
    component: SimpleTransition
  },
  {
    path: '/simple-animation',
    component: SimpleAnimation
  },
  {
    path: '/simple-velocity',
    component: SimpleVelocity
  },
  {
    path: '/state-button',
    component: StateButton
  },
  {
    path: '/state-table',
    component: StateTable
  },
  {
    path: '/tab-control',
    component: TabControl
  },
  {
    path: '/numbers',
    component: Numbers
  },
  {
    path: '/stagger',
    component: Stagger
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;