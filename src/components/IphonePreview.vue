<template>
    <div
        :class="['vpnp-wrapper-iphone_x']"
        :style="[backgroundStyle, sizeStyle]"
    >
        <div class="vpnp-iphone_x">
            <div class="vpnp-content">
                <div
                    class="vpnp-header"
                >
                    <slot name="header"></slot>
                </div>

                <div
                    :class="['vpnp-notification', appearanceModeClass, notificationExpandedClass]"
                >
                    <div class="vpnp-notification-heading">
                        <div class="vpnp-notification-heading-icon-name-container">
                            <p
                                class="vpnp-notification-application-icon"
                                @click="toggleNotification"
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

<script setup>
    import { APPEARANCE_MODE, DEVICE_SIZE } from '../constants/shared';
    import { useDevice } from './use-device';
    import { computed, toRef } from 'vue';

    const props = defineProps({
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

        height: {
            type: Number,
            default: DEVICE_SIZE.IPHONE_X_HEIGHT
        },

        image: {
            type: String,
            default: ''
        },

        backgroundImage: {
            type: String,
            default: ''
        },

        backgroundColor: {
            type: String,
            default: '#c1c1c1'
        },

        appearanceMode: {
            type: String,
            default: APPEARANCE_MODE.LIGHT,
            validator: value => Object.values(APPEARANCE_MODE).indexOf(value) !== -1
        },
    });

    const {
        notificationImageStyle,
        backgroundStyle,
        appearanceModeClass,
        hasTitle,
        hasBody,
        hasImage,
        isExpanded,
        notificationExpandedClass,
    } = useDevice({
        image: toRef(props, 'image'),
        backgroundImage: toRef(props, 'backgroundImage'),
        backgroundColor: toRef(props, 'backgroundColor'),
        appearanceMode: toRef(props, 'appearanceMode'),
        textTitle: toRef(props, 'textTitle'),
        textBody: toRef(props, 'textBody')
    });

    const sizeStyle = computed(() => {
        return {
            height: `${props.height}px`,
            width: `${props.height * (DEVICE_SIZE.IPHONE_X_WIDTH / DEVICE_SIZE.IPHONE_X_HEIGHT)}px`
        };
    });
</script>
