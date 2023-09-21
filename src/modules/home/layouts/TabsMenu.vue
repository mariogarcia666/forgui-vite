<template>
    <div>
        <ul class="nav nav-tabs">
            <li v-for="(tab, index) in tabs" :key="index" class="nav-item">
                <a @click="activeTab = index" :class="{ 'nav-link active': activeTab === index, 'nav-link': activeTab !== index }">{{ tab.title }}</a>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">

import { ref } from 'vue'

const tabs = ref([
    { title: 'Publicación' },
    { title: 'Mapa' },
    { title: 'Perfil' },
])

const activeTab = ref(0)

</script>

<style scoped lang="scss">

.nav-item {
    background-color: #f8f8f8;
    color: black;
    cursor: pointer;
}

.nav-link {
    border-radius: 0.25rem 0.25rem 0 0;

    &.active {
        background-color: #e17eff;
        border-color: #ddd #ddd #fff #ddd;
    }
}

div ul li {
    width: 33.33%;
    text-align: center;
}

</style>