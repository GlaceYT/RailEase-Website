import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/Spinner2.css'; // Import the CSS for the spinner
import Navbar from "../components/navbar";
import { IoChevronBack } from 'react-icons/io5'; // Import a back icon

const AdditionalComplaintDetailsPage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { complaint } = location.state || {}; 
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer); 
  }, []);

  if (!complaint) {
    return <div>Error: No complaint data available.</div>;
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container w-full mx-auto px-4 py-8 bg-gray-100 rounded-xl mt-7">
        <div className="flex items-center mb-8">
          <IoChevronBack className="text-xl cursor-pointer" onClick={() => navigate('/complaints')} />
          <button
            onClick={() => navigate('/complaints')}
            className="text-black text-lg ml-2"
          >
            Back
          </button>
        </div>

        {loading ? (
          <div className="spinner-container">
            <div className="spinner"></div> {/* Spinner element */}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Complaint Details */}
            <section className="bg-white p-6 rounded-lg shadow-md bg-opacity-80">
              <h2 className="text-2xl font-semibold mb-4">Complaint Details</h2>
              <p><strong>PNR:</strong> {complaint.pnr}</p>
              <p><strong>Complaint:</strong> {complaint.complaint}</p>
              <p><strong>Village / City:</strong> {complaint.villageOrCity}</p>
              <p><strong>District:</strong> {complaint.district}</p>
              <p><strong>State:</strong> {complaint.state}</p>
              <p><strong>Type:</strong> {complaint.complaint_type}</p>
              <p><strong>Urgency:</strong> {complaint.urgency}</p>
              <p><strong>Sub-Category:</strong> {complaint.sub_category}</p>
              <p><strong>Additional Details:</strong> {complaint.additional_details}</p>
            </section>

            {/* User Information */}
            <section className="bg-white p-6 rounded-lg shadow-md bg-opacity-80">
              <h2 className="text-2xl font-semibold mb-4">User Information</h2>
              <p><strong>Name:</strong> {complaint.name}</p>
              <p><strong>Username:</strong> {complaint.username}</p>
              <p><strong>Email:</strong> {complaint.email}</p>
              <p><strong>Phone Number:</strong> {complaint.phone_number}</p>
            </section>

            {/* Reference, Timestamp, and Status */}
            <section className="bg-white p-6 rounded-lg shadow-md bg-opacity-80">
              <h2 className="text-2xl font-semibold mb-4">Other Details</h2>
              <p><strong>Reference ID:</strong> {complaint.reference_id}</p>
              <p><strong>Timestamp:</strong> {new Date(complaint.timestamp).toLocaleString()}</p>
              <p><strong>Status:</strong> {complaint.status}</p>
            </section>

            {/* Media Section */}
            <section className="bg-white p-6 rounded-lg shadow-md bg-opacity-80">
              <h2 className="text-2xl font-semibold mb-4">Media</h2>
              {complaint.media && complaint.media.length > 0 ? (
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {complaint.media.map((media: any, index: number) => (
                    <li key={index} className="overflow-hidden shadow-sm bg-white p-2">
                      {media.type.startsWith('image/') ? (
                        <img src={media.url} alt="Media" className="w-full h-32 object-cover" />
                      ) : media.type.startsWith('audio/') ? (
                        <audio controls className="w-full">
                          <source src={media.url} type="audio/mpeg" />
                          Your browser does not support the audio tag.
                        </audio>
                      ) : media.type.startsWith('video/') ? (
                        <video controls className="w-full h-32 object-cover">
                          <source src={media.url} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : null}
                      {media.transcript && <p className="mt-2"><strong>Transcript:</strong> {media.transcript}</p>}
                      <a href={media.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline mt-6">
                        View Media
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No media available.</p>
              )}
            </section>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdditionalComplaintDetailsPage;
