import { getCurrentDate, getCurrentDateAndHour } from '@/utils/date';

export const QUERY_KEYS = {
  SHOPPING: {
    LIST: (query: string) => ['SHOPPING_LIST', query],
  },
  WEATHER: {
    CURRENT: ['WEATHER_CURRENT', getCurrentDateAndHour()],
    LIST: ['WEATHER_LIST', getCurrentDate()],
  },
} as const;
