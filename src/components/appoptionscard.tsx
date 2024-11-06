import React from 'react';

interface AppOptionsCardProps {
  title: string;
  description: string;
  bgColor: string;
  onClick: () => void;
  image: string;
}

const AppOptionsCard: React.FC<AppOptionsCardProps> = ({
  title,
  description,
  bgColor,
  onClick,
  image,
}) => {
  return (
    <div
      className={`${bgColor} p-4 rounded-xl shadow-lg text-center cursor-pointer`}
      onClick={onClick}
    >
      <div className="w-200 h-200 mb-4 rounded-lg overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          style={{ width: '250px', height: '200px' }} // Set fixed dimensions
        />
      </div>
      <h2 className="text-lg font-bold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default AppOptionsCard;
