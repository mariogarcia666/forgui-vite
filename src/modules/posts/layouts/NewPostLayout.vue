<template>
    <ion-content>
        <h3>Nueva publicación</h3>
        <div class="form">

            <input 
                type="file" 
                @change="handleFileChange" 
                accept="image/*" 
                class="select-file"
            >

            <ion-input 
                label="Titulo" 
                label-placement="floating" 
                fill="outline"
                v-model="title">
            </ion-input>

            <ion-textarea
                label="Descripción"
                label-placement="floating"
                fill="outline"
                :counter="true"
                :maxlength="250"
                v-model="description">
            </ion-textarea>

            <ion-input
                label="Dirección" 
                label-placement="floating" 
                fill="outline"
                placeholder="Ejemplo: Calle las Animas 120, Calvillo, Ags"
                v-model="ubication"
            >
            </ion-input>

            <ion-select aria-label="Inmueble" interface="popover" label="Tipo de inmueble" label-placement="floating" fill="outline" v-model="type">
                <ion-select-option value="Casa">Casa</ion-select-option>
                <ion-select-option value="Hotel">Hotel</ion-select-option>
                <ion-select-option value="Departamento">Departamento</ion-select-option>
                <ion-select-option value="Local de trabajo">Local de trabajo</ion-select-option>
                <ion-select-option value="Oficina">Oficina</ion-select-option>
                <ion-select-option value="Salón">Salón</ion-select-option>
                <ion-select-option value="Cabaña">Cabaña</ion-select-option>
                <ion-select-option value="Gimnasio">Gimnasio</ion-select-option>
                <ion-select-option value="Cancha deportiva">Cancha deportiva</ion-select-option>
            </ion-select>

            <ion-select aria-label="Accion" interface="popover" label="¿Qué harás con el inmueble?" label-placement="floating" fill="outline" v-model="status">
                <ion-select-option value="venta">Vender</ion-select-option>
                <ion-select-option value="renta">Rentar</ion-select-option>
            </ion-select>

            <ion-input type="number" label="Precio" placeholder="$" label-placement="floating" fill="outline" v-model="price"></ion-input>

            <ion-select aria-label="Estancia" interface="popover" label="Tipo de estancia" label-placement="floating" fill="outline" v-model="lapse">
                <ion-select-option value="Por día">Por día</ion-select-option>
                <ion-select-option value="Por noche">Por noche</ion-select-option>
                <ion-select-option value="Semanal">Semanal</ion-select-option>
                <ion-select-option value="Mensual">Mensual</ion-select-option>
                <ion-select-option value="Anual">Anual</ion-select-option>
                <ion-select-option value="Venta total">Venta total</ion-select-option>
            </ion-select>

            <div class="submit-button">
                <button type="submit" class="btn btn-tertiary" @click="uploadImage">Publicar</button>
            </div>

        </div>
    </ion-content>
</template>

<script setup lang="ts">

import { IonContent, IonInput, IonTextarea, IonSelect, IonSelectOption } from '@ionic/vue'

import { toHome } from '../../../helpers/routerFunc'

import { ref } from 'vue'
import axios from 'axios'

const imageSrc = ref<string | null>(null)

const selectedFile = ref<File | null>(null)
const title = ref('')
const description = ref('')
const ubication = ref('')
const price = ref('')
const status = ref('')
const type = ref('')
const lapse = ref('')

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

const uploadImage = async () => {
  if (selectedFile.value) {
    const base64Data = imageSrc.value?.split(',')[1];
    const xxx = 'data:image/jpeg;base64,'
    const postDate = new Date()

    try {
      // Enviar datos a la API utilizando Axios
      const response = await axios.post('http://localhost:3000/api/Estate', {
        ImgURL: `${xxx}${base64Data}`,
        title: title.value,
        type: type.value,
        status: status.value,
        description: description.value,
        ubication: ubication.value,
        price: price.value,
        lapse: lapse.value,
        postDate: postDate.toLocaleString()
      });

      // Verificar la respuesta de la API
      if (response.status === 200) {
        console.log('Imagen subida con éxito.');
        toHome()
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