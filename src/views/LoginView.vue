<template>
    <FormArea />
</template>

<script setup lang="ts">

import { defineAsyncComponent } from 'vue';

const FormArea = defineAsyncComponent(() => import('../modules/login-signup/layouts/FormArea.vue'))

</script>

<style scoped lang="scss">

</style>