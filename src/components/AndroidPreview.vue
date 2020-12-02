<template>
    <div
        :class="['vpnp-wrapper-pixel_4']"
        :style="backgroundStyle"
    >
        <div class="vpnp-pixel_4">
            <div class="vpnp-content">
                <div class="vpnp-header">
                    <slot name="header"></slot>
                </div>

                <div
                    :class="['vpnp-notification', appearanceModeFormat, sizeFormat]"
                >
                    <div class="vpnp-notification-heading">
                        <p
                            class="vpnp-notification-application-icon"
                        />

                        <p
                            class="vpnp-notification-application-name"
                            v-html="textApplicationName"
                        />

                        <div
                            class="vpnp-notification-application-time-container"
                        >
                            <p
                                class="vpnp-notification-application-time-separator"
                                v-html="'&#183;'"
                            />

                            <p
                                class="vpnp-notification-application-time"
                                v-html="textTime"
                            />
                        </div>
                    </div>

                    <div
                        v-if="hasTitle || textBody"
                        class="vpnp-notification-content"
                    >
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
        name: 'AndroidPreview',

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
                default: '1h',
                validator: value => value.length < 4
            },

            textTitle: {
                type: String,
                default: ''
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
    @import '../assets/devices/pixel_4';
</style>
