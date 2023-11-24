<template>
    <!-- <PostDetail class="results-cards" /> -->
    <div>
        <ion-spinner></ion-spinner>
    </div>
</template>

<script setup lang="ts">

// import PostDetail from '../../posts/layouts/PostDetailLayout.vue'

import { IonSpinner } from '@ionic/vue'

</script>

<style scoped lang="scss">
div {
    margin-top: 2em;
    display: flex;
    justify-content: center;

    ion-spinner {
        width: 2em;
        height: 2em;
        --color: purple;
    }
}

// .results-cards {
//     display: none;
// }

</style>