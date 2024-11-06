import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AppOptionsCard from "./appoptionscard";
import Icon1 from "../assets/Icons/1.png";
import Icon2 from "../assets/Icons/2.png";
import Icon3 from "../assets/Icons/3.png";
import Icon4 from "../assets/Icons/4.png";
import Icon5 from "../assets/Icons/5.png";

const AppOptions: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>(""); // State for search query
  const navigate = useNavigate();

  const handleCardClick = (route: string) => {
    navigate(route);
  };

  // Array of options for the cards
  const options = [
    {
      title: "Complaints",
      description: "View and manage your registered complaints.",
      bgColor: "bg-teal-200",
      route: "/complaints",
      image: Icon1,
    },
    {
      title: "Track Train",
      description:
        "Keep an eye on your train's location and status in real-time.",
      bgColor: "bg-blue-200",
      route: "/track-train",
      image: Icon2,
    },
    {
      title: "Train Booking",
      description: "Book your tickets easily and quickly.",
      bgColor: "bg-red-200",
      route: "/train-booking",
      image: Icon3,
    },
    {
      title: "Alerts",
      description:
        "Get real-time notifications and updates about your journey.",
      bgColor: "bg-green-200",
      route: "/alerts",
      image: Icon4,
    },
    {
      title: "Women Safety",
      description: "Ensure your safety with us while traveling.",
      bgColor: "bg-pink-200",
      route: "/women-safety",
      image: Icon5,
    },
  ];

  // Filter options based on search query
  const filteredOptions = options.filter(
    (option) =>
      option.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      option.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="font-sans bg-white px-8 py-12 mx-10">
      {/* Hero Section */}

      {/* Features Section */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Our Features</h2>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {filteredOptions.map((option) => (
          <AppOptionsCard
            key={option.title}
            title={option.title}
            description={option.description}
            bgColor={option.bgColor}
            onClick={() => handleCardClick(option.route)}
            image={option.image}
          />
        ))}
      </div>
    </div>
  );
};

export default AppOptions;
