import { calculateDistance } from '../utils/distanceCalculation.js';
import { calculatePrice } from '../utils/priceCalculation.js';
import { geoLocation } from '../services/geocodingServices.js';
import Joi from 'joi';

const pricingSchema = Joi.object({
    weight: Joi.number().positive().required(),
    origin: Joi.string().trim().min(3).required(),
    destination: Joi.string().trim().min(3).required(),
    cargoType: Joi.string().valid('standard', 'fragile', 'perishable').required(),
    priorityLevel: Joi.string().valid('normal_shipping', 'express_shipping', 'overnight_shipping').required(),
});

export const calculatePriceHandler = async (req, res) => {
    try {
        // Validate input data
        const { error } = pricingSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        const { weight, origin, destination, cargoType, priorityLevel } = req.body;
        const originCoordinates = await geoLocation(origin);
        const destinationCoordinates = await geoLocation(destination);

        // Handle possible geocoding errors
        if (!originCoordinates || !destinationCoordinates) {
            return res.status(400).json({ error: 'Invalid origin or destination' });
        }

        const distance = calculateDistance(originCoordinates, destinationCoordinates);
        const price = calculatePrice(weight, distance, cargoType, priorityLevel);

        res.status(200).json({ price, distance });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

