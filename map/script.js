let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 0, lng: 0 }, // Set the initial center of the map
        zoom: 2 // Set the initial zoom level of the map
    });

    const coordinates = [
        { lat: 40.7128, lng: -74.0060 }, // Example coordinates, replace with your own
        { lat: 34.0522, lng: -118.2437 },
        { lat: 51.5074, lng: -0.1278 }
        // Add more coordinates as needed
    ];

    // Loop through the coordinates array and add markers to the map
    for (let i = 0; i < coordinates.length; i++) {
        new google.maps.Marker({
            position: coordinates[i],
            map: map
        });
    }
}

AIzaSyBi5NvxFruIKKyWnqLiTWe0NQf01Yw564Y