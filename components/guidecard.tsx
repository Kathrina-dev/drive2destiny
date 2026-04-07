import React, { useState } from "react";

interface TourGuideCardProps {
  guide: {
    name: string;
    location: string;
    languages: string[];
    specialties: string[];
    pricePerDay: number;
    rating: number;
    reviewCount: number;
    avatar: string;
    verified?: boolean;
    available?: boolean;
  };
}

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5 items-center">
    {[1, 2, 3, 4, 5].map((star) => (
      <span
        key={star}
        className={`text-xs ${
          star <= Math.round(rating) ? "text-amber-400" : "text-slate-200"
        }`}
      >
        ★
      </span>
    ))}
  </div>
);

const getInitials = (name: string) =>
  name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

const TourGuideCard = ({ guide }: TourGuideCardProps) => {
  const [requested, setRequested] = useState(false);

  return (
    <div className="bg-white border border-slate-100 rounded-2xl p-5 hover:shadow-lg transition-all duration-200 flex flex-col gap-4">
      {/* Top: avatar + name + badges */}
      <div className="flex items-start gap-3">
        <div className="relative shrink-0">
          {guide.avatar ? (
            <img
              src={guide.avatar}
              alt={guide.name}
              className="w-14 h-14 rounded-2xl object-cover"
            />
          ) : (
            <div className="w-14 h-14 rounded-2xl bg-blue-900 text-white text-lg font-bold flex items-center justify-center">
              {getInitials(guide.name)}
            </div>
          )}
          {guide.available && (
            <span className="absolute -bottom-1 -right-1 w-3.5 h-3.5 rounded-full bg-emerald-400 border-2 border-white" />
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-1.5 flex-wrap">
            <h3 className="font-bold text-slate-800 text-[15px] leading-tight">
              {guide.name}
            </h3>
            {guide.verified && (
              <span className="text-xs bg-blue-50 text-blue-700 font-medium px-1.5 py-0.5 rounded-md">
                ✓ Verified
              </span>
            )}
          </div>
          <p className="text-slate-400 text-xs mt-0.5 flex items-center gap-1">
            <span>📍</span> {guide.location}
          </p>
          <div className="flex items-center gap-1.5 mt-1.5">
            <StarRating rating={guide.rating} />
            <span className="text-xs font-semibold text-slate-700">
              {guide.rating}
            </span>
            <span className="text-xs text-slate-400">
              ({guide.reviewCount} reviews)
            </span>
          </div>
        </div>
      </div>

      {/* Specialties */}
      <div className="flex flex-wrap gap-1.5">
        {guide.specialties.map((s) => (
          <span
            key={s}
            className="text-xs bg-orange-50 text-orange-600 font-medium px-2.5 py-1 rounded-full"
          >
            {s}
          </span>
        ))}
      </div>

      {/* Languages */}
      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs text-slate-400">Speaks:</span>
        {guide.languages.map((lang) => (
          <span
            key={lang}
            className="text-xs text-slate-600 font-medium bg-slate-100 px-2 py-0.5 rounded-md"
          >
            {lang}
          </span>
        ))}
      </div>

      {/* Footer: price + CTA */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-100 mt-auto">
        <div>
          <span className="text-blue-700 font-bold text-lg">
            ₹{guide.pricePerDay.toLocaleString()}
          </span>
          <span className="text-slate-400 text-xs"> /day</span>
        </div>
        <button
          onClick={() => setRequested(!requested)}
          className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
            requested
              ? "bg-emerald-50 text-emerald-600 border border-emerald-200"
              : "bg-blue-700 hover:bg-blue-800 text-white"
          }`}
        >
          {requested ? "✓ Requested" : "Book Guide"}
        </button>
      </div>
    </div>
  );
};

export default TourGuideCard;