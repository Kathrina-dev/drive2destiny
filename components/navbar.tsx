'use client';
import React from 'react'
import SearchBar from './searchbar'

const Navbar = () => {
  return (
    <div>
        <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-600">
            Drive2Destiny
            </h1>

            <div className="hidden md:flex gap-6 text-gray-700 font-medium">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#" className="hover:text-blue-600">Explore</a>
            <a href="#" className="hover:text-blue-600">Carpool</a>
            <a href="#" className="hover:text-blue-600">Reviews</a>
            </div>


            {/* Mobile Menu Icon */}
            <button className="md:hidden text-gray-700 text-2xl">
            ☰
            </button>

        </nav>

            <div className="mt-10">
                <SearchBar />
            </div>
    </div>
  )
}

export default Navbar