<template>
    <ion-content>
        <div class="content">
            <ion-searchbar
                show-clear-button="focus"
                placeholder="Buscar"
            ></ion-searchbar>
            <div class="categories">
                <CategsLayout />
            </div>
            <div class="results">
                <ResultsLayout />
            </div>
        </div>
    </ion-content>
</template>

<script setup lang="ts">

import { IonContent, IonSearchbar } from '@ionic/vue'

import CategsLayout from './CategsLayout.vue';
import ResultsLayout from './ResultsLayout.vue';

</script>

<style scoped lang="scss">

.categories {

    width: 360px;
    padding: 1em;

    .cate {
        width: 100%;
        height: 100px;
        margin-bottom: 1em;
        box-shadow: 0 3px 5px 0 #b8b8b8;
        border-radius: 2px; 
    }
}

</style>