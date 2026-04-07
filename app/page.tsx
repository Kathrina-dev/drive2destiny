import React from "react";
import HotelGrid from "@/components/gids/hotelgrid";
import CarpoolCard from "@/components/carpoolcard";
import ChatBox from "@/components/chatbox";
import PhotoPost from "@/components/post";
import ReviewCard from "@/components/reviewcard";
import TourGuideGrid from "@/components/gids/guidegrid";
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
  return (
    <main className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
  
        {/* Hotels */}
        <section>
          <SectionHeader title="Top Hotels" />
          <HotelGrid hotels={mockHotels} />
        </section>

        {/* Tour guides */}
        <section>
          <SectionHeader title="Discover Local Guides" linkLabel="Become a guide" />
          <TourGuideGrid guides={mockGuides} />
        </section>
  
        {/* Carpool */}
        <section>
          <SectionHeader title="Available Carpools" linkLabel="Post a ride" />
          <div className="flex flex-col gap-4">
            {mockRides.map((ride, i) => (
              <CarpoolCard key={i} ride={ride} />
            ))}
          </div>
        </section>
  
        {/* Traveller photos */}
        <section>
          <SectionHeader title="Traveller Moments" linkLabel="Upload yours" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {mockPosts.map((post, i) => (
              <PhotoPost key={i} post={post} />
            ))}
          </div>
        </section>
  
        {/* Reviews */}
        <section>
          <SectionHeader title="Traveller Reviews" linkLabel="Write a review" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {mockReviews.map((review, i) => (
              <ReviewCard key={i} review={review} />
            ))}
          </div>
        </section>
  
      </div>
    </main>
  );
}
