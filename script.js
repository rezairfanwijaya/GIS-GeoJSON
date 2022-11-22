// * set map
var map = L.map('map').setView([-7.420419566364883, 109.24936603853541], 11);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// * add popup
function popupKu(f,l) {
    var out = [];
    if (f.properties){
        for(key in f.properties){
            out.push(key + ": " + f.properties[key])
        }
        l.bindPopup(out.join("<br>"))
    }
}

// * render geojson
var geoJsonLayer = new L.GeoJSON.AJAX('banyumas.geojson', {onEachFeature:popupKu})
geoJsonLayer.addTo(map)