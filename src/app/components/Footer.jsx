export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">🛒 My Shop</h3>
            <p className="text-gray-400">
              Your trusted online store for quality products at the best prices.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" className="text-gray-400 hover:text-white transition">
                  Products
                </a>
              </li>
              <li>
                <a href="/login" className="text-gray-400 hover:text-white transition">
                  Login
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <p className="text-gray-400 mb-2">📧 Email: support@myshop.com</p>
            <p className="text-gray-400 mb-2">📞 Phone: +880 123 456 789</p>
            <p className="text-gray-400">📍 Dhaka, Bangladesh</p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 My Shop. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}