// import './asset/bootstrap/css/bootstrap.css';
import Vue from 'vue';
import router from './router'
import AppComponent from './app.vue';
import store from './vuex/store';
// console.log(store);
new Vue ({
    el:'#app',
    router,
    store,
    render:h => h(AppComponent)
})