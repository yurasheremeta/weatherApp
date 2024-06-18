import { useQuery } from "react-query";

import useCityStore from "./useStore";
import { IWeatherView } from "../models/Weather";
import { mockWeather } from "../data/mockWeather";

export const useGetWeather= () => {
  const { addWeather } = useCityStore();
  const { data, isLoading } = useQuery<IWeatherView[]>(
    ["weather-form"],
    () => mockWeather(),
    {
      onSuccess: (data) => addWeather(data),
    }
  );

  return { data, isLoading };
};
