import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import mapboxgl from 'mapbox-gl'; 
mapboxgl.accessToken = 'pk.eyJ1IjoiZ2Fib2xlYWwxMjMiLCJhIjoiY2x1ZWptY3V2MXE5MDJsbWZncGpvYmNlOSJ9.OyOg62tn2IjgqFtjPLGkhQ';

if ( !navigator.geolocation ) {
    alert('Tu navegador no soporta el GeoLocation');
    throw new Error('Tu navegador no soporta el GeoLocation');
}



createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
