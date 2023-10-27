<template>
    <ion-content>
        <h3>Edita tu usuario</h3>
        <div class="form">

            <input type="file" class="select-file">
            <ion-input label="Nombre" label-placement="floating" fill="outline"></ion-input>
            <ion-input label="Nombre de usuario" label-placement="floating" fill="outline"></ion-input>
            <ion-textarea
                label="Descripción"
                label-placement="floating"
                fill="outline"
                :counter="true"
                :maxlength="100">
            </ion-textarea>
            <ion-input label="Teléfono" label-placement="floating" fill="outline"></ion-input>
            <ion-input label="Correo electrónico" label-placement="floating" fill="outline"></ion-input>

            <div class="edit-button">
                <button class="btn btn-tertiary" @click="toProfile">Guardar cambios</button>
            </div>

        </div>

    </ion-content>
</template>

<script setup lang="ts">

import { IonContent, IonInput, IonTextarea } from '@ionic/vue';

import { toProfile } from '../helpers/functions'

</script>

<style scoped lang="scss">

h3 {
    margin-top: 1em;
    text-align: center;
}

ion-input {
    width: 100%;
    margin: 1em 0em 1em 0;
    --background: #eeeeee;
    --highlight-color-focused: #cb5cec;
    --color: #3b3b3b;
    --padding-start: 1em;
}

ion-textarea {
    width: 100%;
    height: 6em;
    margin: 1em 0em 2em 0;
    --background: #eeeeee;
    --highlight-color-focused: #cb5cec;
    --color: #3b3b3b;
    --padding-start: 1em;
}

.form {
    padding: 2em 2em 0 2em;
}

.edit-button {
    margin-top: 2em;
    text-align: center;
}

@media(prefers-color-scheme: dark) {
    :root {
        ion-input {
            --background: #242424;
            --color: #eeeeee;
        }

        ion-textarea {
            --background: #242424;
            --color: #eeeeee;
        }
    }
}
</style>