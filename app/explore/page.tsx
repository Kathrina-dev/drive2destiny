import React from "react";
import HotelGrid from "@/components/gids/hotelgrid";
import TourGuideGrid from "@/components/gids/guidegrid";
import { mockHotels, mockGuides } from "@/data/mockdata";

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

export default function ExplorePage() {
  return (
    <main className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
        {/* Hotels */}
        <section>
          <SectionHeader title="Hotels" />
          <HotelGrid hotels={mockHotels} />
        </section>

        {/* Tour Guides */}
        <section>
          <SectionHeader title="Tour Guides" />
          <TourGuideGrid guides={mockGuides} />
        </section>
      </div>
    </main>
  );
}
