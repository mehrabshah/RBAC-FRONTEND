import { useState, useEffect } from "react";
import { createProfileDoctor } from "../services/docotrapi";

export function useDoctorProfile() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCreatePorfile = async () => {
      try {
        const profileData = await createProfileDoctor();
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
