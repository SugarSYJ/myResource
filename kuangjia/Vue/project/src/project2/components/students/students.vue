<template>
    <div>
        <datagrid :config="config"></datagrid>
    </div>
</template>

<script>
    import datagrid from '../datagrid/datagrid.vue';

    export default {
        components:{
            datagrid
        },
        data(){
            return {
                config:{
                    api:"https://10.3.136.232:88/students",
                    cols:['account', 'phone', 'mail', 'projectname'],
                    params: {page:1, pageitems: 10}
                }
            }
        }
    }
</script>