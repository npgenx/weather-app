

export type CityInfoProps = {
    name: string;
    country: string;
    latitude: number;
    longitude: number;
    tzone: string;
};

export type currentWeatherProps = {
    time: string;
    interval: number;
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    is_day: 0 | 1;
    precipitation: number;
    rain: number;
    showers: number;
    snowfall: number;
    weather_code: number;
    surface_pressure: number;
    wind_speed_10m: number;
    wind_direction_10m: number;
    wind_gusts_10m: number;
};
export type hourlyWeatherProps = {
    time: string,
    temp: number
    weather_code: string,
}

export type dailyWeather = {
    time: number;
    weather_code: number;
    temp_max: number;
    temp_min: number;
    sunrise: number;
    sunset: number;
};                

export type GeoCityInfo = {
    id: number;
    name: string;
    latitude: number;
    longitude: number;
    elevation: number;
    feature_code: string;
    country_code: string;
    admin1_id?: number;
    admin2_id?: number;
    admin3_id?: number;
    admin4_id?: number;
    timezone: string;
    population: number;
    postcodes: number[];
    country_id: number;
    country: string;
    admin1?: string;
    admin2?: string;
    admin3?: string;
    admin4?: string;
};