<template>
    <iphone-preview />
</template>

<script>
    import { IphoenPreview } from 'vue-push-notification-preview';

    export default {
        components: {
            IphoenPreview
        }
    }
</script>

<style lang="scss">
    $vnpn-iphone_x-notification-heading-color: #ff0000;

    @import '~vue-push-notification-preview/src/assets/devices/iphone_x';
</style>
