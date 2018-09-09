var map = L.map("leaflet-map").setView([41.8107, -70.4045], 9);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
  maxZoom: 18,
  minZoom: 8
}).addTo(map);

var wychmere = L.marker([41.664099, -70.066222]).addTo(map);
wychmere.bindPopup("<b>The venue!</b><br>Wychmere Beach Club");

var marthasVineyard = L.marker([41.381143, -70.645512]).addTo(map);
marthasVineyard.bindPopup("Martha's Vineyard");

var coastGuardBeach = L.marker([41.844877, -69.94834]).addTo(map);
coastGuardBeach.bindPopup("Coast Guard Beach");

var swanInn = L.marker([41.65503, -70.15418]).addTo(map);
swanInn.bindPopup("Swan Inn");

// food options

var arnold = L.marker([41.843692, -69.982739]).addTo(map);
arnold.bindPopup("Arnold's");
var pj = L.marker([41.93513, -70.02022]).addTo(map);
pj.bindPopup("PJ's");
var sundaeSchool = L.marker([41.66829, -70.06924]).addTo(map);
sundaeSchool.bindPopup("Sundae School");
var hotChocolateSparrow = L.marker([41.78827, -69.99315]).addTo(map);
hotChocolateSparrow.bindPopup("Hot Chocolate Sparrow");
var blackfish = L.marker([41.99567, -70.0505]).addTo(map);
blackfish.bindPopup("Blackfish");
var viera = L.marker([41.66847, -70.12098]).addTo(map);
viera.bindPopup("Viera");
var redInn = L.marker([42.03921, -70.19511]).addTo(map);
redInn.bindPopup("Red Inn");
var governorBradford = L.marker([42.05216, -70.18561]).addTo(map);
governorBradford.bindPopup("Governor Bradford");
