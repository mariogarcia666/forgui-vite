<template>
    <ion-fab slot="fixed" vertical="bottom" horizontal="end">
        <ion-fab-button>
            <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
    </ion-fab>
</template>

<script setup lang="ts">

import { IonFab, IonFabButton } from '@ionic/vue'

import { add } from 'ionicons/icons'

</script>

<style scoped lang="scss">

ion-fab-button {
    margin-bottom: 55px;
    --background: #e17eff;
    --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15);
    --color: black;
}

</style>