<template>
    <android-preview
        :is-visible-toggler="true"
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
