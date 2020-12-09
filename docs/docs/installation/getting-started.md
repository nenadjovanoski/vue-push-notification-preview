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

Vue.component('AndroidPreview', AndroidPreview);
Vue.component('IphonePreview', IphonePreview);
```

### Register locally
Explicitly register it to a component you want to use it in.

```vue
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
