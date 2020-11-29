<template>
    <div
        :class="['vpnp-wrapper-iphone_x']"
        :style="backgroundStyle"
    >
        <div class="vpnp-iphone_x">
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
    import {
        APPEARANCE_MODE,
        SIZE_MODE
    } from '../constants/shared';

    export default {
        name: 'IphonePreview',

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
            },

            sizeMode: {
                type: String,
                default: SIZE_MODE.INITIAL,
                validator: value => Object.values(SIZE_MODE).indexOf(value) !== -1
            },

            appearanceMode: {
                type: String,
                default: APPEARANCE_MODE.LIGHT,
                validator: value => Object.values(APPEARANCE_MODE).indexOf(value) !== -1
            }
        },

        computed: {
            appearanceModeFormat() {
                switch (this.appearanceMode) {
                    case APPEARANCE_MODE.LIGHT:
                        return 'light-mode';

                    case APPEARANCE_MODE.DARK:
                        return 'dark-mode';

                    default:
                        throw new Error('Unrecognized appearance mode!');
                }
            },

            sizeModeFormat() {
                switch (this.sizeMode) {
                    case SIZE_MODE.INITIAL:
                        return 'initial-mode';

                    case SIZE_MODE.EXPANDED:
                        return 'expanded-mode';

                    default:
                        throw new Error('Unrecognized size mode!');
                }
            },

            hasTitle() {
                return this.textTitle !== '';
            },

            hasBody() {
                return this.textBody !== '';
            }
        }
    }
</script>

<style lang="scss">
    @import '../assets/devices';
    @import '../assets/devices/iphone_x';
</style>
