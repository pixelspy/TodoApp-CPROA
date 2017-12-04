import Home from '../components/Home.vue'
import Users from '../components/Users.vue'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
{
  path: '/user/:id',
  name: 'Users',
  component: Users
}
]
