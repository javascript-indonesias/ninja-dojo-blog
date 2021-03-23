<template>
    <h2>Composition API</h2>
    <p ref="dataRef" id="idname">Nama kucing saya yaitu {{ name }}</p>
    <p>Usia kucing saya yaitu {{ umur }}</p>
    <button @click="handleClickMenu()">Klik Tombol Ini</button>

    <hr />
    <div>
        <p>Menggunakan Refs</p>
        <p>Nama kucing saya adalah {{ nameRef }}, umurnya {{ umurRef }}</p>
        <button @click="handleClickRef">Klik Tombol Ref</button>
    </div>

    <div>
        <input type="text" v-model="nameRef" />
        <button @click="addAge()">Tambah Umur</button>
    </div>
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

        // Menggunakan refs untuk value reactive
        const nameRef = ref('Kucing Refs');
        const umurRef = ref(25);
        const handleClickRef = () => {
            nameRef.value = 'Ikan Refs';
            umurRef.value = 21;
        };

        const addAge = () => {
            umurRef.value += 1;
        };

        // Yang dibuat di setup haru return agar dapat dipakai
        // di dalam template HTML
        return { name, umur, handleClickMenu, dataRef, nameRef, umurRef, handleClickRef, addAge };
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
