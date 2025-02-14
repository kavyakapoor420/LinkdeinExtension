import React from 'react';
import sampleImage from '../../assets/ExtensionImage.jpg';

const FeatureSection = () => {
  return (
    <section className="w-full px-6 py-12 bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        
        {/* Left Side - Image with Background */}
        <div className="relative w-full flex justify-center">
          <div className="relative w-[90%] md:w-[80%]">
            <img src={sampleImage} alt="Feature" className="w-full rounded-md shadow-lg" />
            <div className="absolute inset-0 bg-black opacity-30 rounded-lg"></div>
          </div>
        </div>

        {/* Right Side - Description */}
        <div className="text-white">
          <h2 className="text-4xl font-bold mb-4">1. Hide Abusive Messages</h2>
          <p className="text-lg text-gray-300">
            Harassing messages are hidden from the user while remaining stored for evidence. 
            The harasser remains unaware, reducing the risk of retaliation and protecting the user from distress.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
