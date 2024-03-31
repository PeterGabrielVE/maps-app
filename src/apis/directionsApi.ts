import axios from 'axios';


const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoiZ2Fib2xlYWwxMjMiLCJhIjoiY2x1ZWptY3V2MXE5MDJsbWZncGpvYmNlOSJ9.OyOg62tn2IjgqFtjPLGkhQ'
    }
});


export default directionsApi;


