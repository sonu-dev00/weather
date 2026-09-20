async function getWeather(city) {
    try {
    const apiKey = "RNG38D3GJ9JZWPFSKXHVURT6D";
    const apiURL  = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

    const weather = await fetch(apiURL + city + `?key=${apiKey}`);
    const weatherResponse = await weather.json();
    
    if(weatherResponse) {
        document.getElementById('address').innerHTML = `location:  ${weatherResponse.address}`;
        document.getElementById('temp').innerHTML = `Temperature: ${Math.round(weatherResponse.currentConditions.temp)} '°F'`;
        document.getElementById('humidity').innerHTML = `Humidity: ${weatherResponse.currentConditions.humidity}`;
        document.getElementById('conditions').innerHTML = `Conditions: ${weatherResponse.currentConditions.conditions}`;
        document.getElementById('wind').innerHTML = `Wind: ${weatherResponse.currentConditions.windspeed}`;

    } else {
        alert("City not found!");
    }

    console.log(weatherResponse)

    }catch(err) {
        console.log(err);
    }

}


//attach event listener to search button
document.getElementById('searchBtn').addEventListener("click", () => {
    const city = document.getElementById("weather").value;
    getWeather(city);
})
