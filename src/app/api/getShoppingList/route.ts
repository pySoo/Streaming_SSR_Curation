import { NextRequest, NextResponse } from 'next/server';

import {
  ERROR_MESSAGE,
  SHOPPING_API_CLIENT_ID,
  SHOPPING_API_CLIENT_SECRET,
} from '../constants';

const MOCK_QUERY = 'summer';

export async function GET(request: NextRequest) {
  const page = request.nextUrl.searchParams.get('page') ?? '1';
  const query = request.nextUrl.searchParams.get('query');
  const searchQuery =
    query === null || query === 'undefined' ? MOCK_QUERY : query;

  if (SHOPPING_API_CLIENT_ID == null || SHOPPING_API_CLIENT_SECRET == null)
    return;

  try {
    const response = await fetch(
      `https://openapi.naver.com/v1/search/shop.json?query=${searchQuery}&start=${page}`,
      {
        headers: {
          'X-Naver-Client-Id': SHOPPING_API_CLIENT_ID,
          'X-Naver-Client-Secret': SHOPPING_API_CLIENT_SECRET,
        },
      },
    );

    if (!response.ok) {
      return NextResponse.json(null, { status: response.status });
    }

    return NextResponse.json(await response.json());
  } catch (error) {
    return NextResponse.json({ message: ERROR_MESSAGE[500] }, { status: 500 });
  }
}
