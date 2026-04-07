"use client";

import React, { useState, useMemo } from "react";
import HotelGrid from "@/components/gids/hotelgrid";
import CarpoolCard from "@/components/carpoolcard";
import ChatBox from "@/components/chatbox";
import PhotoPost from "@/components/post";
import ReviewCard from "@/components/reviewcard";
import TourGuideGrid from "@/components/gids/guidegrid";
import SearchBar from "@/components/searchbar";
import {
  mockHotels,
  mockRides,
  mockChats,
  mockPosts,
  mockReviews,
  mockGuides,
} from "@/data/mockdata";

const SectionHeader = ({
  title,
  linkLabel = "View all",
  onLinkClick,
}: {
  title: string;
  linkLabel?: string;
  onLinkClick?: () => void;
}) => (
  <div className="flex items-baseline justify-between mb-5">
    <h2 className="text-xl font-bold text-slate-800">{title}</h2>
    <button
      onClick={onLinkClick}
      className="text-sm text-blue-600 font-medium hover:underline"
    >
      {linkLabel} →
    </button>
  </div>
);

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");

  // Filter results based on search query and filter type
  const filteredHotels = useMemo(() => {
    return mockHotels.filter(
      (hotel) =>
        (filterType === "all" || filterType === "hotels") &&
        (hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          hotel.location.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery, filterType]);

  const filteredGuides = useMemo(() => {
    return mockGuides.filter(
      (guide) =>
        (filterType === "all" || filterType === "guides") &&
        (guide.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          guide.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          guide.specialties.some((s) =>
            s.toLowerCase().includes(searchQuery.toLowerCase())
          ))
    );
  }, [searchQuery, filterType]);

  const filteredRides = useMemo(() => {
    return mockRides.filter(
      (ride) =>
        (filterType === "all" || filterType === "transport") &&
        (ride.from.toLowerCase().includes(searchQuery.toLowerCase()) ||
          ride.to.toLowerCase().includes(searchQuery.toLowerCase()) ||
          ride.vehicleType.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery, filterType]);

  return (
    <main className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {/* Search Bar */}
        <section>
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            filterType={filterType}
            setFilterType={setFilterType}
          />
        </section>
  
        {/* Hotels */}
        {(filterType === "all" || filterType === "hotels") && (
          <section>
            <SectionHeader title="Top Hotels" />
            {filteredHotels.length > 0 ? (
              <HotelGrid hotels={filteredHotels} />
            ) : (
              <p className="text-gray-500 text-center py-8">No hotels found matching your search.</p>
            )}
          </section>
        )}

        {/* Tour guides */}
        {(filterType === "all" || filterType === "guides") && (
          <section>
            <SectionHeader title="Discover Local Guides" linkLabel="Become a guide" />
            {filteredGuides.length > 0 ? (
              <TourGuideGrid guides={filteredGuides} />
            ) : (
              <p className="text-gray-500 text-center py-8">No guides found matching your search.</p>
            )}
          </section>
        )}
  
        {/* Carpool */}
        {(filterType === "all" || filterType === "transport") && (
          <section>
            <SectionHeader title="Available Carpools" linkLabel="Post a ride" />
            {filteredRides.length > 0 ? (
              <div className="flex flex-col gap-4">
                {filteredRides.map((ride, i) => (
                  <CarpoolCard key={i} ride={ride} />
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-8">No rides found matching your search.</p>
            )}
          </section>
        )}
  
        {/* Traveller photos - only show when not filtering */}
        {filterType === "all" && (
          <section>
            <SectionHeader title="Traveller Moments" linkLabel="Upload yours" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {mockPosts.map((post, i) => (
                <PhotoPost key={i} post={post} />
              ))}
            </div>
          </section>
        )}
  
        {/* Reviews - only show when not filtering */}
        {filterType === "all" && (
          <section>
            <SectionHeader title="Traveller Reviews" linkLabel="Write a review" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {mockReviews.map((review, i) => (
                <ReviewCard key={i} review={review} />
              ))}
            </div>
          </section>
        )}
  
      </div>
    </main>
  );
}
