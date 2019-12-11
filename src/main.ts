/**
 * Types imports
 */
import { ClientApiConstructor } from './types';

import DefaultLayout from '~/layouts/Default.vue'

import BootstrapVue from 'bootstrap-vue'
import './assets/styles/main.scss'
const VueGoogleMaps = require('vue2-google-maps');

const checkIfMobile = require('./mixins/checkIfMobile');

const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyBpz_b7hVwpDyNdnXRq2FPWQUHmn77lMjs",
  authDomain: "quang-dung-furniture.firebaseapp.com",
  databaseURL: "https://quang-dung-furniture.firebaseio.com",
  projectId: "quang-dung-furniture",
  storageBucket: "quang-dung-furniture.appspot.com",
  messagingSenderId: "739393949560",
  appId: "1:739393949560:web:c8ff1542e6416c2113028d",
  measurementId: "G-ZNQ54WWRK8"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const client: ClientApiConstructor = (Vue, { head }) => {
  Vue.use(BootstrapVue)
  Vue.use(VueGoogleMaps, {
    load: {
      key: process.env.GRIDSOME_GG_API_KEY,
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
