import { useEffect, useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const LocationWidget = () => {
  const [locationData, setLocationData] = useState({
    villageOrCity: 'Fetching location...',
    district: '',
    state: '',
    error: ''
  });

  const fetchLocation = async () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await axios.get(
              `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
            );
            const data = response.data;

            // Extract city, district, and state
            const villageOrCity = data.locality || data.city || 'Unknown Village/Town';
            const district = data.localityInfo?.administrative[2]?.name || 'Unknown District';
            const state = data.principalSubdivision || 'Unknown State';

            const location = { villageOrCity, district, state };
            // Save location to localStorage
            localStorage.setItem('location', JSON.stringify(location));

            setLocationData({
              villageOrCity,
              district,
              state,
              error: ''
            });
          } catch (error) {
            setLocationData((prevData) => ({
              ...prevData,
              error: 'India'
            }));
          }
        },
      );
    } else {
      setLocationData((prevData) => ({
        ...prevData,
        error: 'India'
      }));
    }
  };

  useEffect(() => {
    fetchLocation();
  }, []);

  return (
    <div className="location-widget border-2 border-black rounded-xl py-1 px-3 text-black">
      {locationData.error ? (
        <span className="font-medium">{locationData.error}</span>
      ) : (
        <div className="flex items-center space-x-2">
          {/* Icon next to the location */}
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-black" />
          <p className="font-medium">{locationData.villageOrCity}, {locationData.district}, {locationData.state}</p>
        </div>
      )}
    </div>
  );
};

export default LocationWidget;
