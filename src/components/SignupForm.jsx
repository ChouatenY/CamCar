// src/components/SignupForm.jsx
import React, { useState } from 'react';
import Button from './Button';
import { validatePassword } from '../utils/validation';

const SignupForm = ({ onNext }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [passwordConditions, setPasswordConditions] = useState({
    length: false,
    symbol: false,
    capital: false,
    number: false,
  });

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setPasswordConditions(validatePassword(newPassword));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(passwordConditions).every(Boolean) && acceptTerms) {
      onNext({ email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Phone/Email
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          required
        />
      </div>
      <div className="space-y-2">
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="relative">
          <input
            type={showPassword ? 'text' : 'password'}
            id="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
      </div>
      {password && (
        <ul className="text-sm text-gray-600 space-y-1">
          {Object.entries(passwordConditions).map(([condition, met]) => (
            <li key={condition} className={met ? 'text-green-500' : 'text-red-500'}>
              {met ? '✓' : '○'} {condition}
            </li>
          ))}
        </ul>
      )}
      <div className="flex items-center">
        <input
          type="checkbox"
          id="terms"
          checked={acceptTerms}
          onChange={(e) => setAcceptTerms(e.target.checked)}
          className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
        />
        <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
          Accept terms and conditions
        </label>
      </div>
      <div className="text-sm text-gray-600">
        Already have an account? <span className="text-blue-500 cursor-not-allowed">Login</span>
      </div>
      <Button
        type="submit"
        disabled={!acceptTerms || !Object.values(passwordConditions).every(Boolean)}
        className="w-full"
      >
        Next
      </Button>
    </form>
  );
};

export default SignupForm;