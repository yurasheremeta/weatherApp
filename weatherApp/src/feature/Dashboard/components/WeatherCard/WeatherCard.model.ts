import { Dayjs } from "dayjs";
import { IWeather } from "feature/Dashboard/models/Weather";

export interface IWeatherCardProps {
    weather: IWeather[];
    date: Dayjs;
  }