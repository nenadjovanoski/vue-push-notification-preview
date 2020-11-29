# vue-push-notification-preview <a href="https://npm.im/vue-push-notification-preview"><img src="https://badgen.net/npm/v/vue-push-notification-preview"></a>

A library for previewing push notification on devices.

<img src="/public/examples/main_example.png" alt="vue-push-notification-preview main example" />

## 🙋‍♂️ Features
- **✅ No dependencies**
- **Android Device Preview**
- **iOS Device Preview**
- **🔥 Dark / Light mode notifications**
- **Short / Expanded size notifications**

## 🚀 Install
```sh
npm i vue-push-notification-preview
```

## 🚦 Quick Setup

#### Register globally
Make it available anywhere in your Vue application.

```js
import { AndroidPreview, IphonePreview } from 'vue-push-notification-preview';

Vue.component('AndroidPreview', AndroidPreview);
Vue.component('IphonePreview', IphonePreview);
```

#### Register locally
Explicitly register it to a component you want to use it in.

```vue
...

<script>
import { AndroidPreview, IphonePreview } from 'vue-push-notification-preview';

export default {
    components: {
        AndroidPreview,
        IphonePreview
    },

    ...
};
</script>
```

### 👨🏻‍🏫 Configuration

#### Props

All props for `AndroidPreview` and `IphonePreview` components:

| Name                      | Type      | Default               | Description |
| ---                       | ---       | ---                   | ---         |
| textApplicationName       | String    | 'App name'            |  |
| textTime                  | String    | '1h ago'              |  |
| textTitle **(Android)**   | String    | ''                    |  |
| textTitle **(Iphone)**    | String    | 'Title notification'  |  |
| textBody                  | String    | ''                    |  |
| sizeMode                  | String    | 'initial'             | `'initial'` and `expanded` are possible options |
| appearanceMode            | String    | 'light'               | `'light'` and `dark` are possible options |
| backgroundImage           | String    | ''                    | `backgroundImage` has lower priority over `backgroundColor` |
| backgroundColor           | String    | '#c1c1c1'             | `backgroundColor` has higher priority over `backgroundImage` |
