import React, { useState } from 'react';
import { FaRegCopy, FaCheck } from 'react-icons/fa';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000); // Clear the copied state after 2 seconds
    });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-11/12 max-w-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
        
        <div className="flex justify-between items-center mb-2">
          <p><strong>Name:</strong> Sridhar D</p>
          <div className="flex items-center space-x-2">
            {copiedField === 'Name' && <FaCheck className="text-green-500" />}
            <FaRegCopy
              onClick={() => copyToClipboard('Sridhar D', 'Name')}
              className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              title="Copy to clipboard"
            />
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-2">
          <p><strong>Email:</strong> sridhar.d2040@gmail.com</p>
          <div className="flex items-center space-x-2">
            {copiedField === 'Email' && <FaCheck className="text-green-500" />}
            <FaRegCopy
              onClick={() => copyToClipboard('sridhar.d2040@gmail.com', 'Email')}
              className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              title="Copy to clipboard"
            />
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-2">
          <p><strong>Year of Experience:</strong> 2 years</p>
          <div className="flex items-center space-x-2">
            {copiedField === 'Year of Experience' && <FaCheck className="text-green-500" />}
            <FaRegCopy
              onClick={() => copyToClipboard('2 years', 'Year of Experience')}
              className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              title="Copy to clipboard"
            />
          </div>
        </div>
        
        <div className="flex justify-between items-center mb-2">
          <p><strong>Address:</strong> Chennai, Tamil Nadu</p>
          <div className="flex items-center space-x-2">
            {copiedField === 'Address' && <FaCheck className="text-green-500" />}
            <FaRegCopy
              onClick={() => copyToClipboard('Chennai, Tamil Nadu', 'Address')}
              className="cursor-pointer text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
              title="Copy to clipboard"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default ContactModal;
