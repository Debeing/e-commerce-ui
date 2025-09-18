import Link from "next/link";
import Image from "next/image";
import SearchBar from "./SearchBar";
import { Bell, Home, ShoppingCart } from "lucide-react";

const Navbar = () => {

    return (
        <nav className=" flex items-center justify-between border-b border-gray-200 pb-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-lg md:text-2xl">
            <Image src="/logo.png"
             alt="logo du site"
             width={36}
             height={36}
             className="h-6 w-6 md:w-9 md:h-9" 
             />
             <p className="text-md font-medium tracking-wider" >DEBEING</p>
            </Link>
            <div className="flex items-center gap-6 ">
                <SearchBar />
                <Link href="/">
                <Home className="h-4 w-4 text-gray-600"  />
                </Link>
                <Link href="/">
                <Bell className="h-4 w-4 text-gray-600"  />
                </Link>
                <Link href="/">
                <ShoppingCart className="h-4 w-4 text-gray-600" />
                </Link>
                <Link href="/">
                Sign in
                </Link>
                
            </div>
        </nav>
    )
}

export default Navbar
