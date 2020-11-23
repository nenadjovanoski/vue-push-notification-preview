<template>
    <div
        :class="['device', device]"
    >
        <div class="notification">
            <div class="heading">
                <span
                    class="application-icon"
                />

                <span
                    class="application-name"
                    v-html="textApplicationName"
                />

                <span
                    class="application-time"
                    v-html="textTime"
                />
            </div>

            <span
                class="title"
                v-html="textTitle"
            />
        </div>
    </div>
</template>

<script>
    import { DEVICE } from '../constants/devices';
    import '@/assets/common.scss';
    import '@/assets/devices/iphone_x.scss';

    export default {
        name: 'IphonePreview',

        props: {
            device: {
                type: String,
                default: DEVICE.IPHONE_X,
                validator: value => Object.values(DEVICE).indexOf(value) !== -1
            },

            textApplicationName: {
                type: String,
                default: 'App name'
            },

            textTime: {
                type: String,
                default: '1h ago'
            },

            textTitle: {
                type: String,
                default: 'Notification preview'
            }
        }
    }
</script>
