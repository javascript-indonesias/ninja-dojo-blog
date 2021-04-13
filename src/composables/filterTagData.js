// Lakukan filter data tags dan hilangkan duplikat
import { ref } from 'vue';

function filterTagData(listpost = []) {
    const listTags = ref([]);
    const tagSets = new Set();

    listpost.forEach((valuePost) => {
        valuePost.tags.forEach((valueTag) => {
            tagSets.add(valueTag);
        });
    });

    listTags.value = [...tagSets];

    return { listTags };
}

export default filterTagData;
