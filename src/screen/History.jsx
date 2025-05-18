import React from 'react';

import historyImg from "../assets/image/history.gif"

const History = () => {
  const historyData = [
    {
      id: 1,
      date: '2025-04-06',
      crop: 'Tomato',
      disease: 'Leaf Curl Virus',
      confidence: '91%',
    },
    {
      id: 2,
      date: '2025-04-04',
      crop: 'Potato',
      disease: 'Blight',
      confidence: '87%',
    },
    {
      id: 3,
      date: '2025-04-02',
      crop: 'Brinjal',
      disease: 'Healthy',
      confidence: 'N/A',
    },
    {
      id: 1,
      date: '2025-04-06',
      crop: 'Tomato',
      disease: 'Leaf Curl Virus',
      confidence: '91%',
    },
    {
      id: 2,
      date: '2025-04-04',
      crop: 'Potato',
      disease: 'Blight',
      confidence: '87%',
    },
    {
      id: 3,
      date: '2025-04-02',
      crop: 'Brinjal',
      disease: 'Healthy',
      confidence: 'N/A',
    },

    {
      id: 1,
      date: '2025-04-06',
      crop: 'Tomato',
      disease: 'Leaf Curl Virus',
      confidence: '91%',
    },
    {
      id: 2,
      date: '2025-04-04',
      crop: 'Potato',
      disease: 'Blight',
      confidence: '87%',
    },
    {
      id: 3,
      date: '2025-04-02',
      crop: 'Brinjal',
      disease: 'Healthy',
      confidence: 'N/A',
    },

    {
      id: 1,
      date: '2025-04-06',
      crop: 'Tomato',
      disease: 'Leaf Curl Virus',
      confidence: '91%',
    },
    {
      id: 2,
      date: '2025-04-04',
      crop: 'Potato',
      disease: 'Blight',
      confidence: '87%',
    },
    {
      id: 3,
      date: '2025-04-02',
      crop: 'Brinjal',
      disease: 'Healthy',
      confidence: 'N/A',
    },

    {
      id: 1,
      date: '2025-04-06',
      crop: 'Tomato',
      disease: 'Leaf Curl Virus',
      confidence: '91%',
    },
    {
      id: 2,
      date: '2025-04-04',
      crop: 'Potato',
      disease: 'Blight',
      confidence: '87%',
    },
    {
      id: 3,
      date: '2025-04-02',
      crop: 'Brinjal',
      disease: 'Healthy',
      confidence: 'N/A',
    },

    {
      id: 1,
      date: '2025-04-06',
      crop: 'Tomato',
      disease: 'Leaf Curl Virus',
      confidence: '91%',
    },
    {
      id: 2,
      date: '2025-04-04',
      crop: 'Potato',
      disease: 'Blight',
      confidence: '87%',
    },
    {
      id: 3,
      date: '2025-04-02',
      crop: 'Brinjal',
      disease: 'Healthy',
      confidence: 'N/A',
    },


  ];

  return (
    <div className="flex h-fit items-center justify-center py-8 md:py-20 lg:py-32">
      <div className="max-w-6xl w-full mx-4 sm:mx-auto bg-white shadow-md rounded-lg p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold text-center mb-6 flex items-center justify-center gap-2">
          <img src={historyImg} alt="History Icon" className="h-8 w-8" />
          <span>Your Detection History</span>
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full text-xs sm:text-sm text-left">
            <thead className="bg-green-100 text-green-800">
              <tr>
                <th className="px-3 sm:px-4 py-2">#</th>
                <th className="px-3 sm:px-4 py-2">Date</th>
                <th className="px-3 sm:px-4 py-2">Crop</th>
                <th className="px-3 sm:px-4 py-2">Detected Disease</th>
                <th className="px-3 sm:px-4 py-2">Confidence</th>
                <th className="px-3 sm:px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {historyData.map((entry) => (
                <tr key={entry.id} className="border-b hover:bg-gray-50">
                  <td className="px-3 sm:px-4 py-2">{entry.id}</td>
                  <td className="px-3 sm:px-4 py-2">{entry.date}</td>
                  <td className="px-3 sm:px-4 py-2">{entry.crop}</td>
                  <td className="px-3 sm:px-4 py-2 whitespace-nowrap">{entry.disease}</td>
                  <td className="px-3 sm:px-4 py-2">{entry.confidence}</td>
                  <td className="px-3 sm:px-4 py-2">
                    <div className="flex flex-wrap gap-2">
                      <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs sm:text-sm">
                        View
                      </button>
                      <button className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded text-xs sm:text-sm">
                        Download
                      </button>
                      <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs sm:text-sm">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default History;
