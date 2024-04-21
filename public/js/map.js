// TO MAKE THE MAP APPEAR YOU MUST
	// ADD YOUR ACCESS TOKEN FROM
	// https://account.mapbox.com
    
    
	mapboxgl.accessToken = mapTocan;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        center: coordinates, // starting position [lng, lat]
        zoom: 9 // starting zoom
    });

    console.log(coordinates);
    const marker = new mapboxgl.Marker({color:"red"})
        .setLngLat(coordinates)
        .addTo(map);
