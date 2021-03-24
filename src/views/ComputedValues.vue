<template>
    <div class="home">
        <h1>Home</h1>
        <p>Computed Property {{ nameComputed }}</p>
    </div>
    <div class="filter">
        <h2>Filter Name</h2>
        <input type="text" v-model="searchString" />
        <p>Search term - {{ searchString }}</p>
        <div v-for="namaItem in listNamaRef" :key="namaItem">
            {{ namaItem }}
        </div>
        <p>Result Search</p>
        <div v-for="name in listNamaResult" :key="name">
            {{ name }}
        </div>
    </div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
    name: 'ComputedComponent',
    setup() {
        const nameRef = ref('kucing lapar');

        const nameComputed = computed(() => {
            return 'kucing computed';
        });

        const searchString = ref('');
        const listNamaRef = ref(['kucing', 'ikan', 'ayam', 'burung', 'katak', 'sapi', 'kambing']);

        // Filter berdasarkan kata kunci pencarian
        const listNamaResult = computed(() => {
            const filteredNama = listNamaRef.value.filter((name) => {
                return name.includes(searchString.value);
            });
            return filteredNama;
        });

        return { nameComputed, nameRef, listNamaRef, searchString, listNamaResult };
    },
};
</script>

<style lang="scss"></style>
