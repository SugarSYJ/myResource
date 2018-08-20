import './common/common.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

import Vue from 'vue';
import HomeComponent from './components/home/home.vue';
import store from './vuex/store.js';

import router from './router/router';

new Vue({
    el:'#app',
    router,
    store,
    render:h => h(HomeComponent)
})