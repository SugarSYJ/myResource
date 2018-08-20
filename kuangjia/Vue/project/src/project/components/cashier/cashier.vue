<template>
    <div>
        <input type="text" v-model="barcode" @keyup.enter="getProduct" autofocus ref="barcode"/>
        <input type="button" @click="genOrder" value="收银"/>
        <canvas ref="qrcode" style="width:200px;height:200px;"></canvas>
        <ul>
            <li v-for="obj in dataset">
                {{obj.proname}} - {{obj.price}}                
            </li>
        </ul>
    </div>
</template>

<script>
    import Vue from 'vue';
    import http from '../../utils/httpclient.js';
    import QRCode from 'vue-qrcode';
    import io from 'socket.io-client';

    export default {
        mounted(){
            this.socket = io('http://localhost:8080');
            // this.socket.on('open', () => {
            //     console.log('socket open');
            // })
            this.socket.on('print', (msg) => {
                console.log(msg);
                http.post('http://10.3.136.232:81/print', {text: 'DK 超市收银系统  \n*************************************\n商品名称：香烟\n单品金额：100 元 \n商品数量：10 条\n总金额：1000 元\n买单时间：2017-08-15 10:53:19\n*************************************\n'}).then((res) => {
                    console.log(res);
                });
            });
        },
        data(){
            return {
                barcode:'',
                dataset:[],
                socket:null
            }
        },
        methods:{
            genOrder(){
                QRCode.toCanvas(this.$refs.qrcode,'http://10.3.136.213:88/index.html#/payment/78289',(error)=>{
                    console.log(error);
                });
            },
            getProduct(event){
                http.post('cashier',{barcode:this.barcode}).then((res)=>{
                    this.dataset.push(res.data.data[0]);
                    this.$refs.barcode.select();
                });
                // console.log(event.keyCode);
            }
        }
    }
</script>