import { Role } from '../../model/enums';
import { toast } from 'react-toastify';

/**
 * Determines the appropriate redirect path based on user roles
 * 
 * Priority order:
 * 1. ADMIN -> /admin/dashboard
 * 2. AGENT -> /dashboard/home  
 * 3. No valid roles -> / (with error message)
 * 
 * @param roles - Array of user roles
 * @returns The path to redirect to
 */
export const getRedirectPath = (roles: Role[]): string => {
  if (!roles || roles.length === 0) {
    toast.error("No user permissions found. Please contact support.");
    return "/";
  }

  // Priority: ADMIN first, then AGENT, then fallback
  if (roles.includes(Role.admin)) {
    return "/admin/dashboard";
  } else if (roles.includes(Role.agent)) {
    return "/dashboard/home";
  } else {
    // Fallback for users with unrecognized roles
    toast.error("Invalid user permissions. Please contact support.");
    console.warn('User has unrecognized roles:', roles);
    return "/";
  }
};

/**
 * Checks if user has any valid role for the application
 * 
 * @param roles - Array of user roles
 * @returns True if user has at least one valid role
 */
export const hasValidRole = (roles: Role[]): boolean => {
  return roles && roles.length > 0 && 
         (roles.includes(Role.admin) || roles.includes(Role.agent));
};

/**
 * Gets the primary role for display purposes
 * Returns the highest priority role the user has
 * 
 * @param roles - Array of user roles
 * @returns The primary role or null if no valid roles
 */
export const getPrimaryRole = (roles: Role[]): Role | null => {
  if (!roles || roles.length === 0) return null;
  
  if (roles.includes(Role.admin)) return Role.admin;
  if (roles.includes(Role.agent)) return Role.agent;
  
  return null;
};

/**
 * Gets user-friendly role name for display
 * 
 * @param role - The role enum value
 * @returns Human-readable role name
 */
export const getRoleDisplayName = (role: Role): string => {
  switch (role) {
    case Role.admin:
      return 'Administrator';
    case Role.agent:
      return 'Agent';
    default:
      return 'Unknown';
  }
};

/**
 * Gets comma-separated list of user-friendly role names
 * 
 * @param roles - Array of role enum values
 * @returns Comma-separated string of role names
 */
export const getRoleDisplayNames = (roles: Role[]): string => {
  if (!roles || roles.length === 0) return 'No roles';
  return roles.map(role => getRoleDisplayName(role)).join(', ');
};