import { ApiErrors } from '@/lib/api/errors';
import { apiRequest } from '@/lib/api/server';

export async function POST(request: Request) {
  const payload: unknown = await request.json();
  try {
    const result = await apiRequest({
      path: 'accounts/otp/request/',
      options: {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      },
    });
    return Response.json(result);
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
