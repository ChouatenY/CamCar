import React, { useState } from 'react';
import Button from './Button';
import { INSURANCE_TYPES } from '../utils/constants';

const InsuranceDataForm = ({ onNext, onSkip }) => {
  const [insuranceName, setInsuranceName] = useState('');
  const [refNo, setRefNo] = useState('');
  const [insuranceType, setInsuranceType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [expDate, setExpDate] = useState('');
  const [policyDocument, setPolicyDocument] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext({ insuranceName, refNo, insuranceType, startDate, expDate, policyDocument });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'application/pdf' || file.type === 'application/msword')) {
      setPolicyDocument(file);
    } else {
      alert('Please upload a PDF or DOC file.');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="insuranceName" className="block text-sm font-medium text-gray-700">
          Insurance Name
        </label>
        <input
          type="text"
          id="insuranceName"
          value={insuranceName}
          onChange={(e) => setInsuranceName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="refNo" className="block text-sm font-medium text-gray-700">
          Ref No
        </label>
        <input
          type="text"
          id="refNo"
          value={refNo}
          onChange={(e) => setRefNo(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="insuranceType" className="block text-sm font-medium text-gray-700">
          Insurance Type
        </label>
        <select
          id="insuranceType"
          value={insuranceType}
          onChange={(e) => setInsuranceType(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          required
        >
          <option value="">Select insurance type</option>
          {INSURANCE_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
            Start Date
          </label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="expDate" className="block text-sm font-medium text-gray-700">
            Exp Date
          </label>
          <input
            type="date"
            id="expDate"
            value={expDate}
            onChange={(e) => setExpDate(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            required
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="policyDocument" className="block text-sm font-medium text-gray-700">
          Policy Document
        </label>
        <input
          type="file"
          id="policyDocument"
          onChange={handleFileChange}
          accept=".pdf,.doc,.docx"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
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

export default InsuranceDataForm;