import { Dayjs } from "dayjs";

export enum DayPeriods {
  morning = "Morning",
  afternoon = "Afternoon",
  evening = "Evening",
  night = "Night",
}

export interface IWeatherView {
    date: Dayjs,
    weather: IWeather[]
}


export interface IDayPeriod {
    period: DayPeriods,
    timeFrom: string,
    timeTo: string,
}

export interface IWeather {
        temperature: number,
        periodOfDay: DayPeriods,
        windSpeed: number;

}