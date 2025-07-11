import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'primary' | 'secondary';
  text?: string;
  className?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 'md',
  variant = 'default',
  text,
  className = '',
}) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
    xl: 'w-16 h-16',
  };

  const variantClasses = {
    default: 'border-gray-200 border-t-gray-600',
    primary: 'border-blue-200 border-t-blue-600',
    secondary: 'border-gray-200 border-t-gray-400',
  };

  const spinnerClasses = `
    inline-block animate-spin rounded-full border-2 
    ${sizeClasses[size]} 
    ${variantClasses[variant]} 
    ${className}
  `.trim();

  if (text) {
    return (
      <div className="flex items-center justify-center space-x-2">
        <div className={spinnerClasses}></div>
        <span className="text-sm text-gray-600">{text}</span>
      </div>
    );
  }

  return <div className={spinnerClasses}></div>;
};

export default LoadingSpinner;

// Full-screen loading component
export const FullScreenLoader: React.FC<{ text?: string }> = ({ text = 'Loading...' }) => (
  <div className="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
    <div className="text-center">
      <LoadingSpinner size="xl" variant="primary" />
      <p className="mt-4 text-lg text-gray-600">{text}</p>
    </div>
  </div>
);

// Page loading component
export const PageLoader: React.FC<{ text?: string }> = ({ text = 'Loading...' }) => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <LoadingSpinner size="lg" variant="primary" />
      <p className="mt-4 text-gray-600">{text}</p>
    </div>
  </div>
);

// Inline loading component for buttons
export const ButtonLoader: React.FC<{ className?: string }> = ({ className = '' }) => (
  <LoadingSpinner size="sm" variant="default" className={className} />
); 