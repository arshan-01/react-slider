import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Viewer = ({ image }) => {
    return (
        <div className="relative w-full max-w-xs mx-auto">
            <img 
                src={image} 
                alt="Product" 
                className="w-full h-full object-cover" 
                data-testid="catalog-view"
            />
        </div>
    );
};

export default Viewer;
