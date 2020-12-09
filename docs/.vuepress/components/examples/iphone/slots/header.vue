<template>
    <iphone-preview>
        <template slot="header">
            <div class="time-container">
                <p>12:15</p>
            </div>
        </template>
    </iphone-preview>
</template>

<script>
    import { IphonePreview } from 'vue-push-notification-preview';

    export default {
        components: {
            IphonePreview
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
