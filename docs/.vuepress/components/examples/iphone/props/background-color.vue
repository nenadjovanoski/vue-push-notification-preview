<template>
    <iphone-preview
        background-color="#3eaf7c"
    />
</template>

<script>
    import { IphonePreview } from 'vue-push-notification-preview';
    import 'vue-push-notification-preview/src/assets/devices/iphone_x.scss';

    export default {
        components: {
            IphonePreview
        }
    }
</script>
