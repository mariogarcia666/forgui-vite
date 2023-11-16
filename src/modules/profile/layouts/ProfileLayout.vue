<template>
        <ion-content>
            <div class="content">
                <div>
                    <div id="photo-area">
                        <div id="photo">
                            <img src="/src/img/foto-perfil.jpg" alt="">
                        </div>
                    </div>
                    <h4>Mario Alberto García</h4>
                    <p>Ut irure minim velit aliqua veniam deserunt anim velit tempor dolore enim pariatur.</p>

                </div>
                <div class="details">
                    <h6>Detalles</h6>
                    <ion-list lines="none">
                        <ion-item>
                            <ion-icon :icon="home"></ion-icon>
                            <ion-label>Calvillo, Ags.</ion-label>
                        </ion-item>
                        <ion-item>
                            <ion-icon :icon="call"></ion-icon>
                            <ion-label>+52 4951333768</ion-label>
                        </ion-item>
                        <ion-item>
                            <ion-icon :icon="mail"></ion-icon>
                            <ion-label>garciasernamarioalberto@gmail.com</ion-label>
                        </ion-item>
                    </ion-list>
                    <button 
                        @click="toEdit" 
                        class="btn btn-tertiary">
                        Editar perfil
                    </button>
                </div>
                <div>
                    <button 
                        @click="toLogin"
                        class="btn btn-danger">
                        Cerrar sesión
                    </button>
                </div>
            </div>
        </ion-content>
</template>

<script setup lang="ts">

import { IonContent, IonList, IonItem, IonLabel }  from '@ionic/vue'

import { home, call, mail } from 'ionicons/icons'

import { toEdit, toLogin } from '../../../helpers/routerFunc'

</script>

<style scoped lang="scss">

.content {
    text-align: center;

    h4 {
        font-weight: 600;
    }

    img {
        margin-top: 1em;
        width: 100px;
    }

    p {
        text-align: justify;
        padding: 0 20px 0 20px;
    }

    #elem {
        width: 15rem;
        height: 15rem;
    }

    #photo-area img {
        border-radius: 50%;
        width: 9rem;
        height: 9rem;
        margin: auto;
        margin-top: 1em;
        border: 3px solid #fff;
    }

    .details {
        border-top: 1px solid #cfcfcf;
        margin-top: 20px;
        background-color: #242424;
        
        h6 {
            text-align: left;
            margin-left: 20px;
            font-weight: 700;
        }

        ion-list {
            padding: 0;

            ion-icon {
                color: #686868;
            }

            ion-label {
                margin-left: 10px;
            }
        }

        button {
            margin: 2em 10px 2em 10px;
        }
    }
}

@media(prefers-color-scheme: light) {
    :root {

        .content {

            #photo-area img {
                border: 3px solid #242424;
            }

            .details {
                background-color: #fff;
            }

        }
    }
}

</style>