import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from '../../Assets/Img/laundry-basket.png'; // Ensure the correct path for the image

const FloatingCartButton = () => {
    return (
        <div className="fixed bottom-6 right-6 flex flex-col items-center lg:bottom-10 lg:right-20">
            <Link to="/cart" className="flex flex-col items-center transition-transform duration-300 hover:-translate-y-2">
                <div className="bg-blue-400 p-4 rounded-full shadow-sm flex items-center justify-center" style={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.6)' }}>
                    <img className="h-10 w-10 lg:h-16 lg:w-16" src={ShoppingCart} alt="Check Laundry" />
                </div>
                <div className="mt-2 bg-blue-400 border rounded-lg p-1 shadow-lg w-full flex justify-center text-sm font-semibold">
                    <span className="text-white">세탁물 확인</span>
                </div>
            </Link>
        </div>
    );
};

export default FloatingCartButton;