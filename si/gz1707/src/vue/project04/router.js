import Vue from 'vue';
import VueRouter from 'vue-router';
import bookComponent from './components/book/book.vue'
Vue.use(VueRouter);

const Router = new VueRouter({
    routes:[
        {path:'/book',component:bookComponent}
    ]
});
export default Router;