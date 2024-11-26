export const getGeoLocation = async (location: string) => {
    const results = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=10&language=en&format=json`
    ).then((resp) => resp.json());

   if (!results.results) return {"results": [0]};
    return results.results;
}
