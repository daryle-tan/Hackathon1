
const map = L.map('map').setView([0, 0], 2);
const URL = "https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
const myIcon = L.icon({
    iconUrl: 'images/airplane.png',
    iconSize: [40, 32],
    iconAnchor: [25, 16]
});
const marker = L.marker([0, 0], {icon: myIcon}).addTo(map);
// const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '© OpenStreetMap'
// }).addTo(map);

const latLng = document.getElementById('coordinates');

L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.Control.geocoder().addTo(map);

function onMapClick(e) {
    marker.setLatLng(e.latlng)
    marker.bindPopup("Coordinates are: " + e.latlng.toString()).openPopup()
    latLng.textContent = e.latlng.toString();;
        // .setLatLng(e.latlng)
        // .setContent("Coordinates are: " + e.latlng.toString())
        // .openOn(map);
}

map.on('click', onMapClick);

// var polygon = L.polygon([
//     [51.509, -0.08],
//     [51.503, -0.06],
//     [51.51, -0.047]
// ]).addTo(map);

// marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
// circle.bindPopup("I am a circle.");
// polygon.bindPopup("I am a polygon.");

// var popup = L.popup()
//     .setLatLng([51.513, -0.09])
//     .setContent("I am a standalone popup.")
//     .openOn(map);

// L.control.scale().addTo(map);