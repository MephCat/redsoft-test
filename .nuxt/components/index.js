export { default as ArtItem } from '../..\\components\\ArtItem.vue'
export { default as Footer } from '../..\\components\\Footer.vue'
export { default as Header } from '../..\\components\\Header.vue'
export { default as Logo } from '../..\\components\\Logo.vue'
export { default as MinLoader } from '../..\\components\\MinLoader.vue'
export { default as Navigation } from '../..\\components\\Navigation.vue'

export const LazyArtItem = import('../..\\components\\ArtItem.vue' /* webpackChunkName: "components_ArtItem" */).then(c => c.default || c)
export const LazyFooter = import('../..\\components\\Footer.vue' /* webpackChunkName: "components_Footer" */).then(c => c.default || c)
export const LazyHeader = import('../..\\components\\Header.vue' /* webpackChunkName: "components_Header" */).then(c => c.default || c)
export const LazyLogo = import('../..\\components\\Logo.vue' /* webpackChunkName: "components_Logo" */).then(c => c.default || c)
export const LazyMinLoader = import('../..\\components\\MinLoader.vue' /* webpackChunkName: "components_MinLoader" */).then(c => c.default || c)
export const LazyNavigation = import('../..\\components\\Navigation.vue' /* webpackChunkName: "components_Navigation" */).then(c => c.default || c)
