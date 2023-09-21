<template>
    <div class="header-layout">
        <ForguiLogo />
    </div>
</template>

<script setup lang="ts">

import ForguiLogo from '../components/ForguiLogo.vue'

</script>

<style scoped lang="scss">

.header-layout {
    width: 100%;
    height: 4em;
    margin: 0;
    padding: 0;
    box-shadow: 0px 0px 0px 1px #ffffff5b;
    display: flex;
    justify-content: center;
}

@media (prefers-color-scheme: light) {
    :root {
        .header-layout {
            box-shadow: 0px 0px 0px 1px #0000005b;
            background-color: #fff;
        }
    }
}

</style>