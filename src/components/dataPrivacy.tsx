import React from 'react';
import { AiFillEdit } from 'react-icons/ai';

const DataPrivacy: React.FC = () => {
    return (
        <div>
            <h2 className="text-lg font-bold mb-4">Data and Privacy</h2>

            {/* Terms and Conditions */}
            <div className="flex justify-between items-center mb-4">
                <p className="font-semibold">Terms and Conditions</p>
                <AiFillEdit className="text-blue-500 cursor-pointer" size={24} />
            </div>
            <hr className="border-gray-300 mb-4" />

            {/* Privacy Policy */}
            <div className="flex justify-between items-center mb-4">
                <p className="font-semibold">Privacy Policy</p>
                <AiFillEdit className="text-blue-500 cursor-pointer" size={24} />
            </div>
            <hr className="border-gray-300 mb-4" />

            {/* Clear Data */}
            <div className="flex justify-between items-center mb-4">
                <p className="font-semibold">Clear Data</p>
                <AiFillEdit className="text-blue-500 cursor-pointer" size={24} />
            </div>
        </div>
    );
};

export default DataPrivacy;