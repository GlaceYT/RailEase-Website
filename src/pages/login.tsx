import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/Spinner.css"; // Import the spinner CSS

const Login: React.FC = () => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Start loading spinner
    try {
      const response = await axios.post('http://utopia.pylex.xyz:10838/api/login', { identifier, password });
      const { token, user } = response.data;

      // Store user data in localStorage
      localStorage.setItem('authToken', token);
      localStorage.setItem('user', JSON.stringify({
        userId: user.userId,
        username: user.username,
        name: user.name,               
        phoneNumber: user.phoneNumber, 
        email: user.email,
        profilePicture: user.profilePicture, 
      }));

      // Redirect to homepage or dashboard
      navigate('/');
    } catch (err) {
      console.error('Login failed', err);
      setError('Invalid credentials');
    } finally {
      setLoading(false); // Stop loading spinner
    }
  };

  return (
    <>
      <div className="bg-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8  min-h-screen">
        <div className="flex flex-col items-center justify-center h-auto w-full max-w-md bg-white rounded-3xl shadow-lg p-6 sm:p-8 lg:p-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-center">Login</h2>
          <p className="text-center text-black mt-2 font-medium">
            Welcome back! Please enter your credentials to sign in.
          </p>
          <form className="mt-6 space-y-4 w-full" onSubmit={handleLogin}>
            <input
              type="text"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border-2 border-black rounded-xl text-sm sm:text-base"
              placeholder="Email / Phone / Username"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-4 py-3 border-2 border-black rounded-xl text-sm sm:text-base"
              placeholder="Password"
              required
            />
            {error && <p className="text-red-600 text-center">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center bg-[#1971c2] text-white py-3 px-4 rounded-xl text-lg font-medium transition-all duration-200 
              ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#155a96]"}`}
            >
              {loading ? <span className="loader"></span> : "Sign in"}
            </button>
          </form>

          <div className="mt-6 flex items-center justify-center space-x-2 w-full">
            <span className="block h-px w-full bg-gray-300"></span>
          </div>

          <p className="text-center text-gray-600 mt-4">
            New User?{" "}
            <a href="/signup" className="text-[#1971c2] font-medium hover:underline">
              SignUp
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
