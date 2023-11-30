<template>
    <ion-content>
        <h3>Edita tu usuario</h3>
        <div class="form">

            <input 
                type="file" 
                @change="handleFileChange" 
                accept="image/*" 
                class="select-file"
            >

            <ion-input v-model="name" label="Nombre" label-placement="floating" fill="outline"></ion-input>
            <ion-input v-model="username" label="Nombre de usuario" label-placement="floating" fill="outline"></ion-input>
            <ion-textarea v-model="description" label="Descripción" label-placement="floating" fill="outline" :counter="true" :maxlength="100"></ion-textarea>
            <ion-input v-model="phone" label="Teléfono" label-placement="floating" fill="outline"></ion-input>
            <ion-input v-model="email" label="Correo electrónico" label-placement="floating" fill="outline"></ion-input>

            <div class="edit-button">
                <button class="btn btn-tertiary" @click="updateUser">Guardar cambios</button>
            </div>

        </div>

    </ion-content>
</template>

<script setup lang="ts">

import { IonContent, IonInput, IonTextarea } from '@ionic/vue';

import { toLogin } from '../../../helpers/routerFunc'
import { ref } from 'vue'
import axios from 'axios'

const imageSrc = ref<string | null>(null)
const selectedFile = ref<File | null>(null)

const userId = '65597cd5ac4b8181f1959f3c'

const name = ref('')
const username = ref('')
const description = ref('')
const phone = ref('')
const email = ref('')

const handleFileChange = (event: Event) => {
  const input = event.target as HTMLInputElement;
  if (input.files && input.files.length > 0) {
    selectedFile.value = input.files[0];
    readImage();
  }
};

const readImage = () => {
  const reader = new FileReader();
  reader.onload = (event) => {
    if (event.target && typeof event.target.result === 'string') {
      imageSrc.value = event.target.result;
    }
  };
  reader.readAsDataURL(selectedFile.value as Blob);
};

const updateUser = async () => {
  if (selectedFile.value) {
    const base64Data = imageSrc.value?.split(',')[1];
    const xxx = 'data:image/jpeg;base64,'

    try {
      // Enviar datos a la API utilizando Axios
      const response = await axios.put(`http://localhost:3000/api/update/${userId}`, {
        ImgURL: `${xxx}${base64Data}`,
        name: name.value,
        username: username.value,
        description: description.value,
        phone: phone.value,
        email: email.value,
      });

      // Verificar la respuesta de la API
      if (response.status === 200) {
        console.log('Imagen subida con éxito.');
        toLogin()
      } else {
        console.error('Error al subir la imagen:', response.statusText);
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  } else {
    console.error('No se ha seleccionado ningún archivo.');
  }
};

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