<template>
    <android-preview
        text-body="Maecenas auctor mi euismod diam iaculis dictum. Donec et sem ut augue condimentum egestas."
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
