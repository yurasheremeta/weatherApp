import { Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import isToday from "dayjs/plugin/isToday";
import { useScreen } from "shared/hooks/useScreen";
import { sxWeatherCardWrapper } from "./WeatherBlock.styles";
import { WeatherCard } from "../WeatherCard";
import { ReactElement } from "react";
import { IWeatherBlockProps } from "./WeatherBlock.model";

export const WeatherBlock = ({ weather }: IWeatherBlockProps): ReactElement => {
    const isMdScreen = useScreen();
  
    dayjs.extend(isToday);
    return (
      <>
        {weather.map((el) => (
          <Box key={el.date.toISOString()} sx={sxWeatherCardWrapper}>
            <Box textAlign={"center"} mb={3} color={"#5d3437"}>
              <Typography variant="h3">
                {el.date.format("MMM D, YYYY")}
              </Typography>
            </Box>
  
            <Box
              display={isMdScreen ? "flex" : "block"}
              justifyContent={"space-around"}
              color={"#344b5d"}
            >
              <WeatherCard weather={el.weather} date={el.date} />
            </Box>
          </Box>
        ))}
      </>
    );
  };
  