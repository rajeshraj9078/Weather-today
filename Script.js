

const fetchWeather = async (city) => {
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'ad25537375msh130be7fe8481082p115952jsnbb455be6e2c2',  // Replace with your actual RapidAPI key
      'x-rapidapi-host': 'weather-by-api-ninjas.p.rapidapi.com',
      'Content-Type': 'application/json'
    }
  };

  try {
    console.log('Fetching weather data...');
    const response = await fetch(url, options);
    console.log('Response:', response);

    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status} - ${response.statusText}`);
    }

    const result = await response.json();
    console.log('Weather data:', result);

    // Update the HTML elements with the weather data
    document.getElementById('cityname').innerHTML = city;
    // document.getElementById('cloud_pct').innerHTML = result.cloud_pct;
    document.getElementById('temp').innerHTML = result.temp;
    document.getElementById('temp2').innerHTML = result.temp;
    document.getElementById('feels_like').innerHTML = result.feels_like;
    document.getElementById('humidity').innerHTML = result.humidity;
    document.getElementById('humidity2').innerHTML = result.humidity;
    document.getElementById('min_temp').innerHTML = result.min_temp;
    document.getElementById('max_temp').innerHTML = result.max_temp;
    document.getElementById('wind_speed').innerHTML = result.wind_speed;
    document.getElementById('wind_speed2').innerHTML = result.wind_speed;
    document.getElementById('wind_degrees').innerHTML = result.wind_degrees;
    document.getElementById('sunrise').innerHTML = result.sunrise;
    document.getElementById('sunset').innerHTML = result.sunset;
  } catch (error) {
    console.error('Fetch operation failed:', error);
  }
};

document.getElementById('submit').addEventListener('click', (e) => {
  e.preventDefault();
  const city = document.getElementById('city').value;
  fetchWeather(city);
});


fetchWeather('Odisha');



