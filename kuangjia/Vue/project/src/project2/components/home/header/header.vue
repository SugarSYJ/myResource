<template>
    <div>
        <select class="col-sm-2 form-control form-control-sm" v-model="$store.state.header.lanType">
            <option value="en">en</option>
            <option value="cn">cn</option>
        </select>
    </div>
</template>

<script>
    import common from '../../../common/common.js'
    export default {
        data(){
            return {
                lanType: common.lanType
            }
        },
        mounted(){
            console.log(this.$store.state.header.lanType)
        }
    }
</script>