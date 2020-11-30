<template>
    <div
        :class="['vpnp-wrapper-iphone_x']"
        :style="backgroundStyle"
    >
        <div class="vpnp-iphone_x">
            <div
                class="vpnp-header"
            >
                <slot name="header"></slot>
            </div>

            <div
                :class="['vpnp-notification', appearanceModeFormat, sizeModeFormat]"
            >
                <div class="vpnp-heading">
                    <span
                        class="vpnp-application-icon"
                    />

                    <span
                        class="vpnp-application-name"
                        v-html="textApplicationName"
                    />

                    <span
                        class="vpnp-application-time"
                        v-html="textTime"
                    />
                </div>

                <div class="vpnp-content">
                <span
                    v-if="hasTitle"
                    class="vpnp-title"
                    v-html="textTitle"
                />

                    <span
                        v-if="hasBody"
                        class="vpnp-body"
                        v-html="textBody"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { deviceMixin } from '../mixins/deviceMixin';

    export default {
        name: 'IphonePreview',

        mixins: [
            deviceMixin
        ],

        props: {
            textApplicationName: {
                type: String,
                default: 'App name'
            },

            textTime: {
                type: String,
                default: '1h ago',
                validator: value => value.length < 8
            },

            textTitle: {
                type: String,
                default: 'Title notification'
            },

            textBody: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="scss">
    @import '../assets/devices';
    @import '../assets/devices/iphone_x';
</style>
