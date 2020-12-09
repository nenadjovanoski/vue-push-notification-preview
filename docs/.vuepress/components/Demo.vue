<template>
    <div>
        <component :is="component"/>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                component: null
            }
        },

        props: {
            componentName: {
                type: String,
                required: true
            }
        },

        mounted () {
            import(`../components/${this.componentName}`).then(module => {
                this.component = module.default;
            });
        }
    }
</script>
