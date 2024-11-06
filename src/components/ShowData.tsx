import { useEffect, useState } from 'react';

const ShowData = () => {
  const [userData, setUserData] = useState({
    userId: '',
    username: '',
    name: '',
    phoneNumber: '',
    email: '',
    profilePicture: ''
  });

  const [locationData, setLocationData] = useState({
    villageOrCity: '',
    district: '',
    state: ''
  });

  useEffect(() => {
    // Retrieve user info from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }

    // Retrieve location info from localStorage
    const storedLocation = localStorage.getItem('location');
    if (storedLocation) {
      setLocationData(JSON.parse(storedLocation));
    }
  }, []);

  return (
    <div className="show-data border-2 border-gray-500 rounded-xl p-4">
      <h2 className="text-lg font-bold mb-4">Saved User Information</h2>
      <p><strong>User ID:</strong> {userData.userId}</p>
      <p><strong>Username:</strong> {userData.username}</p>
      <p><strong>Name:</strong> {userData.name}</p>
      <p><strong>Phone Number:</strong> {userData.phoneNumber}</p>
      <p><strong>Email:</strong> {userData.email}</p>
      <img
        src={userData.profilePicture}
        alt="Profile"
        className="w-20 h-20 rounded-full mt-2"
      />

      <h2 className="text-lg font-bold mt-6 mb-4">Saved Location Information</h2>
      <p><strong>Village/City:</strong> {locationData.villageOrCity}</p>
      <p><strong>District:</strong> {locationData.district}</p>
      <p><strong>State:</strong> {locationData.state}</p>
    </div>
  );
};

export default ShowData;
