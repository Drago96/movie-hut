type ResponseState<T> = {
  data: T | null;
  isLoading: boolean;
  error: string | null;
};

export default ResponseState;
