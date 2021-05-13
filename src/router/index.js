import vue from 'vue'
import VueRouter from 'vue-router'

vue.use(VueRouter);

const Car = () => import('../views/car/Car')
const Chang = () => import('../views/changjing/Chang')
const Commi = () => import('../views/commi/Commi');
const Profile = () => import('../views/profile/Profile')
const Cardetail = () => import('../views/cardetail/Cardetail')


const routes = [
  {
    path:'/',
    redirect: '/car'
  },{
    path:'/car',
    component: Car
  },{
    path:'/chang',
    component: Chang
  },{
    path: '/commi',
    component: Commi
  },{
    path: '/profile',
    component: Profile
  },{
    path:'/cardetail',
    component: Cardetail
  }
]

const router = new VueRouter({
  routes
})

export default router

