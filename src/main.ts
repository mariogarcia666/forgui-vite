import { createApp } from 'vue'
import { IonicVue } from '@ionic/vue'
import App from './App.vue'
import router from './router'

// Basic styles configuration
import './styles/style.css'
import './styles/style.scss'

// IMPORTS OF THE IONIC-VUE UTILITIES
import '@ionic/vue/css/core.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';
/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

if ( !navigator.geolocation ) {
    throw new Error("No jala we")
}


// MOUNTING THE APP
createApp(App)
    .use(IonicVue)
    .use(router)
    .mount('#app')