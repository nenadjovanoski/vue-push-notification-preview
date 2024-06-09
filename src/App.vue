<template>
    <div class="container">
        <iphone-preview

        />

        <android-preview
        
        />
    </div>
</template>

<script setup>
    import IphonePreview from './components/IphonePreview.vue'
    import AndroidPreview from './components/AndroidPreview.vue'
    import './assets/devices.scss'
</script>

<style scoped>
    .container {
        display: flex;
        justify-content: space-around;
    }
</style>
