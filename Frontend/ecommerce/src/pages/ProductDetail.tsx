import { useParams } from "react-router-dom";
import { useProductStore } from "../store/productStore";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { products } = useProductStore();

  const product = products.find((p) => p.id === Number(id));

  if (!product) return <p className="text-center text-red-500">Product not found</p>;

  return (
    <div className="p-4">
      <img src={product.image} alt={product.name} className="w-full h-60 object-cover rounded-md" />
      <h2 className="text-2xl font-bold mt-4">{product.name}</h2>
      <p className="text-gray-600">${product.price}</p>
      <p className="mt-2">Category: {product.category}</p>
      <button className="bg-blue-600 text-white px-4 py-2 mt-4 rounded-md">Add to Cart</button>
    </div>
  );
}
