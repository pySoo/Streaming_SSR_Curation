import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { Weather } from '@/app/api/types';

interface Props {
  currentWeather: Weather | null;
  todayWeather: Weather | null;
  weatherList: Weather[];
  setCurrentWeather: (currentWeather: Weather | null) => void;
  setTodayWeather: (todayWeather: Weather | null) => void;
  setWeatherList: (weatherList: Weather[]) => void;
}

const useWeatherStore = create<Props>()(
  devtools((set) => ({
    currentWeather: null,
    todayWeather: null,
    weatherList: [],
    setCurrentWeather: (currentWeather: Weather | null) =>
      set({ currentWeather }),
    setTodayWeather: (todayWeather: Weather | null) => set({ todayWeather }),
    setWeatherList: (weatherList: Weather[]) => set({ weatherList }),
  })),
);

export default useWeatherStore;
