import { IphonePreview, AndroidPreview } from '../../src/components';

const components = [
    IphonePreview,
    AndroidPreview
];

const ComponentLibrary = {
    install(Vue, options = {}) {
        for (const componentName in components) {
            const component = components[componentName]

            Vue.component(component.name, component)
        }
    }
}

export default ({ Vue, options, router, siteData }) => {
    Vue.use(ComponentLibrary)
}
