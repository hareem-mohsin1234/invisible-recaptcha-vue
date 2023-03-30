import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueRecaptcha from "vue3-recaptcha-v2";

import './assets/main.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import { RECAPTCHA_KEY } from './utils/constants'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)

app.use(vuetify)
app.use(VueRecaptcha, {
  siteKey: RECAPTCHA_KEY,
  alterDomain: false,
})
app.use(router)

app.mount('#app')
