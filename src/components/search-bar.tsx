import React from 'react'
import { FiSearch } from 'react-icons/fi'

const SearchBar = () => {
  return (
    <div className="w-full h-12 bg-gray-light rounded-3xl flex items-center px-4">
        <FiSearch className="text-gray text-2xl" />
        <input
            type="text"
            placeholder="Cari catatan..."
            className="ml-2 w-full bg-transparent outline-none text-gray placeholder-gray"
        />
    </div> 
  )
}

export default SearchBar