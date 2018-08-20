Vue.component('datagrid',{
    template:`
        <table class="table">
            <thead>
                <tr>
                    <th v-for="(value,key) in dataset[0]">{{key}}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item,index) in dataset" :key="item.id">
                    <td v-for="(value,key) in item">{{value}}</td>
                </tr>
            </tbody>
        </table>
    `,
    props:['api','e'],
    data:function(){
        return {
            dataset:[]
        }
    },
    methods:{},
    mounted:function(){
        $.get(this.api,function(res){
            this.dataset = res.data instanceof Array ? res.data : JSON.parse(res).data.forecast;
            // console.log(this);
        }.bind(this));
        // console.log(this.e1);
        this.$emit('e1');
        // this.e();
    }
});