import axios from "axios";
import dotenv from "dotenv";


dotenv.config();

const API_KEY = process.env.API_KEY;

console.log(API_KEY);
console.log(process.env.PORT);


export const geoLocation = async (location) => {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(location)}&key=${API_KEY}`
    const response = await axios.get(url);
    
    if (response.data && response.data.results.length > 0) {
        return response.data.results[0].geometry;
    }
    throw new Error(`Unable to geocode this location: ${location}`);
    
}