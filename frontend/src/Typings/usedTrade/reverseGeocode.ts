import axios from 'axios';

interface AddressComponent {
    long_name: string;
    short_name: string;
    types: string[];
}

interface GeocodeResult {
    results: {
        address_components: AddressComponent[];
    }[];
}

const reverseGeocode = async (latitude: number, longitude: number, apiKey: string): Promise<{ city: string; region: string; subregion: string }> => {
    if (!apiKey) {
        throw new Error('Google Maps API key is missing.');
    }

    try {
        const response = await axios.get<GeocodeResult>(
            `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
        );

        const addressComponents = response.data.results[0].address_components;
        const city = addressComponents.find((component: AddressComponent) => component.types.includes("locality"))?.long_name || 'Unknown City';
        const region = addressComponents.find((component: AddressComponent) => component.types.includes("administrative_area_level_1"))?.short_name || 'Unknown Region';
        const subregion = addressComponents.find((component: AddressComponent) => component.types.includes("sublocality") || component.types.includes("neighborhood"))?.long_name || 'Unknown Subregion';
        return { city, region, subregion };
    } catch (error) {
        console.error("Full error:", error);
        if (axios.isAxiosError(error)) {
            console.error("Axios error response data:", error.response?.data);
            console.error("Axios error status:", error.response?.status);
            console.error("Axios error headers:", error.response?.headers);
        } else {
            console.error("Unexpected error:", error);
        }
        throw new Error('Failed to fetch geocode data');
    }
};

export default reverseGeocode;
