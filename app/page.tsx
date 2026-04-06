import React from "react";
import HotelGrid from "@/pages/hotel";
import CarpoolCard from "@/components/carpoolcard";
import ChatBox from "@/components/chatbox";
import PhotoPost from "@/components/post";
import ReviewCard from "@/components/reviewcard";
import {
  mockHotels,
  mockRides,
  mockChats,
  mockPosts,
  mockReviews,
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
  
        {/* Carpool */}
        <section>
          <SectionHeader title="Available Carpools" linkLabel="Post a ride" />
          <div className="flex flex-col gap-4">
            {mockRides.map((ride, i) => (
              <CarpoolCard key={i} ride={ride} />
            ))}
          </div>
        </section>

        {/* ── Carpool chats ───────────────────────────────────────────────── */}
        {/* <section>
          <SectionHeader title="Carpool Chats" linkLabel="See all chats" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockChats.map((chat, i) => (
              <ChatBox key={i} {...chat} />
            ))}
          </div>
        </section> */}
  
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
