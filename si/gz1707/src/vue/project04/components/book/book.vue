<template>
    <div>
        <input type="button" value="刷新" @click="refresh"/>
        <datagrid ref="a" api="http://localhost:88/getschedule" limit="5" :filter="filter"></datagrid>
    </div>
</template>

<script>
    import datagrid from '../datagrid/datagrid.vue';
    export default{
        components:{
            datagrid
        },
        data(){
            return {
                filter: {
                    date: function(_date){
                        var date = new Date(_date);
                        var y = date.getFullYear();
                        var M = date.getMonth() + 1;
                        var d = date.getDate();
                        return `${y}-${M}-${d}`;
                    },
                    price: function(_price){
                        return ('￥' + parseFloat(_price).toFixed(2));
                    }
                }
            }
        },
        methods: {
            refresh(){
                // this.$refs.a.refresh();
                // state.book.refresh();
            }
        },
        mounted(){
            // console.log(this.$store);
            // this.$store.commit('refresh');
            // this.$store.dispatch('refresh');
        }
    }
</script>