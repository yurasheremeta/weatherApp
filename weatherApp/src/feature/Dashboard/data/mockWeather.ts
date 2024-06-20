import { faker } from "@faker-js/faker";
import dayjs from "dayjs";
import { DayPeriods } from "../models/Weather";

export const mockWeather = () => {
  const now = dayjs();
  return [
    {
      date: now,
      weather: [
        {
          temperature: faker.number.int({
            min: 13,
            max: 25,
          }),
          windSpeed: faker.number.int({
            min: 5,
            max: 25,
          }),
          periodOfDay: DayPeriods.morning,
        },
        {
          temperature: faker.number.int({
            min: 13,
            max: 25,
          }),
          windSpeed: faker.number.int({
            min: 5,
            max: 25,
          }),
          periodOfDay: DayPeriods.afternoon,
        },
        {
          temperature: faker.number.int({
            min: 13,
            max: 25,
          }),
          windSpeed: faker.number.int({
            min: 5,
            max: 25,
          }),
          periodOfDay: DayPeriods.evening,
        },
        {
          temperature: faker.number.int({
            min: 13,
            max: 25,
          }),
          windSpeed: faker.number.int({
            min: 5,
            max: 25,
          }),
          periodOfDay: DayPeriods.night,
        },
      ],
    },
    {
      date: now.add(1, "day"),
      weather: [
        {
          temperature: faker.number.int({
            min: 13,
            max: 25,
          }),
          windSpeed: faker.number.int({
            min: 5,
            max: 25,
          }),
          periodOfDay: DayPeriods.morning,
        },
        {
          temperature: faker.number.int({
            min: 13,
            max: 25,
          }),
          windSpeed: faker.number.int({
            min: 5,
            max: 25,
          }),
          periodOfDay: DayPeriods.afternoon,
        },
        {
          temperature: faker.number.int({
            min: 13,
            max: 25,
          }),
          windSpeed: faker.number.int({
            min: 5,
            max: 25,
          }),
          periodOfDay: DayPeriods.evening,
        },
        {
          temperature: faker.number.int({
            min: 13,
            max: 25,
          }),
          windSpeed: faker.number.int({
            min: 5,
            max: 25,
          }),
          periodOfDay: DayPeriods.night,
        },
      ],
    },
  ];
};
