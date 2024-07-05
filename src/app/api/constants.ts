import { WeatherDescription } from './types';

export const ERROR_MESSAGE = {
  400: '잘못된 요청입니다',
  401: '로그인이 필요합니다',
  403: '권한이 없습니다',
  500: '서버 에러가 발생했습니다',
} as { [key: number]: string };

export const SHOPPING_API_CLIENT_ID =
  process.env.NEXT_PUBLIC_SHOPPING_API_CLIENT_ID;

export const SHOPPING_API_CLIENT_SECRET =
  process.env.NEXT_PUBLIC_SHOPPING_API_CLIENT_SECRET;

export const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

export const WEATHER_DESCRIPTION: Record<string, WeatherDescription> = {
  clear: {
    title: '맑음',
    icon: '01d',
  },
  'partly cloudy': {
    title: '구름 조금',
    icon: '02d',
  },
  cloudy: {
    title: '흐림',
    icon: '03d',
  },
  rain: {
    title: '비',
    icon: '10d',
  },
  snow: {
    title: '눈',
    icon: '13d',
  },
  sleet: {
    title: '진눈깨비',
    icon: '13d',
  },
  wind: {
    title: '바람',
    icon: '50d',
  },
  fog: {
    title: '안개',
    icon: '50d',
  },
};
