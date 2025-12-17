import React, { useState } from 'react';
import { FoodCategory, FoodSpot } from '../types';
import { foodSpots } from '../constants';
import { MapPin, Filter } from 'lucide-react';

const FoodGallery: React.FC = () => {
  const [filter, setFilter] = useState<FoodCategory>(FoodCategory.ALL);

  const filteredSpots = filter === FoodCategory.ALL 
    ? foodSpots 
    : foodSpots.filter(spot => spot.category === filter);

  return (
    <div className="space-y-6">
      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 justify-center">
        {Object.values(FoodCategory).map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center
              ${filter === cat 
                ? 'bg-indigo-600 text-white shadow-md transform scale-105' 
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
          >
            {cat === FoodCategory.ALL && <Filter className="w-3 h-3 mr-1" />}
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSpots.map((spot: FoodSpot) => (
          <div key={spot.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
            <div className="h-48 overflow-hidden relative">
              <img 
                src={spot.imageUrl} 
                alt={spot.name} 
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-indigo-800">
                {spot.category}
              </div>
            </div>
            
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-slate-800 mb-2">{spot.name}</h3>
              <p className="text-slate-600 text-sm mb-4 flex-grow">{spot.description}</p>
              
              <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
                  {spot.location}
                </span>
                <a 
                  href={spot.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-indigo-600 hover:text-indigo-800 p-2 rounded-full hover:bg-indigo-50 transition-colors"
                  title="在 Google Maps 開啟"
                >
                  <MapPin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodGallery;
