<template>
    <div class="home">
        <h1>Home</h1>
        <h2>Refs</h2>
        <p>Nama {{ kucingNinja.nama }} - Umur {{ kucingNinja.umur }}</p>
        <button @click="updateUmurKucing()">Update Umur Kucing</button>
    </div>
    <div>
        <h1>Reactive</h1>
        <p>Nama {{ kucingOrens.nama }} - Umur {{ kucingOrens.umur }}</p>

        <button @click="updateUmurOyen()">Update Umur Oyen</button>
    </div>
</template>

<script>
// Menggunakan Reactive Value Refs dan Reactive
// https://v3.vuejs.org/guide/reactivity-fundamentals.html#destructuring-reactive-state
import { ref, reactive, toRefs } from 'vue';

export default {
    setup() {
        const kucingNinja = ref({ nama: 'Lulu Cat', umur: 12 });
        const kucingOrens = reactive({ nama: 'Oyen', umur: 17 });

        const updateUmurKucing = () => {
            kucingNinja.value.umur += 1;
        };

        // Reactive value tidak perlu akses dengan .value
        const updateUmurOyen = () => {
            kucingOrens.umur += 1;
        };

        // Agar reactive tetap reactive dari component yang lain, dapat dikonversi ke bentuk refs
        // Dengan menggunakan toRefs
        return {
            kucingNinja,
            updateUmurKucing,
            kucingOrens,
            updateUmurOyen,
            ...toRefs(kucingOrens),
        };
    },
};
</script>

<style lang="scss"></style>
