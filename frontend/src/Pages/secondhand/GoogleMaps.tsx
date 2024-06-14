import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
    subregion: string;
    imgUrl: string;
}

const normalizeString = (str: string) => str.trim().toLowerCase();

const GoogleMaps: React.FC = () => {
    const { location, error } = useGeolocation();
    const [address, setAddress] = useState<{ city: string; region: string; subregion: string }>({ city: '', region: '', subregion: '' });
    const [items, setItems] = useState<Item[]>([]);
    const [filteredItems, setFilteredItems] = useState<Item[]>([]);
    const [geocodeError, setGeocodeError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/mock/usdTrade.json');
                console.log("Fetched Items:", response.data);
                setItems(response.data);
            } catch (error) {
                console.error("Error fetching mock items:", error);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (location.latitude && location.longitude) {
            reverseGeocode(location.latitude, location.longitude, GOOGLE_MAPS_API_KEY)
                .then(address => {
                    console.log("Fetched Address:", address);
                    setAddress(address);
                })
                .catch(error => {
                    console.error(error);
                    setGeocodeError('Failed to fetch geocode data');
                });
        }
    }, [location]);

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

                return normalizedItemCity === normalizedAddressCity &&
                    normalizedItemRegion === normalizedAddressRegion &&
                    normalizedItemSubregion === normalizedAddressSubregion;
            });
            console.log("Filtered Items:", filtered);
            setFilteredItems(filtered);
        }
    }, [address, items]);


    const getImageUrl = (imageUrl: string) => {
        try {
            return require(`../../Assets/Img/home/useTrade/${imageUrl}`);
        } catch (error) {
            console.error('Error loading image:', error);
            return '';
        }
    };

    if (error) {
        return <div>Error: {error}</div>;
    }

    if (geocodeError) {
        return <div>Error: {geocodeError}</div>;
    }

    return (
        <div className='pl-6 max-w-2xl mx-auto'>
            <h1 className="flex items-center mb-4">
                <FaLocationDot className="text-red-600 mr-2" />  {address.region} {address.city} {address.subregion}
            </h1>
            {filteredItems.length > 0 ? (
                <ul className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-4'>
                    {filteredItems.map(item => (
                        <li key={item.id} className='rounded-lg p-4 border'>
                            <Link to={`/secondhand/${item.id}`} className='block'>
                                <img src={getImageUrl(item.imgUrl)} alt={item.name}
                                     className='w-full  object-cover rounded-lg mb-2'/>
                                <h2 className='text-sm font-semibold '>{item.name}</h2>
                                <p className='text-base font-extralight'>{item.description}</p>
                                <p className='text-lg font-bold '>{item.price.toLocaleString()}원</p>
                                <p className='text-sm mb-1'>{item.city} {item.region} {item.subregion}</p>
                                <p className='text-sm text-gray-500'>관심 77 · 찜 78 · 채팅 84</p>
                            </Link>
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
