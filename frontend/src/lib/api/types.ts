export type ApiSuccess<T> = {
  data: T;
  message: string | null;
};

export type ApiErrorResponse = {
  error: {
    message: string;
    code: string;
    data: unknown;
  };
};
