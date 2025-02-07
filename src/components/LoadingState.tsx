import React, { useState, useEffect } from 'react';

export default function LoadingState() {
  const loadingTexts = [
    "Your data is being processed...",
    "Generating your persona card...",
    "We're almost there!",
    "Please wait patiently...",
  ];
  
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => 
        prevIndex === loadingTexts.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="flex flex-col items-center justify-center h-96 bg-white rounded-lg shadow gap-6">
      <div className="animate-spin rounded-full h-12 w-12 border-4 border-indigo-500 border-t-transparent" />
      <div className="text-gray-600 text-lg min-h-8 text-center transition-opacity duration-300">
        {loadingTexts[currentTextIndex]}
      </div>
    </div>
  );
}