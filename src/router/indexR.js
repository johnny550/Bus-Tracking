import Router from 'vue-router'
import Vue from 'vue'
import AppHome from '../components/AppHome.vue'
import Login from '../components/Login.vue'
import Location from '../components/LocationSetting/LocationSetting.vue'
import Contact from '../components/Contact/Contact.vue'
import About from '../components/About/About.vue'
import Loc from '../components/LocationSetting/LocationSetting.vue'
import GPS from '../components/GPS/sendGPS.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'AppHome',
        component: AppHome
    
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    
    },
    {
        path: '/location',
        name: 'Location',
        component: Location
    
    },
    {
        path: '/about',
        name: 'About',
        component: About
    
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    
    },
    {
        path: '/Location',
        component: Loc
    },
    {
        path: '/GPS',
        component: GPS
    }
]
})