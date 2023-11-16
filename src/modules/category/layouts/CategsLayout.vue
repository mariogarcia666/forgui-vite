<template>
    <ion-item>
        <ion-icon aria-hidden="true" slot="start" :icon="home"></ion-icon>
        <ion-label>Casas</ion-label>
    </ion-item>
    <ion-item>
        <ion-icon aria-hidden="true" slot="start" :icon="home"></ion-icon>
        <ion-label>Departamentos</ion-label>
    </ion-item>
    <ion-item>
        <ion-icon aria-hidden="true" slot="start" :icon="home"></ion-icon>
        <ion-label>Hoteles</ion-label>
    </ion-item>
</template>

<script setup lang="ts">

import { IonItem, IonIcon, IonLabel } from '@ionic/vue'


import { home } from 'ionicons/icons'

</script>

<style scoped lang="scss">

</style>