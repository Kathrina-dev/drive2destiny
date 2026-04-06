import React from "react";

interface CarpoolCardProps {
    ride: {
        from: string,
        to: string,
        date: string,
        time: string,
        price: number,
        seats?: number;
        vehicleType?: string;
    }
}


const CarpoolCard = ({ ride }: CarpoolCardProps) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md flex flex-col md:flex-row justify-between gap-4">
      
      <div>
        <h3 className="font-semibold text-lg text-black">
          {ride.from} → {ride.to}
        </h3>
        <p className="text-sm text-gray-500">
          {ride.date} • {ride.time}
        </p>
      </div>

      <div className="flex items-center justify-between md:justify-end gap-4">
        <span className="font-bold text-blue-600">
          ₹{ride.price}
        </span>

        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          Join Ride
        </button>
      </div>
    </div>
  );
};

export default CarpoolCard;