import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)

import FilmIndex from '../pages/film/index'
import FilmDetail from '../pages/film/detail'

// const FilmIndex = { template: '<div>FilmIndex///</div>' }
// const FilmDetail = { template: '<div>FilmDetail///</div>' }

export default new VueRouter({
    routes: [
    	{ path: '/film/index', name: 'FilmIndex', component: FilmIndex },
    	{ path: '/film/detail', name: 'FilmDetail', component: FilmDetail },
    ]
})