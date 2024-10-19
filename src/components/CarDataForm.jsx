// src/components/CarDataForm.jsx
import React, { useState } from 'react';
import Button from './Button';
import { CAR_BRANDS } from '../utils/constants';

const CarDataForm = ({ onNext, onSkip }) => {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [modifications, setModifications] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ brand, model, modifications });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
          Car Brand/Producer
        </label>
        <select
          id="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          required
        >
          <option value="">Select a brand</option>
          {CAR_BRANDS.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
      <div className="space-y-2">
        <label htmlFor="model" className="block text-sm font-medium text-gray-700">
          Model
        </label>
        <input
          type="text"
          id="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="modifications" className="block text-sm font-medium text-gray-700">
          Modifications (if any)
        </label>
        <textarea
          id="modifications"
          value={modifications}
          onChange={(e) => setModifications(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          rows="3"
        ></textarea>
      </div>
      <div className="flex justify-between">
        <Button color="white" onClick={onSkip}>
          Skip
        </Button>
        <Button type="submit">Next</Button>
      </div>
    </form>
  );
};

export default CarDataForm;