<template>
    <android-preview>
        <template slot="header">
            <div class="time-container">
                <p>12:15</p>
            </div>
        </template>
    </android-preview>
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

<style lang="scss" scoped>
    .time-container {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-end;

        p {
            font-size: 40px;
            color: #ffffff;
        }
    }
</style>
