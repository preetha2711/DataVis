mapboxgl.accessToken = 'pk.eyJ1IjoidmluZWV0cmVkZHkiLCJhIjoiY2pkeWcxOXl6MTMxczJ3cXAwYnJqbm05OSJ9.5HKKb0O8A-9ChhsXoW6LtA'


var chapters = {
    'rank-1' : {
        center : [77.123767, 28.653458],
        zoom : 4,
        bearing : 0,
        pitch : 1,
    },
    'rank-2'
}

var map;

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

// On every scroll event, check which element is on screen
window.onscroll = function() {
    var chapterNames = Object.keys(chapters);
    console.log(chapterNames);
    for (var i = 0; i < chapterNames.length; i++) {
        var chapterName = chapterNames[i];
        if (isElementOnScreen(chapterName)) {
            setActiveChapter(chapterName);
            break;
        }
    }
};

var activeChapterName = 'rank-1';
function setActiveChapter(chapterName) {
    if (chapterName === activeChapterName) return;

    map.flyTo(chapters[chapterName]);

    document.getElementById(chapterName).setAttribute('class', 'active');
    document.getElementById(activeChapterName).setAttribute('class', '');

    activeChapterName = chapterName;
}

function isElementOnScreen(id) {
    var element = document.getElementById(id);
    var bounds = element.getBoundingClientRect();
    return bounds.top < window.innerHeight && bounds.bottom > 0;
}