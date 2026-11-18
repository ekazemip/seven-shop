import { apiRequest } from '@/lib/api/server';
import { ApiErrors } from '@/lib/api/errors';
import { isTokenPair } from '@/lib/api/guards';
import { NextResponse } from 'next/server';
export async function POST(request: Request) {
  const payload: unknown = await request.json();
  try {
    const result = await apiRequest({
      path: 'accounts/otp/verify/',
      options: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      },
    });
    if (!isTokenPair(result.data)) {
      throw new ApiErrors({
        status: 502,
        code: 'INVALID_RESPONSE',
        message: 'پاسخ تایید ورود معتبر نیست',
        data: null,
      });
    }
    const response = NextResponse.json({ data: null, message: 'کد ورود تایید شد.' });
    response.cookies.set('access-token', result.data.access, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 30 * 60,
    });
    response.cookies.set('refresh-token', result.data.refresh, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 30 * 24 * 60 * 60,
    });
    return response;
  } catch (error) {
    if (error instanceof ApiErrors) {
      const body = {
        error: {
          message: error.message,
          code: error.code,
          data: error.data,
        },
      };
      return Response.json(body, { status: error.status });
    }
    return Response.json(
      {
        error: { message: 'خطایی در ارتباط با سرور رخ داد .', code: 'INTERNAL_ERROR', data: null },
      },
      { status: 500 }
    );
  }
}
