<template>
    <h2>Composition API</h2>
    <p ref="dataRef" id="idname">Nama kucing saya yaitu {{ name }}</p>
    <p>Usia kucing saya yaitu {{ umur }}</p>
    <button @click="handleClickMenu()">Klik Tombol Ini</button>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        // fungsi composition api berjalan sebelum lifecycle hooks dimulai
        console.log('Setup composition api');

        const name = 'Kucing Sakti';
        const umur = '24 tahun';

        // Menggunakan nilai Ref
        // Ref bisa disambungkan ke html template
        const dataRef = ref(0);

        const handleClickMenu = () => {
            console.log('Event click composition api');
            console.log('Data ref di klik', dataRef.value.getAttribute('id'));

            dataRef.value.classList.add('tesClass');
            dataRef.value.textContent = 'Halo composition API';
        };

        console.log('Data ref baru', dataRef.value);
        // Yang dibuat di setup haru return agar dapat dipakai
        // di dalam template HTML
        return { name, umur, handleClickMenu, dataRef };
    },
    created() {
        console.log('Created hook');
    },
    mounted() {
        console.log('Mounted hook');
    },
};
</script>

<style lang="scss"></style>
