<template>
    <iphone-preview
        text-title="Aliquam non faucibus purus"
        :text-body="notificationBody"
        :image="notificationImage"

        @toggle-notification="playWithNotificationBody"
    />
</template>

<script>
    import { IphonePreview } from 'vue-push-notification-preview';
    import 'vue-push-notification-preview/src/assets/devices/iphone_x.scss';

    export default {
        data() {
            return {
                notificationBody: '',
                notificationImage: ''
            }
        },

        methods: {
            playWithNotificationBody() {
                this.notificationBody = !this.notificationBody ?
                    'Cras vel nisi tellus. Aliquam sollicitudin neque odio, id ultricies sem congue ut.' : '';
                this.notificationImage = !this.notificationImage ?
                    'https://images.unsplash.com/photo-1569172122301-bc5008bc09c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80' : '';
            }
        },

        components: {
            IphonePreview
        }
    }
</script>
