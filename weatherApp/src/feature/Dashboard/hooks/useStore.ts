import { create } from "zustand"
import { IWeatherView } from "../models/Weather";

interface IInitialState  {
    city: string | undefined;
    weather: IWeatherView[];
    addWeather: (data: IWeatherView[]) => void;
    addCity: (data: string) => void;
}

const useWeatherStore = create<IInitialState>((set) => ({
  city: undefined,
  weather: [],
  addWeather: (data) => {
    set((state) => ({...state, weather: data }))
  },
    addCity: (data: string) => {
        set((state) => ({...state , city: data}))
    }
}))

export default useWeatherStore