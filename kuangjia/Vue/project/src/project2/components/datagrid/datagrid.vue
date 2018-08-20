<template>
    <div>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th v-for="(val,key) in $store.state.datagrid.dataset[0]" v-if="config.cols.indexOf(key) > -1">{{dictionary[$store.state.header.lanType][key] || key}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(obj,idx) in dataset">
                    <td v-for="(val,key) in obj" v-if="config.cols.indexOf(key) > -1">{{val}}</td>
                </tr>
            </tbody>
        </table>
        <spinner v-if="show"></spinner>
    </div>
</template>

<script>
    import http from 'axios';

    import common from '../../common/common.js';

    import spinner from '../spinner/spinner.vue';
    export default {
        data(){
            return {
                dataset:[],
                dictionary: {},
                lanType: common.lanType,
                show:false
            }   
        },
        props:['config'],
        components: {
            spinner
        },
        mounted(){
            $store.dispathch('refresh')
            //this.show = true;
            //http.get('http://localhost:88/src/project2/dictionary/common.txt').then((res) => {
             //   console.log(res)
            //    this.dictionary = res.data;
            //})
            //http.get(this.config.api, {params: this.config.params || {}}).then((res)=>{
            //    console.log(res);
            //    this.dataset = res.data.data;
            //    this.show = false;
            //})
        }
    }
</script>