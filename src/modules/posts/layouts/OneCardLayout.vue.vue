<template>
    <ion-card>
        <img src="/src/img/depa1.jpeg" alt="">
        <ion-card-header>
            <ion-card-title class="title">Hotel "El Nogal"<ion-card-subtitle class="ubication">Ver Ubicación - $1,200 por noche</ion-card-subtitle></ion-card-title>
        </ion-card-header>
        <ion-card-content>
            <span>Mario Garcia</span> - <span>14/21/2023</span>
            <p>Aute aliqua adipisicing officia in. Consectetur ut aute enim duis ea ullamco cillum aliqua deserunt cupidatat irure. Duis est exercitation reprehenderit proident et aliquip labore tempor aliqua in ipsum proident dolor.<a class="still-reading"> ...seguir leyendo.</a></p>
        </ion-card-content>
    </ion-card>
</template>

<script setup lang="ts">

import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue'

</script>


<style scoped lang="scss">

ion-card {
    margin: 1em 1.5em 0 1.5em;

    .still-reading {
        text-decoration: none;
    }
}

</style>