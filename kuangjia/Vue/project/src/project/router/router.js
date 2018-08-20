import Vue from 'vue';
import VueRouter from 'vue-router';

import NavComponent from '../components/nav/nav.vue';
import HeaderComponent from '../components/header/header.vue';
import ContainerComponent from '../components/container/container.vue';
import LoginComponent from '../components/login/login.vue';
import IndexComponent from '../components/index/index.vue';
import CashierComponent from '../components/cashier/cashier.vue';
import PaymentComponent from '../components/payment/payment.vue';

Vue.use(VueRouter);

const router = new VueRouter({
    routes:[
        {
            path:'/',
            name:'root',
            component:IndexComponent,
            children:[
                {
                    path:'index',
                    name:'index',
                    components:{
                        default:ContainerComponent,
                        nav:NavComponent,
                        header:HeaderComponent
                    }
                },
                {
                    path:'cashier',
                    name:'cashier',
                    component:CashierComponent
                }
            ]
        },{
            path:'/login',
            name:'login',
            component:LoginComponent
        },
        {
            path:'/payment/:orderno',
            component:PaymentComponent
        }
    ]
});

export default router;