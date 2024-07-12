"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [isPanelOpen, setIsPanelOpen] = useState(true);

  const togglePanel = () => {
    setIsPanelOpen(prev => !prev);
  };

  // Example chat data
  const chatItems = [
    { title: "Chat with Alice", message: "Hello, how are you?" },
    { title: "Chat with Bob", message: "Let's schedule a meeting." },
    { title: "Chat with Carol", message: "Can you send me the report?" },
    { title: "Chat with Dave", message: "Need your feedback on the proposal." },
    { title: "Chat with Eve", message: "Can we have a quick call?" },
    { title: "Chat with Frank", message: "Review the latest design draft." },
    { title: "Chat with Grace", message: "Check out the new features in the app." },
    { title: "Chat with Heidi", message: "Let's discuss the budget for next quarter." }
  ];

  return (
    <div className="flex">
      {/* Left Panel */}
      <aside
        className={`fixed top-0 left-0 w-64 h-full bg-gray-100 shadow-lg transform ${
          isPanelOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300`}
      >
        <div className="p-4 pt-16"> {/* Adjust padding-top to ensure space for fixed navbar */}
          <h2 className="text-xl font-bold mb-4">Chat History</h2>
          <div className="space-y-4">
            {chatItems.map((item, index) => (
              <div key={index} className="bg-white p-3 rounded shadow">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.message}</p>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-64">
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
              <Link href="/">Data Engineering Projects</Link>
            </div>
            <div className="space-x-4">
              <Link href="/" className="text-white hover:text-gray-400">Home</Link>
              <Link href="/about" className="text-white hover:text-gray-400">About</Link>
              <Link href="/contact" className="text-white hover:text-gray-400">Contact</Link>
            </div>
          </div>
        </nav>

        {/* Render children or main content here */}
        <main className="pt-16"> {/* Adjust pt-16 to fit your navbar height */}
          {children}
        </main>
      </div>
    </div>
  );
}
