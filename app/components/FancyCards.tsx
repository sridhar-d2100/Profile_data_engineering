// components/FancyCard.tsx
import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from '@nextui-org/react';

interface FancyCardProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  link: string;
  headerColor: string;
}

const FancyCard: React.FC<FancyCardProps> = ({
  title,
  subtitle,
  description,
  imageUrl,
  link,
  headerColor,
}) => {
  return (
    <Card className="max-w-[400px] shadow-lg rounded-lg overflow-hidden bg-white dark:bg-gray-800">
      <CardHeader className={`flex items-center gap-3 ${headerColor} p-4 text-white`}>
        <Image
          alt="logo"
          height={40}
          radius="full"
          src={imageUrl}
          width={40}
          className="border-2 border-white rounded-full object-cover"
        />
        <div className="flex flex-col">
          <p className="text-md font-bold">{title}</p>
          <p className="text-sm text-white">{subtitle}</p>
        </div>
      </CardHeader>
      <Divider className="bg-gray-200 dark:bg-gray-700" />
      <CardBody className="p-4 bg-white dark:bg-gray-800">
        <p className="text-gray-700 dark:text-gray-300">{description}</p>
      </CardBody>
      <Divider className="bg-gray-200 dark:bg-gray-700" />
      <CardFooter className="bg-gray-100 dark:bg-gray-700 p-4">
        <Link isExternal showAnchorIcon href={link} className="text-indigo-500 dark:text-indigo-400 hover:underline">
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  );
};

export default FancyCard;
