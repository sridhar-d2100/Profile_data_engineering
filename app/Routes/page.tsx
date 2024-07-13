// pages/index.tsx
"use client"

import React, { useEffect, useState } from 'react';
import FancyCard from '../components/FancyCards';

const Home: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const cardData = [
    {
      title: 'NextUI',
      subtitle: 'nextui.org',
      description: 'Make beautiful websites regardless of your design experience.',
      imageUrl: 'https://avatars.githubusercontent.com/u/86160567?s=200&v=4',
      link: 'https://github.com/nextui-org/nextui',
      headerColor: 'bg-gradient-to-r from-indigo-500 to-purple-500'
    },
    {
      title: 'React',
      subtitle: 'reactjs.org',
      description: 'A JavaScript library for building user interfaces and its good that ',
      imageUrl: 'https://reactjs.org/logo-og.png',
      link: 'https://github.com/facebook/react',
      headerColor: 'bg-gradient-to-r from-blue-500 to-teal-500'
    },
    {
      title: 'Tailwind CSS',
      subtitle: 'tailwindcss.com',
      description: 'A utility-first CSS framework for creating custom designs.',
      imageUrl: 'https://tailwindcss.com/_next/static/media/logo.6f16ec64.svg',
      link: 'https://github.com/tailwindlabs/tailwindcss',
      headerColor: 'bg-gradient-to-r from-green-500 to-teal-500'
    },
    {
      title: 'NextUI',
      subtitle: 'nextui.org',
      description: 'Make beautiful websites regardless of your design experience.',
      imageUrl: 'https://avatars.githubusercontent.com/u/86160567?s=200&v=4',
      link: 'https://github.com/nextui-org/nextui',
      headerColor: 'bg-gradient-to-r from-indigo-500 to-purple-500'
    },
    {
      title: 'React',
      subtitle: 'reactjs.org',
      description: 'A JavaScript library for building user interfaces and its good that ',
      imageUrl: 'https://reactjs.org/logo-og.png',
      link: 'https://github.com/facebook/react',
      headerColor: 'bg-gradient-to-r from-blue-500 to-teal-500'
    },
    {
      title: 'Tailwind CSS',
      subtitle: 'tailwindcss.com',
      description: 'A utility-first CSS framework for creating custom designs.',
      imageUrl: 'https://tailwindcss.com/_next/static/media/logo.6f16ec64.svg',
      link: 'https://github.com/tailwindlabs/tailwindcss',
      headerColor: 'bg-gradient-to-r from-green-500 to-teal-500'
    },
    {
      title: 'React',
      subtitle: 'reactjs.org',
      description: 'A JavaScript library for building user interfaces and its good that ',
      imageUrl: 'https://reactjs.org/logo-og.png',
      link: 'https://github.com/facebook/react',
      headerColor: 'bg-gradient-to-r from-blue-500 to-teal-500'
    },
    {
      title: 'Tailwind CSS',
      subtitle: 'tailwindcss.com',
      description: 'A utility-first CSS framework for creating custom designs.',
      imageUrl: 'https://tailwindcss.com/_next/static/media/logo.6f16ec64.svg',
      link: 'https://github.com/tailwindlabs/tailwindcss',
      headerColor: 'bg-gradient-to-r from-green-500 to-teal-500'
    },
    {
      title: 'React',
      subtitle: 'reactjs.org',
      description: 'A JavaScript library for building user interfaces and its good that ',
      imageUrl: 'https://reactjs.org/logo-og.png',
      link: 'https://github.com/facebook/react',
      headerColor: 'bg-gradient-to-r from-blue-500 to-teal-500'
    },
    {
      title: 'Tailwind CSS',
      subtitle: 'tailwindcss.com',
      description: 'A utility-first CSS framework for creating custom designs.',
      imageUrl: 'https://tailwindcss.com/_next/static/media/logo.6f16ec64.svg',
      link: 'https://github.com/tailwindlabs/tailwindcss',
      headerColor: 'bg-gradient-to-r from-green-500 to-teal-500'
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="flex-1 p-3 pt-16"> {/* Reduced pt-20 to pt-16 to move grid up */}
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cardData.map((card, index) => (
              <FancyCard
                key={index}
                title={card.title}
                subtitle={card.subtitle}
                description={card.description}
                imageUrl={card.imageUrl}
                link={card.link}
                headerColor={card.headerColor}
              />
            ))}
          </div>
        </div>
      </div>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          aria-label="Scroll to Top"
        >
          ↑
        </button>
      )}

    </div>
  );
};

export default Home;
