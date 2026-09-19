
//fetch weather
function getWeather() {
    fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/africa?unitGroup=us&key=J7SAH98DCRRNQ6HXQUXXNR7VH&contentType=json')//weather API
    .then((response) => {
        return response.json();
    }).then((response) => {
        console.log(response);
    }).catch((err) => { 
        console.log(err);
    })
}

getWeather();

