import React from 'react';
import FancyCard from '../components/FancyCards';

const Home: React.FC = () => {
  // Sample card data
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
    
    // Add more cards as needed
    
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1 p-4 pt-20"> {/* Adjust pt-20 based on your navbar height */}
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
    </div>
  );
};

export default Home;
