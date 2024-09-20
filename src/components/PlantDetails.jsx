import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PLANTS } from '../javascript/data/PLANTS.js';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const PlantDetails = () => {
  const { name } = useParams(); // Get the plant name from the URL
  const [plant, setPlant] = useState(null);
  const [comments, setComments] = useState(""); // State to manage comments

  useEffect(() => {
    // Find the plant by name
    const foundPlant = PLANTS.find(p => p.name.toLowerCase() === name.toLowerCase());
    if (foundPlant) {
      setPlant(foundPlant);
    } else {
      console.error("Plant not found with name:", name);
    }
  }, [name]);

  if (!plant) {
    return <div className="text-center mt-8 text-red-500">Plant not available</div>;
  }

  const handleCommentChange = (e) => {
    setComments(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    // Logic to handle comment submission can be added here
    alert('Comment submitted: ' + comments);
    setComments(""); // Clear the comment input
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex flex-col lg:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image Carousel Section */}
        <div className="lg:w-1/2 bg-gray-100 p-6">
          <Carousel
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            className="w-full h-64"
          >
            {plant.images.map((image, index) => (
              <div key={index} className="flex items-center justify-center">
                <img
                  src={image}
                  alt={`${plant.name} ${index + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            ))}
          </Carousel>
        </div>

        {/* Details Section */}
        <div className="lg:w-1/2 p-6">
          <h1 className="text-3xl font-bold mb-4 text-forest-green">{plant.name}</h1>
          <p className="text-lg font-semibold text-olive-green mb-2">Botanical Name: {plant.botanicalName}</p>
          <p className="text-sea-green mb-4">Origin: {plant.origin}</p>
          <p className="text-gray-600 mb-4">Category: {plant.category}</p>
          <p className="text-gray-700 mb-4">{plant.uses}</p>
          <h2 className="text-xl font-semibold mb-2 text-forest-green">How to Use:</h2>
          <p className="text-gray-600 mb-4">{plant.howToUse}</p>
          <h2 className="text-xl font-semibold mb-2 text-forest-green">Precautions:</h2>
          <p className="text-gray-600">{plant.precautions}</p>
        </div>

        {/* Comments Section */}
        <div className="lg:w-1/2 p-6 bg-light-green rounded-lg">
          <h2 className="text-xl font-semibold mb-4 text-forest-green">Discuss About This Plant:</h2>
          <form onSubmit={handleCommentSubmit} className="mb-4">
            <textarea
              value={comments}
              onChange={handleCommentChange}
              rows="4"
              placeholder="Share your thoughts or ask questions..."
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
            <button
              type="submit"
              className="mt-2 px-4 py-2 bg-forest-green text-white rounded-lg hover:bg-sea-green transition duration-300"
            >
              Submit
            </button>
          </form>
          {/* Placeholder for comments list */}
          <div className="text-gray-600">
            <p><strong>User1:</strong> This plant is great for reducing high blood pressure!</p>
            <p><strong>User2:</strong> Can anyone share more uses for this plant?</p>
          </div>
        </div>
      </div>

      {/* Back to Home Link */}
      <div className="text-center mt-8">
        <Link
          to="/"
          className="text-forest-green hover:text-sea-green transition duration-300"
        >
          &larr; Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PlantDetails;
