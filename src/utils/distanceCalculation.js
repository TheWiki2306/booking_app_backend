const toRadians = (degrees) => (degrees * Math.PI) / 180;

export const calculateDistance = (origin, destination) => {
    const earthRadius = 6371; 
    const dLat = toRadians(destination.lat - origin.lat);
    const dLng = toRadians(destination.lng - origin.lng);

    const a = Math.sin(dLat / 2) ** 2 +
              Math.cos(toRadians(origin.lat)) *
              Math.cos(toRadians(destination.lat)) *
              Math.sin(dLng / 2) ** 2;

    return 2 * earthRadius * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
};

