import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      {/* Section 1: Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-extrabold mb-6 animate-fade-in">
            Welcome to My Shop 🛍️
          </h1>
          <p className="text-2xl mb-10 text-blue-100">
            Discover amazing products at unbeatable prices
          </p>
          <Link 
            href="/products"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition transform hover:scale-110 shadow-xl"
          >
            🚀 Shop Now
          </Link>
        </div>
      </section>

      {/* Section 2: Featured Categories */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Shop by Category</h2>
          <p className="text-center text-gray-600 mb-12">Find what you need quickly</p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: 'Electronics', icon: '💻', color: 'from-blue-500 to-blue-600' },
              { name: 'Fashion', icon: '👕', color: 'from-pink-500 to-pink-600' },
              { name: 'Home & Garden', icon: '🏡', color: 'from-green-500 to-green-600' },
              { name: 'Sports', icon: '⚽', color: 'from-orange-500 to-orange-600' }
            ].map((category) => (
              <div 
                key={category.name} 
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className={`text-6xl mb-4 bg-gradient-to-r ${category.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-center">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Why Choose Us?</h2>
          <p className="text-center text-gray-600 mb-12">We provide the best shopping experience</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { icon: '🚚', title: 'Fast Delivery', desc: 'Get your products delivered in 2-3 days' },
              { icon: '💯', title: 'Quality Products', desc: '100% authentic and quality guaranteed' },
              { icon: '💳', title: 'Secure Payment', desc: 'Multiple secure payment options available' }
            ].map((feature) => (
              <div key={feature.title} className="text-center p-8 rounded-xl hover:bg-gray-50 transition">
                <div className="text-7xl mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Best Sellers */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">🔥 Best Sellers</h2>
          <p className="text-center text-gray-600 mb-12">Our most popular products</p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
                <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-48 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl">📦</span>
                </div>
                <h4 className="font-bold text-lg mb-2">Product {i}</h4>
                <p className="text-gray-600 text-sm mb-3">Amazing product description here</p>
                <p className="text-blue-600 font-bold text-2xl">$99.99</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Customer Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">💬 What Our Customers Say</h2>
          <p className="text-center text-gray-600 mb-12">Real reviews from real people</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Ahmed Rahman', rating: 5, text: 'Amazing products! Fast delivery and great quality.' },
              { name: 'Fatima Khan', rating: 5, text: 'Best online shopping experience I have ever had!' },
              { name: 'Karim Hassan', rating: 5, text: 'Highly recommended! Will shop again.' }
            ].map((testimonial) => (
              <div key={testimonial.name} className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                <p className="font-bold text-lg">- {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: Newsletter Subscription */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">📧 Subscribe to Our Newsletter</h2>
          <p className="text-xl mb-10 text-blue-100">Get exclusive deals and updates directly in your inbox</p>
          
          <div className="max-w-2xl mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email address"
              className="flex-1 px-6 py-4 rounded-full text-gray-800 text-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
            />
            <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Section 7: Contact & Support */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">💬 Need Help?</h2>
          <p className="text-center text-gray-600 mb-12">Our support team is here for you 24/7</p>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-2xl text-center hover:shadow-xl transition">
                <div className="text-6xl mb-4">📧</div>
                <h3 className="text-2xl font-bold mb-3">Email Us</h3>
                <p className="text-gray-700 text-lg">support@myshop.com</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-10 rounded-2xl text-center hover:shadow-xl transition">
                <div className="text-6xl mb-4">📞</div>
                <h3 className="text-2xl font-bold mb-3">Call Us</h3>
                <p className="text-gray-700 text-lg">+880 123 456 789</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}