<template>
    <iphone-preview
        :height="700"
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
