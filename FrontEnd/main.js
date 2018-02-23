mapboxgl.accessToken = 'pk.eyJ1IjoidmluZWV0cmVkZHkiLCJhIjoiY2pkeWcxOXl6MTMxczJ3cXAwYnJqbm05OSJ9.5HKKb0O8A-9ChhsXoW6LtA'


var chapters = {
    'rank-1' : {
        center : [77.123767, 28.653458],
        zoom : 4,
        bearing : 0,
        pitch : 1,
    }
}

window.onload = function() {
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/vineetreddy/cjdzvvresa7lr2snn9b9c66qf',
        center: [82.8, 23.88],
        zoom: 4,
        bearing: 0,
        pitch: 0,
    });
}