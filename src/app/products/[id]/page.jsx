'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import toast, { Toaster } from 'react-hot-toast';

export default function ProductDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/products/${params.id}`);
      if (response.ok) {
        const data = await response.json();
        setProduct(data);
      } else {
        toast.error('❌ Product not found');
        setTimeout(() => router.push('/products'), 2000);
      }
      setLoading(false);
    } catch (error) {
      toast.error('❌ Failed to load product');
      setLoading(false);
    }
  };

  const handleAddToCart = () => {
    toast.success(`✅ Added ${quantity} item(s) to cart!`, {
      icon: '🛒',
      duration: 3000,
    });
  };

  const handleBuyNow = () => {
    toast.success('🚀 Redirecting to checkout...', {
      duration: 2000,
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 font-semibold">Loading product...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">😢</div>
          <h2 className="text-2xl font-bold text-gray-700">Product Not Found</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
      <Toaster position="top-right" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-blue-600 transition">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-blue-600 transition">
              Products
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-semibold">{product.name}</span>
          </nav>
        </div>

        {/* Product Details */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="relative h-96 lg:h-auto bg-gradient-to-br from-gray-100 to-gray-200">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  {product.category}
                </span>
              </div>
            </div>

            {/* Product Info */}
            <div className="p-8 lg:p-12">
              <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 text-xl">
                  {'⭐'.repeat(5)}
                </div>
                <span className="ml-3 text-gray-600">(128 reviews)</span>
              </div>

              <div className="mb-8">
                <span className="text-5xl font-extrabold text-blue-600">
                  ${product.price}
                </span>
                <span className="ml-3 text-gray-500 line-through text-xl">
                  ${(product.price * 1.3).toFixed(2)}
                </span>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Product Description
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Key Features
                </h3>
                <ul className="space-y-2">
                  {[
                    'Premium quality materials',
                    'Free shipping on orders over $50',
                    '30-day money-back guarantee',
                    '1-year warranty included'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <span className="text-green-500 mr-3 text-xl">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity Selector */}
              <div className="mb-8">
                <label className="block text-lg font-bold text-gray-900 mb-3">
                  Quantity
                </label>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold px-6 py-3 rounded-lg transition"
                  >
                    -
                  </button>
                  <span className="text-2xl font-bold text-gray-900 w-16 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold px-6 py-3 rounded-lg transition"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition shadow-lg"
                >
                  🛒 Add to Cart
                </button>
                <button
                  onClick={handleBuyNow}
                  className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-green-700 hover:to-emerald-700 transform hover:scale-105 transition shadow-lg"
                >
                  ⚡ Buy Now
                </button>
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-3xl mb-2">🚚</div>
                    <p className="text-sm text-gray-600 font-semibold">Free Delivery</p>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">🔒</div>
                    <p className="text-sm text-gray-600 font-semibold">Secure Payment</p>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">↩️</div>
                    <p className="text-sm text-gray-600 font-semibold">Easy Returns</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            You May Also Like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition">
                <div className="bg-gray-200 rounded-lg h-48 mb-4"></div>
                <h3 className="font-bold text-lg mb-2">Related Product {i}</h3>
                <p className="text-gray-600 mb-4">Great product description</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">$99.99</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}