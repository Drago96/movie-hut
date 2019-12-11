type RequestState<T extends {} = any> = {
  data: T | null;
  isLoading: boolean;
  error: string | null;
};

export default RequestState;
