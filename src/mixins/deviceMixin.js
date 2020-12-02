import { APPEARANCE_MODE, SIZE } from '../constants/shared';

export const deviceMixin = {
    props: {
        backgroundImage: {
            type: String,
            default: ''
        },

        backgroundColor: {
            type: String,
            default: '#c1c1c1'
        },

        size: {
            type: String,
            default: SIZE.INITIAL,
            validator: value => Object.values(SIZE).indexOf(value) !== -1
        },

        appearanceMode: {
            type: String,
            default: APPEARANCE_MODE.LIGHT,
            validator: value => Object.values(APPEARANCE_MODE).indexOf(value) !== -1
        }
    },

    computed: {
        backgroundStyle() {
            if (this.backgroundImage !== '') {
                return {
                    'background-image': `url(${this.backgroundImage})`
                }
            }

            if (this.backgroundColor !== '') {
                return {
                    'background-color': this.backgroundColor
                }
            }
        },

        appearanceModeFormat() {
            switch (this.appearanceMode) {
                case APPEARANCE_MODE.LIGHT:
                    return 'vpnp-notification-light-mode';

                case APPEARANCE_MODE.DARK:
                    return 'vpnp-notification-dark-mode';

                default:
                    throw new Error('Unrecognized appearance mode!');
            }
        },

        sizeFormat() {
            switch (this.size) {
                case SIZE.INITIAL:
                    return 'vpnp-notification-initial-size';

                case SIZE.EXPANDED:
                    return 'vpnp-notification-expanded-size';

                default:
                    throw new Error('Unrecognized size!');
            }
        },

        hasTitle() {
            return this.textTitle !== '';
        },

        hasBody() {
            return this.textBody !== '';
        }
    }
};
