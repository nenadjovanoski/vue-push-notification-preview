import { APPEARANCE_MODE, SIZE_MODE } from '../constants/shared';

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
                    return 'vpnp-light-mode';

                case APPEARANCE_MODE.DARK:
                    return 'vpnp-dark-mode';

                default:
                    throw new Error('Unrecognized appearance mode!');
            }
        },

        sizeModeFormat() {
            switch (this.sizeMode) {
                case SIZE_MODE.INITIAL:
                    return 'vpnp-initial-mode';

                case SIZE_MODE.EXPANDED:
                    return 'vpnp-expanded-mode';

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
};
