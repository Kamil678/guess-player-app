import {
  createRouter,
  createWebHistory
} from 'vue-router';
import WelcomePage from '../views/WelcomePage.vue';
import GamePage from '../views/GamePage.vue'

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: '/',
      name: 'welcome',
      component: WelcomePage
    },
    {
      path: '/game',
      name: 'game',
      component: GamePage
    }
  ]
})

export default router