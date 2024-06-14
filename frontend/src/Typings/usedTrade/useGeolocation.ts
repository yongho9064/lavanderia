import { useEffect, useState } from 'react';
import { calculateDistance } from '../../Typings/usedTrade/calculateDistance';

export default function useGeolocation() {
    const [location, setLocation] = useState<{ latitude: number | null; longitude: number | null }>({
        latitude: null,
        longitude: null,
    });
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!navigator.geolocation) {
            setError('Geolocation is not supported');
            return;
        }

        let lastLocation: { latitude: number; longitude: number } | null = null;

        const handleSuccess = (position: GeolocationPosition) => {
            const { latitude, longitude } = position.coords;

            if (lastLocation) {
                const distance = calculateDistance(
                    lastLocation.latitude,
                    lastLocation.longitude,
                    latitude,
                    longitude
                );

                if (distance < 500) {
                    // If the distance moved is less than 500 meters, do not update the location
                    return;
                }
            }

            lastLocation = { latitude, longitude };
            setLocation({ latitude, longitude });
        };

        const handleError = (error: GeolocationPositionError) => {
            setError(error.message);
        };

        const options = {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0 // Do not use a cached position
        };

        const watchId = navigator.geolocation.watchPosition(handleSuccess, handleError, options);

        // Clean up the watch position when the component unmounts
        return () => {
            navigator.geolocation.clearWatch(watchId);
        };
    }, []);

    return { location, error };
}
