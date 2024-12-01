

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

export type dailyWeatherProps = {
    time: number;
    weather_code: number;
    temp_max: number;
    temp_min: number;
    sunrise: number;
    sunset: number;
};                

export type GeoCityInfoProps = {
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

export interface IWeatherInfo {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    current_units: ICurrentWeatherUnits;
    current: ICurrentWeather;
    hourly_units: IHourlyWeatherUnits;
    hourly: IHourlyWeather;
    daily_units: IDailyWeatherUnits;
    daily: IDailyWeather;
}

export interface IDailyWeather {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
}

export interface IDailyWeatherUnits {
    time: string;
    weather_code: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
}

export interface IHourlyWeather {
    time: string[];
    temperature_2m: number[];
    weather_code: number[];
}

export interface IHourlyWeatherUnits {
    time: string;
    temperature_2m: string;
    weather_code: string;
}

export interface ICurrentWeather {
    time: string;
    interval: number;
    temperature_2m: number;
    apparent_temperature: number;
    is_day: number;
    weather_code: number;
    surface_pressure: number;
    wind_speed_10m: number;
    wind_direction_10m: number;
    wind_gusts_10m: number;
}

export interface ICurrentWeatherUnits {
    time: string;
    interval: string;
    temperature_2m: string;
    apparent_temperature: string;
    is_day: string;
    weather_code: string;
    surface_pressure: string;
    wind_speed_10m: string;
    wind_direction_10m: string;
    wind_gusts_10m: string;
}


/// JSON to types converter
export interface IUVIndexInfo {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    current_units: ICurrentUVUnits;
    current: ICurrentUV;
}

export interface ICurrentUV {
    time: string;
    interval: number;
    us_aqi: number;
    pm10: number;
    pm2_5: number;
    carbon_monoxide: number;
    nitrogen_dioxide: number;
    sulphur_dioxide: number;
    ozone: number;
    dust: number;
    uv_index: number;
    uv_index_clear_sky: number;
}

export interface ICurrentUVUnits {
    time: string;
    interval: string;
    us_aqi: string;
    pm10: string;
    pm2_5: string;
    carbon_monoxide: string;
    nitrogen_dioxide: string;
    sulphur_dioxide: string;
    ozone: string;
    dust: string;
    uv_index: string;
    uv_index_clear_sky: string;
}