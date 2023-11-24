<template>
    <ion-content>
        <button class="btn btn-primary" @click="toHome">
            <ion-icon :icon="arrowBack"></ion-icon>
        </button>
        <ion-card>
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
                <span class="description">{{ post.description }}</span>
            </ion-card-content>
            <ActionsButton />
        </ion-card>
    </ion-content>
</template>

<script setup lang="ts">

import { IonContent, IonIcon, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/vue'

import { arrowBack } from 'ionicons/icons'

import ActionsButton from '../components/ActionsButton.vue'

import { toHome } from '../../../helpers/routerFunc'
import { ref, onMounted } from 'vue'
import router from '../../../router'
import axios from 'axios'

const post = ref([])

onMounted(async () => {
    const postId = router.currentRoute.value.params.id

    try {
        const response = await axios.get(`http://localhost:3000/api/Estate/${postId}`)
        post.value = response.data
    } catch (error) {
        console.error('Error al obtener el post por ID: ', error)
    }
})

</script>


<style scoped lang="scss">

.btn {
    width: 2.5em;
    height: 2em;
    margin: 1em 0 0 1em;
    font-size: 20px;
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
            box-shadow: none;
            
            ion-card-title, span, p {
                color: #d3d3d3;
            }

            .description {
                color: #999999;
            }
        }
    }
}
</style>