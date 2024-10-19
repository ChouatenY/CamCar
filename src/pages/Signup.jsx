// src/pages/Signup.jsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ProgressBar from '../components/ProgressBar';
import SignupForm from '../components/SignupForm';
import CarDataForm from '../components/CarDataForm';
import InsuranceDataForm from '../components/InsuranceDataForm';
import MoreCarDetailsForm from '../components/MoreCarDetailsForm';

const Signup = () => {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({});

  const handleNext = (data) => {
    setUserData({ ...userData, ...data });
    setStep(step + 1);
  };

  const handleSkip = () => {
    setStep(step + 1);
  };

  const handleFinish = (data) => {
    setUserData({ ...userData, ...data });
    // Here you would typically send the data to your backend
    console.log('Signup complete:', userData);
    // Redirect to home page or show a success message
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <SignupForm onNext={handleNext} />;
      case 2:
        return <CarDataForm onNext={handleNext} onSkip={handleSkip} />;
      case 3:
        return <InsuranceDataForm onNext={handleNext} onSkip={handleSkip} />;
      case 4:
        return <MoreCarDetailsForm onFinish={handleFinish} onSkip={handleSkip} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4  py-8">
        <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-6 text-center">
              {step === 1 ? 'Sign Up' : step === 2 ? 'Car Data' : step === 3 ? 'Insurance Data' : 'More Car Details'}
            </h2>
            {renderStep()}
          </div>
          <ProgressBar currentStep={step} totalSteps={4} />
        </div>
      </div>
    </div>
  );
};

export default Signup;