// https://api.openweathermap.org/data/2.5/weather?q={city%20name}&appid={API%20key}
const apiKey = "";

const text = document.getElementById("input");
const city = document.getElementById("input");
const weather = document.getElementById("weather");

async function getWeatherData(){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${text.value}&appid=${apiKey}`);
    
        if(!response.ok){
            throw new Error("Not found");
        }
        else{
            const data = await response.json();
            displayCityWeather(data);
        }
    }
    catch(error){
        console.log(error);
    }
}

function displayCityWeather(data){
    console.log(data);
    weather.innerHTML = `${data.weather[0].description}`;
}
