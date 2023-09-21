<template>
        <div class="form-area">
            <Navbar />
            <router-view></router-view>
        </div>
</template>

<script setup lang="ts">

import Navbar from './Navbar.vue'

</script>

<style scoped lang="scss">

.form-area {
    width: fit-content;
    padding: 0 2em 2em 2em;
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: #3c42572c 0px 7px 14px 0px, 
                #0000001f 0px 3px 6px 0px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}


// Responsive styling

@media screen and (max-width: 500px) {
    .form-area {
        background-color: #ffffff;
        box-shadow: none;
    }
}


// Reactive styling

@media(prefers-color-scheme: dark) {
    :root {
        .form-area {
            background-color: #1b1b1b;
            box-shadow: none;
        }
    }
}

</style>