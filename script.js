//my map box access token
mapboxgl.accessToken = 'pk.eyJ1IjoicHVycG9zZWZ1bCIsImEiOiJjbGZiYm1uMDIwYnJuM3BtdmlpM3BqejU0In0.hguo3vS7LTpg-Zwj3k4AgQ';

// function to  get my current location
navigator.geolocation.getCurrentPosition(successLocation , errorLocation, {enableHighAccuracy : true});

function successLocation (position){
        setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation(){
    setupMap([-2.24, 53.48])
} 

//function to create map

function setupMap(center){
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: center, // starting position [lng, lat]
        zoom: 5, // starting zoom
    });
    //add control buttons to map
    map.addControl(new mapboxgl.NavigationControl());
    
    //add directions to map
    const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
      });

      map.addControl(directions, 'top-left');
    
}