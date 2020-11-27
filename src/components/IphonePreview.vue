<template>
    <div class="device iphone_x">
        <div
            :class="['notification', appearanceModeFormat, sizeModeFormat]"
        >
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

            <div class="content">
                <span
                    v-if="hasTitle"
                    class="title"
                    v-html="textTitle"
                />

                <span
                    v-if="hasBody"
                    class="body"
                    v-html="textBody"
                />
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

<style lang="scss" scoped>
    @import '../assets/common';
    @import '../assets/devices/iphone_x';
</style>
