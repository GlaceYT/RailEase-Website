import React, { useEffect, useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';

interface User {
  userId: string;
  username: string;
  name: string;
  phoneNumber: string;
  email: string;
  profilePicture: string;
}

const PersonalInfo: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  // Load user info from localStorage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Personal Information</h2>

      {user && (
        <>
          {/* Profile Avatar */}
          <div className="flex justify-between items-center mb-4">
            <div className="profile-avatar flex items-center gap-4">
              <img
                src={user.profilePicture ? `data:image/jpeg;base64,${user.profilePicture}` : '/default-avatar.png'}
                alt="Profile"
                className="w-16 h-16 object-cover rounded-full"
              />
              <AiFillEdit className="text-blue-500 cursor-pointer" size={24} />
            </div>
          </div>
          <hr className="border-gray-300 mb-4" />

          {/* Name */}
          <div className="flex justify-between items-center mb-4">
            <p className="font-semibold">Name</p>
            <p>{user.name}</p>
            <AiFillEdit className="text-blue-500 cursor-pointer" size={24} />
          </div>
          <hr className="border-gray-300 mb-4" />

          {/* Username */}
          <div className="flex justify-between items-center mb-4">
            <p className="font-semibold">Username</p>
            <p>{user.username}</p>
            <AiFillEdit className="text-blue-500 cursor-pointer" size={24} />
          </div>
          <hr className="border-gray-300 mb-4" />

          {/* Email */}
          <div className="flex justify-between items-center mb-4">
            <p className="font-semibold">Email</p>
            <p>{user.email}</p>
            <AiFillEdit className="text-blue-500 cursor-pointer" size={24} />
          </div>
          <hr className="border-gray-300 mb-4" />

          {/* Phone */}
          <div className="flex justify-between items-center mb-4">
            <p className="font-semibold">Phone</p>
            <p>{user.phoneNumber}</p>
            <AiFillEdit className="text-blue-500 cursor-pointer" size={24} />
          </div>
          <hr className="border-gray-300 mb-4" />

          {/* Password */}
          <div className="flex justify-between items-center mb-4">
            <p className="font-semibold">Password</p>
            <p>********</p> {/* Do not show actual password */}
            <AiFillEdit className="text-blue-500 cursor-pointer" size={24} />
          </div>
        </>
      )}
    </div>
  );
};

export default PersonalInfo;
