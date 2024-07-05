import { NextResponse } from 'next/server';

import { WEATHER_API_KEY, WEATHER_DESCRIPTION } from '../constants';
import { CurrentWeatherResponse } from '../types';

export async function GET() {
  if (WEATHER_API_KEY == null) return NextResponse.json(null, { status: 403 });

  try {
    const response = await fetch(
      `https://api.pirateweather.net/forecast/${WEATHER_API_KEY}/37,127?exclude=minutely,hourly,daily,alerts&units=ca`,
    );

    if (!response.ok) {
      return NextResponse.json(null, { status: response.status });
    }

    const weatherResponse: CurrentWeatherResponse = await response.json();

    const data = weatherResponse.currently;
    const { time, summary, temperature } = data;

    // 서버에서 받은 영어와 매칭되는 한글 날씨 정보를 가져옵니다.
    const weatherStatus = WEATHER_DESCRIPTION[summary.toLowerCase()];

    const filteredData = {
      time,
      summary: summary.toLowerCase(),
      title: weatherStatus?.title ?? '정보 없음',
      temperature: Math.round(temperature),
    };

    return NextResponse.json(filteredData);
  } catch (error) {
    return NextResponse.json(null, { status: 500 });
  }
}
