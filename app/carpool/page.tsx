import React from "react";
import CarpoolCard from "@/components/carpoolcard";
import ChatBox from "@/components/chatbox";
import { mockRides, mockChats } from "@/data/mockdata";

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
    <h2 className="text-2xl font-bold text-slate-800">{title}</h2>
    <button
      onClick={onLinkClick}
      className="text-sm text-blue-600 font-medium hover:underline"
    >
      {linkLabel} →
    </button>
  </div>
);

export default function CarpoolPage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-slate-800">Available Carpools</h1>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 font-medium">
            Post a Ride
          </button>
        </div>

        <div className="flex flex-col gap-4">
          {mockRides.map((ride, i) => (
            <CarpoolCard key={i} ride={ride} />
          ))}
        </div>

        {/* Carpool chats */}
        <section className="mt-8">
          <SectionHeader title="Carpool Chats" linkLabel="See all chats" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockChats.map((chat, i) => (
              <ChatBox key={i} {...chat} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
