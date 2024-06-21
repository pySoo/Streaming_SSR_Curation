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
