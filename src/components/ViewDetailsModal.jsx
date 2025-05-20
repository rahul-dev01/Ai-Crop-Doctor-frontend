
import React from 'react';

const ViewDetailsModal = ({ entry, onClose }) => {
  if (!entry) return null;

  return (
    <div className="fixed inset-0 bg-white bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-[90%] max-w-lg shadow-lg">
        <h2 className="text-xl font-semibold mb-4">Prediction Details</h2>
        <p><strong>Date:</strong> {new Date(entry.createdAt).toLocaleString()}</p>
        <p><strong>Crop:</strong> {entry.crop}</p>
        <p><strong>Detected Disease:</strong> {entry.result}</p>
        <p><strong>Confidence:</strong> {entry.confidence}</p>

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-gray-600 cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDetailsModal;
