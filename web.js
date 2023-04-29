// Define map options
var options = {
  center: [51.5074, -0.1278], // London, UK
  zoom: 13
};

// Create map
var map = L.map('map', options);

// Add tile layer
var tileLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
  maxZoom: 18
});
tileLayer.addTo(map);

// Add marker with custom popup
var marker = L.marker([51.5074, -0.1278]).addTo(map);
marker.bindPopup('<div class="popup"><h3>London</h3><p>The capital city of England.</p></div>');

// Add another marker with custom popup
var marker2 = L.marker([40.7128, -74.0060]).addTo(map);
marker2.bindPopup('<div class="popup"><h3>New York City</h3><p>The most populous city in the United States.</p></div>');
