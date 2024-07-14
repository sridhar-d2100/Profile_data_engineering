// Add "use client" to specify that this component should be rendered on the client side.
"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Sinn() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen(prev => !prev);
  };

  return (
    <div className="flex">
      {/* Left Panel */}
      <aside
        className={`fixed top-0 left-0 w-64 h-full bg-gray-100 shadow-lg transform ${
          isPanelOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold">Chat History</h2>
          {/* Add chat history components here */}
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-64 p-4">
        {/* Navbar */}
        <nav className="bg-gray-800 p-4 shadow-md fixed top-0 left-0 w-full z-10">
          <div className="container mx-auto flex justify-between items-center">
            <button
              className="text-white text-2xl"
              onClick={togglePanel}
            >
              {isPanelOpen ? '✕' : '≡'}
            </button>
            <div className="text-white text-2xl font-bold">
              <Link href="/">MyApp</Link>
            </div>
            <div className="space-x-4">
              <Link href="/" className="text-white hover:text-gray-400">Home</Link>
              <Link href="/about" className="text-white hover:text-gray-400">About</Link>
              <Link href="/contact" className="text-white hover:text-gray-400">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Main Content Here */}
      </div>
    </div>
  );
}
