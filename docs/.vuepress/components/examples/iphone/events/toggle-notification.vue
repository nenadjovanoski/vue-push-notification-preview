<template>
    <iphone-preview
        text-title="Aliquam non faucibus purus"
        :text-body="notificationBody"

        @toggle-notification="playWithNotificationBody"
    />
</template>

<script>
    import { IphonePreview } from 'vue-push-notification-preview';

    export default {
        data() {
            return {
                notificationBody: ''
            }
        },

        methods: {
            playWithNotificationBody() {
                this.notificationBody = !this.notificationBody ?
                    'Cras vel nisi tellus. Aliquam sollicitudin neque odio, id ultricies sem congue ut.' : '';
            }
        },

        components: {
            IphonePreview
        }
    }
</script>
