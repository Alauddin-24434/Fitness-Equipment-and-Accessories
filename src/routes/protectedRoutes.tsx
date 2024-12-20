/* eslint-disable @typescript-eslint/no-explicit-any */
import { Navigate, useLocation } from "react-router-dom";
import { useValidUser } from "../hooks/ValidUserHooks";


const PrivateRoute = ({ children }: any) => {
  const location = useLocation();
  const { data, isLoading, isError } = useValidUser();

  if (isLoading) {
    return <div>Loading...</div>; // Handle loading state if needed
  }

  if (isError || !data || !data.success) {
    // Handle error or invalid token case
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Render the protected route component if authenticated
  return <>{children}</>;
};

export default PrivateRoute;
