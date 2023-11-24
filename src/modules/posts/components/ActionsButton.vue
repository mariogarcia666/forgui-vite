<template>
    <!-- TODO: 
        Que al presionar el botón favoritos, se agregue el ID del post
        en una lista, posiblemente en una colección aparte o en la misma del usuario
        pero que vaya guardando los IDS, you know?

        Y que al presionar el de contactar, te mande a la vista el perfil del usuario,
        pero para eso se necesita el token, supongo.
    -->
    <div class="actions">
        <span class="btn save-btn">
            <ion-icon :icon="heart"></ion-icon>
            <p>Favoritos</p>
        </span>
        <span class="btn contact-btn">
            <ion-icon :icon="call"></ion-icon>
            <p>Contactar</p>
        </span>
    </div>
</template>

<script setup lang="ts">

import { IonIcon } from '@ionic/vue'

import { heart, call } from 'ionicons/icons'

</script>

<style scoped lang="scss">
.actions {
    background-color: #dddddd;
    height: 4em;
    display: flex;
    justify-content: space-around;

    .btn {
        width: 100%;
        border-radius: 0;

        &:hover {
            background-color: #a76da7;
            color: #fff;
        }
    }

    p {
        font-size: 1em;
    }
}

@media(prefers-color-scheme: dark) {
    :root {
        .actions {
            background-color: #575757;

            ion-icon {
                color: #dddddd;
            }
            
            p {
                color: #dddddd;
            }
        }
    }
}
</style>