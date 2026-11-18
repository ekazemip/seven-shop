import { ApiErrors } from './errors';
import { isRefreshData } from './guards';
import { apiRequest } from './server';

export async function refreshAccessToken(refreshToken: string): Promise<string> {
  const result = await apiRequest({
    path: 'token/refresh/',
    options: {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh: refreshToken }),
    },
  });
  if (!isRefreshData(result.data)) {
    throw new ApiErrors({
      status: 502,
      code: 'INVALID_RESPONSE',
      message: 'پاسخ تمدید توکن معتبر نیست',
      data: null,
    });
  }else{
    return result.data.access
  }
}
