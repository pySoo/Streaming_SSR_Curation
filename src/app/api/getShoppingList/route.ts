import { NextRequest, NextResponse } from 'next/server';

import {
  SHOPPING_API_CLIENT_ID,
  SHOPPING_API_CLIENT_SECRET,
} from '../constants';

export async function GET(request: NextRequest) {
  const page = request.nextUrl.searchParams.get('page') ?? '1';
  const query = request.nextUrl.searchParams.get('query');
  const display = request.nextUrl.searchParams.get('display');

  if (SHOPPING_API_CLIENT_ID == null || SHOPPING_API_CLIENT_SECRET == null)
    return NextResponse.json(null, { status: 403 });

  if (query == null) return NextResponse.json(null, { status: 400 });

  try {
    const response = await fetch(
      `https://openapi.naver.com/v1/search/shop.json?query=${query}&start=${page}&display=${display}`,
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
    return NextResponse.json(null, { status: 500 });
  }
}
