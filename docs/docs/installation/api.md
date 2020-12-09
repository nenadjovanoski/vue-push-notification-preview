# 👨🏻‍🏫 API

## Props

All props for `AndroidPreview` and `IphonePreview` components:

| Name                      | Type      | Default                       | Description |
| ---                       | ---       | ---                           | ---         |
| textApplicationName       | String    | 'App name'                    |  |
| textTime                  | String    | '1h ago'                      |  |
| textTitle **(Android)**   | String    | ''                            |  |
| textTitle **(Iphone)**    | String    | 'Title notification'          |  |
| textBody                  | String    | ''                            |  |
| appearanceMode            | String    | 'light'                       | `'light'` and `dark` are possible options. |
| backgroundImage           | String    | ''                            | `backgroundImage` has lower priority over `backgroundColor`. |
| backgroundColor           | String    | '#c1c1c1'                     | `backgroundColor` has higher priority over `backgroundImage`. |
| height **(Android)**      | Number    | 644 and above (Recommended)   | Device `height` in pixels. The width gets calculated to keep device's ratio. |
| height **(Iphone)**       | Number    | 614 and above (Recommended)   | Device `height` in pixels. The width gets calculated to keep device's ratio. |


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
