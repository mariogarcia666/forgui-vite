<template>
    <HeaderLayout/>
    <h1>Home</h1>
    <router-view></router-view>
    <tabs class="fixed-bottom">
        <div v-if="activeTab === 0"></div>
        <div v-if="activeTab === 1"></div>
        <div v-if="activeTab === 2"></div>
    </tabs>
</template>

<script setup lang="ts">

import HeaderLayout from '../layouts/HeaderLayout.vue'
import tabs from '../modules/home/layouts/TabsMenu.vue'
import { ref } from 'vue';

const activeTab = ref(0)

</script>

<style scoped lang="scss">

h1 {
    text-align: center;
}

.fixed-bottom {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff; /* Puedes ajustar el color de fondo según tus preferencias */
  z-index: 999; /* Opcional: controla la superposición si tienes otros elementos fijos */
}

</style>