'use client';
import React from 'react'
import Link from 'next/link'
import SearchBar from './searchbar'

const Navbar = () => {
  return (
    <div>
        <nav className="bg-blue-600 shadow-md px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold text-white hover:text-blue-100">
            Drive2Destiny
            </Link>

            <div className="hidden md:flex gap-6 text-white font-medium">
            <Link href="/" className="hover:text-blue-200">Home</Link>
            <Link href="/explore" className="hover:text-blue-200">Explore</Link>
            <Link href="/carpool" className="hover:text-blue-200">Carpool</Link>
            <Link href="/reviews" className="hover:text-blue-200">Reviews</Link>
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