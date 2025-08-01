import { toast } from 'react-toastify';

/**
 * Logout utility function that can be used throughout the app
 * 
 * @param signOut - The signOut function from useAuth hook
 * @param navigate - The navigate function from useNavigate hook (optional)
 * @param redirectPath - Path to redirect after logout (default: '/sign-in')
 */
export const logout = (
  signOut: () => void,
  navigate?: (path: string) => void,
  redirectPath: string = '/sign-in'
) => {
  try {
    // Call the signOut function
    signOut();
    
    // Show success message
    toast.success("Successfully logged out!");
    
    // Navigate if navigate function is provided
    if (navigate) {
      setTimeout(() => {
        navigate(redirectPath);
      }, 100); // Small delay to ensure toast shows
    } else {
      // Fallback to window.location if navigate is not available
      setTimeout(() => {
        window.location.href = redirectPath;
      }, 100);
    }
  } catch (error) {
    console.error('Logout error:', error);
    toast.error("Error logging out. Please try again.");
    
    // Even if there's an error, try to redirect
    if (navigate) {
      navigate(redirectPath);
    } else {
      window.location.href = redirectPath;
    }
  }
};