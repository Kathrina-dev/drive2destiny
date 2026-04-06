import React from "react";

interface ReviewCardProps {
    review: {
        user: string,
        rating: number,
        comment: string,
        location?: string;
        tripCount?: number;
    }

}
      
const getInitials = (name: string) =>
name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

const ReviewCard = ({ review }: ReviewCardProps) => {
    return (
      <div className="bg-white border border-slate-100 rounded-2xl p-5 hover:shadow-md transition-shadow duration-200">
      {/* Top row */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center shrink-0">
            {getInitials(review.user)}
          </div>
          <div>
            <p className="font-semibold text-slate-800 text-sm">{review.user}</p>
            {review.tripCount !== undefined && (
                <p className="text-slate-400 text-xs">
                {review.tripCount} trip{review.tripCount !== 1 ? "s" : ""} via Drive2Destiny
              </p>
            )}
          </div>
        </div>
        <p className="text-yellow-500">⭐ {review.rating}</p>
      </div>

      {/* Comment */}
      <p className="text-slate-500 text-sm leading-relaxed">{review.comment}</p>

      {/* Location */}
      {review.location && (
          <div className="mt-2 border-t border-slate-100">
          <span className="text-xs font-medium text-blue-600">
            📍 {review.location}
          </span>
        </div>
      )}
    </div>
  );
};

export default ReviewCard;