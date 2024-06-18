import { DayPeriods } from "feature/Dashboard/models/Weather";

export const DayPeriodsObj = {
    [DayPeriods.morning] : {
        timeFrom: 6,
        timeTo: 12
    },
    [DayPeriods.afternoon]: {
        timeFrom: 13,
        timeTo: 18
    },
    [DayPeriods.evening]: {
        timeFrom: 19,
        timeTo: 23
    },
    [DayPeriods.night]: {
        timeFrom: 0,
        timeTo: 5
    }
} 