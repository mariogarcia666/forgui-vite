<template>
    <div class="container">
        <img src="/src/assets/forgui-logo-dark.svg" alt="Forgui Logo" id="dark-image">
        <img src="/src/assets/forgui-logo-light.svg" alt="Forgui Logo" id="light-image">
    </div>
</template>

<style scoped lang="scss">

.container {
    padding: 0.5em 1em 0.5em 1em;
    width: 10rem;

    img {
        width: fit-content;
    }
}

@media(prefers-color-scheme: dark) {
    :root {
        #dark-image {
            display: none;
        }
    }
}

@media(prefers-color-scheme: light) {
    :root {
        #dark-image {
            display: inline-block;
        }

        #light-image {
            display: none;
        }
    }
}

</style>