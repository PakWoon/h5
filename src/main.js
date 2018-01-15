// 插件引入
import Vue from 'vue'

import Vuex from 'vuex'
import { mapState } from 'vuex'
Vue.use(Vuex)

import VueRouter from 'vue-router'
Vue.use(VueRouter)



// 自定义的引入
import router from './router';
import store from './store';

//关闭生产模式下给出的提示
Vue.config.productionTip = false;

const app = new Vue({
    router, // 路由
    store, // 数据
    data: {
        app: 'i am app name'
    },
    template: '',
    components: {},
    computed: mapState({
        wapid: state => state.wapid,
        location: 'location',
        cinema: 'cinema',
        user: 'user',
    }),
    created: function () {
        this.init();
    },
    methods: {
    	init: function () {
    		// 获取影院数据
    		console.log('init...',this.$store);
            var aa = {a:1,b:2};
            var bb = {...aa};
            console.log('bb:',bb)
            this.$store.dispatch('getCinemas')
    	}

    }
}).$mount('#app')


