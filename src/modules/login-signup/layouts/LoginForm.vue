<template>
    
    <div>

        <p>¡Inicia sesión en tu cuenta!</p>

        <ForguiLogo />

        <ion-input 
            label="Nombre de usuario" 
            label-placement="floating" 
            fill="outline"
            required="true"
        ></ion-input>

        <ion-input 
            label="Contraseña"
            type="password" 
            label-placement="floating"
            fill="outline"
            required="true"
        ></ion-input>

        <SubmitButton 
            text="Ingresar"
            @click="toHome"
        />

        <p>¿Olvidaste tu contraseña?
            <a href="/">Haz click aquí...</a>
        </p>

    </div>

</template>

<script setup lang="ts">

import SubmitButton from '../components/SubmitButton.vue';
import { IonInput } from '@ionic/vue'
import { toHome } from '../helpers/functions';
import ForguiLogo from '../../../components/ForguiLogo.vue';

</script>

<style scoped lang="scss">

p {
    text-align: center;
    font-size: 17.5px;
    margin: 1em 0 1.5em 0;
    font-style: italic;
}

ion-input {
    width: 20em;
    margin: 1em 0em 1em 0;
    --background: #eeeeee;
    --highlight-color-focused: #cb5cec;
    --color: #3b3b3b;
    --padding-start: 1em;
}

a {
    text-decoration: none;
    color: #cb5cec;
}


// Responsive styling

@media screen and (min-width: 1200px){
    ion-input {
        width: 27.5em;
    }
}

// Reactive styling

@media(prefers-color-scheme: dark) {
    :root {

        p {
            color: #c0c0c0;
        }

        ion-input {
            --background: #303030;
            --color: #c0c0c0;
            --highlight-color-focused: #e17eff;
        }
    }
}

</style>