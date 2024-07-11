import { getCurrentDate, getCurrentDateAndHour } from '@/utils/date';

export const QUERY_KEYS = {
  SHOPPING: {
    LIST: (query: string, display = 10) => ['SHOPPING_LIST', query, display],
  },
  WEATHER: {
    CURRENT: ['WEATHER_CURRENT', getCurrentDateAndHour()],
    LIST: ['WEATHER_LIST', getCurrentDate()],
  },
} as const;
