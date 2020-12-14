# 👨🏻‍🏫 API

## Props

All props for `AndroidPreview` component:

| Name                      | Type      | Default                       | Description |
| ---                       | ---       | ---                           | ---         |
| textApplicationName       | String    | 'App name'                    |  |
| textTime                  | String    | '1h ago'                      |  |
| textTitle                 | String    | ''                            |  |
| textBody                  | String    | ''                            |  |
| image                     | String    | ''                            | URL for adding image to notification |
| appearanceMode            | String    | 'light'                       | `'light'` and `dark` are possible options. |
| backgroundImage           | String    | ''                            | `backgroundImage` has lower priority over `backgroundColor`. |
| backgroundColor           | String    | '#c1c1c1'                     | `backgroundColor` has higher priority over `backgroundImage`. |
| height                    | Number    | 644 and above (Recommended)   | Device `height` in pixels. The width gets calculated to keep device's ratio. |
| isVisibleToggler          | Boolean   | false                         | A prop for managing when arrow toggler is visible in notification. |

<br />

All props for `IphonePreview` component:

| Name                      | Type      | Default                       | Description |
| ---                       | ---       | ---                           | ---         |
| textApplicationName       | String    | 'App name'                    |  |
| textTime                  | String    | '1h ago'                      |  |
| textTitle                 | String    | 'Title notification'          |  |
| textBody                  | String    | ''                            |  |
| image                     | String    | ''                            | URL for adding image to notification |
| appearanceMode            | String    | 'light'                       | `'light'` and `dark` are possible options. |
| backgroundImage           | String    | ''                            | `backgroundImage` has lower priority over `backgroundColor`. |
| backgroundColor           | String    | '#c1c1c1'                     | `backgroundColor` has higher priority over `backgroundImage`. |
| height                    | Number    | 614 and above (Recommended)   | Device `height` in pixels. The width gets calculated to keep device's ratio. |


## Events

All custom events for `AndroidPreview` and `IphonePreview` components:

| Name                                  | Trigger   | Description                                   |
| ---                                   | ---       | ---                                           |
| toggle-notification **(Android)**     | Click     | Click on **top right arrow** of notification  |
| toggle-notification **(Iphone)**      | Click     | Click on **application icon** of notification |


## Slots

All named slots for `AndroidPreview` and `IphonePreview` components:


| Name      | Trigger   | Description                                   |
| ---       | ---       | ---                                           |
| header    | Click     | Click on **top right arrow** of notification  |
