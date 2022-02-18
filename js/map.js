const DEFAULT_POINT = {
	lat: 36.7783,
	lng: 119.4179
};

let map, bounds;
setTimeout(() => {
	map = L.map('map', { zoomControl: false }).setView([DEFAULT_POINT.lat, DEFAULT_POINT.lng], 6);
	L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGV2YW5zaHVsaW51eCIsImEiOiJja3h1MWcybngwcWRyMm5waDlyemoyMHkzIn0.raNjTos02K9cmbKdWLuceA`, {
		attribution: `© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>`,
		id: 'devanshulinux/ckxviyram382z14muuytohhkp',
		minZoom: 4,
		maxZoom: 12,
		tileSize: 512,
		zoomOffset: -1
	}).addTo(map);

	bounds = map.getBounds();

	map.on('click', async (e) => {
		const coords = e.latlng;
		console.log(`Clicked ${coords}`);
	});

	for (let i = 0; i < fanPoints.length; i += 2) {
		if (!inBounds({ lat: fanPoints[i], lng: fanPoints[i + 1] })) continue

		L.marker([fanPoints[i], fanPoints[i + 1]], { icon: fanIcons[fanIt] }).addTo(map);

		fanIt++;
		if (fanIt == fanIcons.length) fanIt = 0;
	}
}, 100);

const fanIcons = [];
for (let i = 2; i <= 10; i++) {
	fanIcons.push(L.icon({
		iconUrl: `images/fan${i}.gif`,
		iconSize: [42, 42]
	}));
}

const fanPoints = [
	35.113645, 126.826172,
	35.131636, 113.818359,
	35.65164, 115.048828,
	36.522615, 117.13623,
	36.663896, 118.08105,
	37.401369, 122.167969,
	38.923189, 121.574707,
	40.077273, 124.431152,
	38.957406, 125.793457,
	37.453771, 126.97998,
	38.183981, 116.916504,
	37.33161, 116.279297,
	37.958799, 114.411621,
	37.732925, 112.5,
	37.06872, 111.75293,
	37.349103, 111.181641,
	34.914864, 110.983887,
	34.535098, 119.179688,
	33.825209, 118.388672,
	34.09895, 117.268066,
	33.568924, 117.004395,
	32.721489, 115.927734,
	33.496652, 130.385742,
	33.184265, 131.682129,
	33.716485, 132.978516,
	34.463334, 132.473145,
	34.680674, 134.055176,
	35.131636, 136.867676,
	35.041642, 138.515625,
	36.522615, 138.361816,
	39.858122, 127.529297,
	39.536562, 118.234863,
	39.976213, 113.334961,
	39.128242, 112.390137,
	39.553523, 109.709473,
	38.148955, 109.6875,
	36.416484, 109.401855,
	35.041642, 107.666016,
	33.313031, 105.029297,
	34.789131, 105.666504,
	34.590185, 103.359375,
	35.149623, 102.612305,
	36.061667, 103.886719,
	36.522615, 101.711426,
	37.958432, 102.65625,
	38.888956, 100.50293,
	38.957406, 106.347656,
	37.138808, 99.008789,
	33.239473, 101.513672,
	33.349786, 104.963379
];

let fanIt = 0;

function inBounds(point) {
	var eastBound = point.lng < bounds._northEast.lng;
	var westBound = point.lng > bounds._southWest.lng;
	var inLong;

	if (bounds._northEast.lng < bounds._southWest.lng) {
		inLong = eastBound || westBound;
	} else {
		inLong = eastBound && westBound;
	}

	var inLat = point.lat > bounds._southWest.lat && point.lat < bounds._northEast.lat;
	return inLat && inLong;
}