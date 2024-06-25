import { WEATHER_DESCRIPTION } from '@/app/api/constants';
import { Weather } from '@/app/api/types';
import { CurationList } from '@/components/Curation/types';

export const getClothesByTemperature = (temperature: number) => {
  if (temperature < 5) {
    return ['패딩', '코트', '목도리'];
  } else if (temperature < 9) {
    return ['코트', '가죽자켓', '플리스'];
  } else if (temperature < 12) {
    return ['트렌치코트', '야상', '자켓'];
  } else if (temperature < 17) {
    return ['니트', '가디건', '맨투맨'];
  } else if (temperature < 21) {
    return ['얇은 가디건', '셔츠', '면바지'];
  } else if (temperature < 25) {
    return ['얇은 셔츠', '반팔', '면바지'];
  } else if (temperature < 28) {
    return ['반팔 린넨', '반팔', '반바지'];
  } else {
    return ['민소매', '반팔 린넨', '반바지'];
  }
};

export const getCurationListByWeather = (weatherList: Weather[]) => {
  const weatherForecast = getWeatherForecast(weatherList);
  const curationList: CurationList = [];

  if (weatherForecast.highTemperature >= 30) {
    curationList.push({
      keyword: '더운 날씨에 주의하세요',
      description: '수분을 잃지 않도록 촉촉하게 💦',
      query: '수분크림',
    });
  } else if (weatherForecast.highTemperature >= 25) {
    curationList.push({
      keyword: '더운 날씨에 주의하세요',
      description: '자외선 차단 필수 ☀️',
      query: '선크림',
    });
  }

  if (weatherForecast.lowTemperature <= 10) {
    curationList.push({
      keyword: '10도 이하로 쌀쌀해져요',
      description: '면역력을 키워볼까요? 💪',
      query: '홍삼',
    });
  } else if (weatherForecast.lowTemperature <= 15) {
    curationList.push({
      keyword: '15도 이하 환절기예요',
      description: '건조해진 피부를 위해 준비했어요 🙌',
      query: '영양크림',
    });
  }

  if (weatherForecast.isPossibleToRain) {
    curationList.push({
      keyword: '비가 올 수 있어요',
      description: '우산을 미리 챙겨둘까요? ☔️',
      query: '우산',
    });
  }

  if (weatherForecast.isWideTempRange) {
    curationList.push({
      keyword: '큰 일교차에 주의하세요',
      description: '감기 예방 비타민 🍋',
      query: '비타민',
    });
  }

  return curationList.slice(0, 3);
};

export const getWeatherForecast = (weatherList: Weather[]) => {
  const weatherForecast = {
    isWideTempRange: false,
    isPossibleToRain: false,
    lowTemperature: Number.MAX_SAFE_INTEGER,
    highTemperature: Number.MIN_SAFE_INTEGER,
  };

  weatherList.forEach((weather) => {
    if (weather.temperatureHigh - weather.temperatureLow >= 10) {
      weatherForecast.isWideTempRange = true;
    }

    if (weather.summary === WEATHER_DESCRIPTION['rain'].title) {
      weatherForecast.isPossibleToRain = true;
    }

    if (weather.temperatureLow < weatherForecast.lowTemperature) {
      weatherForecast.lowTemperature = weather.temperatureLow;
    }

    if (weather.temperatureHigh > weatherForecast.highTemperature) {
      weatherForecast.highTemperature = weather.temperatureHigh;
    }
  });

  return weatherForecast;
};
