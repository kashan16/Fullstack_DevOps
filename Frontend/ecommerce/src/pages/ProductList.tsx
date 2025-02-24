import { useState } from "react";
import { useProductStore } from "../store/productStore";

export default function ProductList() {
    const { products, searchQuery } = useProductStore();
    const [category, setCategory] = useState("All");

    // Filter products based on search query and category
    const filteredProducts = products
        .filter((product) => product.name.toLowerCase().includes(searchQuery.toLowerCase()))
        .filter((product) => category === "All" || product.category === category);

    return (
        <div>
            {/* Category Filter Dropdown */}
            <select
                className="mb-4 p-2 border rounded-md"
                onChange={(e) => setCategory(e.target.value)}
            >
                <option value="All">All Categories</option>
                <option value="Electronics">Electronics</option>
                <option value="Fashion">Fashion</option>
            </select>

            {/* Render Filtered Products */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <div key={product.id} className="border p-4 rounded-md shadow-md">
                            <h3 className="font-bold">{product.name}</h3>
                            <p className="text-gray-600">{product.category}</p>
                        </div>
                    ))
                ) : (
                    <p className="text-gray-500">No products found.</p>
                )}
            </div>
        </div>
    );
}
