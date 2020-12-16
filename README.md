# vue-push-notification-preview <a href="https://npm.im/vue-push-notification-preview"><img src="https://badgen.net/npm/v/vue-push-notification-preview"></a>

A library for previewing push notification on devices.

<a href="https://nenadjovanoski.github.io/vue-push-notification-preview/"><img src="/public/examples/main_example.png" alt="vue-push-notification-preview main example" /></a>

## 🙋‍♂️ Features
- **✅ No dependencies**
- **Android Device Preview**
- **iOS Device Preview**
- **🔥 Dark / Light mode notifications**
- **Customizable with SCSS variables**

## 🚀 Install
```sh
npm i vue-push-notification-preview
```

## 🚦 Quick Setup

### Register globally
Make it available anywhere in your Vue application.

```js
import { AndroidPreview, IphonePreview } from 'vue-push-notification-preview';
import 'vue-push-notification-preview/src/assets/devices.scss';

Vue.component('AndroidPreview', AndroidPreview);
Vue.component('IphonePreview', IphonePreview);
```

### Register locally
Explicitly register it to a component you want to use it in.

```vue
<script>
  import { AndroidPreview, IphonePreview } from 'vue-push-notification-preview';
  import 'vue-push-notification-preview/src/assets/devices.scss';

  export default {
    components: {
      AndroidPreview,
      IphonePreview
    },
    ...
};
</script>
```

## 👨🏻‍🏫 Documentation

Visit: https://nenadjovanoski.github.io/vue-push-notification-preview/

### Props

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

### Events

All custom events for `AndroidPreview` and `IphonePreview` components:

| Name                                  | Trigger   | Description                                   |
| ---                                   | ---       | ---                                           |
| toggle-notification **(Android)**     | Click     | Click on **top right arrow** of notification  |
| toggle-notification **(Iphone)**      | Click     | Click on **application icon** of notification |


### Slots

All named slots for `AndroidPreview` and `IphonePreview` components:


| Name      | Trigger   | Description                                   |
| ---       | ---       | ---                                           |
| header    | Click     | Click on **top right arrow** of notification  |


### Styling

Both `AndroidPreview` and `IphonePreview` components can be customized through SCSS variables, by importing the following files:

| Component         | File path                                                         |
| ---               | ---                                                               |
| AndroidPreview    | `vue-push-notification-preview/src/assets/devices/pixel_4.scss`   |
| IphonePreview     | `vue-push-notification-preview/src/assets/devices/iphone_x.scss`  |
