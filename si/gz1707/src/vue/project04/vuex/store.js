import Vue from 'vue';
import Vuex from 'vuex';
import datagrid from '../components/datagrid/datagrid.js';
Vue.use(Vuex);
const store = new Vuex.Store({
    modules:{
        datagrid
    }
});
export default store;