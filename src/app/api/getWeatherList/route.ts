import { NextResponse } from 'next/server';

import {
  ERROR_MESSAGE,
  WEATHER_API_KEY,
  WEATHER_DESCRIPTION,
} from '../constants';
import { WeatherListResponse } from '../types';

export async function GET() {
  if (WEATHER_API_KEY == null) return;

  try {
    const response = await fetch(
      `https://api.pirateweather.net/forecast/${WEATHER_API_KEY}/37,127?exclude=currently,minutely,hourly,alerts&units=ca`,
    );

    if (!response.ok) {
      return NextResponse.json(null, { status: response.status });
    }

    const weatherResponse: WeatherListResponse = await response.json();

    const data = weatherResponse.daily.data;
    const filteredData = data.slice(0, 7).map((item) => {
      const { time, summary, temperatureHigh, temperatureLow } = item;

      // 서버에서 받은 영어와 매칭되는 한글 날씨 정보를 가져옵니다.
      const weatherStatus = WEATHER_DESCRIPTION[summary.toLowerCase()];

      return {
        time,
        icon: weatherStatus?.icon ?? WEATHER_DESCRIPTION['clear'].icon,
        summary: weatherStatus?.title ?? '정보 없음',
        temperatureHigh: Math.round(temperatureHigh),
        temperatureLow: Math.round(temperatureLow),
      };
    });

    return NextResponse.json(filteredData);
  } catch (error) {
    return NextResponse.json({ message: ERROR_MESSAGE[500] }, { status: 500 });
  }
}
