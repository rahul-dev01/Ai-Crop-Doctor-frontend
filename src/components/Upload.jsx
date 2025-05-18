import React from 'react';

const Upload = () => {
    return (
      <div className="flex h-fit items-center justify-center  py-8 md:py-20 lg:py-32">

            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-xl text-center">
                <h2 className="text-2xl font-semibold mb-2">Upload Crop Image</h2>
                <p className="text-gray-600 mb-6">
                    Drag & drop an image or click to browse and select.
                </p>


                <div className="border-2 border-dashed border-green-600 rounded-md py-12 px-4 mb-6 cursor-pointer text-green-700 hover:bg-green-100 transition">
                    Drop image here or click to upload
                </div>

                <button className="bg-green-700 text-white  cursor-pointer   px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded shadow hover:bg-gray-400 transition">
                    Analyze
                </button>
            </div>


        </div>
    );
};

export default Upload;
