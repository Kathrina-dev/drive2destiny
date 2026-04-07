'use client'

import React, { useState } from "react";
import TourGuideCard from "@/components/guidecard";

export interface TourGuide {
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
}

interface TourGuideGridProps {
  guides: TourGuide[];
}

const ALL_SPECIALTIES = ["All", "Adventure", "Heritage", "Nature", "Food", "Photography"];

const TourGuideGrid = ({ guides }: TourGuideGridProps) => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortBy, setSortBy] = useState<"rating" | "price">("rating");

  const filtered = guides
    .filter(
      (g) =>
        activeFilter === "All" ||
        g.specialties.some((s) =>
          s.toLowerCase().includes(activeFilter.toLowerCase())
        )
    )
    .sort((a, b) =>
      sortBy === "rating" ? b.rating - a.rating : a.pricePerDay - b.pricePerDay
    );

  return (
    <div>
      {/* Filter + Sort bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
        {/* Specialty filter tabs */}
        <div className="flex flex-wrap gap-2">
          {ALL_SPECIALTIES.map((spec) => (
            <button
              key={spec}
              onClick={() => setActiveFilter(spec)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeFilter === spec
                  ? "bg-blue-700 text-white"
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200"
              }`}
            >
              {spec}
            </button>
          ))}
        </div>

        {/* Sort control */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as "rating" | "price")}
          className="text-xs border border-slate-200 rounded-xl px-3 py-2 text-slate-600 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer self-start sm:self-auto"
        >
          <option value="rating">Sort: Top Rated</option>
          <option value="price">Sort: Lowest Price</option>
        </select>
      </div>

      {/* Results count */}
      <p className="text-xs text-slate-400 mb-4">
        {filtered.length} guide{filtered.length !== 1 ? "s" : ""} found
        {activeFilter !== "All" ? ` for "${activeFilter}"` : ""}
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-slate-400 text-sm">
          No guides found for this filter. Try another specialty.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((guide, i) => (
            <TourGuideCard key={i} guide={guide} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TourGuideGrid;