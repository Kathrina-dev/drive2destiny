import React, { useState } from "react";

const SearchBar = () => {
    const [query, setQuery] = useState("");
    const [type, setType] = useState("all");
    
    const handleSearch = () => {
      console.log("Search:", { query, type });
    };
    
    return (
      <div className="bg-white shadow-lg rounded-2xl p-4 md:p-6 w-full max-w-4xl mx-auto">
        
        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-4 justify-center">
          {["all", "hotels", "transport", "guides"].map((item) => (
            <button
              key={item}
              onClick={() => setType(item)}
              className={`px-4 py-2 rounded-full text-sm font-medium capitalize ${
                type === item
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
            value={query}
            onChange={(e) => setQuery(e.target.value)}
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
}

export default SearchBar