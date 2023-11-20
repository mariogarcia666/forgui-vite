<template>
    <ion-card v-for="post in posts" :key="post">
        <ion-card-header>
            <ion-card-title>{{ post.title }}</ion-card-title>
            <span class="subtitle">{{ post.author }} - {{ post.date }}</span>
            <br>
            <img :src="post.ImgURL" alt="">
        </ion-card-header>
        <ion-card-content>
            <p class="rude">{{ post.ubication }} - {{ post.type }}</p>
            <p class="rude">${{ post.price }} en {{ post.status }} / {{ post.lapse }}</p>
            <br>
            <span class="description">{{ post.description }}</span><span class="still-reading">... seguir leyendo.</span>
        </ion-card-content>
    </ion-card>
</template>

<script setup lang="ts">

import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/vue'

import { ref, onMounted } from 'vue'
import axios from 'axios'

const posts = ref([])

onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:3000/api/Estate')
        posts.value = response.data
        console.log(posts)
    } catch (error) {
        console.error('Error al obtener las publicaciones: ', error)
    }
})

</script>

<style scoped lang="scss">

ion-card {
    margin: 1em 1.5em 0 1.5em;

    .subtitle {
        font-style: italic;
        color: #a76da7;
    }

    .still-reading {
        text-decoration: none;
        color: #800080;
    }

    .rude {
        color: #2e2e2e;
    }

    .description {
        color: #6b6b6b;
    }
}

</style>