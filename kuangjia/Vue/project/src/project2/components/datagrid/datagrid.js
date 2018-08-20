import http from 'axios'

const state = {
    page: 1,
    pageitems: 10,
    dataset: [],
    dictionary: {},
    show: false
}

const mutations = {
    refresh(){
        state.show = true;
        http.get('http://localhost:88/src/project2/dictionary/common.txt').then((res) => {
            console.log(res)
            state.dictionary = res.data;
        })
        http.get(this.config.api, {params: this.config.params || {}}).then((res)=>{
            console.log(res);
            state.dataset = res.data.data;
            state.show = false;
        })
    }
}

const actions = {
    refresh(context){
        context.commit('refresh')
    }
}

export default {
    state,
    mutations,
    actions
}