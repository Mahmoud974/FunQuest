import { useState, useEffect } from "react";

export const useTemplate = (page = 1, limit = 10) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchHotels = async () => {
      setIsFetching(true);
      const response = await fetch(`/api/hotels?page=${page}&limit=${limit}`);
      const result = await response.json();
      setData(result.data);
      setTotal(result.total); // Assurez-vous que votre API renvoie le nombre total de résultats
      setIsLoading(false);
      setIsFetching(false);
    };

    fetchHotels();
  }, [page, limit]);

  return { data, isFetching, isLoading, total };
};
