import { IoClose } from "react-icons/io5";
import React from "react";
import { useNavigate } from "react-router-dom";
import './MenuBar.css'; // External CSS for custom animations
import { CircleUserRound, ClipboardPenLine, House, MailSearch } from 'lucide-react';
interface MenuBarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuBar: React.FC<MenuBarProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
    onClose();
  };

  const goToComplaints = () => {
    navigate('/complaints');
    onClose();
  };

  const goToProfile = () => {
    navigate('/profile');
    onClose();
  };

  const goToContact = () => {
    navigate('/contact');
    onClose();
  };

  return (
    <div className={`menu-bar ${isOpen ? "menu-bar-open" : ""}`}>
      <div className="menu-bar-header">
        <button onClick={onClose} className="close-btn">
          <IoClose />
        </button>
      </div>
      <ul className="menu-list">
        <li onClick={goToHome} className="menu-item">
        <House size={36} strokeWidth={2} className="icon" />

          <span>Home</span>
        </li>
        <li onClick={goToComplaints} className="menu-item">
        <ClipboardPenLine size={36} strokeWidth={2} className="icon" />
          <span>Complaints</span>
        </li>
        <li onClick={goToProfile} className="menu-item">
        <CircleUserRound  size={36} strokeWidth={2} className="icon" />
          <span>Profile</span>
        </li>
        <li onClick={goToContact} className="menu-item">
        <MailSearch size={36} strokeWidth={2} className="icon" />
          <span>Contact</span>
        </li>
      </ul>
    </div>
  );
};

export default MenuBar;
