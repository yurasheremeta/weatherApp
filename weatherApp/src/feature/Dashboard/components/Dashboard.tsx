import {
  Autocomplete,
  Box,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { cities } from "shared/data/euCountries";
import { ReactElement, useMemo } from "react";

import { WeatherBlock } from "./WeatherBlock/WeatherBlock";
import { useGetWeather } from "../hooks/useDashboardRepository";
import useWeatherStore from "../hooks/useStore";
import { City } from "../models/City";

export const Dashboard = (): ReactElement => {
  const { isLoading, refetch } = useGetWeather();
  const { city, addCity, weather } = useWeatherStore();

  const euCities: City[] = useMemo(() => {
    return cities.map((el) => {
      return {
        label: el.capitalName,
        value: el.countryCode,
      };
    });
  }, []);

  const addCityToStore = (city: string) => {
    addCity(city);
    refetch();
  };

  return (
    <Box p={3}>
      <Box>
        <Typography mb={3} variant="h3" color={"#344b5d"}>
          Please enter the city to see the forecast
        </Typography>
        <Autocomplete
          options={euCities}
          onInputChange={(_, city) => addCityToStore(city)}
          renderInput={(params) => <TextField {...params} label="Cities" />}
        />
      </Box>
      {isLoading && <CircularProgress />}
      <Typography textAlign={"center"} variant="h2" color={"black"}>
        {city}
      </Typography>
      {city && <WeatherBlock weather={weather} />}
      {isLoading && <CircularProgress />}
    </Box>
  );
};
