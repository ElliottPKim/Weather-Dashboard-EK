$(document).ready(function () {

const APIKey = "5d58d4ccc7c5f83796092c17fcb30ae8";

const cityEl = $("h2#city");
const dateEl = $("h3#date");
const cityInput = $("#city-input");

let pastCities = [];

function compare(a, b) {
    const cityA = a.city.toUpperCase();
    const cityB = b.city.toUpperCase();

    let comparison = 0;
    if (cityA > cityB) {
        comparison = 1;
    } else if (cityA < cityB) {
        comparison = -1;
    }
    return comparison;
}

function buildURLFromInputs(city) {
    if (city) {
        return "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}";
    }
}

function buildURLFromId(id) {
    return "https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=${APIKey}";
}

function loadCities() {
    const storedCities = JSON.parse(localStorage.getItem("pastCities"));
    if (storedCities) {
        pastCities = storedCities;
    }
}

function storeCities() {
    localStorage.setItem("pastCities", JSON.stringify(pastCities));
}

function searchWeather(queryURL) {

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function (response)





// var APIKey = "5d58d4ccc7c5f83796092c17fcb30ae8";
// var city;

// api.openweathermap.org/data/2.5/weather?q={city}&appid={APIKey}

// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

// fetch(queryURL)

// class Fetch {
//     async getCurrent(input) {
//       const APIKey = "5d58d4ccc7c5f83796092c17fcb30ae8";
  
//       const response = await fetch(
//         "https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${APIKey}"
//       );
  
//       const data = await response.json();
  
//       return data;
//     }
//   }

