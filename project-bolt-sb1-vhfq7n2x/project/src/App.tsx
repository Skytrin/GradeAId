import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { GraduationCap, BarChart2, Package, Instagram, Linkedin, Facebook, LogIn } from 'lucide-react';

import Home from './pages/Home';
import Analytics from './pages/Analytics';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Login from './pages/Login';

function NavLink({ to, children, icon: Icon, className = '' }: { to: string; children: React.ReactNode; icon: React.ElementType; className?: string }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
        isActive
          ? 'bg-[#FF8855] text-white'
          : 'bg-[#FF9966] text-white hover:bg-[#FF8855]'
      } ${className}`}
    >
      <Icon className="w-5 h-5 mr-2" />
      {children}
    </Link>
  );
}

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-500 italic">
            Copyright 2025 ©GradeAid
          </div>
          <div className="flex space-x-6">
            <Link to="/product" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Product
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-indigo-600 transition-colors">
              About Us
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-indigo-600 transition-colors">
              Contact
            </Link>
          </div>
          <div className="flex space-x-4">
            <button className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Instagram className="w-5 h-5" />
            </button>
            <button className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Linkedin className="w-5 h-5" />
            </button>
            <button className="text-gray-600 hover:text-indigo-600 transition-colors">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.27 5.33C17.94 4.71 16.5 4.26 15 4a.09.09 0 0 0-.07.03c-.18.33-.39.76-.53 1.09a16.09 16.09 0 0 0-4.8 0c-.14-.34-.35-.76-.54-1.09c-.01-.02-.04-.03-.07-.03c-1.5.26-2.93.71-4.27 1.33c-.01 0-.02.01-.03.02c-2.72 4.07-3.47 8.03-3.1 11.95c0 .02.01.04.03.05c1.8 1.32 3.53 2.12 5.24 2.65c.03.01.06 0 .07-.02c.4-.55.76-1.13 1.07-1.74c.02-.04 0-.08-.04-.09c-.57-.22-1.11-.48-1.64-.78c-.04-.02-.04-.08-.01-.11c.11-.08.22-.17.33-.25c.02-.02.05-.02.07-.01c3.44 1.57 7.15 1.57 10.55 0c.02-.01.05-.01.07.01c.11.09.22.17.33.26c.04.03.04.09-.01.11c-.52.31-1.07.56-1.64.78c-.04.01-.05.06-.04.09c.32.61.68 1.19 1.07 1.74c.03.01.06.02.09.01c1.72-.53 3.45-1.33 5.25-2.65c.02-.01.03-.03.03-.05c.44-4.53-.73-8.46-3.1-11.95c-.01-.01-.02-.02-.04-.02zM8.52 14.91c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.84 2.12-1.89 2.12zm6.97 0c-1.03 0-1.89-.95-1.89-2.12s.84-2.12 1.89-2.12c1.06 0 1.9.96 1.89 2.12c0 1.17-.83 2.12-1.89 2.12z"/>
              </svg>
            </button>
            <button className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Facebook className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <nav className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <Link to="/" className="flex items-center">
                <h1 className="text-2xl font-bold relative">
                  <span className="text-[#FF9966]">Grade</span>
                  <span className="text-[#66BB6A]">Aid</span>
                  <span className="absolute -top-4 right-[-15px] text-red-600 font-handwriting transform rotate-12 text-xl">A+</span>
                </h1>
              </Link>
              <div className="flex items-center space-x-4">
                <NavLink to="/" icon={GraduationCap}>Home</NavLink>
                <NavLink to="/product" icon={Package}>Product</NavLink>
                <NavLink to="/analytics" icon={BarChart2}>Material and Analytics</NavLink>
                <NavLink to="/login" icon={LogIn}>Login</NavLink>
              </div>
            </div>
          </div>
        </nav>

        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;