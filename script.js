var map = L.map('map').setView([-7.420419566364883, 109.24936603853541], 11);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([-7.420419566364883, 109.24936603853541]).addTo(map);

var geoJsonLayer = new L.GeoJSON.AJAX('Kab_Banyumas_GeoJSON.geojson')
geoJsonLayer.addTo(map)
