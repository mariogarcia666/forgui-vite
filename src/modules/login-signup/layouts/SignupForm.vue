<template>

    <div>

        <p>¡Crea tu cuenta en Forgui!</p>

        <ForguiLogo />
        
        <ion-input 
            label="Nombre completo" 
            label-placement="floating" 
            fill="outline"
            required="true"
        ></ion-input>
        
        <ion-input 
            label="Nombre de usuario" 
            label-placement="floating" 
            fill="outline"
            required="true"
        ></ion-input>
        
        <ion-input
            ref="input"
            type="email"
            label="Correo electrónico"
            label-placement="floating"
            error-text="Correo inválido"
            fill="outline"
            @ionInput="validate"
            @ionBlur="markTouched"
            required="true"
        ></ion-input>
        
        <ion-input 
            label="Contraseña" 
            type="password" 
            label-placement="floating"
            fill="outline" 
            required="true"
        ></ion-input>
        
        <ion-input 
            label="Confirmar contraseña" 
            type="password" 
            label-placement="floating"
            fill="outline"
            required="true"
        ></ion-input>
        
        <SubmitButton text="Registrarse"/>
    </div>

</template>

<script lang="ts">

import { defineComponent } from 'vue';

  export default defineComponent({
    methods: {
      validateEmail(email: String) {
        return email.match(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
      },

      validate(ev: Event) {
        const value = ev.target.value;

        this.$refs.input.$el.classList.remove('ion-valid');
        this.$refs.input.$el.classList.remove('ion-invalid');

        if (value === '') return;

        this.validateEmail(value)
          ? this.$refs.input.$el.classList.add('ion-valid')
          : this.$refs.input.$el.classList.add('ion-invalid');
      },

      markTouched() {
        this.$refs.input.$el.classList.add('ion-touched');
      },
    },
  });

</script>

<script setup lang="ts">

import SubmitButton from '../components/SubmitButton.vue';
import { IonInput } from '@ionic/vue'
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