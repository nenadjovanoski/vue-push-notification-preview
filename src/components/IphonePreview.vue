<template>
    <div
        :class="['vpnp-wrapper-iphone_x']"
        :style="backgroundStyle"
    >
        <div class="vpnp-iphone_x">
            <div class="vpnp-content">
                <div
                    class="vpnp-header"
                >
                    <slot name="header"></slot>
                </div>

                <div
                    :class="['vpnp-notification', appearanceModeFormat, sizeModeFormat]"
                >
                    <div class="vpnp-notification-heading">
                        <div class="vpnp-notification-heading-icon-name-container">
                            <p
                                class="vpnp-notification-application-icon"
                            />

                            <p
                                class="vpnp-notification-application-name"
                                v-html="textApplicationName"
                            />
                        </div>

                        <p
                            class="vpnp-notification-time"
                            v-html="textTime"
                        />
                    </div>

                    <div class="vpnp-notification-content">
                        <p
                            v-if="hasTitle"
                            class="vpnp-notification-title"
                            v-html="textTitle"
                        />

                        <p
                            v-if="hasBody"
                            class="vpnp-notification-body"
                            v-html="textBody"
                        />
                    </div>
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
