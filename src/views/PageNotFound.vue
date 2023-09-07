<template>
    <div>
        <h1>Page Not Found :(</h1>
        <h2>
            <ion-icon :icon="heart" color="success"></ion-icon>
            404
        </h2>
    </div>
</template>

<script setup lang="ts">

// import { IonButton, IonIcon } from '@ionic/vue'
import { heart } from 'ionicons/icons'

</script>

<style scoped lang="scss">

h1, h2 {
    text-align: center;
    columns: 1;
}

</style>