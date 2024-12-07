import React from "react";

interface PasswordStrengthIndicatorProps {
  password: string;
}

const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({
  password,
}) => {
  const calculateStrength = () => {
    if (password.length < 8) return "Weak";
    if (password.match(/[A-Z]/) && password.match(/[0-9]/)) return "Strong";
    return "Medium";
  };

  const strength = calculateStrength();

  return (
    <div>
      <div>Password Strength: {strength}</div>
    </div>
  );
};

export default PasswordStrengthIndicator;
