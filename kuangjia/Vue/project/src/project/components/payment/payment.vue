<template>
    <div>
        <input type="button" value="微信付款" @click="payment">
    </div>
</template>

<script>
    import io from 'socket.io-client';

    export default {
        beforeMount(){},
        mounted(){
            this.socket = io('http://localhost:8080');
        },
        data(){
            return {
                socket:null
            }
        },
        methods:{
            payment(){
                this.socket.emit('getClientMsg',JSON.stringify({status:true}));
            }
        }
    }
</script>