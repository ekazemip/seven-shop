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
export type TokenPair={
  access:string;
  refresh:string;
}

export type RefreshData={
  access:string;
}
