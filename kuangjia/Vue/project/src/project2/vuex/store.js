import Vue from 'vue'
import Vuex from 'vuex'

//{state: {lanType: 'ce'}}
import header from '../components/home/header/header.js'
//{state: {lanType: 'ce'}}
import common from '../common/common.js'
import datagrid from '../components/datagrid/datagrid.js'

Vue.use(Vuex)

// {common: {state: {lanType: 'ce'}}, header:{state: {lanType: 'ce'}}}
const store = new Vuex.Store({
    modules:{
        header,
        common,
        datagrid
    }
})
export default store;