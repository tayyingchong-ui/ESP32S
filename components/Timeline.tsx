import React from 'react';
import { MapPin, Clock, Bus, Info } from 'lucide-react';
import { ItineraryItem } from '../types';

interface TimelineProps {
  items: ItineraryItem[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className="relative border-l-2 border-indigo-200 ml-4 md:ml-6 space-y-8 py-4">
      {items.map((item, index) => (
        <div key={index} className="relative pl-8 group">
          {/* Dot */}
          <div className="absolute -left-[9px] top-1 w-4 h-4 bg-indigo-500 rounded-full border-4 border-white shadow-sm group-hover:bg-indigo-600 transition-colors" />
          
          <div className="bg-white p-5 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            {/* Header: Time & Activity */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
              <h3 className="text-lg font-bold text-slate-800">{item.activity}</h3>
              <div className="flex items-center text-indigo-600 font-semibold bg-indigo-50 px-3 py-1 rounded-full text-sm w-fit mt-2 sm:mt-0">
                <Clock className="w-4 h-4 mr-1" />
                {item.time}
              </div>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-slate-600 mb-3">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-slate-400" />
                <span>停留: {item.duration}</span>
              </div>
              
              {item.transport && (
                <div className="flex items-center">
                  <Bus className="w-4 h-4 mr-2 text-slate-400" />
                  <span>交通: {item.transport}</span>
                </div>
              )}
            </div>

            {/* Note */}
            {item.note && (
              <div className="flex items-start bg-amber-50 p-3 rounded-lg text-amber-800 text-sm mb-3">
                <Info className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>{item.note}</span>
              </div>
            )}

            {/* Map Link */}
            <a 
              href={item.googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors"
            >
              <MapPin className="w-4 h-4 mr-1" />
              在 Google Maps 查看位置
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
