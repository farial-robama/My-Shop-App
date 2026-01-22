'use client';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { auth } from '@/lib/auth';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

 useEffect(() => {
  // Check authentication status on mount
  setIsLoggedIn(auth.isAuthenticated());

  // Listen for storage events (login/logout from other tabs/pages)
  const handleStorageChange = () => {
    setIsLoggedIn(auth.isAuthenticated());
  };

  window.addEventListener('storage', handleStorageChange);

  // Check auth status when pathname changes (navigation)
  setIsLoggedIn(auth.isAuthenticated());

  return () => {
    window.removeEventListener('storage', handleStorageChange);
  };
}, [pathname]);

  const handleLogout = () => {
    auth.logout();
    setIsLoggedIn(false);
    toast.success('Logged out successfully', {
    duration: 6000, 
    });
    router.push('/');
    setIsMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActive = (path) => pathname === path;

  const NavLink = ({ href, children, onClick }) => (
    <Link 
      href={href}
      onClick={onClick}
      className={`${
        isActive(href) 
          ? 'text-yellow-300 font-bold' 
          : 'text-white hover:text-blue-200'
      } font-semibold transition duration-300`}
    >
      {children}
    </Link>
  );

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2" onClick={closeMobileMenu}>
            <span className="text-3xl">🛒</span>
            <span className="text-white text-2xl font-bold">My Shop</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/products">Products</NavLink>
            
            <Link 
              href="/products/add" 
              className={`${
                isActive('/products/add')
                  ? 'bg-yellow-400 text-blue-800'
                  : 'bg-white text-blue-600 hover:bg-blue-50'
              } px-4 py-2 rounded-lg font-bold transition duration-300 flex items-center space-x-1`}
            >
              <span>➕</span>
              <span>Add Product</span>
            </Link>

            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-600 transition duration-300"
              >
                Logout
              </button>
            ) : (
              <div className="flex items-center space-x-3">
                <Link 
                  href="/login"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-600 transition duration-300"
                >
                  Login
                </Link>
                <Link 
                  href="/signup"
                  className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-600 transition duration-300"
                >
                  Signup
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <NavLink href="/" onClick={closeMobileMenu}>
              <div className="block py-2">Home</div>
            </NavLink>
            
            <NavLink href="/products" onClick={closeMobileMenu}>
              <div className="block py-2">Products</div>
            </NavLink>
            
            <Link 
              href="/products/add"
              onClick={closeMobileMenu}
              className={`${
                isActive('/products/add')
                  ? 'bg-yellow-400 text-blue-800'
                  : 'bg-white text-blue-600 hover:bg-blue-50'
              } px-4 py-2 rounded-lg font-bold transition duration-300 flex items-center space-x-1 w-full`}
            >
              <span>➕</span>
              <span>Add Product</span>
            </Link>

            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-600 transition duration-300 w-full text-left"
              >
                Logout
              </button>
            ) : (
              <div className="space-y-2">
                <Link 
                  href="/login"
                  onClick={closeMobileMenu}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-600 transition duration-300 block text-center"
                >
                  Login
                </Link>
                <Link 
                  href="/signup"
                  onClick={closeMobileMenu}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold hover:bg-green-600 transition duration-300 block text-center"
                >
                  Signup
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}