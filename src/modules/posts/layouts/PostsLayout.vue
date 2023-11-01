<template>
    <ion-content>
        <h3>Publicaciones recientes</h3>
        <div class="container">
            <CardLayout />
        </div>
        <FabButton />
    </ion-content>
</template>

<script setup lang="ts">

import FabButton from '../../../components/FabButton.vue';
import CardLayout from './CardLayout.vue'

import { IonContent } from '@ionic/vue'

</script>

<style scoped lang="scss">

h3 {
    text-align: center;
}

</style>