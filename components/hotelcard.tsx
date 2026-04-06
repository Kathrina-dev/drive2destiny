import React from 'react'

interface HotelCardProps {
    hotel: {
        name: string,
        location: string,
        price: number,
        rating: number,
        image: string,
    }
}

const HotelCard = ({ hotel }: HotelCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
      
      <img
        src={hotel.image}
        alt={hotel.name}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-black">{hotel.name}</h3>
        <p className="text-gray-500 text-sm">{hotel.location}</p>

        <div className="flex justify-between items-center mt-3">
          <span className="text-blue-600 font-bold">
            ₹{hotel.price}/night
          </span>
          <span className="text-yellow-500 text-sm">
            ⭐ {hotel.rating}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;