// 모든 시간은 한국 기준으로 변환됩니다.
export const convertToKRDate = (date: Date) => {
  const utc = date.getTime() + date.getTimezoneOffset() * 60 * 1000;
  const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
  return new Date(utc + KR_TIME_DIFF);
};

/*
 * 현재 시간과 관련된 함수들입니다.
 */

export const getCurrentDate = () => {
  return convertToKRDate(new Date());
};

export const getDayTime = (currentHour: number) => {
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

/*
 * Timestamp를 날짜로 변환하는 함수입니다.
 */

export const getTimestampDate = (timestamp: number) => {
  return convertToKRDate(new Date(timestamp * 1000));
};

/*
 * timestamp가 오늘인지 확인하는 함수입니다.
 */

export const isToday = (timestamp: number) => {
  const currentDate = getCurrentDate();
  const timestampDate = getTimestampDate(timestamp);

  return (
    currentDate.getFullYear() === timestampDate.getFullYear() &&
    currentDate.getMonth() === timestampDate.getMonth() &&
    currentDate.getDate() === timestampDate.getDate()
  );
};

/*
 * 날짜를 포맷에 맞춰 변경하는 함수들입니다.
 */

export const getFormattedLocaleDate = ({
  includeHour = false,
  includeMinutes = false,
}: {
  includeHour?: boolean;
  includeMinutes?: boolean;
} = {}) => {
  const currentDate = getCurrentDate();

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  };

  if (includeHour) {
    options.hour = '2-digit';
  }

  if (includeMinutes) {
    options.minute = '2-digit';
  }

  return currentDate.toLocaleDateString('ko-KR', options);
};

export const convertTimestampToDate = (timestamp: number) => {
  const currentDate = getTimestampDate(timestamp);

  const dateStr = currentDate
    .toLocaleDateString('ko-KR', {
      month: '2-digit',
      day: '2-digit',
    })
    .replace(/\./g, '')
    .replace(/ /g, '/');

  const dayStr = currentDate.toLocaleDateString('ko-KR', {
    weekday: 'short',
  });

  return `${dateStr} (${dayStr})`;
};
