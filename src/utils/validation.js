// src/utils/validation.js
export const validatePassword = (password) => {
    return {
      length: password.length >= 8,
      symbol: /[!@#$%^&*(),.?":{}|<>]/.test(password),
      capital: /[A-Z]/.test(password),
      number: /[0-9]/.test(password),
    };
  };