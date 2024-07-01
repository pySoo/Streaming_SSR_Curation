import 'dayjs/locale/ko';

import dayjs from 'dayjs';

dayjs.locale('ko');

export const convertDateByFormat = (date: Date, dateFormat?: string) => {
  return dayjs(date).format(dateFormat ?? 'YYYY.MM.DD');
};

export const convertTimestampToDate = (
  timestamp: number,
  dateFormat?: string,
) => {
  const currentDate = new Date(timestamp * 1000);

  return convertDateByFormat(currentDate, dateFormat ?? 'MM/DD (ddd)');
};

export const isToday = (timestamp: number) => {
  const today = new Date();
  const currentDate = new Date(timestamp * 1000);

  return (
    today.getFullYear() === currentDate.getFullYear() &&
    today.getMonth() === currentDate.getMonth() &&
    today.getDate() === currentDate.getDate()
  );
};

export const getDayTime = () => {
  const currentDate = dayjs();
  const currentHour = currentDate.hour();

  if (currentHour >= 5 && currentHour <= 6) {
    return 'sunrise';
  } else if (currentHour >= 7 && currentHour <= 17) {
    return 'day';
  } else if (currentHour >= 18 && currentHour <= 19) {
    return 'sunset';
  } else {
    return 'night';
  }
};
