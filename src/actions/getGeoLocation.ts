export const getGeoLocation = async (location: string) => {
    try {
        const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=10&language=en&format=json`);

        if (response.ok) {
            const data = await response.json();
            const { results } = data || {message: "no results"}
            return results;
        } else {
            throw new Error(`${response.status}, response`);
        }
            
    } catch (error) {
        console.error('Fetch', error);
    }

};