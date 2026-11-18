import { ApiErrors } from '@/lib/api/errors';
import { fetchWithAuth } from '@/lib/api/fetch-with-auth';
export async function GET() {
  try {
    const result = await fetchWithAuth({
      path: 'accounts/me/',
      options: { method: 'GET', cache: 'no-store' },
    });
    return Response.json(result);
  } catch (error) {
    if (error instanceof ApiErrors) {
      return Response.json(
        { error: { message: error.message, code: error.code, data: error.data } },
        { status: error.status }
      );
    }
    return Response.json(
      {
        error: { message: 'خطایی در ارتباط با سرور رخ داد .', code: 'INTERNAL_ERROR', data: null },
      },
      { status: 500 }
    );
  }
}
