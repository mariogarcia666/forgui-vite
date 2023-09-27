<template>
    <div>
        <ul class="nav nav-tabs">
            <li v-for="(tab, index) in tabs" :key="index" class="nav-item">
                <a
                    @click="navigateToTab(index)"
                    :class="{ 'nav-link active': activeTab === index, 'nav-link': activeTab !== index }">
                        <ion-icon :icon="tab.icon"></ion-icon>
                        
                </a>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">

import { home, map, search, person } from 'ionicons/icons'


import { ref } from 'vue'
import router from '../../../router/index';

const tabs = ref([
    { title: 'post', icon: home },
    { title: 'map', icon: map },
    { title: 'category', icon: search },
    { title: 'profile', icon: person, },
])

const activeTab = ref(0)

const navigateToTab = (index: number) => {
    activeTab.value = index
    switch (index) {
        case 0:
            router.push('/home/posts')
            break
        case 1:
            router.push('/home/map')
            break
        case 2:
            router.push('/home/category')
            break
        case 3:
            router.push('/home/profile')
            break
    }
}

</script>

<style scoped lang="scss">

.nav-item {
    background-color: #fff;
    cursor: pointer;
    width: 25%;
    text-align: center;
    font-size: 25px;
    border-top: 1px solid #afafaf;
}

.nav-link {
    color: #1b1b1b;

    &.active {
        background-color: #f8e1ff;
        color: #b02dd8;
    }
}

@media(prefers-color-scheme: dark) {
    :root {
        .nav-item {
            background-color: #1b1b1b;
        }

        .nav-link {
            color: #f3f3f3;

            &.active {
                background-color: #111111;
                color: #b02dd8;
            }
        } 
    }
}

</style>