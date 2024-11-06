import { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import MenuBar from "./menubar";
import LocationWidget from "./LocationWidget"; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  const goToProfile = () => {
    navigate('/profile');
  };

  return (
    <>
      <div className="navbar h-12 py-8 flex justify-between items-center px-4 lg:px-10 z-50">
        <div className="nav-left flex gap-4 justify-center items-center">
          <div className="menu-bar" onClick={toggleMenu}>
            <IoMenu className="w-8 h-8 lg:w-10 lg:h-8 cursor-pointer" />
          </div>
          <div className="heading">
            <h1 className="font-bold text-xl lg:text-2xl">RailEase</h1>
          </div>
        </div>

        <div className="nav-right flex justify-center items-center gap-4 lg:gap-10">
          {/* Hide LocationWidget on mobile and show on larger screens */}
          <div className="hidden lg:block">
            <LocationWidget />
          </div>

          {user ? (
            <div className="profile-info flex items-center gap-2 lg:gap-3">
              <img
                onClick={goToProfile}
                src={user.profilePicture ? `data:image/jpeg;base64,${user.profilePicture}` : '/default-avatar.png'}
                alt="Profile"
                className="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover cursor-pointer"
              />
              <div onClick={goToProfile} className="text-black cursor-pointer">
                <span className="block font-medium">{user.name}</span>
                <span className="block text-sm">{user.phoneNumber}</span>
              </div>
              <button onClick={handleLogout} className="flex items-center text-black">
                <FiLogOut className="mr-1" />
              </button>
            </div>
          ) : (
            <Link to="/login">
              <button className="border-2 border-black rounded-xl px-3 py-1 text-sm lg:px-5 lg:py-1 lg:text-base text-white font-medium bg-black">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>

      {/* MenuBar component */}
      <MenuBar isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  );
};

export default Navbar;
