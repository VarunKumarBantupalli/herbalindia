import React from "react";
import { DigestiveHealth } from "../javascript/data/digestiveHealth";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Header />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Explore Our Herbal Plants</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {DigestiveHealth.map((plant) => (
            <div
              key={plant.name}
              className="border p-4 rounded-lg shadow-lg hover:shadow-xl cursor-pointer"
              onClick={() => navigate(`/plant/${plant.name.toLowerCase()}`)}
            >
              {/* Display the first image in the images array */}
              <img 
                src={plant.images[0]} 
                alt={plant.name} 
                className="w-full h-48 object-cover rounded" 
              />
              <h2 className="text-2xl mt-4">{plant.name}</h2>
              <p className="text-gray-600 font-italic mb-2">{plant.botanicalName}</p>
              <p className="text-gray-600">{plant.uses}</p>
              <p className="text-gray-600"><strong>How to Use: </strong>{plant.howToUse}</p>
              <p className="text-gray-600"><strong>Precautions: </strong>{plant.precautions}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
