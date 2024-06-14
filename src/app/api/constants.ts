export const ERROR_MESSAGE = {
  400: '잘못된 요청입니다',
  401: '로그인이 필요합니다',
  403: '권한이 없습니다',
  500: '서버 에러가 발생했습니다',
} as { [key: number]: string };

export const SHOPPING_API_CLIENT_ID =
  process.env.NEXT_PUBLIC_SHOPPING_API_CLIENT_ID;

export const SHOPPING_API_CLIENT_SECRET =
  process.env.NEXT_PUBLIC_SHOPPING_API_CLIENT_SECRET;
