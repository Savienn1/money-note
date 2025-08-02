
import { FiSearch } from 'react-icons/fi'

const SearchBar = () => {
  return (
    <div className="w-full h-12 bg-grey-light rounded-3xl flex items-center px-4">
        <FiSearch className="text-grey text-2xl" />
        <input
            type="text"
            placeholder="Cari catatan..."
            className="ml-2 w-full bg-transparent outline-none text-grey placeholder-grey"
        />
    </div> 
  )
}

export default SearchBar