<template>
    <android-preview />
</template>

<script>
    import { AndroidPreview } from 'vue-push-notification-preview';

    export default {
        components: {
            AndroidPreview
        }
    }
</script>

<style lang="scss">
    $vnpn-pixel_4-notification-heading-color: #ff0000;

    @import '~vue-push-notification-preview/src/assets/devices/pixel_4';
</style>
