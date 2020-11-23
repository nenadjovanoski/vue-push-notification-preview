<template>
    <div id="app">
        <iphone-preview
        />

        <android-preview
        />
    </div>
</template>

<script>
    import IphonePreview from './components/IphonePreview';
    import AndroidPreview from './components/AndroidPreview';

    export default {
        components: {
            IphonePreview,
            AndroidPreview
        }
    }
</script>
