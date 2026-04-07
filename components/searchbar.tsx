import React from "react";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filterType: string;
  setFilterType: (type: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
  filterType,
  setFilterType,
}) => {
  const handleSearch = () => {
    console.log("Search:", { searchQuery, filterType });
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 md:p-6 w-full max-w-4xl mx-auto">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-4 justify-center">
        {["all", "hotels", "transport", "guides"].map((item) => (
          <button
            key={item}
            onClick={() => setFilterType(item)}
            className={`px-4 py-2 rounded-full text-sm font-medium capitalize ${
              filterType === item
                ? "bg-blue-600 text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="flex flex-col md:flex-row gap-3">
        <input
          type="text"
          placeholder="Search destinations, hotels, guides..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#0F1E2E]"
        />

        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchBar;