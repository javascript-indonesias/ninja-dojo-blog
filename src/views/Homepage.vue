<template>
    <h2>Composition API</h2>
    <p>Nama kucing saya yaitu {{ name }}</p>
    <p>Usia kucing saya yaitu {{ umur }}</p>
    <button @click="handleClickMenu()">Klik Tombol Ini</button>
</template>

<script>
export default {
    setup() {
        // fungsi composition api berjalan sebelum lifecycle hooks dimulai
        console.log('Setup composition api');

        const name = 'Kucing Sakti';
        const umur = '24 tahun';

        const handleClickMenu = () => {
            console.log('Event click composition api');
        };

        // Yang dibuat di setup haru return agar dapat dipakai
        // di dalam template HTML
        return { name, umur, handleClickMenu };
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
