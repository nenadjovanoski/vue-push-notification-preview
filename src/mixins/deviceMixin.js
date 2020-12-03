import {
    APPEARANCE_MODE,
    APPEARANCE_MODE_CLASS,
    NOTIFICATION_SIZE_CLASS
} from '../constants/shared';

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

        appearanceModeClass() {
            switch (this.appearanceMode) {
                case APPEARANCE_MODE.LIGHT:
                    return APPEARANCE_MODE_CLASS.LIGHT;

                case APPEARANCE_MODE.DARK:
                    return APPEARANCE_MODE_CLASS.DARK;

                default:
                    throw new Error('Unrecognized appearance mode!');
            }
        },

        hasTitle() {
            return this.textTitle !== '';
        },

        hasBody() {
            return this.textBody !== '';
        },

        isExpanded() {
            return this.hasBody;
        },

        notificationExpandedClass() {
            return !this.isExpanded ? NOTIFICATION_SIZE_CLASS.INITIAL : NOTIFICATION_SIZE_CLASS.EXPANDED
        },
    },

    methods: {
        toggleNotification() {
            this.$emit('toggle-notification');
        }
    }
};
