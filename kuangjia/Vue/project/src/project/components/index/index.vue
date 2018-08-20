<template>
    <div>
        <div class="header">
            <router-view name="header"></router-view>
        </div>
        <div class="body">
            <div class="nav">
                <router-view name="nav"></router-view>
            </div>
            <div class="container">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
    import './index.css'
    export default {}
</script>