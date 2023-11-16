<template>
    <ion-content>
        <h3>Nueva publicación</h3>
        <div class="form">

            <input type="file" class="select-file">

            <ion-input label="Titulo" label-placement="floating" fill="outline"></ion-input>

            <ion-textarea
                label="Descripción"
                label-placement="floating"
                fill="outline"
                :counter="true"
                :maxlength="100">
            </ion-textarea>

            <ion-select aria-label="Inmueble" interface="popover" label="Tipo de inmueble" label-placement="floating" fill="outline">
                <ion-select-option value="house">Casa</ion-select-option>
                <ion-select-option value="hotel">Hotel</ion-select-option>
                <ion-select-option value="departament">Departamento</ion-select-option>
            </ion-select>

            <ion-select aria-label="Accion" interface="popover" label="¿Qué harás con el inmueble?" label-placement="floating" fill="outline">
                <ion-select-option value="sell">Vender</ion-select-option>
                <ion-select-option value="rent">Rentar</ion-select-option>
            </ion-select>

            <ion-input type="number" label="Precio" placeholder="$" label-placement="floating" fill="outline"></ion-input>

            <ion-select aria-label="Estancia" interface="popover" label="Tipo de estancia" label-placement="floating" fill="outline">
                <ion-select-option value="day">Por día</ion-select-option>
                <ion-select-option value="night">Por noche</ion-select-option>
                <ion-select-option value="week">Semanal</ion-select-option>
                <ion-select-option value="month">Mensual</ion-select-option>
                <ion-select-option value="year">Anual</ion-select-option>
                <ion-select-option value="total">Venta total</ion-select-option>
            </ion-select>

            <div class="submit-button">
                <button class="btn btn-tertiary" @click="toHome">Publicar</button>
            </div>

        </div>
    </ion-content>
</template>

<script setup lang="ts">

import { IonContent, IonInput, IonTextarea, IonSelect, IonSelectOption } from '@ionic/vue';

import { toHome } from '../../../helpers/routerFunc';

</script>

<style scoped lang="scss">

h3 {
    text-align: center;
}

.form {

    padding: 2em 2em 0 2em;

    ion-input, ion-textarea, ion-select {
        width: 100%;
        margin: 1em 0em 1em 0;
        --background: #eeeeee;
        --highlight-color-focused: #cb5cec;
        --color: #3b3b3b;
        --padding-start: 1em;
    }

    ion-select {
        width: auto;
    }

    ion-textarea {
        height: 6em;
        margin: 1em 0em 2em 0;
    }

    .submit-button {
        margin-top: 2em;
        text-align: center;
    }
}

/* Reactive styling */

@media(prefers-color-scheme: dark) {
    :root {
        ion-input, ion-select, ion-textarea, ion-select-option {
            --background: #242424;
            --color: #eeeeee;
        }
    }
}

</style>