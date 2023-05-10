import React from "react";

interface WeatherInfo {
  city: string | null;
  temp: number | null;
  icon: string | null;
  description: string | null;
  humidity: number | null;
  windSpeed: number | null;
}

interface LocationInfo {
  name: string;
  country: string;
  state: string;
}

interface WeatherProps {
  city: string | null;
  weatherData?: WeatherInfo;
}

const Weather = ({ city, weatherData }: WeatherProps) => {
  const [info, setInfo] = React.useState<WeatherInfo>({
    city: null,
    temp: null,
    icon: null,
    description: null,
    humidity: null,
    windSpeed: null,
  });
  const [locationInfo, setLocationInfo] = React.useState<LocationInfo | null>(
    null
  );
  const [error, setError] = React.useState<string | null>(null);
  const [isPending, setIsPending] = React.useState(false);

  React.useEffect(() => {
    if (weatherData) {
      setInfo(weatherData);
      return;
    }

    if (city !== null || isPending === false) {
      setIsPending(true);

      fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=4c4f0b1876954338598a7be96c66527b`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          if (data.length > 0) {
            setLocationInfo({
              name: data[0].name,
              country: data[0].country,
              state: data[0].state,
            });

            fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&units=metric&appid=4c4f0b1876954338598a7be96c66527b`
            )
              .then((res) => res.json())
              .then((data) => {
                console.log(data);

                setInfo({
                  city: data.name,
                  temp: data.main.temp,
                  icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
                  description: data.weather[0].description,
                  humidity: data.main.humidity,
                  windSpeed: data.wind.speed,
                });

               setIsPending(false);
              })
              .catch((error) => {
                console.log(error);
                setError("Error fetching weather data");
              });
          }
        })
        .catch((error) => {
          console.log(error);
          setError("Error fetching location data");
        });
    }
  }, [city, weatherData, isPending]);

  return (
    <>
      {error && <div>{error}</div>}
      {!error && (
        <>
          {locationInfo && (
            <div>
              <h2>
                {locationInfo.name}, {locationInfo.state},{" "}
                {locationInfo.country}
              </h2>
            </div>
          )}
          <div>
            {info.description} 
            </div>
          <img 
          src={info.icon ?? ""} alt="" />
          <div> 
             {info.temp && ~~info.temp} Celsius
            </div>
          <div>
             Humidity: {info.humidity}
          %</div>
          <div> <p>
          Wind Speed: {info.windSpeed} 
             km/h</p>
            </div>
        </>
      )}
    </>
  );
};

export { Weather };
