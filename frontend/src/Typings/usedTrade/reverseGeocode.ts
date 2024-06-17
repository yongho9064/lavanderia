import axios from 'axios';

interface AddressComponent {
    long_name: string;
    short_name: string;
    types: string[];
}

interface GeocodeResult {
    results: {
        address_components: AddressComponent[];
        formatted_address: string;
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

        if (!response.data.results || response.data.results.length === 0) {
            console.error('No results found')
        }

        let city = 'Unknown City';
        let region = 'Unknown Region';
        let subregion = 'Unknown Subregion';

        // 결과 배열을 순회하며 필요한 주소 구성 요소 찾기
        for (const result of response.data.results) {
            const addressComponents = result.address_components;
            let foundCity = false;
            let foundRegion = false;
            let foundSubregion = false;

            for (const component of addressComponents) {
                // 우편번호와 'Korea'는 제외
                if (component.types.includes("postal_code") || component.long_name.includes("Korea")) continue;
                console.log("Address Component:", component);

                // 시/군/구 정보를 설정
                if ((component.types.includes("locality") || component.types.includes("administrative_area_level_2")) && !foundCity) {
                    city = component.long_name;
                    foundCity = true;
                }
                // 도/시 정보를 설정
                else if (component.types.includes("administrative_area_level_1") && !foundRegion) {
                    region = component.long_name;
                    foundRegion = true;
                }
                // 하위 지역 정보를 설정
                else if ((component.types.includes("sublocality") || component.types.includes("neighborhood")) && !foundSubregion) {
                    subregion = component.long_name;
                    foundSubregion = true;
                }
                console.log(component.long_name);  // 디버깅용 로그
            }

            // 필요한 모든 구성 요소를 찾은 경우 순회 중단
            if (foundCity && foundRegion && foundSubregion) {
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
