<template>
    <div>

        <button class="btn btn-tertiary">
            {{ text }}
        </button>

    </div>
</template>

<script setup lang="ts">

defineProps({
    text: {
        type: String,
        default: 'Ingresar'
    }
})

</script>

<style scoped lang="scss">

button {
    width: 100%;
    margin: 1em 0 1em 0;
    color: white;
    border-radius: 5px;
    font-size: 20px;
    font-weight: 500;
}

</style>