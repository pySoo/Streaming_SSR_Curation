import { toastify } from '@/components/Shared/Toast/utils';

import { ERROR_MESSAGE } from './constants';

export const handleError = (response: Response) => {
  // 추후 Sentry 등의 디버깅 툴로 로깅할 수 있도록 개선
  console.error(response);

  const statusCode = response.status;

  switch (statusCode) {
    case 400:
    case 401:
    case 403:
    case 500:
      toastify.error(ERROR_MESSAGE[statusCode]);
      break;

    default:
      toastify.error('잠시 후 다시 시도해 주세요');
      console.error(`Unhandled status code: ${statusCode}`);
  }
};
