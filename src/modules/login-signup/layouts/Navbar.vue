<template>
    <ion-grid>
        <ion-row>
            <ion-col v-for="(tab, index) in tabs" :key="index" class="nav-item">
                <a 
                    v-if="tab.title === 'Ingresar'" 
                    @click="toLogin(); activeTab = index" 
                    :class="{ 'nav-link active': activeTab === index, 'nav-link': activeTab !== index }">
                        {{ tab.title }}
                </a>
                <a 
                    v-else="tab.title === 'Registrarse'" 
                    @click="toSignup(); activeTab = index" 
                    :class="{ 'nav-link active': activeTab === index, 'nav-link': activeTab !== index }">
                        {{ tab.title }}
                </a>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>

<script  setup lang="ts">

import { IonGrid, IonRow, IonCol } from '@ionic/vue'
import { toLogin, toSignup } from '../helpers/functions';

import { ref } from 'vue'

const tabs = ref([
    { title: 'Ingresar' },
    { title: 'Registrarse' },
])

const activeTab = ref(0)

</script>

<style scoped lang="scss">

.nav-item {
    font-size: 25px;
    font-weight: 500;
    text-align: center;
    cursor: pointer;
    border-bottom: #d6d6d6 solid 1px;
    padding-bottom: 0.5em;

    &:hover {
        color: #e17eff;
        transition: 0.3s;
    }
}

.nav-link {
    border-radius: 0.25rem 0.25rem 0 0;

    &.active {
        color: #b02dd8;
    }
}

@media(prefers-color-scheme: dark) {
    :root {
        ion-col {
            color: #d6d6d6;

            &:hover {
                color: #e17eff;
                transition: 0.3s;
            }
        }
    }
}

</style>