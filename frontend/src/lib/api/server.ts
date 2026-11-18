import { backendUrl } from './config';
import { isApiErrorResponse, isApiSuccessResponse } from './guards';
import { ApiErrors } from './errors';
export async function apiRequest({ path, options = {} }: { path: string; options?: RequestInit }) {
  const url = new URL(path, backendUrl);
  const response = await fetch(url, options);
  let body: unknown;
  try {
    body = await response.json();
  } catch {
    throw new ApiErrors({
      status: response.status,
      data: null,
      code: response.ok ? 'INVALID_RESPONSE' : 'HTTP_ERROR',
      message: response.ok ? 'پاسخ سرور JSON معتبر نیست.' : `درخواست با وضعیت ${response.status} ناموفق بود.`
    });
  }
  if (isApiErrorResponse(body)) {
    throw new ApiErrors({
      message: body.error.message,
      status: response.status,
      code: body.error.code,
      data: body.error.data,
    });
  } else if (!response.ok) {
    throw new Error(`درخواست با وضعیت ${response.status} ناموفق بود.`);
  } else if (!isApiSuccessResponse(body)) {
    throw new ApiErrors({
      message: 'ساختار پاسخ دریافتی معتبر نیست.',
      status: response.status,
      code: 'INVALID_RESPONSE',
      data: null,
    });
  }
  return body;
}


