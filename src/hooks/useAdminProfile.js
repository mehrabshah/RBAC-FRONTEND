import { useState, useEffect } from "react";
import { createProfileAdmin } from "../services/adminapi";

export function useAdminProfile() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCreatePorfile = async () => {
      try {
        const profileData = await createProfileAdmin();
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchCreatePorfile();

    // Cleanup function
    return () => {};

  }, []);

  return { isLoading, error };
}
