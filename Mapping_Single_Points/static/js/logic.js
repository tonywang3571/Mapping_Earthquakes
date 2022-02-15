// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level (coordinates are to LA, CA)
let map = L.map('mapid').setView([34.0522, -118.2437], 14);
// // This is the same as the above code
// let map = L.map("mapid", {
//   center: [
//     40.7, -94.5
//   ],
//   zoom: 4
// });

// Add marker to map (coordinates is at London)
// var markerLondon = L.marker([51.5, -0.09]).addTo(map);

// Add a marker to the map fro Los Angeles, California.
// let markerLA = L.marker([34.0522, -118.2437]).addTo(map);

// Change marker to circle
// L.circle([34.0522, -118.2437], {
//     radius: 100
// }).addTo(map);

//13.4.1 Skill Drill
// L.circle([34.0522, -118.2437], {
//     radius: 300,
//     color: "black",
//     fillColor: "yellow",
// }).addTo(map);

// Add circleMarker
L.circleMarker([34.0522, -118.2437], {
    radius: 300,
    color: "black",
    fillColor: "yellow",
}).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);