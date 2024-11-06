import React, { useState, useEffect } from 'react';
import PrimaryNavbar from '../components/navbar';
import PersonalInfo from '../components/PersonalInfo';
import DataPrivacy from '../components/dataPrivacy';

interface User {
    profilePicture: string;
}

const Profile: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Login and Security');
    const [user, setUser] = useState<User | null>(null);

    // Load user info from localStorage on component mount
    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    return (
        <>
            <PrimaryNavbar />
            <div className="profile-page-container flex flex-col lg:flex-row gap-6 p-8">
                
                {/* Left Profile Section */}
                <div className="profile-card bg-white rounded-lg shadow-lg p-6 w-full lg:w-1/3">
                    <div className="profile-image mb-4">
                        <img
                            src={user?.profilePicture ? `data:image/jpeg;base64,${user.profilePicture}` : '/default-avatar.png'}
                            alt="Profile"
                            className="w-16 h-16 object-cover rounded-full"
                        />
                    </div>

                    <div className="tabs">

                        {/* Tab: Personal Information */}
                        <div
                            className={`cursor-pointer py-2 pl-4 ${
                                activeTab === 'Personal Information' ? 'border-l-4 border-blue-500 text-blue-500' : ''
                            }`}
                            onClick={() => setActiveTab('Personal Information')}
                        >
                            Personal Information
                        </div>
                        <hr />

                        {/* Tab: Data and Privacy */}
                        <div
                            className={`cursor-pointer py-2 pl-4 ${
                                activeTab === 'Data and Privacy' ? 'border-l-4 border-blue-500 text-blue-500' : ''
                            }`}
                            onClick={() => setActiveTab('Data and Privacy')}
                        >
                            Data and Privacy
                        </div>
                    </div>
                </div>

                {/* Right Section (Details based on selected tab) */}
                <div className="right-section bg-white rounded-lg shadow-lg p-6 w-full lg:w-2/3">
                    {activeTab === 'Personal Information' && <PersonalInfo />}
                    {activeTab === 'Data and Privacy' && <DataPrivacy />}
                </div>
            </div>
        </>
    );
};

export default Profile;
