import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ViewDetailsModal from '../components/ViewDetailsModal.jsx';
import historyImg from '../assets/image/history.gif';

const History = () => {
  const [historyData, setHistoryData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedEntry, setSelectedEntry] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const BASE_URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${BASE_URL}/crop/history`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setHistoryData(response.data || response.data.data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  const handleView = (entry) => {
    setSelectedEntry(entry);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`${BASE_URL}/crop/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

     setHistoryData((prev) => prev.filter((item) => item._id !== id));
    } catch (error) {
      console.error('Delete failed:', error);
    }
  };

  return (
    <div className="flex h-fit items-center justify-center py-8 md:py-20 lg:py-32">
      <div className="max-w-6xl w-full mx-4 sm:mx-auto bg-white shadow-md rounded-lg p-4 sm:p-6">
        <h2 className="text-lg sm:text-xl font-semibold text-center mb-6 flex items-center justify-center gap-2">
          <img src={historyImg} alt="History Icon" className="h-8 w-8" />
          <span>Your Detection History</span>
        </h2>

        {loading ? (
          <p className="text-red-600">Loading Data...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs sm:text-sm text-left">
              <thead className="bg-green-100 text-green-800">
                <tr>
                  <th className="px-3 py-2">#</th>
                  <th className="px-3 py-2">Date</th>
                  <th className="px-3 py-2">Crop</th>
                  <th className="px-3 py-2">Detected Disease</th>
                  <th className="px-3 py-2">Confidence</th>
                  <th className="px-3 py-2">Actions</th>
                </tr>
              </thead>

              <tbody>
                {historyData.map((entry, index) => (
                  <tr key={entry.id || `${entry.crop}-${index}`} className="border-b hover:bg-gray-50">
                    <td className="px-3 py-2">{index + 1}</td>
                    <td className="px-3 py-2">{new Date(entry.createdAt).toLocaleDateString()}</td>
                    <td className="px-3 py-2">{entry.crop}</td>
                    <td className="px-3 py-2">{entry.result}</td>
                    <td className="px-3 py-2">{entry.confidence}</td>
                    <td className="px-3 py-2">
                      <div className="flex flex-wrap gap-2">
                        <button
                          onClick={() => handleView(entry)}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-xs sm:text-sm cursor-pointer"
                        >
                          View
                        </button>

                        <button
                          onClick={() => handleDelete(entry._id)}
                          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-xs sm:text-sm cursor-pointer">
                          Delete
                        </button>

                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {historyData.length === 0 && (
              <p className="text-center mt-4 text-gray-500">No predictions found.</p>
            )}
          </div>
        )}

        {showModal && (
          <ViewDetailsModal entry={selectedEntry} onClose={() => setShowModal(false)} />
        )}
      </div>
    </div>
  );
};

export default History;
