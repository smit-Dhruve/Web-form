// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import OtherComponent from '../components/OtherComponent.vue';
import HelloWorld from '../components/HelloWorld.vue'; // Import the HelloWorld component

const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld, // Register the HelloWorld component as the home route
      },    
  {
    path: '/other-component',
    name: 'OtherComponent',
    component: OtherComponent,
  },
  // Add other routes here
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
