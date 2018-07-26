const functions = require('firebase-functions');

const OpenWeatherMapHelper = require("openweathermap-node");

const helper = new OpenWeatherMapHelper(
	{
		APPID: '9540b56bcc0752d8bc828c9355b05056',
		units: "metric"
	}
);
exports.helloIndia = functions.https.onRequest((request, response) => {
    helper.getCurrentWeatherByCityName("Accra", (err, currentWeather) => {
        if(err){
            console.log(err);
        }
        else{
            console.log(currentWeather);
        }
    });
});
