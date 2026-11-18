import type { ApiErrorResponse, RefreshData, TokenPair } from './types';
import type { ApiSuccess } from './types';
export function isApiErrorResponse(value: unknown): value is ApiErrorResponse {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  if (!('error' in value) || typeof value.error !== 'object' || value.error === null) {
    return false;
  } else {
    if (!('message' in value.error) || typeof value.error.message !== 'string') {
      return false;
    }
    if (!('code' in value.error) || typeof value.error.code !== 'string') {
      return false;
    }
    if (!('data' in value.error)) {
      return false;
    }
  }
  return true;
}

export function isApiSuccessResponse(value: unknown): value is ApiSuccess<unknown> {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  if (!('data' in value)) {
    return false;
  }
  if (!('message' in value) || (value.message !== null && typeof value.message !== 'string')) {
    return false;
  }
  return true;
}

export function isTokenPair(value: unknown): value is TokenPair {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  if (!('access' in value) || typeof value.access !== 'string' || value.access.length === 0) {
    return false;
  }
  if (!('refresh' in value) || typeof value.refresh !== 'string' || value.refresh.length === 0) {
    return false;
  }
  return true;
}

export function isRefreshData(value: unknown):value is RefreshData {
  if (typeof value !== 'object' || value === null) {
    return false;
  }
  if(!('access' in value)|| (typeof value.access !=='string'||value.access.length===0)){
    return false;
  }
  return true;
}
