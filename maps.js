let Area = [40.0, -98.5]
let zoomLevel = 4// 1 = whole world and 20 = city blocks

let map = L.map('bridge-map').setView(Area, zoomLevel)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


bridges =  [  // the 5 bridges

    {name: 'Verrazano-Narrows Bridge', location: [40.6066, -74.0447], span: '1298.4 meters', city: 'New York, NY',},
    {name: 'Golden Gate Bridge', location: [37.8199, -122.4783], span: '1280.2 meters', city: 'San Francisco and Marin, CA',},
    {name: 'Mackinac Bridge', location: [45.8174, -84.7278],span: '1158.0 meters', city: 'Mackinaw and St Ignace, MI',},
    {name: 'George Washington Bridge', location: [40.8517, -73.9527], span: '1067.0 meters', city: 'New York, NY and New Jersey, NJ',},
    {name: 'Tacoma Narrows Bridge', location: [47.269, -122.5517], span: '853.44 meters', city: 'Tacoma and Kitsap, WA',},

]
bridges.forEach(function (bridges) {  // the forEach loop creates an array over each campus in the campuses
    let bridgeName = bridges.name;
    let bridgeCity = bridges.city;
    let bridgeLocation = bridges.location;
    let bridgeSpan = bridges.span;
    let largestBridgeIcon = L.icon ({
        iconUrl: 'bridge.png',
        iconAnchor: [30, 30],
        iconSize: [30, 30],
    })


    // if (parseFloat(bridgeSpan) === largestBridge) {
        L.marker(bridgeLocation, {
            icon: largestBridgeIcon,
        })
            .bindPopup(
                `<br>${bridgeName}</br><br>${bridgeCity}</br><br>${bridgeSpan}</br><b>Currently the largest bridge!</b>`
            )
            .addTo(map)

    // } else {
    //     L.marker(bridgeLocation, {
    //         icon: bridgeIcon,
    //     })
    //         .bindPopup(
    //             `<br>${bridgeName}</br><br>${bridgeCity}</br><br>${bridgeSpan}</br>`
    //         )
    //         .addTo(map);
    // }
});