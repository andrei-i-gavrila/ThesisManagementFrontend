import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import '@fortawesome/fontawesome-free/css/all.min.css'

Vue.use(Vuetify, {
  theme: {
    primary: '#9c27b0',
    secondary: '#009688',
    accent: '#ff5722',
    error: '#f44336',
    warning: '#ffc107',
    info: '#03a9f4',
    success: '#8bc34a'
  },
  icons: {
    iconfont: 'fa'
  }
})
