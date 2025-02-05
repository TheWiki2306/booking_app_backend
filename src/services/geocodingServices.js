import axios from "axios";

const API_KEY = '2f317aa3d7e542a292f6b76ba9f6bac1'

export const geoLocation = async (location) => {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(location)}&key=${API_KEY}`
    const response = await axios.get(url);
    
    if (response.data && response.data.results.length > 0) {
        return response.data.results[0].geometry;
    }
    throw new Error(`Unable to geocode this location: ${location}`);
    
}