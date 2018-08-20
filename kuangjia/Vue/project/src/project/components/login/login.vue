<template>
    <div>
        <input type="text" v-model="username"/>
        <input type="password" v-model="pwd"/>
        <input type="button" value="login" @click="login"/>
    </div>
</template>

<script>
    import http from '../../utils/httpclient.js';
    import router from '../../router/router.js';
    export default {
        data(){
            return {
                username:'',
                pwd:''
            }
        },
        methods:{
            login(){
                http.post('login',{username:this.username,password:this.pwd}).then((res)=>{
                    console.log(res.data);
                    if(res.data.status){
                        localStorage.setItem('dktoken',res.data.data);
                        router.push({name:'index'});
                    }
                });
            }
        }
    }
</script>