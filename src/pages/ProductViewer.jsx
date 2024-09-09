import React, { useState, useEffect } from 'react';
import Viewer from '../components/Viewer';
import Thumbs from '../components/Thumbs';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ProductViewer = () => {
    const images = [
        'https://images.unsplash.com/photo-1725359642413-9061e10b7e85?q=80&w=800&h=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=800&h=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://plus.unsplash.com/premium_photo-1683910767532-3a25b821f7ae?q=80&w=800&h=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1712652056542-58ca6baac1d3?q=80&w=800&h=800&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isSlideshowActive, setIsSlideshowActive] = useState(false);

    // Handle next image
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Handle previous image
    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    // Handle thumbnail click
    const handleThumbClick = (index) => {
        setCurrentIndex(index);
    };

    // Handle slideshow toggle
    const handleSlideshowToggle = (e) => {
        setIsSlideshowActive(e.target.checked);
    };

    // Slideshow effect
    useEffect(() => {
        if (isSlideshowActive) {
            const intervalId = setInterval(() => {
                handleNext();
            }, 3000); // Change image every 3 seconds
            return () => clearInterval(intervalId);
        }
    }, [isSlideshowActive]);

    return (
        <div className="flex flex-col items-center ">
            <div className='border-2 p-20 shadow-lg relative'>
            <Viewer 
                image={images[currentIndex]} 
                onPrev={handlePrev} 
                onNext={handleNext} 
            />
            <div className="flex items-center mt-4">
                <button 
                    onClick={handlePrev} 
                    className="absolute left-[4%] border-2 border-green-120 p-2 rounded-full mr-2 text-green-500 hover:bg-green-100"
                    data-testid="prev-btn"
                >
                    <FaArrowLeft size={24} />
                </button>
                <Thumbs 
                    images={images} 
                    onThumbClick={handleThumbClick} 
                    currentIndex={currentIndex} 
                />
                <button 
                    onClick={handleNext} 
                    className="absolute right-[4%] border-2 border-green-120 p-2 rounded-full ml-2 text-green-500 hover:bg-green-100"
                    data-testid="next-btn"
                >
                    <FaArrowRight size={24} />
                </button>
            </div>
            </div>
           
            <div className="mt-4 flex items-center space-x-2">
    <input 
        type="checkbox" 
        id="slideshow-toggle" 
        data-testid="toggle-slideshow" 
        onChange={handleSlideshowToggle} 
        className="form-checkbox h-5 w-5 text-blue-600 border-gray-300 rounded"
    />
    <label htmlFor="slideshow-toggle" className="text-lg font-medium">
        Start Slide Show
    </label>
</div>

        </div>
    );
};

export default ProductViewer;
