<template>
    <ion-content>
        <div class="content">
            <div class="search-area">
                <ion-searchbar
                    show-clear-button="focus"
                    placeholder="Buscar"
                    v-model="text">
                </ion-searchbar>
                <button 
                    @click="search" 
                    class="btn btn-primary">
                    Buscar
                </button>
            </div>

            <p class="xxx">Se muestran resultados de "{{ text }}"</p>

            <ion-card v-if="results.length > 0" v-for="post in results" :key="post._id">
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
        </div>
    </ion-content>
</template>

<script setup lang="ts">

import { IonContent, IonSearchbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/vue'

import ActionsButton from '../../posts/components/ActionsButton.vue'
import { toPostDetail } from '../../../helpers/routerFunc'

import { ref } from 'vue'
import axios from 'axios'

const text = ref('')
const results = ref([])

const search = async () => {
    try {
        if (text.value.trim() !== '') {
            const response = await axios.get(`http://localhost:3000/api/search?text=${text.value}`)
            results.value = response.data
        } else {
            results.value = []
        }
    } catch (error) {
        console.error(error)
    }
}

</script>

<style scoped lang="scss">

.content {

    .search-area {
        display: flex;

        ion-searchbar {
            --border-radius: 0;
            border-top-left-radius: 10px;
            margin: 1em 0 1em 5px;
            padding: 0;
        }

        button {
            margin-top: 1em;
            height: 42px;
            margin: 1em 5px 0 0;
            border-radius: 0;
        }
    }

    .xxx {
        color: #6b6b6b;
        font-style: italic;
        margin-left: 1em;
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
}

@media(prefers-color-scheme: dark) {
    :root {

        .search-area {

            ion-searchbar {
                --background: #474747;
                --box-shadow: none;
                --color: #f3f3f3;
                --icon-color: #f3f3f3;
            }

            button {
                margin-top: 1em;
                height: 42px;
                margin: 1em 5px 0 0;
                border-radius: 0;
            }
        }

        .xxx {
            color: #999999;
        }

        ion-card {
            background-color: #2e2e2e;
            box-shadow: 0px 1px 4px 1px #858585;
            
            ion-card-title, span, p {
                color: #d3d3d3;
            }

            .rude {
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