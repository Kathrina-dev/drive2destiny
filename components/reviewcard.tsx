import React from "react";

interface ReviewCardProps {
    review: {
        user: string,
        rating: number,
        comment: string,
    }

}

const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md">
      <h4 className="font-semibold">{review.user}</h4>
      <p className="text-yellow-500">⭐ {review.rating}</p>
      <p className="text-gray-600 mt-2 text-sm">
        {review.comment}
      </p>
    </div>
  );
};

export default ReviewCard;