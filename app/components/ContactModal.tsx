// components/ContactModal.tsx
import React from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

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
        <p className="mb-2"><strong>Name:</strong> Sridhar</p>
        <p className="mb-2"><strong>Email:</strong> sridhar.d2040@gmail.com</p>
        <p className="mb-2"><strong>Year of Experience:</strong> 2 years</p>
        <p><strong>Address:</strong> Chennai,Tamil Nadu</p>
      </div>
    </div>
  );
};

export default ContactModal;


