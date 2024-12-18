'use client';

import {Card} from '@/components/ui/card';

import {useEffect} from 'react';
import {MapContainer, TileLayer, useMap, LayersControl} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

import { useWeatherContext } from '@/providers/weather-provider';

const initialCoords = {lat: 34.0522, lon: -118.2437};

const FlyToActiveCity = ({activeCityCords = initialCoords}) => {
    const map = useMap();

    useEffect(() => {
        if (activeCityCords) {
            const zoomLev = 13;
            const flyToOptions = {
                duration: 1.5,
            };

            map.flyTo(
                [activeCityCords.lat, activeCityCords.lon],
                zoomLev,
                flyToOptions
            );
        }
    }, [activeCityCords, map]);
    return null;
};

const WeatherMap = () => {
    const {
        city: {latitude, longitude},
        currentWeather,
    } = useWeatherContext();

    const activeCityCords: {lat:number, lon:number} = {
        lat: latitude,
        lon: longitude,
    };


        if (!currentWeather)
            return (
                <Card className='col-span-4 lg:col-span-8 lg:row-span-3 min-h-[600px]'>
                    <span className='loader' />
                </Card>
            );

    return (
        <Card className='col-span-4 lg:col-span-8 lg:row-span-3 min-h-[600px]'>
            <MapContainer
                //@ts-expect-error leaflet types are wrong
                center={[activeCityCords.lat, activeCityCords.lon]}
                zoom={13}
                scrollWheelZoom={true}
                className=' rounded-lg p-0 z-0 m-4'
                style={{
                    height: 'calc(100% - 2rem)',
                    width: 'calc(100% - 2rem)',
                }}>
                <TileLayer
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    //@ts-expect-error leaflet types are wrong
                    attribution={`&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors`}
                />

                <LayersControl
                    //@ts-expect-error leaflet types are wrong
                    position='topright'>
                    <LayersControl.BaseLayer name='Temperature'>
                        <TileLayer
                            url={`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=85716d70713b33bf033f8a37df623121`}
                            //@ts-expect-error leaflet types are wrong
                            attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
                        />
                    </LayersControl.BaseLayer>

                    <LayersControl.BaseLayer name='Precipitation'>
                        <TileLayer
                            url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=85716d70713b33bf033f8a37df623121`}
                            //@ts-expect-error leaflet types are wrong
                            attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name='Wind'>
                        <TileLayer
                            url={`https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=85716d70713b33bf033f8a37df623121`}
                            //@ts-expect-error leaflet types are wrong
                            attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
                        />
                    </LayersControl.BaseLayer>
                    <LayersControl.BaseLayer name='Clouds'>
                        <TileLayer
                            url={`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=85716d70713b33bf033f8a37df623121`}
                            //@ts-expect-error leaflet types are wrong
                            attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
                        />
                    </LayersControl.BaseLayer>

                    <LayersControl.BaseLayer name='Clear Map' checked={false}>
                        <TileLayer
                            url={`https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`}
                            //@ts-expect-error leaflet types are wrong
                            attribution='&copy; <a href="https://openweathermap.org/">OpenWeatherMap</a>'
                        />
                    </LayersControl.BaseLayer>
                </LayersControl>

                <FlyToActiveCity activeCityCords={activeCityCords} />
            </MapContainer>
        </Card>
    );
};

export default WeatherMap;
