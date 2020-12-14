<template>
    <android-preview
        :is-visible-toggler="true"
    />
</template>

<script>
    import { AndroidPreview } from 'vue-push-notification-preview';

    export default {
        components: {
            AndroidPreview
        }
    }
</script>
