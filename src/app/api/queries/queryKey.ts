import { getFormattedLocaleDate } from '@/utils/date';

export const QUERY_KEYS = {
  SHOPPING: {
    LIST: (query: string, display = 10) => ['SHOPPING_LIST', query, display],
  },
  WEATHER: {
    CURRENT: ['WEATHER_CURRENT', getFormattedLocaleDate({ includeHour: true })],
    LIST: ['WEATHER_LIST', getFormattedLocaleDate()],
  },
} as const;
