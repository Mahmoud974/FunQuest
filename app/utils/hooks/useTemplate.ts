import { useQuery } from "@tanstack/react-query";

import axios from "axios";

const fetchElements = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const useTemplate = () => {
  return useQuery({
    queryKey: ["get-template"],
    queryFn: () => fetchElements("http://localhost:3000/api/hotel"),
  });
};

export const useTemplateActivities = () => {
  return useQuery({
    queryKey: ["get-templates"],
    queryFn: () => fetchElements("http://localhost:3000/api/activities"),
  });
};

export const useTemplateFlights = () => {
  return useQuery({
    queryKey: ["get-flights"],
    queryFn: () => fetchElements("http://localhost:3000/api/flights"),
  });
};
