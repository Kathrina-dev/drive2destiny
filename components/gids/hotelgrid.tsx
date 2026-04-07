import React from "react";
import HotelCard from "@/components/hotelcard";

export interface Hotel {
  name: string;
  location: string;
  price: number;
  rating: number;
  image: string;
}

interface HotelGridProps {
  hotels: Hotel[];
}

const HotelGrid: React.FC<HotelGridProps> = ({ hotels }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
      {hotels.map((hotel: Hotel, index: number) => (
        <HotelCard key={index} hotel={hotel} />
      ))}
    </div>
  );
};

export default HotelGrid;