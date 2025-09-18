import { Search } from "lucide-react"


const SearchBar = () => {
    

    return (
        <div className="hidden sm:flex items-center gap-2 rounded-full border border-gray-300 bg-white px-4 py-1 shadow-sm">
            <Search className="h-4 w-4 text-gray-500" />
            <input id="Search" placeholder="Recherche..." className="text-sm outline-0" />
        </div>
    )
}

export default SearchBar
