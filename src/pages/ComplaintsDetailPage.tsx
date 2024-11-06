import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../css/loadingSpinner.css'; // Add your spinner styles here
import Navbar from "../components/navbar";

const ComplaintsDetailPage: React.FC = () => {
  const [complaintsList, setComplaintsList] = useState<Array<any>>([]);
  const [userInfo, setUserInfo] = useState<any>(null);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Loading state for spinner
  const [searchQuery, setSearchQuery] = useState<string>(''); // State for the search query
  const navigate = useNavigate();

  useEffect(() => {
    const loadUserInfo = () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUserInfo(JSON.parse(storedUser));
      }
    };

    loadUserInfo();
  }, []);

  useEffect(() => {
    if (userInfo?.username) {
      fetchComplaints(userInfo.username);
    }
  }, [userInfo]);

  const fetchComplaints = async (username: string) => {
    try {
      const response = await axios.get(`http://meta.pylex.xyz:10927/api/complaints/user?username=${username}`);
      if (response.status === 200) {
        setComplaintsList(response.data);
      }
    } catch (error) {
      console.error('Error fetching complaints:', error);
      setFetchError('Failed to load complaints. Please try again later.');
    } finally {
      // Set loading to false after fetching complaints
      setLoading(false);
    }
  };

  const navigateToComplaintDetails = (complaint: any) => {
    navigate('/AdditionalComplaintDetailsPage', {
      state: { complaint }, // Pass the complaint object to the details page
    });
  };

  // Function to handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Filtered complaints based on search query
  const filteredComplaints = complaintsList.filter(complaint => {
    const searchTerm = searchQuery.toLowerCase();
    return (
      complaint.complaint_type.toLowerCase().includes(searchTerm) || // Filter by complaint type
      complaint.reference_id?.toString().includes(searchTerm) || // Filter by reference ID
      complaint.status.toLowerCase().includes(searchTerm) // Filter by status
    );
  });

  // Array of colors to cycle through
  const backgroundColors = ['bg-green-100', 'bg-purple-100', 'bg-yellow-100'];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="font-sans bg-white px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-4">Your Registered <br /> Complaints.</h1>

          {/* Search Section */}
          <div className="flex justify-center items-center mb-10">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search your Complaints"
                className="w-full py-3 px-4 pr-16 text-black bg-white border border-gray-300 rounded-full focus:outline-none"
                value={searchQuery}
                onChange={handleSearchChange} // Update the search query on input change
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white px-4 py-2 rounded-full">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Complaints Section */}
        {loading ? (
          <div className="text-center">
            <div className="spinner-container">
              <div className="spinner"></div> {/* Spinner element */}
            </div>
          </div>
        ) : (
          <div>
            {fetchError && (
              <div className="text-center text-red-500 mb-4">
                <p>{fetchError}</p>
              </div>
            )}
            {filteredComplaints.length === 0 ? (
              <div className="text-center">
                <p>No complaints available.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredComplaints.map((complaint, index) => (
                  <div
                    key={complaint.id}
                    onClick={() => navigateToComplaintDetails(complaint)}
                    className={`p-6 rounded-xl shadow-lg cursor-pointer ${backgroundColors[index % backgroundColors.length]}`} // Use index to cycle through colors
                  >
                    <div className="flex items-start">
                      <div className="flex-1">
                        <h2 className="text-xl font-bold mb-1">{complaint.complaint_type || 'Complaint'}</h2>
                        <p className="text-sm text-gray-600 mb-2">{Array.isArray(complaint.complaint) ? complaint.complaint.join(', ') : complaint.complaint || 'No complaint details available'}</p>
                      </div>
                    </div>
                    {/* Status and Reference ID Section */}
                    <div className="mt-4">
                      <div className="flex items-center">
                        <span className="mr-2">
                          <span className={`h-3 w-3 rounded-full inline-block mr-2 ${complaint.status === 'open' ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                          Status: {complaint.status === 'open' ? 'Open' : 'Closed'}
                        </span>
                        <p className="text-gray-500 text-sm">Ref ID: {complaint.reference_id || 'N/A'}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ComplaintsDetailPage;
