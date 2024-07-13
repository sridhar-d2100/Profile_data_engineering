// pages/_app.tsx or wherever your `ClientWrapper` is located
"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaUserCircle, FaSun, FaMoon } from 'react-icons/fa';
import ContactModal from './components/ContactModal';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [isPanelOpen, setIsPanelOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const togglePanel = () => setIsPanelOpen(prev => !prev);
  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);
  const toggleDarkMode = () => setDarkMode(prev => !prev);
  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);

  // Example navigation data
  const navItems = [
    { title: "Products", subItems: ["Electronics", "Furniture", "Clothing"] },
    { title: "Gift Cards", subItems: ["Amazon Gift Cards", "Visa Gift Cards"] },
    { title: "Deals", subItems: ["Today's Deals", "Lightning Deals"] },
    { title: "Customer Service", subItems: ["Help", "Contact Us", "Returns"] },
  ];

  return (
    <div className="flex">
      {/* Left Panel */}
      <aside
        className={`fixed top-0 left-0 w-64 h-full bg-gray-100 dark:bg-gray-800 shadow-lg transform ${
          isPanelOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 z-20`}
      >
        <div className="p-4 pt-16"> {/* Adjust padding-top to ensure space for fixed navbar */}
          <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">Categories</h2>
          <div className="space-y-4">
            {navItems.map((item, index) => (
              <div key={index} className="bg-white dark:bg-gray-700 p-3 rounded shadow">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">{item.title}</h3>
                <ul className="pl-4 mt-2 space-y-2">
                  {item.subItems.map((subItem, subIndex) => (
                    <li key={subIndex} className="text-sm text-gray-600 dark:text-gray-400">
                      <Link href={`/${subItem.toLowerCase().replace(/ /g, '-')}`}>{subItem}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className={`flex-1 ${isPanelOpen ? 'ml-64' : 'ml-0'} transition-all duration-300`}>
        {/* Navbar */}
        <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-gray-700 dark:to-gray-900 p-2 shadow-md fixed top-0 left-0 w-full z-30">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center">
              <button
                className="text-white text-xl mr-4"
                onClick={togglePanel}
              >
                {isPanelOpen ? '✕' : '≡'}
              </button>
              <Link href="/" className="text-white text-xl font-bold">
                Data Engineering Projects
              </Link>
            </div>
            <form className="flex items-center max-w-lg mx-auto flex-grow">
              <input
                type="search"
                id="search-dropdown"
                className="block w-full p-2 text-sm text-gray-900 bg-white dark:bg-gray-700 dark:text-gray-200 rounded-l-lg border border-gray-300 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search Mockups, Logos, Design Templates..."
                required
              />
              <button
                type="submit"
                className="p-2 text-sm font-medium text-white bg-blue-700 dark:bg-gray-600 rounded-r-lg border border-blue-700 dark:border-gray-600 hover:bg-blue-800 dark:hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span className="sr-only">Search</span>
              </button>
            </form>
            
            <div className="flex space-x-4 items-center">
              <button onClick={toggleDarkMode} className="text-white text-xl">
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
              <Link href="https://sridharmessi.github.io/" className="text-white hover:text-gray-300">Resume</Link>
              <button onClick={openContactModal} className="text-white hover:text-gray-300">Contact</button>
              <Link href="/" className="text-white hover:text-gray-300">Home</Link>
              
              <div className="relative">
                <div 
                  className="flex items-center space-x-2 cursor-pointer"
                  onClick={toggleDropdown}
                >
                  <FaUserCircle className="text-white text-2xl" />
                  <span className="text-white">Sridhar</span>
                </div>
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg py-2 z-40">
                    <Link href="/login" className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">
                      Logout
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </nav>

        {/* Render children or main content here */}
        <main className="pt-16 dark:bg-gray-900 dark:text-gray-200"> {/* Adjust pt-16 to fit your navbar height */}
          {children}
        </main>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </div>
  );
}
