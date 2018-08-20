<template>
    <div>
        <div>
            <div class="form-group">
                <div class="col-sm-1">日期</div>
                <div class="col-sm-3"><input type="text" class="form-control"/></div>
                <div class="col-sm-1"><input type="button" value="搜索" class="btn"/></div>
            </div>
        </div>
        <table class="table">
            <thead>
                <tr>
                    <th v-for="(value,key) in dataset[0]" v-if="!columns[0] || columns.indexOf(key) > -1">{{key}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in $store.state.datagrid.dataset">
                    <td v-for="(value,key) in item" v-if="!columns[0] || columns.indexOf(key) > -1">
                        <span v-if="(filter[key])">{{filter[key](item[key])}}</span>
                        <span v-else>{{item[key]}}</span>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr>
                    <td :colspan="columns.length">
                        <ul class="pagination">
                            <li><a href="#">&laquo;</a></li>
                            <li><a href="#" v-for="p in pagecount">{{p}}</a></li>
                            <li><a href="#">&raquo;</a></li>
                        </ul>
                    </td>
                </tr>
            </tfoot>
        </table>
    </div>
</template>

<script>
    import axios from 'axios';
    export default{
        data(){
            return {
                dataset: [],
                columns: [],
                pagecount: 0,
                page: 1
            }
        },
        props:['api','cols','filter','limit'],
        beforeMount(){
            var self = this;
            var params = {
                api:self.api,
                data:{
                    date:'2018-1-18',
                    page:self.page,
                    limit:self.limit || 10
                }
            }
            this.$store.dispatch('refresh',params);
        },
        methods: {
            refresh(){
                // this.columns = this.cols ? this.cols.split(',') : [];
                // axios.get(this.api,{params:{date:'2018-1-18',page:this.page,limit:this.limit || 10}}).then(response=>{
                //     var rowscount = response.data.data.results[1][0]['rowscount'];
                //     this.pagecount = Math.ceil(rowscount/this.limit);
                //     this.dataset = response.data.data.results[0];
                // });
            }
        }
    }
</script>

<datagrid api="http://localhost:88/getschedule"></datagrid>