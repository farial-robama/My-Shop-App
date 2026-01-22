import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Toaster } from 'react-hot-toast'; // ✅ Global Toaster

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My Shop - Best Online Store',
  description: 'Shop quality products at amazing prices',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Toaster 
          position="top-center"
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            duration: 3000,
            style: {
              background: '#333',
              color: '#fff',
              fontWeight: '600',
              fontSize: '15px',
              padding: '12px 20px',
              borderRadius: '10px',
              maxWidth: '500px',
            },
            success: {
              duration: 3000,
              iconTheme: {
                primary: '#10B981',
                secondary: '#fff',
              },
              style: {
                background: '#10B981',
                color: '#fff',
              },
            },
            error: {
              duration: 4000,
              iconTheme: {
                primary: '#EF4444',
                secondary: '#fff',
              },
              style: {
                background: '#EF4444',
                color: '#fff',
              },
            },
          }}
        />
        
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}