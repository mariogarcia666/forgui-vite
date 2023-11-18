<template>
    
    <div>

        <p>¡Inicia sesión en tu cuenta!</p>

        <ForguiLogo />

        <form class="login-area" @submit.prevent="Login">
            <ion-input 
                label="Nombre de usuario" 
                label-placement="floating" 
                fill="outline"
                v-model="username"
            ></ion-input>

            <ion-input 
                label="Contraseña"
                type="password" 
                label-placement="floating"
                fill="outline"
                v-model="passw"

            ></ion-input>

            <!-- <SubmitButton 
                text="Ingresar"
                @click="toHome"
            /> -->

            <button class="btn btn-primary" type="submit">Ingresar</button>

        <p>¿Olvidaste tu contraseña?
            <a href="/">Haz click aquí...</a>
        </p>
    </form>
    </div>

</template>

<script setup lang="ts">

import { IonInput } from '@ionic/vue'
import ForguiLogo from '../../../components/ForguiLogo.vue';
import { ref } from 'vue'
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter()

const username = ref('')
const passw = ref('')

const Login = async () => {
  try {
      const user = await axios.post('http://localhost:3000/api/login', {
        username: username.value,
        passw: passw.value
      })
      router.push('/home/posts')

      console.log(user.data)
    } catch (error) {
      console.error( error)
    }
}


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