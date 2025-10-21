import React from 'react';

interface ErrorMessageProps {
  message: string;
  onRetry: () => void;
  isVisible: boolean;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onRetry, isVisible }) => {
  const animationClass = isVisible ? 'animate-card-enter' : 'animate-fade-out-quick';

  return (
    <div className={`text-center p-6 bg-red-900/30 border border-red-500/50 rounded-lg shadow-lg ${animationClass}`}>
      <p className="text-red-300 mb-4">{message}</p>
      <button
        onClick={onRetry}
        className="px-6 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
};

export default ErrorMessage;