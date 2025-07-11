import { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { Role } from '../model/enums';

// Define the User interface
interface User {
  id: string;
  email: string;
  fullName: string;
  roles: Role[];
  businessName?: string;
  mobile?: string;
  country?: string;
  state?: string;
  city?: string;
}

// Define the AuthContext interface
interface AuthContextType {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signIn: (token: string, userData: User) => void;
  signOut: () => void;
  updateUser: (userData: Partial<User>) => void;
  hasRole: (role: Role) => boolean;
  hasAnyRole: (roles: Role[]) => boolean;
}

// Define the AuthProvider props interface
interface AuthProviderProps {
  children: ReactNode;
}

// Create the context with default values
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth Provider component
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize auth state from localStorage on mount
  useEffect(() => {
    const initializeAuth = () => {
      try {
        const storedToken = localStorage.getItem('user-token');
        const storedUser = localStorage.getItem('user-data');
        
        if (storedToken && storedUser) {
          setToken(storedToken);
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        console.error('Failed to initialize auth from localStorage:', error);
        // Clear invalid data
        localStorage.removeItem('user-token');
        localStorage.removeItem('user-data');
      } finally {
        setIsLoading(false);
      }
    };

    initializeAuth();
  }, []);

  // Sign in function
  const signIn = (newToken: string, userData: User) => {
    setToken(newToken);
    setUser(userData);
    localStorage.setItem('user-token', newToken);
    localStorage.setItem('user-data', JSON.stringify(userData));
  };

  // Sign out function
  const signOut = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('user-token');
    localStorage.removeItem('user-data');
  };

  // Update user function
  const updateUser = (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      setUser(updatedUser);
      localStorage.setItem('user-data', JSON.stringify(updatedUser));
    }
  };

  // Check if user has specific role
  const hasRole = (role: Role): boolean => {
    return user?.roles?.includes(role) ?? false;
  };

  // Check if user has any of the specified roles
  const hasAnyRole = (roles: Role[]): boolean => {
    return roles.some(role => hasRole(role));
  };

  // Computed values
  const isAuthenticated = !!token && !!user;

  const contextValue: AuthContextType = {
    user,
    token,
    isAuthenticated,
    isLoading,
    signIn,
    signOut,
    updateUser,
    hasRole,
    hasAnyRole,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
