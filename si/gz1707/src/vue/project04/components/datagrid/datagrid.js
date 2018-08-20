import axios from 'axios';
const state = {
    dataset: [],
    columns: [],
    pagecount: 0,
    page: 1
}
const mutations = {
    refresh(_data,_data2){
        // console.log(arguments);
        state.dataset = _data2;
        // state.dataset = [];
    }
}
const actions = {
    refresh(context,_params){
        axios.get(_params.api,{params:_params.data}).then(response=>{
            var rowscount = response.data.data.results[1][0]['rowscount'];
            this.pagecount = Math.ceil(rowscount/this.limit);
            context.commit('refresh',response.data.data.results[0]);
        });
    }
}
export default {
    state,
    mutations,
    actions
}