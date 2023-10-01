// Map
var pmap = L.map('pmap').setView([-6.175394691385151, 106.82716755216501], 11);
var linemap = L.map('linemap').setView([-6.175394691385151, 106.82716755216501], 11);
var gonmap = L.map('gonmap').setView([-6.175394691385151, 106.82716755216501], 11);
var unimap = L.map('unimap').setView([-6.175394691385151, 106.82716755216501], 11);

// Tile OSM and adding achor tag for source data
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://geocourse.id/">Geocourse.id</a>,&copy; <a href="https://thetrisatria.com">thetrisatria</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(pmap);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://geocourse.id/">Geocourse.id</a>,&copy; <a href="https://thetrisatria.com">thetrisatria</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(linemap);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://geocourse.id/">Geocourse.id</a>,&copy; <a href="https://thetrisatria.com">thetrisatria</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(gonmap);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://geocourse.id/">Geocourse.id</a>,&copy; <a href="https://thetrisatria.com">thetrisatria</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(unimap);

// Add Point /w GeoJSON
var Point = L.geoJSON(jktpoint,{
    style: function(features) {
        var type = features.properties.Type;
        if (type = 'Museum') {
            return {color: "#D67BFF"}
        }
        if (type = 'Holy Place') {
            return {color: "#D67BFF"}
        }
        if (type = 'Zoo') {
            return {color: "#D83F31"}
        }
        if (type = 'Airport') {
            return {color: "#5CD2E6"}
        }
        if (type = 'Bus Station') {
            return {color: "#793FDF"}
        }
        if (type = 'Goverment') {
            return {color: "#E9B824"}
        }
        if (type = 'Park') {
            return {color: "#219C90"}
        }}}
    ).bindPopup(function (jktpoint) {
        return "Place = " + jktpoint.feature.properties.Name +"</br>"+ "Type = " + jktpoint.feature.properties.Type;}
    ).addTo(pmap);

// Add Polyline /w GeoJSON
var Polyline = L.geoJSON(rutekrl, {
    style: function (feature) {
        switch (feature.properties.Route) {
            case "Duri - Tangerang": return {color: "#001524", weight: 5 };
            case "Tanah Abang - Rangkas Bitung": return {color: "#445D48", weight: 5 };
            case "Jakarta Kota - Tanjung Priok": return {color: "#186F65", weight: 5 };
        }
    }
})
.bindPopup(function (rutekrl) {
    return "Rute " + rutekrl.feature.properties.Route;})
.addTo(linemap);

// Add Polygon /w GeoJSON
const myImage = document.querySelector("img");
const myRequest = new Request("JakPus.geojson");

fetch(myRequest)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return response.json;
  })
  .then((response) => {
    L.geoJSON(response).addTo(gonmap);
  });

// L.geoJSON(geomjakpus,{color: "#5B0888"}
//     ).bindPopup(function (geomjakpus) {
//     return "Kecamatan " + geomjakpus.feature.properties.name;}
//     ).addTo(gonmap);
// L.geoJSON(geomjaktim,{color: "#713ABE"}
//     ).bindPopup(function (geomjaktim) {
//     return "Kecamatan " + geomjaktim.feature.properties.name;}
//     ).addTo(gonmap);
// L.geoJSON(geomjakbar,{color: "#9D76C1"}
//     ).bindPopup(function (geomjakbar) {
//     return "Kecamatan " + geomjakbar.feature.properties.name;}
//     ).addTo(gonmap);
// L.geoJSON(geomjakut,{color: "#FFA1F5"}
//     ).bindPopup(function (geomjakut) {
//     return "Kecamatan " + geomjakut.feature.properties.name;}
//     ).addTo(gonmap);
// L.geoJSON(geomjaksel,{color: "#FF3FA4"}
//     ).bindPopup(function (geomjaksel) {
//     return "Kecamatan " + geomjaksel.feature.properties.name;}
//     ).addTo(gonmap);

// Spatial object symbolization based on GeoJSON attribute

// // settings Layers
// var layer = {
//     "POI Jakarta": Point,
//     "KRL Route": Polyline,
//     "Jakarta Province": Polygon,
// };

// // adding control layer and scale to map
// var controllayer = L.control.layers(null, layer).addTo(unimap); // Layer control
// L.control.scale().addTo(unimap); // Adding scale to map


// // api url
// const api_url =
//       "https://kependudukancapil.jakarta.go.id/webgis/assets/map/Kota_geo.json";
// // Defining async function
// async function getapi(url) {
   
//     // Storing response
//     const response = await fetch(url);
   
//     // Storing data in form of JSON
//     var data = await response.json();
//     console.log(data);
//     show(data);
// }
// // Calling that async function
// getapi(api_url);

async function logMovies() {
    const response = await fetch("https://kependudukancapil.jakarta.go.id/webgis/assets/map/Kota_geo.json");
    const movies = await response.json();
    console.log(movies);
  }

// // Function to define innerHTML for HTML table
// function show(data) {
//     L.geoJSON(data).addTo("unimap")
//     // Setting innerHTML as tab variable
// }