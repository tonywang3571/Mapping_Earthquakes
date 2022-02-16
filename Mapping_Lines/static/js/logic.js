// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level
let map = L.map('mapid').setView([37.6213, -122.3790], 5);
// // This is the same as the above code
// let map = L.map("mapid", {
//   center: [
//     40.7, -94.5
//   ],
//   zoom: 4
// });

//Corrdinates for each point to be used in the line.
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];

// Skill drill 13.4.3 - Create a line from SFO to JFK with 2 stops
let line2 = [
    [33.9416, -118.4085],
    [30.194445, -97.66815],
    [38.747223, -90.36139],
    [43.6775, -79.6308333333],
    [40.63972, -73.77889]
]


// Create a polyline using the line coordinates and change the line color.
L.polyline(line, {
    color: "yellow",
  }).addTo(map);

  L.polyline(line2, {
    color: "blue",
    dasharray:"10 10"
  }).addTo(map);


// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);