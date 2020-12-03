<template>
    <div
        :class="['vpnp-wrapper-pixel_4']"
        :style="[backgroundStyle, sizeStyle]"
    >
        <div class="vpnp-pixel_4">
            <div class="vpnp-content">
                <div class="vpnp-header">
                    <slot name="header"></slot>
                </div>

                <div
                    :class="['vpnp-notification', appearanceModeClass, notificationExpandedClass]"
                >
                    <div class="vpnp-notification-heading">
                        <p
                            class="vpnp-notification-application-icon"
                            @click="toggleNotification"
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

                        <a
                            class="vpnp-notification-toggler"
                            @click="toggleNotification"
                        >
                            <font-awesome-icon
                                v-if="!isExpanded"
                                icon="chevron-down"
                                size="lg"
                            />
                            <font-awesome-icon
                                v-else
                                icon="chevron-up"
                                size="lg"
                            />
                        </a>
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
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

    library.add(faChevronDown, faChevronUp);

    import { DEVICE_SIZE } from '../constants/shared';

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
            },

            height: {
                type: Number,
                default: DEVICE_SIZE.PIXEL_4_HEIGHT
            }
        },

        computed: {
            sizeStyle() {
                return {
                    height: `${this.height}px`,
                    width: `${this.height * (DEVICE_SIZE.PIXEL_4_WIDTH / DEVICE_SIZE.PIXEL_4_HEIGHT)}px`
                }
            }
        },

        components: {
            FontAwesomeIcon
        }
    }
</script>

<style lang="scss">
    @import '../assets/devices';
    @import '../assets/devices/pixel_4';
</style>
