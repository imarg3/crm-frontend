// Environment variable validation utility

interface EnvironmentConfig {
  API_URL: string;
  NODE_ENV: string;
  APP_VERSION?: string;
  APP_NAME?: string;
}

// Define required environment variables
const requiredEnvVars = [
  'VITE_API_URL',
] as const;

// Define optional environment variables with defaults
const optionalEnvVars = {
  NODE_ENV: 'development',
  VITE_APP_VERSION: '1.0.0',
  VITE_APP_NAME: 'CRM Frontend',
} as const;

/**
 * Validates that all required environment variables are present
 */
export function validateEnvironment(): EnvironmentConfig {
  const missingVars: string[] = [];
  const config: Partial<EnvironmentConfig> = {};

  // Check required variables
  for (const varName of requiredEnvVars) {
    const value = import.meta.env[varName];
    if (!value || value.trim() === '') {
      missingVars.push(varName);
    } else {
      // Map environment variable names to config keys
      switch (varName) {
        case 'VITE_API_URL':
          config.API_URL = value;
          break;
      }
    }
  }

  // Set optional variables with defaults
  config.NODE_ENV = import.meta.env.NODE_ENV || optionalEnvVars.NODE_ENV;
  config.APP_VERSION = import.meta.env.VITE_APP_VERSION || optionalEnvVars.VITE_APP_VERSION;
  config.APP_NAME = import.meta.env.VITE_APP_NAME || optionalEnvVars.VITE_APP_NAME;

  // Throw error if required variables are missing
  if (missingVars.length > 0) {
    const errorMessage = `
      Missing required environment variables:
      ${missingVars.map(varName => `  - ${varName}`).join('\n')}
      
      Please check your .env file and ensure all required variables are set.
      
      Example .env file:
      VITE_API_URL=http://localhost:8080
    `;
    throw new Error(errorMessage);
  }

  return config as EnvironmentConfig;
}

/**
 * Get validated environment configuration
 */
export const env = validateEnvironment();

/**
 * Check if we're in development mode
 */
export const isDevelopment = env.NODE_ENV === 'development';

/**
 * Check if we're in production mode
 */
export const isProduction = env.NODE_ENV === 'production';

/**
 * Check if we're in test mode
 */
export const isTest = env.NODE_ENV === 'test';

/**
 * Get the API base URL
 */
export const getApiUrl = () => env.API_URL;

/**
 * Get the app version
 */
export const getAppVersion = () => env.APP_VERSION;

/**
 * Get the app name
 */
export const getAppName = () => env.APP_NAME;

/**
 * Log environment information (development only)
 */
export const logEnvironmentInfo = () => {
  if (isDevelopment) {
    console.log('🌍 Environment Information:');
    console.log(`  - Mode: ${env.NODE_ENV}`);
    console.log(`  - API URL: ${env.API_URL}`);
    console.log(`  - App Version: ${env.APP_VERSION}`);
    console.log(`  - App Name: ${env.APP_NAME}`);
  }
}; 