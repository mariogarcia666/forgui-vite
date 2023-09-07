<template>
    <div class="header-layout">
        <img src="../assets/forgui-logo-dark.svg" alt="Forgui Logo" class="logo">
    </div>
</template>

<script setup lang="ts">

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
    padding-top: 0.5em;
    padding-bottom: 0.5em;
}

@media (prefers-color-scheme: light) {
    :root {
        .header-layout {
            box-shadow: 0px 0px 0px 1px #0000005b;
        }
    }
}

</style>