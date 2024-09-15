import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { DigestiveHealth } from '../javascript/data/DigestiveHealth';

const PlantDetails = () => {
  const { name } = useParams(); // Get the plant name from the URL
  const [plant, setPlant] = useState(null);
  const [showVideo, setShowVideo] = useState(true); // Show video by default

  useEffect(() => {
    // Find the plant by name
    const foundPlant = DigestiveHealth.find(p => p.name.toLowerCase() === name.toLowerCase());
    if (foundPlant) {
      setPlant(foundPlant);
    } else {
      console.error("Plant not found with name:", name);
    }
  }, [name]);

  if (!plant) {
    return <div className="text-center mt-8 text-red-500">Plant not available</div>;
  }

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image and Media Section */}
        <div className="lg:w-1/2 bg-gray-100 p-6">
          {/* Display the first image */}
          <img
            src={plant.images[0]}
            alt={plant.name}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <div className="flex justify-center mb-4">
            <button
              onClick={() => setShowVideo(true)}
              className={`px-4 py-2 mr-2 ${showVideo ? 'bg-green-700' : 'bg-gray-300'} text-white rounded-lg`}
            >
              Video
            </button>
            <button
              onClick={() => setShowVideo(false)}
              className={`px-4 py-2 ${!showVideo ? 'bg-green-700' : 'bg-gray-300'} text-white rounded-lg`}
            >
              3D Model
            </button>
          </div>
          {/* Video or 3D model display logic */}
          {showVideo ? (
            plant.video ? (
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                <iframe
                  width="100%"
                  height="100%"
                  src={plant.video}
                  title={`${plant.name} Video`}
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-center">
                <p className="text-gray-600">Video coming soon!</p>
              </div>
            )
          ) : (
            plant.model ? (
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center">
                <iframe
                  width="100%"
                  height="100%"
                  src={plant.model}
                  title={`${plant.name} 3D Model`}
                  frameBorder="0"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-center">
                <p className="text-gray-600">3D Model coming soon!</p>
              </div>
            )
          )}
        </div>

        {/* Details Section */}
        <div className="lg:w-1/2 p-6">
          <h1 className="text-3xl font-bold mb-4">{plant.name}</h1>
          <p className="text-lg font-semibold text-gray-700 mb-2">Botanical Name: {plant.botanicalName}</p>
          <p className="text-gray-600 mb-4">{plant.uses}</p>
          <h2 className="text-xl font-semibold mb-2">How to Use:</h2>
          <p className="text-gray-600 mb-4">{plant.howToUse}</p>
          <h2 className="text-xl font-semibold mb-2">Precautions:</h2>
          <p className="text-gray-600">{plant.precautions}</p>
        </div>
      </div>

      {/* Back to Home Link */}
      <div className="text-center mt-8">
        <Link
          to="/"
          className="text-green-700 hover:text-green-500 transition duration-300"
        >
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PlantDetails;
