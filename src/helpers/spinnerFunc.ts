import { ref } from "vue"

const spinner = ref(null)

export const spinnerOn = () => {
    spinner.value = document.querySelector('.spinner')
    if (spinner.value) {
        spinner.value.style.display = 'flex'
        spinner.value.style.justifyContent = 'center'
    }
}

export const spinnerOff = () => {
    spinner.value = document.querySelector('.spinner')
        if (spinner.value) {
            spinner.value.style.display = 'none'
        }
}