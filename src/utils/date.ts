import 'dayjs/locale/ko';

import dayjs from 'dayjs';

dayjs.locale('ko');

export const convertDateByFormat = (date: dayjs.Dayjs, dateFormat: string) => {
  return date.format(dateFormat);
};

export const convertTimestampToDate = (
  timestamp: number,
  dateFormat?: string,
) => {
  const currentDate = dayjs(timestamp * 1000);

  return convertDateByFormat(currentDate, dateFormat ?? 'MM/DD (ddd)');
};

export const isToday = (timestamp: number) => {
  const today = dayjs();
  const currentDate = dayjs(timestamp * 1000);

  return (
    today.year() === currentDate.year() &&
    today.month() === currentDate.month() &&
    today.date() === currentDate.date()
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
