

export const getGeoLocation = async (location: string) => {
    try {
        const response = await fetch(
            `https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=10&language=en&format=json`
        );

        if (response.ok) {
            const data = await response.json();
            const {results} = data || {message: 'no results'};
            return results;
        } else {
            throw new Error(`${response.status}, response`);
        }
    } catch (error) {
        console.error('Fetch', error);
    }
};

export const getWeatherInfo = async (
    latitude: number,
    longitude: number,
    timezone: string
) => {
    try {
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,weather_code,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=${timezone}`
        );

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error(`${response.status}, response`);
        }
    } catch (error) {
        console.error('Fetch', error);
    }
};


export const getUVInfo = async (
    latitude: number,
    longitude: number,
    timezone: string
) => {
    try {
        const response = await fetch(
            `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&current=us_aqi,pm10,pm2_5,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone,uv_index,uv_index_clear_sky&timezone=${timezone}&forecast_days=1`
        );

        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error(`${response.status}, response`);
        }
    } catch (error) {
        console.error('Fetch', error);
    }
};
