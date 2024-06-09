import { APPEARANCE_MODE, APPEARANCE_MODE_CLASS, NOTIFICATION_SIZE_CLASS } from '../constants/shared';
import { computed } from 'vue';

export const useDevice = ({ image, backgroundImage, backgroundColor, appearanceMode, textTitle, textBody }) => {

    const notificationImageStyle = computed(() => {
        if (image.value !== '') {
            return {
                'background-image': `url(${image.value})`
            }
        }

        return {};
    });

    const backgroundStyle = computed(() => {
        if (backgroundImage.value !== '') {
            return {
                'background-image': `url(${backgroundImage.value})`
            }
        }

        if (backgroundColor.value !== '') {
            return {
                'background-color': backgroundColor.value
            }
        }

        return {};
    });

    const appearanceModeClass = computed(() => {
        switch (appearanceMode.value) {
            case APPEARANCE_MODE.LIGHT:
                return APPEARANCE_MODE_CLASS.LIGHT;

            case APPEARANCE_MODE.DARK:
                return APPEARANCE_MODE_CLASS.DARK;

            default:
                throw new Error('Unrecognized appearance mode!');
        }
    });

    const hasTitle = computed(() => textTitle.value !== '');

    const hasBody = computed(() => textBody.value !== '');

    const hasImage = computed(() => image.value !== '');

    const isExpanded = computed(() => hasBody.value);

    const notificationExpandedClass = computed(() => !isExpanded.value
        ? NOTIFICATION_SIZE_CLASS.INITIAL
        : NOTIFICATION_SIZE_CLASS.EXPANDED
    );

    return {
        notificationImageStyle,
        backgroundStyle,
        appearanceModeClass,
        hasTitle,
        hasBody,
        hasImage,
        isExpanded,
        notificationExpandedClass,
    };
}
