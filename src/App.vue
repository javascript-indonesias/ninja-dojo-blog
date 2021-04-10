<template>
    <navbar-component></navbar-component>
    <router-view />
</template>

<script>
import { defineAsyncComponent } from 'vue';

const NavBarComponent = defineAsyncComponent(() => import('./components/Navbar.vue'));

export default {
    components: {
        'navbar-component': NavBarComponent,
    },
    setup() {
        return {};
    },
};
</script>

<style lang="scss">
#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    margin: 0 auto;
    color: #2c3e50;
}
</style>
