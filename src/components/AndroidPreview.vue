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
                            v-if="isVisibleToggler"
                            class="vpnp-notification-toggler"
                            @click="toggleNotification"
                        >
                            <i
                                :class="['vpnp-notification-toggler-arrow', (!isExpanded ? 'down' : 'up')]"
                            />
                        </a>
                    </div>

                    <div
                        v-if="hasContent"
                        class="vpnp-notification-content"
                    >
                        <div class="vpnp-notification-content-text">
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

                        <div
                            v-if="hasImage"
                            class="vpnp-notification-content-image"
                            :style="[ notificationImageStyle ]"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
            },

            isVisibleToggler: {
                type: Boolean,
                default: false
            }
        },

        computed: {
            sizeStyle() {
                return {
                    height: `${this.height}px`,
                    width: `${this.height * (DEVICE_SIZE.PIXEL_4_WIDTH / DEVICE_SIZE.PIXEL_4_HEIGHT)}px`
                }
            },

            hasContent() {
                return this.hasTitle || this.hasBody || this.hasImage;
            }
        }
    }
</script>
