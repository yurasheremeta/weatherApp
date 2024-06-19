import { DayPeriods } from "feature/Dashboard/models/Weather";

export const DayPeriodsObj = {
    [DayPeriods.morning] : {
        timeFrom: 6,
        timeTo: 12
    },
    [DayPeriods.afternoon]: {
        timeFrom: 12,
        timeTo: 18
    },
    [DayPeriods.evening]: {
        timeFrom: 18,
        timeTo: 23
    },
    [DayPeriods.night]: {
        timeFrom: 23,
        timeTo: 6
    }
} 