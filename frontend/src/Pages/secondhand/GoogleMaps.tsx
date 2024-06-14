import React, { useEffect, useState } from 'react';
import useGeolocation from '../../Typings/usedTrade/useGeolocation';
import reverseGeocode from '../../Typings/usedTrade/reverseGeocode';
import axios from 'axios';
import { FaLocationDot } from 'react-icons/fa6';

const GOOGLE_MAPS_API_KEY: string = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '';

if (!GOOGLE_MAPS_API_KEY) {
    throw new Error('Google Maps API key is missing. Please add REACT_APP_GOOGLE_MAPS_API_KEY to your .env file.');
}

interface Item {
    id: number;
    name: string;
    description: string;
    price: number;
    city: string;
    region: string;
    subregion?: string; // Added subregion field
}

const normalizeString = (str: string) => str.trim().toLowerCase();

const GoogleMaps: React.FC = () => {
    const { location, error } = useGeolocation();
    const [address, setAddress] = useState<{ city: string; region: string; subregion: string }>({ city: '', region: '', subregion: '' });
    const [items, setItems] = useState<Item[]>([]);
    const [filteredItems, setFilteredItems] = useState<Item[]>([]);
    const [geocodeError, setGeocodeError] = useState<string | null>(null);

    // Fetch items from the mock JSON file
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/mock/usdTrade.json');
                console.log("Fetched Items:", response.data); // Log fetched items
                setItems(response.data);
            } catch (error) {
                console.error("Error fetching mock items:", error);
            }
        };
        fetchData();
    }, []);

    // Get geolocation and reverse geocode to get address
    useEffect(() => {
        if (location.latitude && location.longitude) {
            reverseGeocode(location.latitude, location.longitude, GOOGLE_MAPS_API_KEY)
                .then(address => {
                    console.log("Fetched Address:", address); // Log the address
                    setAddress(address);
                })
                .catch(error => {
                    console.error(error);
                    setGeocodeError('Failed to fetch geocode data');
                });
        }
    }, [location]);

    // Filter items based on the address
    useEffect(() => {
        if (address.city && address.region && address.subregion) {
            const filtered = items.filter(item => {
                const normalizedItemCity = normalizeString(item.city);
                const normalizedItemRegion = normalizeString(item.region);
                const normalizedItemSubregion = item.subregion ? normalizeString(item.subregion) : '';
                const normalizedAddressCity = normalizeString(address.city);
                const normalizedAddressRegion = normalizeString(address.region);
                const normalizedAddressSubregion = normalizeString(address.subregion);

                console.log(`Item: ${normalizedItemCity}, ${normalizedItemRegion}, ${normalizedItemSubregion}`);
                console.log(`Address: ${normalizedAddressCity}, ${normalizedAddressRegion}, ${normalizedAddressSubregion}`);

                // Match city, region, and subregion
                return normalizedItemCity === normalizedAddressCity &&
                    normalizedItemRegion === normalizedAddressRegion &&
                    normalizedItemSubregion === normalizedAddressSubregion;
            });
            console.log("Filtered Items:", filtered); // Log the filtered items
            setFilteredItems(filtered);
        }
    }, [address, items]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (geocodeError) {
        return <div>Error: {geocodeError}</div>;
    }

    return (
        <div className='pl-6'>
            <h1 className="flex items-center">
                <FaLocationDot />  {address.region} {address.city} {address.subregion}
            </h1>
            {filteredItems.length > 0 ? (
                <ul>
                    {filteredItems.map(item => (
                        <li key={item.id}>
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                            <p>Price: ${item.price}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No items found in your location.</p>
            )}
        </div>
    );
};

export default GoogleMaps;