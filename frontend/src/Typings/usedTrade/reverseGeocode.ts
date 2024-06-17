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
        // Geocoding API 호출하여 위도와 경도를 사용해 주소를 역지오코딩
        const response = await axios.get<GeocodeResult>(
          `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
        );

        // 결과 배열이 없거나 비어있는 경우 처리
        if (!response.data.results || response.data.results.length === 0) {
            console.log('error getting geocode results.');
        }

        let city = 'Unknown City';
        let region = 'Unknown Region';
        let subregion = 'Unknown Subregion';

        // 결과 배열을 순회하며 필요한 주소 구성 요소 찾기
        for (const result of response.data.results) {
            // 주소는 많기 떄문에 배열을 선택해서 가져오면 오류남 코드 수정
            const addressComponents = result.address_components;
            for (const component of addressComponents) {
                console.log("Address Component:", component);
                if (component.types.includes("locality") && component.long_name !== '대한민국') {
                    city = component.long_name;
                } else if (component.types.includes("administrative_area_level_1") && component.short_name !== '대한민국') {
                    region = component.short_name;
                } else if ((component.types.includes("sublocality") || component.types.includes("neighborhood")) && component.long_name !== '대한민국') {
                    subregion = component.long_name;
                }
            }

            // 필요한 모든 구성 요소를 찾은 경우 순회 중단
            if (city !== 'Unknown City' && region !== 'Unknown Region' && subregion !== 'Unknown Subregion') {
                break;
            }
        }

        console.log(`Parsed Address: city=${city}, region=${region}, subregion=${subregion}`);
        return { city, region, subregion };
    } catch (error) {
        console.error("Full error:", error);
        if (axios.isAxiosError(error)) {
            console.error("Axios error response data:", error.response?.data);
        } else {
            console.error("Unexpected error:", error);
        }
        throw new Error('Failed to fetch geocode data');
    }
};

export default reverseGeocode;
