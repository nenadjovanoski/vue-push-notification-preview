<template>
    <android-preview
        background-color="#3eaf7c"
    />
</template>

<script>
    import { AndroidPreview } from 'vue-push-notification-preview';
    import 'vue-push-notification-preview/src/assets/devices/pixel_4.scss';

    export default {
        components: {
            AndroidPreview
        }
    }
</script>
