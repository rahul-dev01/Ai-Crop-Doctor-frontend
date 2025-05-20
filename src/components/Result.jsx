import React from 'react';

const Result = ({ previewUrl, crop, result, removeImage }) => {

    if (!previewUrl && !result) return null;

    return (
        <div className="m-5 text-center">
            {previewUrl && (
                <div className="w-full flex justify-center mb-4">
                    <img
                        src={previewUrl}
                        alt="Preview"
                        className="w-full max-w-md sm:max-w-lg md:max-w-xl h-auto rounded-lg shadow-md object-contain"
                    />
                </div>
            )}

            <button
                onClick={removeImage}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
                Remove
            </button>
            {crop && (
                <p className="mt-2 text-lg font-semibold text-green-800">Crop: {crop}</p>
            )}

            {result && (
                <p className="mt-6 text-lg font-semibold text-blue-800">{result}</p>

            )}

            

        </div>
    );
};

export default Result;
