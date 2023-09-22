// var map = L.map('map').setView([51.505, -0.09], 13);

// -6.175394691385151, 106.82716755216501 -> koordinat Monumen Nasional, Jakarta
var map = L.map('map').setView([-6.175394691385151, 106.82716755216501], 13);

// Tile OSM and adding achor tag for source data
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://geocourse.id/">Geocourse.id</a>,&copy; <a href="https://thetrisatria.com">thetrisatria</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: '&copy; <a href="https://geocourse.id/">Geocourse.id</a>; Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});


// Adding GeoJSON feature

// Add Point /w GeoJSON
L.geoJSON(jktpoint
    // , {style: function(feature) {
    //     switch (feature.Type) {
    //         case 'Museum': return {color: "#D67BFF"};
    //         case 'Holy Place':   return {color: "#D83F31"};
    //         case 'Zoo':   return {color: "#79AC78"};
    //         case 'Airport':   return {color: "#5CD2E6"};
    //         case 'Bus Station':   return {color: "#793FDF"};
    //         case 'Goverment':   return {color: "#E9B824"};
    //         case 'Park':   return {color: "#219C90"};
    //         default: return {color: "#219C90"}
    //     }
    // }}
    ).addTo(map);

// Add Polyline /w GeoJSON
L.geoJSON(rutekrl).addTo(map)

// Add Polygon /w GeoJSON
L.geoJSON(geomjakpus).addTo(map)
var geomjaktim = data.
L.geoJSON(jaktim.geoJSON).addTo(map)

// Spatial object symbolization based on GeoJSON attribute