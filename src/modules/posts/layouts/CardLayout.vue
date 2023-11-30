<template>
    <div class="spinner">
        <ion-spinner></ion-spinner>
    </div>
    <ion-card v-for="post in posts" :key="post._id">
        <div @click="toPostDetail(post._id)">
            <ion-card-header>
                <ion-card-title>{{ post.title }}</ion-card-title>
                <span class="subtitle"><a href="http://localhost:5173/#/home/posts">{{ post.author }} - {{ post.postDate }}</a></span>
                <br>
                <img :src="post.ImgURL" alt="">
            </ion-card-header>
            <ion-card-content>
                <p class="rude">{{ post.ubication }} - {{ post.type }}</p>
                <br>
                <p class="rude">${{ post.price }} en {{ post.status }} / {{ post.lapse }}</p>
                <br>
                <span class="description">{{ post.description.substring(0, 100) }}</span><span class="still-reading">... seguir leyendo.</span>
            </ion-card-content>
        </div>
        <ActionsButton />
    </ion-card>
</template>

<script setup lang="ts">

import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonSpinner } from '@ionic/vue'

import ActionsButton from '../components/ActionsButton.vue'

import { toPostDetail } from '../../../helpers/routerFunc'
import { spinnerOn, spinnerOff } from '../../../helpers/spinnerFunc'
import { ref, onMounted } from 'vue'
import axios from 'axios'

interface Post {
  _id: string;
  title: string;
  author: string;
  postDate: string;
  ImgURL: string;
  ubication: string;
  type: string;
  price: number;
  status: string;
  lapse: string;
  description: string;
}

const posts = ref<Post[]>([]);

onMounted(async () => {
    try {
        spinnerOn()
        const response = await axios.get('http://localhost:3000/api/Estate')
        posts.value = response.data
        console.log(posts)
        spinnerOff()
    } catch (error) {
        console.error('Error al obtener las publicaciones: ', error)
        spinnerOn()
    }
})

</script>

<style scoped lang="scss">

.spinner {
    margin-top: 2em;
    display: none;
    justify-content: center;

    ion-spinner {
        width: 2em;
        height: 2em;
        --color: purple;
    }
}

ion-card {
    margin: 1em 1.5em 2em 1.5em;
    box-shadow: 0px 1px 4px 1px #b8b8b8;

    .subtitle {
        font-style: italic;

        a {
            text-decoration: none;
            color: #a76da7;

            &:hover {
                color: #b88eb8;
            }
        }
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

@media(prefers-color-scheme: dark) {
    :root {
        ion-card {
            background-color: #2e2e2e;
            box-shadow: 0px 1px 4px 1px #858585;
            
            ion-card-title, span, p {
                color: #d3d3d3;
            }

            .description {
                color: #999999;
            }

            .still-reading {
                color: #a76da7;
            }
        }
    }
}

</style>