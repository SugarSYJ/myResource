import Vue from 'vue';
import appComponent from './components/app/app.vue';
import router from './router/router';

new Vue({
    el:"#app",
    router,
    render:h => h(appComponent)
})