import Link from 'next/link';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white border-2 border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {/* Product Image */}
      <div className="relative h-52 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
        />
        <span className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
          {product.category}
        </span>
      </div>
      
      {/* Product Info */}
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-gray-800 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4 text-sm line-clamp-2">
          {product.description}
        </p>
        
        {/* Price & Button */}
        <div className="flex justify-between items-center">
          <span className="text-3xl font-bold text-blue-600">
            ${product.price}
          </span>
          <Link 
            href={`/products/${product.id}`}
            className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition transform hover:scale-105"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}