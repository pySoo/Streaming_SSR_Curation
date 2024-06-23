import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import { Weather } from '@/app/api/types';

interface Props {
  weatherList: Weather[];
  setWeatherList: (weatherList: Weather[]) => void;
}

const useWeatherStore = create<Props>()(
  devtools((set) => ({
    weatherList: [],
    setWeatherList: (weatherList: Weather[]) => set({ weatherList }),
  })),
);

export default useWeatherStore;
