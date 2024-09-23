import React from 'react'

const ConfirmationModal = ({ isOpen, message, onConfirm, onCancel }) => {
  if (!isOpen) return null; 
  return (
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div className='fixed inset-0 bg-gray-800 bg-opacity-50'></div>{' '}
      {/* Overlay */}
      <div className='bg-white rounded-lg p-6 z-10 max-w-sm mx-auto shadow-lg'>
        <h2 className='text-lg font-bold mb-4'>Confirm Action</h2>
        <p className='text-gray-700 mb-6'>{message}</p>

        <div className='flex justify-end space-x-4'>
          <button
            onClick={onCancel}
            className='bg-gray-500 text-white px-4 py-2 rounded'
          >
            Cancel
          </button>

          <button
            onClick={onConfirm}
            className='bg-red-500 text-white px-4 py-2 rounded'
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal