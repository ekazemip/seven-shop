import { cookies } from 'next/headers';
import { apiRequest } from './server';
import { refreshAccessToken } from './refresh';
import { ApiErrors } from './errors';

export async function fetchWithAuth({
  path,
  options = {},
}: {
  path: string;
  options?: RequestInit;
}) {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get('access-token')?.value;

  try {
    if (!accessToken) {
      throw new ApiErrors({
        status: 401,
        code: 'NOT_AUTHENTICATED',
        message: 'ابتدا وارد شوید.',
        data: null,
      });
    }
    return await apiRequest({
      path: path,
      options: {
        ...options,
        headers: { ...options.headers, Authorization: `Bearer ${accessToken}` },
      },
    });
  } catch (error) {
    if (error instanceof ApiErrors && error.status === 401) {
      const refreshToken = cookieStore.get('refresh-token')?.value;
      if (!refreshToken) {
        cookieStore.delete('access-token');
        cookieStore.delete('refresh-token');
        throw new ApiErrors({
          status: 401,
          code: 'NOT_AUTHENTICATED',
          message: 'ابتدا وارد شوید.',
          data: null,
        });
      } else {
        try {
          const newToken = await refreshAccessToken(refreshToken);
          cookieStore.set('access-token', newToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            path: '/',
            maxAge: 30 * 60,
          });
          return await apiRequest({
            path: path,
            options: {
              ...options,
              headers: { ...options.headers, Authorization: `Bearer ${newToken}` },
            },
          });
        } catch (error) {
          if (error instanceof ApiErrors && error.status === 401) {
            cookieStore.delete('access-token');
            cookieStore.delete('refresh-token');
            throw new ApiErrors({
              status: 401,
              code: 'NOT_AUTHENTICATED',
              message: 'ابتدا وارد شوید.',
              data: null,
            });
          } else {
            throw error;
          }
        }
      }
    } else {
      throw error;
    }
  }
}
