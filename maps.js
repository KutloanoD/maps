let metroAreaCenterCoordinates = [44.96, -93.2]
let zoomLevel = 9 // 1 = whole world and 20 = city blocks

let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


campuses =  [
    {"name": "Minneapolis College", "website": "https://minneapolis.edu", "coordinates": [44.9724, -93.2844] },
    {"name": "Saint Paul College", "website": "https://saintpaul.edu", "coordinates": [44.94839, -93.1099] },
    {"name": "Normandale Community College", "website": "https://normandale.edu", "coordinates": [44.8297, -93.3312] },
    {"name": "North Hennepin Community College", "website": "https://nhcc.edu", "coordinates": [45.1054232,-93.3767558] },
    {"name": "Century College", "website": "https://www.century.edu/", "coordinates": [45.0438494,-92.9862026] }
]
campuses.forEach(function (collegeCampus) {  // the forEach loop creates an array over each campus in the campuses
    let markerText = `${collegeCampus.name}<br><a href="${collegeCampus.website}">Website</a>`  // this creates a variable inside the loop
    // containing campus name and a link to the website
    L.marker(collegeCampus.coordinates).bindPopup(markerText).addTo(map)

})


let mctcCoordinates = [44.9724, -93.2844]  // adding mctc coordinates to the map
let mctcMarker = L.marker(mctcCoordinates).bindPopup('Minneapolis College <br><a href="http://minneapolis.edu">Website</a>')
    .addTo(map)  // adding markers to our maps so we know exactly
                                                        // where the location is
 // bind popup creates a popup tag for the location on the map


let stPaulCoordinates = [44.9483, -93.1099]
let stPaulMarker = L.marker(stPaulCoordinates)
    .bindPopup('St Paul College<br><a href="https://saintpaul.edu"> Website</a>')
    .addTo(map)  // adding markers to our maps so we know exactly where the location is

// Adding Normandale college & coordinates

let normandaleCoordinates =[44.8297, -93.3312]
let normandaleMarker = L.marker(normandaleCoordinates)
    .bindPopup('Normandale Community College<br><a href="https://www.normandale.edu"> Website</a>')
    .addTo(map)

let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
        color: 'grey',
        radius: 30000,
        fill0pacity: 0.2}) .bindPopup('Twin Cities Metro Area')
    .addTo(map)