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
                    class="application-time-container"
                >
                    <span
                        class="application-time-separator"
                        v-html="'&#183;'"
                    />

                    <span
                        class="application-time"
                        v-html="textTime"
                    />
                </span>
            </div>

<!--            <span-->
<!--                class="title"-->
<!--                v-html="textTitle"-->
<!--            />-->

<!--            <span-->
<!--                class="message"-->
<!--                v-html="textMessage"-->
<!--            />-->
        </div>
    </div>
</template>

<script>
    import { DEVICE } from '../constants/devices';
    import '@/assets/common.scss';
    import '@/assets/devices/pixel_4.scss';

    export default {
        name: 'AndroidPreview',

        props: {
            device: {
                type: String,
                default: DEVICE.PIXEL_4,
                validator: value => Object.values(DEVICE).indexOf(value) !== -1
            },

            textApplicationName: {
                type: String,
                default: 'App name'
            },

            textTime: {
                type: String,
                default: '1h'
            },

            textTitle: {
                type: String,
                default: 'Notification preview'
            },

            textMessage: {
                type: String,
                default: 'Preview your message text'
            }
        }
    }
</script>
