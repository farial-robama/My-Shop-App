// import Link from 'next/link';

// export default function HomePage() {
//   return (
//     <div>
      // {/* Section 1: Hero Section */}
      // <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-24">
      //   <div className="container mx-auto px-4 text-center">
      //     <h1 className="text-6xl font-extrabold mb-6 animate-fade-in">
      //       Welcome to My Shop 🛍️
      //     </h1>
      //     <p className="text-2xl mb-10 text-blue-100">
      //       Discover amazing products at unbeatable prices
      //     </p>
      //     <Link 
      //       href="/products"
      //       className="inline-block bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition transform hover:scale-110 shadow-xl"
      //     >
      //       🚀 Shop Now
      //     </Link>
      //   </div>
      // </section>

//       {/* Section 2: Featured Categories */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center mb-4">Shop by Category</h2>
//           <p className="text-center text-gray-600 mb-12">Find what you need quickly</p>
          
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             {[
//               { name: 'Electronics', icon: '💻', color: 'from-blue-500 to-blue-600' },
//               { name: 'Fashion', icon: '👕', color: 'from-pink-500 to-pink-600' },
//               { name: 'Home & Garden', icon: '🏡', color: 'from-green-500 to-green-600' },
//               { name: 'Sports', icon: '⚽', color: 'from-orange-500 to-orange-600' }
//             ].map((category) => (
//               <div 
//                 key={category.name} 
//                 className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
//               >
//                 <div className={`text-6xl mb-4 bg-gradient-to-r ${category.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto`}>
//                   {category.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-center">{category.name}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

      // {/* Section 3: Why Choose Us */}
      // <section className="py-20 bg-white">
      //   <div className="container mx-auto px-4">
      //     <h2 className="text-4xl font-bold text-center mb-4">Why Choose Us?</h2>
      //     <p className="text-center text-gray-600 mb-12">We provide the best shopping experience</p>
          
      //     <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      //       {[
      //         { icon: '🚚', title: 'Fast Delivery', desc: 'Get your products delivered in 2-3 days' },
      //         { icon: '💯', title: 'Quality Products', desc: '100% authentic and quality guaranteed' },
      //         { icon: '💳', title: 'Secure Payment', desc: 'Multiple secure payment options available' }
      //       ].map((feature) => (
      //         <div key={feature.title} className="text-center p-8 rounded-xl hover:bg-gray-50 transition">
      //           <div className="text-7xl mb-6">{feature.icon}</div>
      //           <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
      //           <p className="text-gray-600">{feature.desc}</p>
      //         </div>
      //       ))}
      //     </div>
      //   </div>
      // </section>

//       {/* Section 4: Best Sellers */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center mb-4">🔥 Best Sellers</h2>
//           <p className="text-center text-gray-600 mb-12">Our most popular products</p>
          
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//             {[1, 2, 3, 4].map((i) => (
//               <div key={i} className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition">
//                 <div className="bg-gradient-to-br from-gray-200 to-gray-300 h-48 rounded-lg mb-4 flex items-center justify-center">
//                   <span className="text-4xl">📦</span>
//                 </div>
//                 <h4 className="font-bold text-lg mb-2">Product {i}</h4>
//                 <p className="text-gray-600 text-sm mb-3">Amazing product description here</p>
//                 <p className="text-blue-600 font-bold text-2xl">$99.99</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Section 5: Customer Testimonials */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center mb-4">💬 What Our Customers Say</h2>
//           <p className="text-center text-gray-600 mb-12">Real reviews from real people</p>
          
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {[
//               { name: 'Ahmed Rahman', rating: 5, text: 'Amazing products! Fast delivery and great quality.' },
//               { name: 'Fatima Khan', rating: 5, text: 'Best online shopping experience I have ever had!' },
//               { name: 'Karim Hassan', rating: 5, text: 'Highly recommended! Will shop again.' }
//             ].map((testimonial) => (
//               <div key={testimonial.name} className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
//                 <div className="flex mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <span key={i} className="text-yellow-400 text-2xl">⭐</span>
//                   ))}
//                 </div>
//                 <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
//                 <p className="font-bold text-lg">- {testimonial.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Section 6: Newsletter Subscription */}
//       <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-4xl font-bold mb-4">📧 Subscribe to Our Newsletter</h2>
//           <p className="text-xl mb-10 text-blue-100">Get exclusive deals and updates directly in your inbox</p>
          
//           <div className="max-w-2xl mx-auto flex-col md:flex gap-4">
//             <input 
//               type="email" 
//               placeholder="Enter your email address"
//               className="flex-1 px-6 py-4 rounded-full text-gray-800 text-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
//             />
//             <button className="bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition transform hover:scale-105">
//               Subscribe
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Section 7: Contact & Support */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-4">
//           <h2 className="text-4xl font-bold text-center mb-4">💬 Need Help?</h2>
//           <p className="text-center text-gray-600 mb-12">Our support team is here for you 24/7</p>
          
//           <div className="max-w-4xl mx-auto">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-2xl text-center hover:shadow-xl transition">
//                 <div className="text-6xl mb-4">📧</div>
//                 <h3 className="text-2xl font-bold mb-3">Email Us</h3>
//                 <p className="text-gray-700 text-lg">support@myshop.com</p>
//               </div>
              
//               <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-10 rounded-2xl text-center hover:shadow-xl transition">
//                 <div className="text-6xl mb-4">📞</div>
//                 <h3 className="text-2xl font-bold mb-3">Call Us</h3>
//                 <p className="text-gray-700 text-lg">+880 123 456 789</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


'use client';
import Link from 'next/link';
import { useState } from 'react';
import { ShoppingCart, Star, Truck, Shield, CreditCard, Mail, Phone, Check } from 'lucide-react';

export default function HomePage() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = () => {
    if (email && email.includes('@')) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const categories = [
    { name: 'Electronics', icon: '💻', color: 'from-blue-500 to-blue-600', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=400&h=300&fit=crop' },
    { name: 'Fashion', icon: '👕', color: 'from-pink-500 to-pink-600', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop' },
    { name: 'Home & Garden', icon: '🏡', color: 'from-green-500 to-green-600', image: 'https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=400&h=300&fit=crop' },
    { name: 'Sports', icon: '⚽', color: 'from-orange-500 to-orange-600', image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop' }
  ];

  const products = [
    { 
      id: 1, 
      name: 'Wireless Headphones', 
      price: 99.99, 
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
      rating: 5,
      description: 'Premium sound quality'
    },
    { 
      id: 2, 
      name: 'Smart Watch', 
      price: 199.99, 
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop',
      rating: 5,
      description: 'Track your fitness goals'
    },
    { 
      id: 3, 
      name: 'Laptop Backpack', 
      price: 49.99, 
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop',
      rating: 4,
      description: 'Durable and spacious'
    },
    { 
      id: 4, 
      name: 'Running Shoes', 
      price: 79.99, 
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop',
      rating: 5,
      description: 'Comfortable all-day wear'
    }
  ];

  const testimonials = [
    { name: 'Ahmed Rahman', rating: 5, text: 'Amazing products! Fast delivery and great quality.', avatar: '👨' },
    { name: 'Fatima Khan', rating: 5, text: 'Best online shopping experience I have ever had!', avatar: '👩' },
    { name: 'Karim Hassan', rating: 5, text: 'Highly recommended! Will shop again.', avatar: '👨‍💼' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-16 sm:py-20 md:py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 animate-fade-in">
            Welcome to My Shop 🛍️
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 sm:mb-8 md:mb-10 text-blue-100 max-w-3xl mx-auto px-4">
            Discover amazing products at unbeatable prices
          </p>
          <Link 
            href="/products"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:bg-gray-100 transition transform hover:scale-105 shadow-xl"
          >
            <ShoppingCart className="w-5 h-5" />
            Shop Now
          </Link>
        </div>
      </section>


      {/* Featured Categories */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">Shop by Category</h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-10 md:mb-12 text-sm sm:text-base">Find what you need quickly</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {categories.map((category) => (
              <div 
                key={category.name} 
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer overflow-hidden"
              >
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60`}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-5xl sm:text-6xl">{category.icon}</span>
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-center">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">Why Choose Us?</h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-10 md:mb-12 text-sm sm:text-base">We provide the best shopping experience</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
            {[
              { Icon: Truck, title: 'Fast Delivery', desc: 'Get your products delivered in 2-3 days', color: 'text-blue-600' },
              { Icon: Shield, title: 'Quality Products', desc: '100% authentic and quality guaranteed', color: 'text-green-600' },
              { Icon: CreditCard, title: 'Secure Payment', desc: 'Multiple secure payment options available', color: 'text-purple-600' }
            ].map((feature) => (
              <div key={feature.title} className="text-center p-6 sm:p-8 rounded-xl hover:bg-gray-50 transition">
                <div className={`${feature.color} mb-4 sm:mb-6 flex justify-center`}>
                  <feature.Icon className="w-16 h-16 sm:w-20 sm:h-20" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    
      {/* Best Sellers */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">🔥 Best Sellers</h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-10 md:mb-12 text-sm sm:text-base">Our most popular products</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 sm:h-56 overflow-hidden bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <h4 className="font-bold text-base sm:text-lg mb-2">{product.name}</h4>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-blue-600 font-bold text-xl sm:text-2xl">${product.price}</p>
                    <button className="bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold hover:bg-blue-700 transition">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">💬 What Our Customers Say</h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-10 md:mb-12 text-sm sm:text-base">Real reviews from real people</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-xl transition">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 sm:mb-6 italic text-sm sm:text-base">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-xl sm:text-2xl">
                    {testimonial.avatar}
                  </div>
                  <p className="font-bold text-base sm:text-lg">{testimonial.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6" />
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 md:mb-10 text-blue-100 max-w-2xl mx-auto">
            Get exclusive deals and updates directly in your inbox
          </p>
          
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-full text-gray-800 text-sm sm:text-base lg:text-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
              />
              <button 
                onClick={handleSubscribe}
                className="bg-white text-blue-600 px-6 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-sm sm:text-base lg:text-lg hover:bg-gray-100 transition transform hover:scale-105 flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {isSubscribed ? (
                  <>
                    <Check className="w-5 h-5" />
                    Subscribed!
                  </>
                ) : (
                  'Subscribe'
                )}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Support */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4">💬 Need Help?</h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-10 md:mb-12 text-sm sm:text-base">Our support team is here for you 24/7</p>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              <a 
                href="mailto:support@myshop.com"
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 sm:p-10 rounded-2xl text-center hover:shadow-xl transition group"
              >
                <Mail className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-blue-600 group-hover:scale-110 transition" />
                <h3 className="text-xl sm:text-2xl font-bold mb-3">Email Us</h3>
                <p className="text-gray-700 text-base sm:text-lg">support@myshop.com</p>
              </a>
              
              <a 
                href="tel:+8801234567890"
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 sm:p-10 rounded-2xl text-center hover:shadow-xl transition group"
              >
                <Phone className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 text-green-600 group-hover:scale-110 transition" />
                <h3 className="text-xl sm:text-2xl font-bold mb-3">Call Us</h3>
                <p className="text-gray-700 text-base sm:text-lg">+880 123 456 789</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}