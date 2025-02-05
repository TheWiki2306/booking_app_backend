export const calculatePrice = (weight, distance, cargoType, priorityLevel) => {
    const basePrice = 100; // in dollars
    const weightFactor = 5;// price per gram
    const distanceFactor = 0.5;// price per distance(km)

    const cargoTypeMultiplier = { standard: 1, fragile: 2, hazardous: 3.5 };
    const priorityLevelMultiplier = { normal_shipping: 1, express_shipping: 1.25, overnight_shipping: 1.5 };

    const typeMultiplier = cargoTypeMultiplier[cargoType] || 1;
    const priorityMultiplier = priorityLevelMultiplier[priorityLevel] || 1;

    return (basePrice + weight * weightFactor + distance * distanceFactor) * typeMultiplier * priorityMultiplier;
};

