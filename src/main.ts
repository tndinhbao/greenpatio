/**
 * Types imports
 */
import { ClientApiConstructor } from './types';

import DefaultLayout from '~/layouts/Default.vue'

import BootstrapVue from 'bootstrap-vue'
import './assets/styles/main.scss'
const VueGoogleMaps = require('vue2-google-maps');

const checkIfMobile = require('./mixins/checkIfMobile')

const client: ClientApiConstructor = (Vue, { head }) => {
  Vue.use(BootstrapVue)
  Vue.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyAZoPD_FXeLWQzAFZATh-dSiiQsbnV7-T0',
      // libraries: 'places', // This is required if you use the Autocomplete plugin
      // OR: libraries: 'places,drawing'
      // OR: libraries: 'places,drawing,visualization'
      // (as you require)

      //// If you want to set the version, you can do so:
      // v: '3.26',
    },

    //// If you intend to programmatically custom event listener code
    //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
    //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
    //// you might need to turn this on.
    // autobindAllEvents: false,

    //// If you want to manually install components, e.g.
    //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
    //// Vue.component('GmapMarker', GmapMarker)
    //// then disable the following:
    // installComponents: true,
  });
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
