# 🚀 Getting started

## Install
```sh
npm i vue-push-notification-preview
```

## Quick Setup

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

### Styling

Both `AndroidPreview` and `IphonePreview` components can be customized through SCSS variables, by importing the following files:

| Component         | File path                                                         |
| ---               | ---                                                               |
| AndroidPreview    | `vue-push-notification-preview/src/assets/devices/pixel_4.scss`   |
| IphonePreview     | `vue-push-notification-preview/src/assets/devices/iphone_x.scss`  |
