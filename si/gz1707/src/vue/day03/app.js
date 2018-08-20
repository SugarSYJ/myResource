import Vue from 'vue';
import VueRouter from 'vue-router';
import app from './app.vue';
import login from './components/login/login.vue';
import register from './components/register/register.vue';
const router = new VueRouter({
    routes:[
        {path:'/login',component:login},
        {path:'/register',component:register}
    ]
});
Vue.use(VueRouter);
new Vue({
    el:'#app',
    router,
    render: h => h(app)
});