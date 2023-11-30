import { ref } from "vue"

const errorMessage = ref<HTMLElement | null>(null);

export const formErrorMsg = () => {
    errorMessage.value = document.querySelector('.errorMessage')
      if (errorMessage.value) {
        errorMessage.value.style.color = 'red'
        errorMessage.value.style.display = 'block'
      }
}