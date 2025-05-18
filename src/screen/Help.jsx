import React from 'react';

const Help = () => {
  return (
    <>
      <div className="max-w-3xl mx-auto mt-16 px-4 sm:px-6 lg:px-8 py-8 bg-white rounded-xl shadow-lg">
        <h2 className="text-xl sm:text-2xl font-bold text-center text-green-700 mb-6">❓ Help & FAQs</h2>

        <details className="mb-4 border border-green-200 rounded-md p-4 bg-green-50">
          <summary className="font-semibold cursor-pointer text-base sm:text-lg">📸 How should I take the photo of my crop?</summary>
          <p className="mt-2 text-sm sm:text-base">Make sure the affected area (leaves/stem/fruit) is in focus. Good lighting and close-up images work best.</p>
        </details>

        <details className="mb-4 border border-green-200 rounded-md p-4 bg-green-50">
          <summary className="font-semibold cursor-pointer text-base sm:text-lg">⚠️ I uploaded an image but got "Couldn’t Analyze Image". Why?</summary>
          <p className="mt-2 text-sm sm:text-base">This can happen if the image is too blurry, doesn't contain visible crop parts, or isn't of a supported plant. Try retaking the photo.</p>
        </details>

        <details className="mb-4 border border-green-200 rounded-md p-4 bg-green-50">
          <summary className="font-semibold cursor-pointer text-base sm:text-lg">💡 What kind of diseases or pests can be detected?</summary>
          <p className="mt-2 text-sm sm:text-base">The AI currently supports major diseases for tomato, potato, brinjal, and chili plants. More crops will be supported soon!</p>
        </details>

        <details className="mb-4 border border-green-200 rounded-md p-4 bg-green-50">
          <summary className="font-semibold cursor-pointer text-base sm:text-lg">📥 Can I download my results?</summary>
          <p className="mt-2 text-sm sm:text-base">Yes! In the History section, you can click the "Download" button next to any result to save it as a report.</p>
        </details>

        <details className="mb-4 border border-green-200 rounded-md p-4 bg-green-50">
          <summary className="font-semibold cursor-pointer text-base sm:text-lg">🧪 Is this a certified diagnosis?</summary>
          <p className="mt-2 text-sm sm:text-base">This is an AI-powered assistant tool. For confirmed diagnoses, consult a certified agronomist or plant pathologist.</p>
        </details>

        <div className="border-t-2 border-dashed border-green-200 mt-8 pt-6">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">📞 Still need help?</h3>
          <p className="text-sm sm:text-base">Feel free to contact our support team at <strong>support@aicropdoctor.com</strong></p>
          <p className="text-sm sm:text-base">We typically respond within 24 hours.</p>
        </div>
      </div>
    </>
  );
};

export default Help;
