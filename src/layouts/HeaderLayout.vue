<template>
    <div class="header-layout">
        <ForguiLogo class="logo"/>
        <ion-icon :icon="heart" @click="toFav"></ion-icon>
        <ion-icon :icon="notifications" @click="toNotifications"></ion-icon>
    </div>
</template>

<script setup lang="ts">

import ForguiLogo from '../components/ForguiLogo.vue'

import { IonIcon } from '@ionic/vue'

import { heart, notifications } from 'ionicons/icons'

import { toFav, toNotifications } from '../helpers/routerFunc';

</script>

<style scoped lang="scss">

.header-layout {
    width: 100%;
    height: 4em;
    margin: 0;
    padding: 0;
    border-bottom: 1px solid #afafaf;

    .logo {
        float: left;
    }

    ion-icon {
        font-size: 25px;
        padding: 20px 20px 0 20px;
        cursor: pointer;
        color: #686868;
        float: right;

        &:hover {
            color: #b02dd8;
            transition: 0.33s;
        }
    }
}

@media (prefers-color-scheme: light) {
    :root {
        .header-layout {
            box-shadow: 0px 0px 0px 1px #0000005b;
            background-color: #fff;
        }
    }
}

@media(prefers-color-scheme: dark) {
    :root {
        .header-layout {
            ion-icon {
                color: #f3f3f3;

                &:hover {
                    color: #b02dd8;
                }
            }
        }
    }
}

// @media screen and (max-width: 500px) {
//     :root {
//         .header-layout {
//             background-color: #f8f8f8;
//         }
//     }
// }

</style>