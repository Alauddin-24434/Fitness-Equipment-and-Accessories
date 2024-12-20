// validUserHook.tsx

import { useValidAuthUserQuery } from "../redux/features/auth/auth";

export const useValidUser = () => {
  const token = localStorage.getItem("token");
  
  // Fetch the validity of the authentication token
  const { data, isLoading, isError } = useValidAuthUserQuery(token || '');

  return { data, isLoading, isError };
};
