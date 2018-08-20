import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HomeComponent from '../components/home/home.vue';
import StudentsComponent from '../components/students/students.vue';
import CnodejsComponent from '../components/cnodejs/cnodejs.vue';

const router = new VueRouter({
    routes:[
        {path:'/',component:HomeComponent},
        {path:'/students',component:StudentsComponent},
        {path:'/cnodejs',component:CnodejsComponent}
    ]
})

export default router;