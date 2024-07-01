import { getDayTime } from '@/utils/date';

const DAYTIME_COLOR = {
  sunrise: 'to bottom, #1B2A4A, #7D6180',
  sunset: 'to bottom, #094F91, #E6D6C3',
  night: 'to bottom, #05051C, #334461',
  day: 'to bottom, #094F91, #ABC9E8',
  rain: 'to bottom, #485767, #485667',
};

interface CurrentSkyColorProps {
  isRaining: boolean;
}

export const getCurrentSkyColor = ({ isRaining }: CurrentSkyColorProps) => {
  if (isRaining) {
    return DAYTIME_COLOR['rain'];
  }

  const dayTime = getDayTime();

  return DAYTIME_COLOR[dayTime];
};
