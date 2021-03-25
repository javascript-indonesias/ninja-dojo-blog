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
        <button @click="handleClickStopWatch()">Stop Watching</button>
    </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue';

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

        // Menggunakan Watch watcher
        const stopWatch = watch(searchString, (newVal, oldVal) => {
            console.log('new value', newVal, 'old value', oldVal);
        });

        // Berjalan pertama kali saat component di mount
        const stopWatchEffect = watchEffect(() => {
            // otomatis memantau value refs yang ada di dalam fungsi callback watchEffect
            console.log('fungsi watch effect jalan', searchString.value);
        });

        const handleClickStopWatch = () => {
            stopWatch();
            stopWatchEffect();
        };

        return {
            nameComputed,
            nameRef,
            listNamaRef,
            searchString,
            listNamaResult,
            handleClickStopWatch,
        };
    },
};
</script>

<style lang="scss"></style>
