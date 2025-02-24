import { create } from "zustand";

type Product = {
    id : number;
    name : string;
    price : number;
    category : string;
    image : string;
};

type ProductState = {
    products: Product[];
    searchQuery : string;
    setSearchQuery : (query : string) => void;
};

export const useProductStore = create<ProductState>((set) => ({
    products: [
      { id: 1, name: "Laptop", price: 1200, category: "Electronics", image: "https://via.placeholder.com/150" },
      { id: 2, name: "Headphones", price: 200, category: "Electronics", image: "https://via.placeholder.com/150" },
      { id: 3, name: "Running Shoes", price: 80, category: "Fashion", image: "https://via.placeholder.com/150" },
      { id: 4, name: "T-Shirt", price: 30, category: "Fashion", image: "https://via.placeholder.com/150" },
    ],
    searchQuery: "",
    setSearchQuery: (query) => set({ searchQuery: query }),
  }));