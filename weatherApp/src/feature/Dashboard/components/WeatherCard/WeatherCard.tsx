import { Box, Divider, Typography } from "@mui/material";
import dayjs from "dayjs";

import { useScreen } from "shared/hooks/useScreen";
import isToday from "dayjs/plugin/isToday";
import { ReactElement, useCallback, useMemo } from "react";
import { sxWeatherWrapper } from "./WeatherCard.styles";
import { DayPeriodsObj } from "./helpers";
import { IWeatherCardProps } from "./WeatherCard.model";
import { DayPeriods, IWeather } from "feature/Dashboard/models/Weather";

export const WeatherCard = ({
  weather,
  date,
}: IWeatherCardProps): ReactElement => {
  const isMdScreen = useScreen();

  const DetectDayPeriod = useCallback((dayPeriod: string) => {
    const now = dayjs();

    return (
      DayPeriodsObj[dayPeriod].timeFrom <= now.hour() &&
      now.hour() < DayPeriodsObj[dayPeriod].timeTo
    );
  }, []);

  dayjs.extend(isToday);

  const filteredWeather = useMemo(() => {
    return weather.reduce((acc: IWeather[], currVal) => {
      const isMorning = DetectDayPeriod(DayPeriods.morning);
      const isAfternoon = DetectDayPeriod(DayPeriods.afternoon);
      const isEvening = DetectDayPeriod(DayPeriods.evening);

      if (Array.isArray(acc) && !acc.includes(currVal)) {
        acc.push(currVal);
      }

      if (date.isToday()) {
        if (isMorning) {
          return acc;
        } else if (isAfternoon) {
          return acc.filter((el) => el.periodOfDay !== DayPeriods.morning);
        } else if (isEvening) {
          return acc.filter(
            (el) =>
              el.periodOfDay !== DayPeriods.morning &&
              el.periodOfDay !== DayPeriods.afternoon
          );
        } else {
          return acc.filter((el) => el.periodOfDay === DayPeriods.night);
        }
      } else {
        return acc;
      }
    }, []);
  }, [DetectDayPeriod, date, weather]);

  return (
    <>
      {filteredWeather &&
        filteredWeather.map((el, index) => (
          <Box
            key={index + el.temperature * el.windSpeed}
            sx={sxWeatherWrapper}
          >
            <Typography variant="h5">{el.periodOfDay}</Typography>

            <Typography>
              from {DayPeriodsObj[el.periodOfDay].timeFrom} to
              {DayPeriodsObj[el.periodOfDay].timeTo}
            </Typography>
            <Typography variant="h3">T {el.temperature}°C</Typography>
            <Typography variant="h5">W {el.windSpeed} km/h</Typography>
            {!isMdScreen && <Divider />}
          </Box>
        ))}
    </>
  );
};
