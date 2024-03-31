import axios from 'axios';


const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoiZ2Fib2xlYWwxMjMiLCJhIjoiY2x1ZWptY3V2MXE5MDJsbWZncGpvYmNlOSJ9.OyOg62tn2IjgqFtjPLGkhQ'
    }
});


export default searchApi;


