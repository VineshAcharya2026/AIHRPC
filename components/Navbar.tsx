
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, User } from 'lucide-react';
import { AuthState } from '../types';
import Logo from './Logo';

interface NavbarProps {
  auth: AuthState;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ auth, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Legal Info', path: '/legal-info' },
    { name: 'Issues', path: '/issues' },
  ];

  // Add Team link only if authenticated
  if (auth.isAuthenticated) {
    navLinks.push({ name: 'Team', path: '/team' });
  }

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <Logo className="h-10 sm:h-12 md:h-[60px] object-contain" />
              <div className="border-l pl-3 border-gray-200">
                <span className="text-sm sm:text-lg font-black text-[#800000] block leading-none uppercase tracking-tighter">AIHRPC India</span>
                <span className="text-[7px] sm:text-[9px] text-gray-500 uppercase tracking-widest block mt-1 font-bold">Human Rights Commission</span>
              </div>
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-gray-700 hover:text-[#800000] font-bold transition-colors text-sm uppercase tracking-wide"
              >
                {link.name}
              </Link>
            ))}
            {auth.isAuthenticated ? (
              <div className="flex items-center space-x-4 border-l pl-4 ml-2">
                <Link to="/admin" className="text-[#800000] font-black flex items-center text-sm uppercase tracking-wider">
                  <User className="w-4 h-4 mr-1.5" /> Registry
                </Link>
                <button 
                  onClick={onLogout}
                  className="text-xs text-red-700 hover:text-red-900 font-black uppercase tracking-widest bg-red-50 px-3 py-1.5 rounded"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/admin-login"
                className="bg-[#800000] text-white px-6 py-2.5 rounded-lg hover:bg-black transition-all text-xs font-black uppercase tracking-widest shadow-lg shadow-maroon-900/10"
              >
                Admin Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#800000] hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-slide-down shadow-2xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="block px-4 py-3 rounded-lg text-base font-black text-gray-800 hover:text-[#800000] hover:bg-gray-50 uppercase tracking-wide border-b border-gray-50"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            {auth.isAuthenticated ? (
              <div className="pt-4 space-y-2">
                <Link
                  to="/admin"
                  className="block px-4 py-3 rounded-lg text-base font-black text-[#800000] bg-maroon-50"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard Access
                </Link>
                <button
                  onClick={() => { onLogout(); setIsOpen(false); }}
                  className="block w-full text-left px-4 py-3 rounded-lg text-base font-black text-red-700 hover:bg-red-50"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                to="/admin-login"
                className="block px-4 py-4 rounded-xl text-center text-base font-black text-white bg-[#800000] shadow-xl uppercase tracking-widest mt-6"
                onClick={() => setIsOpen(false)}
              >
                Portal Login
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
