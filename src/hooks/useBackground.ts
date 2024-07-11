import { getCurrentSkyColor } from '@/components/Weather/Background/utils';
import { getCurrentDate, getDayTime } from '@/utils/date';

export const useBackground = () => {
  const currentDate = getCurrentDate();
  const currentHour = currentDate.getHours();

  const dayTime = getDayTime(currentHour);
  const currentSkyColor = getCurrentSkyColor(dayTime);

  return { currentDate, dayTime, currentSkyColor };
};
