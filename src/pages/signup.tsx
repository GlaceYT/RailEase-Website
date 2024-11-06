import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/loadingSpinner.css"; // Import the spinner CSS
import { FiPlus } from "react-icons/fi";

const SignUp: React.FC = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Loading state for spinner
  const navigate = useNavigate();

  // Check if user is already logged in, if so, redirect to home/dashboard
  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      navigate("/"); // Redirect to homepage or dashboard
    }
  }, [navigate]);

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Start loading spinner

    // Convert the profile picture to base64 if it's provided
    if (profilePicture) {
      const reader = new FileReader();
      reader.readAsDataURL(profilePicture);
      reader.onloadend = () => {
        const base64String = reader.result as string;

        // Strip the "data:image/jpeg;base64," or "data:image/png;base64," prefix
        const base64WithoutPrefix = base64String.split(",")[1];

        submitSignup(base64WithoutPrefix);
      };
    } else {
      submitSignup(); // If no profile picture, proceed without sending it
    }       
  };

  const submitSignup = async (profilePictureBase64 = "") => {
    try {
      const response = await axios.post(
        "https://http://utopia.pylex.xyz:10838/api/register",
        { 
          name,
          username,
          email,
          phoneNumber,
          password,
          profilePicture: profilePictureBase64, // Send the raw base64 string (no prefix)
        }
      );

      const { token, user } = response.data;

      // Save token and user info in localStorage, just like in login
      localStorage.setItem("authToken", token);
      localStorage.setItem(
        "user",
        JSON.stringify({
          userId: user.userId,
          name: user.name,
          phoneNumber: user.phoneNumber,
          email: user.email,
          profilePicture: user.profilePicture, // Store base64 string without prefix
        })
      );

      // Redirect to homepage or dashboard
      navigate("/");
    } catch (err) {
      console.error("Signup failed", err);
      setError("Failed to register");
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center h-[650px] w-[400px] bg-white rounded-3xl shadow-lg p-8 lg:p-10">
          <h2 className="text-2xl lg:text-2xl font-bold text-center">
            Sign Up
          </h2>
          <form className="mt-6 space-y-4 w-full" onSubmit={handleSignup}>
            <div className="my-4 flex justify-center">
              <label
                htmlFor="profile-upload"
                className="cursor-pointer relative"
              >
                <img
                  src={
                    profilePicture
                      ? URL.createObjectURL(profilePicture)
                      : "/src/assets/images/default-avatar.png"
                  }
                  alt="avatar"
                  className="w-20 h-20 rounded-full object-cover"
                />
                <input
                  type="file"
                  id="profile-upload"
                  className="hidden"
                  onChange={(e) =>
                    setProfilePicture(e.target.files?.[0] || null)
                  }
                />
                <span className="absolute bottom-0 right-0 bg-[#1971c2] text-white text-sm rounded-full p-2 cursor-pointer">
                  <FiPlus className="w-5 h-5" /> {/* React Icon */}
                </span>
              </label>
            </div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border-2 border-black rounded-xl text-sm lg:text-base"
              placeholder="Name"
              required
            />
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border-2 border-black rounded-xl text-sm lg:text-base"
              placeholder="Username"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border-2 border-black rounded-xl text-sm lg:text-base"
              placeholder="Email"
              required
            />
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border-2 border-black rounded-xl text-sm lg:text-base"
              placeholder="Phone Number"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border-2 border-black rounded-xl text-sm lg:text-base"
              placeholder="Password"
              required
            />

            {error && <p className="text-red-600">{error}</p>}
            <button
              type="submit"
              className={`w-full flex justify-center bg-[#1971c2] text-white py-3 px-4 rounded-xl text-lg font-medium transition-all duration-200 
                ${
                  loading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#155a96]"
                }`}
              disabled={loading}
            >
              {loading ? <span className="loader"></span> : "Register"}
            </button>
          </form>
          <div className="my-6 flex items-center justify-center space-x-2 w-full">
            <span className="block h-px w-full bg-gray-300"></span>
          </div>

          <div className="text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-[#1971c2] font-medium hover:underline"
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
