import { createSlice, PayloadAction, AnyAction } from '@reduxjs/toolkit';
import {
  switchMap,
  takeUntil,
  catchError,
  map
} from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { ActionsObservable, StateObservable } from 'redux-observable';

import { ApplicationEpic, ApplicationState } from 'types/Store';
import Services from 'types/Services';
import ResponseState from 'types/ResponseState';

type CreateRequestSliceParams<RequestPayload, ResponsePayload> = {
  name: string;
  requestHandler: RequestHandler<RequestPayload, ResponsePayload>;
};

type DataResponse<ResponsePayload> = {
  data: ResponsePayload;
};

type ErrorResponse = {
  message: string;
};

type RequestHandler<RequestPayload, ResponsePayload> = (params: {
  action$: ActionsObservable<AnyAction | PayloadAction<RequestPayload>>;
  state$: StateObservable<ApplicationState>;
  dependencies: Services;
  action: PayloadAction<RequestPayload>;
}) => Observable<DataResponse<ResponsePayload>>;

type RequestEpic<RequestPayload, ResponsePayload> = ApplicationEpic<
  AnyAction | PayloadAction<RequestPayload>,
  AnyAction | PayloadAction<ResponsePayload> | PayloadAction<string>
>;

const createRequestSlice = <RequestPayload, ResponsePayload>({
  name,
  requestHandler
}: CreateRequestSliceParams<RequestPayload, ResponsePayload>) => {
  const initialState: ResponseState<ResponsePayload> = {
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
      cancel: () => initialState,
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

  const requestEpic: RequestEpic<RequestPayload, ResponsePayload> = (
    action$,
    state$,
    dependencies
  ) =>
    action$.ofType(slice.actions.start.type).pipe(
      map(action => action as PayloadAction<RequestPayload>),
      switchMap(action =>
        requestHandler({ action$, state$, dependencies, action }).pipe(
          map(response => (slice.actions.success as any)(response.data)),
          takeUntil(action$.ofType(slice.actions.cancel.type)),
          catchError((error: ErrorResponse) =>
            of(slice.actions.fail(error.message || 'Something went wrong'))
          )
        )
      )
    );

  return {
    actions: slice.actions,
    reducer: slice.reducer,
    name: slice.name,
    epic: requestEpic
  };
};

export default createRequestSlice;
