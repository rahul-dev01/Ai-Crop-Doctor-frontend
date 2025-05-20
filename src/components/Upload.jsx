import React, { useRef, useState } from 'react';
import Result from './Result';


const Upload = () => {

    const fileInputRef = useRef(null)
    const [selectedFile, setSelectedFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [result, setResult] = useState("");
    const [crop, setcrop] = useState("")

    const BASE_URL = import.meta.env.VITE_BASE_URL;

    const handelClick = () => {
        fileInputRef.current.click()
    }

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setSelectedFile(file);

            const reader = new FileReader();
            reader.onload = () => setPreviewUrl(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) {
            setSelectedFile(file);
            const reader = new FileReader();
            reader.onload = () => setPreviewUrl(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const removeImage = () => {
        setSelectedFile(null);
        setPreviewUrl(null);
        setResult("");
        setcrop("");
        fileInputRef.current.value = "";
    };


    const handleAnalyze = async () => {
        if (!selectedFile) {
            alert("Please select an image");
            return;
        }

        const formData = new FormData();
        formData.append("image", selectedFile);

        const token = localStorage.getItem("token");

        try {
            const response = await fetch(`${BASE_URL}/crop/predict`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: formData,
            });

            const data = await response.json();
            if (data.result && data.crop) {
                setResult(`Prediction: ${data.result}`);
                setcrop(`Crop name : ${data.crop}`)
            } 
            else {
                alert("Failed to get prediction");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Error in image submission");
        }
    };


    return (
        <div className="flex h-fit items-center justify-center  py-8 md:py-20 lg:py-32">

            <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-xl text-center">
                <h2 className="text-2xl font-semibold mb-2">Upload Crop Image</h2>
                <p className="text-gray-600 mb-6">
                    Drag & drop an image or click to browse and select.
                </p>


                {!previewUrl && (
                    <div
                        className="border-2 border-dashed border-green-600 rounded-md py-16 px-6 mb-8 cursor-pointer text-green-700 hover:bg-green-100 transition"
                        onClick={handelClick}
                        onDrop={handleDrop}
                        onDragOver={handleDragOver}
                    >
                        Drop image here or click to upload
                    </div>
                )}


                <input type="file"
                    accept='image/*'
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    style={{ display: 'none' }}
                />
                <Result previewUrl={previewUrl} result={result} crop={crop} removeImage={removeImage} />


                <button
                    onClick={handleAnalyze}
                    className="bg-green-700 text-white cursor-pointer px-6 sm:px-8 py-2 sm:py-3 text-base sm:text-lg font-semibold rounded shadow hover:bg-gray-400 transition"
                >
                    Analyze
                </button>

            </div>


        </div>
    );
};

export default Upload;
