<template>
    <iphone-preview
        text-body="Maecenas auctor mi euismod diam iaculis dictum. Donec et sem ut augue condimentum egestas."
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
