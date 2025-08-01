import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider";
import { Role } from "../../model/enums";
import { hasValidRole } from "../../utils/auth/roleNavigation";

interface ProtectedRouteProps {
  requiredRoles?: Role[];
  fallbackPath?: string;
}

export const ProtectedRoute = ({
  requiredRoles = [],
  fallbackPath = "/sign-in",
}: ProtectedRouteProps) => {
  const { isAuthenticated, isLoading, hasAnyRole, user } = useAuth();

  // Show loading state while checking authentication
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Check if user is authenticated
  if (!isAuthenticated) {
    return <Navigate to={fallbackPath} replace />;
  }

  // Check if user has any valid application roles
  if (user && !hasValidRole(user.roles)) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded"
          role="alert"
        >
          <strong className="font-bold">Invalid Permissions!</strong>
          <span className="block sm:inline">
            {" "}
            Your account doesn't have valid permissions. Please contact support.
          </span>
        </div>
      </div>
    );
  }

  // Check if user has required roles (if any specified)
  if (requiredRoles.length > 0 && !hasAnyRole(requiredRoles)) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded"
          role="alert"
        >
          <strong className="font-bold">Access Denied!</strong>
          <span className="block sm:inline">
            {" "}
            You don't have sufficient permissions to access this page.
          </span>
        </div>
      </div>
    );
  }

  // User is authenticated and has required roles
  return <Outlet />;
};

export default ProtectedRoute;
