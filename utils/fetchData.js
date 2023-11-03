import { useState } from "react";
import { axiosInstance } from "./axios";

export function useData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axiosInstance.get(url);

      setData(response.data);
      setLoading(false);
      setError(null);
    } catch (error) {
      setData(null);
      setLoading(false);
      setError(error);
    }
  };

  // Fetch data when the hook is first called
  if (loading) {
    fetchData();
  }

  return { data, loading, error };
}
