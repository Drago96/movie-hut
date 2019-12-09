import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { switchMap, takeUntil, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { Epic } from 'redux-observable';

type CreateRequestSliceParams = {
  name: string;
  requestHandler: any;
};

function createRequestSlice<RequestPayload, ResponsePayload>({
  name,
  requestHandler
}: CreateRequestSliceParams) {
  type State = {
    data: ResponsePayload | null;
    isLoading: boolean;
    error: string | null;
  };

  const initialState: State = {
    data: null,
    isLoading: false,
    error: null
  };

  const slice = createSlice({
    name,
    initialState,
    reducers: {
      start: (state, _: PayloadAction<RequestPayload>) => {
        state.isLoading = true;
      },
      cancel: state => {
        state.isLoading = false;
      },
      success: (_, action: PayloadAction<ResponsePayload>) => {
        return {
          data: action.payload,
          isLoading: false,
          error: null
        };
      },
      fail: (state, action: PayloadAction<string>) => {
        state.isLoading = false;
        state.error = action.payload;
      }
    }
  });

  const requestEpic: Epic = (action$, store$, dependencies) =>
    action$.ofType(slice.actions.start.type).pipe(
      switchMap(action =>
        requestHandler({ action$, store$, dependencies, action }).pipe(
          map((response: any) => (slice.actions.success as any)(response.data)),
          takeUntil(action$.ofType(slice.actions.cancel())),
          catchError(error => of(slice.actions.fail(error.message)))
        )
      )
    );

  return {
    actions: slice.actions,
    reducer: slice.reducer,
    name: slice.name,
    epic: requestEpic
  };
}

export default createRequestSlice;
