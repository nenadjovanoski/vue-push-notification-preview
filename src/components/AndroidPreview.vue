<template>
    <div
        :class="['vpnp-wrapper-pixel_4']"
        :style="backgroundStyle"
    >
        <div class="vpnp-pixel_4">
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
                        class="vpnp-application-time-container"
                    >
                    <span
                        class="vpnp-application-time-separator"
                        v-html="'&#183;'"
                    />

                    <span
                        class="vpnp-application-time"
                        v-html="textTime"
                    />
                </span>
                </div>

                <div
                    v-if="hasTitle || textBody"
                    class="vpnp-content"
                >
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
