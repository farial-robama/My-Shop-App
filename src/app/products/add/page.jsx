"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/auth";
import toast from "react-hot-toast";

export default function AddProductPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
    category: "Electronics",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Check if user is logged in
    if (!auth.isAuthenticated()) {
      toast.error("⚠️ Please login first!");
      setTimeout(() => router.push("/login"), 1500);
    }
  }, [router]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (
      !formData.name ||
      !formData.description ||
      !formData.price ||
      !formData.image
    ) {
      toast.error("❌ Please fill all fields!");
      return;
    }

    if (parseFloat(formData.price) <= 0) {
      toast.error("❌ Price must be greater than 0!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://my-shop-app-server.onrender.com/api/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...formData,
            price: parseFloat(formData.price),
          }),
        },
      );

      if (response.ok) {
        toast.success("✅ Product added successfully!");
        setTimeout(() => {
          router.push("/products");
        }, 1500);
      } else {
        toast.error("❌ Failed to add product");
      }
    } catch (error) {
      toast.error("❌ Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    "Electronics",
    "Accessories",
    "Fashion",
    "Home & Garden",
    "Sports",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
            ➕ Add New Product
          </h1>
          <p className="text-xl text-gray-600">
            Fill in the details to add a new product to your store
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Product Name */}
            <div>
              <label className="block text-lg font-bold text-gray-900 mb-2">
                📝 Product Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter product name"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition outline-none text-lg"
              />
            </div>

            {/* Description */}
            <div>
              <label className="block text-lg font-bold text-gray-900 mb-2">
                📄 Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter product description"
                rows="4"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition outline-none text-lg resize-none"
              ></textarea>
            </div>

            {/* Price */}
            <div>
              <label className="block text-lg font-bold text-gray-900 mb-2">
                💰 Price (USD)
              </label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="0.00"
                step="0.01"
                min="0"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition outline-none text-lg"
              />
            </div>

            {/* Image URL */}
            <div>
              <label className="block text-lg font-bold text-gray-900 mb-2">
                🖼️ Image URL
              </label>
              <input
                type="url"
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition outline-none text-lg"
              />
              {formData.image && (
                <div className="mt-4 rounded-xl overflow-hidden border-2 border-gray-200">
                  <img
                    src={formData.image}
                    alt="Preview"
                    className="w-full h-64 object-cover"
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/400x300?text=Invalid+Image+URL";
                    }}
                  />
                </div>
              )}
            </div>

            {/* Category */}
            <div>
              <label className="block text-lg font-bold text-gray-900 mb-2">
                📂 Category
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition outline-none text-lg bg-white"
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            {/* Submit Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={() => router.push("/products")}
                className="flex-1 bg-gray-200 text-gray-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-300 transition"
              >
                ← Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className={`flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition shadow-lg ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {loading ? "⏳ Adding..." : "✅ Add Product"}
              </button>
            </div>
          </form>
        </div>

        {/* Tips Card */}
        <div className="mt-8 bg-blue-50 border-2 border-blue-200 rounded-xl p-6">
          <h3 className="font-bold text-lg text-blue-900 mb-3">
            💡 Tips for Adding Products
          </h3>
          <ul className="space-y-2 text-blue-800">
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Use high-quality images for better presentation</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Write clear and detailed descriptions</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Set competitive prices for your products</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">✓</span>
              <span>Choose the appropriate category</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
