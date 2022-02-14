import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage'
import Pokemon from '../views/Pokemon'
import ErrorPage from '../views/ErrorPage'
import BagPage from '../views/BagPage'
import * as route from './routesNames'

Vue.use(VueRouter)

const routes = [
    {
        path: '*',
        name: route.ERROR_PAGE,
        component: ErrorPage,
    },
    {
        path: '/',
        name: route.HOME_PAGE,
        component: HomePage,
    },
    {
        path: '/bag',
        name: route.BAG_PAGE,
        component: BagPage,
    },
    {
        path: '/pokemon/:name',
        name: route.POKEMON_PAGE,
        component: Pokemon,
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
})

export default router
