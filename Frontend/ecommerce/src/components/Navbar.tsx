import { useProductStore } from "../store/productStore";

export default function Navbar() {
    const { searchQuery , setSearchQuery } = useProductStore();

    return (
        <nav className="bg-blue-600 text-white p-4 flex justify-between">
            <h1 className="text-xl font-bold">
                E-Commerce
                <input 
                    type="text"
                    placeholder="Search Products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="p-2 rounded-md text-black"/>
            </h1>
        </nav>
    )
}