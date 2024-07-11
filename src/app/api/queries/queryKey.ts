export const QUERY_KEYS = {
  SHOPPING: {
    LIST: (query: string) => ['SHOPPING_LIST', query],
  },
  WEATHER: {
    CURRENT: ['WEATHER_CURRENT'],
    LIST: ['WEATHER_LIST'],
  },
} as const;
