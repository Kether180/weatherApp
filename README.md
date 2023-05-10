## Interview Challenge

This is a simple React app that allows the user to search for a location, and in turn get the relevant weather information.

The **required features are working** and have already been implemented, but the implementation can be improved in many different ways.

Given the existing solution, **refactor and tidy** the code to what you believe would be a better implementation while keeping **accessibility** in mind. The goal is to end up with a more flexible solution to be able to accommodate further required features.

## Getting Started

 - Clone the repository
 - Run **`yarn`** or **`npm i`** to install required dependencies
 - Run **`yarn dev`** or **`npm run dev`** to start server
 - Run **`yarn test`** or **`npm run test`** to run tests

## Bonus Ideas

 - Implement a theme switcher i.e. **Dark / Light Mode**
 - Make styling responsive
 - Extended app with additional data being displayed, or more user control
 
## API Responses
 
### Location

    [ {	"name": "Copenhagen",
    
		    "local_names": {	
			    "oc":"Copenaga",
			    "gd":"Copenhagen",
			    "eo":"Kopenhago" }
			    
		    "lat": 55.6867243,
		    "lon": 12.5700724,
		    "country": "DK",
		    "state": "Capital Region of Denmark" } ]
		    
### Weather

    { "coord": {
	      "lon": 12.5701,
	      "lat": 55.6867 },
       
      "weather": [ {
	      "id": 804,
	   	  "main": "Clouds",
	      "description": "overcast clouds",
	      "icon": "04n" } ],
             
       "base": "stations",
       
       "main": {
          "temp": 2.12,
          "feels_like": -3.69,
          "temp_min": 1.04,
          "temp_max": 2.73,
          "pressure": 1014,
          "humidity": 90 },
          
       "visibility": 9419,
       
       "wind": {
          "speed": 8.35,
          "deg": 272,
          "gust": 12.78 },
          
       "clouds": { "all": 89 },
       "dt": 1678921312,
       
       "sys": {
          "type": 2,
          "id": 2035645,
          "country": "DK",
          "sunrise": 1678944219,
          "sunset": 1678986806 },
          
       "timezone": 3600,
       "id": 6949461,
       "name": "Inner City",
       "cod": 200 }


