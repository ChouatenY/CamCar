import React, { useState } from 'react';
import Button from './Button';

const MoreCarDetailsForm = ({ onFinish, onSkip }) => {
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);
  const [vin, setVin] = useState('');
  const [licenseNo, setLicenseNo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onFinish({ frontImage, backImage, vin, licenseNo });
  };

  const handleImageChange = (e, setImage) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setImage(file);
    } else {
      alert('Please upload an image file.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="frontImage" className="block text-sm font-medium text-gray-700">
          Front of the Car
        </label>
        <input
          type="file"
          id="frontImage"
          onChange={(e) => handleImageChange(e, setFrontImage)}
          accept="image/*"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="backImage" className="block text-sm font-medium text-gray-700">
          Back of the Car
        </label>
        <input
          type="file"
          id="backImage"
          onChange={(e) => handleImageChange(e, setBackImage)}
          accept="image/*"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="vin" className="block text-sm font-medium text-gray-700">
          VIN
        </label>
        <input
          type="text"
          id="vin"
          value={vin}
          onChange={(e) => setVin(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="licenseNo" className="block text-sm font-medium text-gray-700">
          License No
        </label>
        <input
          type="text"
          id="licenseNo"
          value={licenseNo}
          onChange={(e) => setLicenseNo(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          required
        />
      </div>
      <div className="flex justify-between">
        <Button color="white" onClick={onSkip}>
          Skip
        </Button>
        <Button type="submit">Finish</Button>
      </div>
    </form>
  );
};

export default MoreCarDetailsForm;