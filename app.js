document.addEventListener("DOMContentLoaded", cityWeather)

function weatherDataFetch(city) {
	var key = '6b56759eba64e104adfcdaa2683cc7bf';
	fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
	.then(function(resp) {
		return resp.json()
	})
	.then(function(data) {
		drawWeather(data);
	})
	.catch(function() {
	});
}

function cityWeather(e){
	weatherDataFetch("Tartu");
}