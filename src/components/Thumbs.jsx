import React from 'react';

const Thumbs = ({ images, onThumbClick, currentIndex }) => {
    return (
        <div className="flex space-x-1">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`relative w-20 h-20 cursor-pointer ${index === currentIndex ? 'border-2 border-gray-400' : ''}`}
                    onClick={() => onThumbClick(index)}
                >
                    <img
                        src={image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-20 h-20 object-cover px-2 py-2"
                    />
                </div>
            ))}
        </div>
    );
};

export default Thumbs;
