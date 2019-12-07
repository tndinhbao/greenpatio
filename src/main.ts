/**
 * Types imports
 */
import { ClientApiConstructor } from './types';

import DefaultLayout from '~/layouts/Default.vue'

import BootstrapVue from 'bootstrap-vue'
import './assets/styles/main.scss'

const checkIfMobile = require('./mixins/checkIfMobile')

const client: ClientApiConstructor = (Vue, { head }) => {
  Vue.use(BootstrapVue)
  Vue.component('Layout', DefaultLayout)
  Vue.mixin(checkIfMobile)
  if (!head.link) {
    head.link = [];
  }

  head.link.push({
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css?family=Playfair+Display:400,700&display=swap"
  })
}

export default client;
