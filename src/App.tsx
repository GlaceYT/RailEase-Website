import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import SignUp from './pages/signup';
import ComplaintsDetailPage from './pages/ComplaintsDetailPage';
import AdditionalComplaintDetailsPage from './pages/AdditionalComplaintDetailsPage';
import AppOptions from './components/appotions';
import Contact from './pages/conact';
import Profile from './pages/profile';
import MenuBar from './components/menubar';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import './App.css';

const App: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false); // Close the menu
    };

    return (
        <Router>
            <div className="app-container">
                {/* Overlay - appears when menu is open */}
                {isMenuOpen && <div className="overlay" onClick={closeMenu}></div>}

                {/* Dragger button to open/close the menu */}
                <button 
                  onClick={toggleMenu} 
                  className={`menu-toggle-dragger ${isMenuOpen ? 'opened' : ''} ${isMenuOpen ? 'hide-button' : 'show-button'}`}
                >
                    {isMenuOpen ? <IoArrowBack /> : <IoArrowForward />}
                </button>

                {/* The MenuBar itself */}
                <MenuBar isOpen={isMenuOpen} onClose={toggleMenu} />

                {/* App Routes */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/complaints" element={<ComplaintsDetailPage />} />
                    <Route path="/AdditionalComplaintDetailsPage" element={<AdditionalComplaintDetailsPage />} />
                    <Route path="/options" element={<AppOptions />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
